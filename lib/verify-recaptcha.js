const SITEVERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

export async function verifyRecaptchaToken(token, remoteIp) {
  if (!token || typeof token !== "string" || token.trim().length < 20) {
    return {
      ok: false,
      status: 400,
      error: "Complete the reCAPTCHA and try again.",
    };
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      return {
        ok: false,
        status: 503,
        error: "reCAPTCHA is not configured on the server.",
      };
    }

    console.warn(
      "RECAPTCHA_SECRET_KEY is missing; accepting a present token without Google siteverify (development only)."
    );
    return { ok: true, skipped: true };
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });
  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  const response = await fetch(SITEVERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    return {
      ok: false,
      status: 502,
      error: "Could not reach reCAPTCHA verification.",
    };
  }

  const data = await response.json();
  if (!data.success) {
    return {
      ok: false,
      status: 400,
      error: "reCAPTCHA verification failed. Refresh and try again.",
    };
  }

  return { ok: true };
}
