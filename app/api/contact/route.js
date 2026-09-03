import { Resend } from "resend";
import { verifyRecaptchaToken } from "/lib/verify-recaptcha";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function clientIp(req) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return req.headers.get("x-real-ip") || undefined;
}

export async function POST(req) {
  let payload;
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  const firstname = String(payload.firstname || "").trim();
  const lastname = String(payload.lastname || "").trim();
  const email = String(payload.email || "").trim();
  const subject = String(payload.subject || "").trim();
  const message = String(payload.message || "").trim();
  const token = payload.token;

  if (!firstname || !lastname || !email || !subject || !message) {
    return json({ error: "Please fill in all fields." }, 400);
  }

  if (
    firstname.length > 80 ||
    lastname.length > 80 ||
    email.length > 200 ||
    subject.length > 200 ||
    message.length > 5000
  ) {
    return json({ error: "One or more fields are too long." }, 400);
  }

  if (!EMAIL_PATTERN.test(email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  try {
    const captcha = await verifyRecaptchaToken(token, clientIp(req));
    if (!captcha.ok) {
      return json({ error: captcha.error }, captcha.status);
    }

    if (!resend) {
      if (process.env.NODE_ENV === "production") {
        return json({ error: "Mail is not configured on the server." }, 503);
      }
      console.warn(
        "RESEND_API_KEY is missing; contact payload accepted after reCAPTCHA (development only)."
      );
      return json({ ok: true, delivered: false, skippedMail: true }, 200);
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["88brianw@gmail.com"],
      replyTo: email,
      subject: subject || "New Contact Form Submission",
      html: `<p><b>Name:</b> ${escapeHtml(firstname)} ${escapeHtml(lastname)}</p>
             <p><b>Email:</b> ${escapeHtml(email)}</p>
             <p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    });

    if (error) {
      return json({ error: "Failed to send message." }, 400);
    }

    return json({ ok: true, id: data?.id }, 200);
  } catch (err) {
    console.error("Contact form error:", err);
    return json({ error: "Server error" }, 500);
  }
}
