"use client";

import React, { useState, useRef } from "react";
import { AnimatedTestimonials } from "/app/ui/animated-testimonials";
import { Label } from "/app/ui/label.jsx";
import { Input } from "/app/ui/input.jsx";
import { cn } from "/lib/utils";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = "6LcwvlIrAAAAAL02hM9SCYwF3AByO7IISjyQeiv0";

const contactMethods = [
    {
        quote:
            "This is my newer GitHub account. I lost access to my old one, so please view this one for new updates and contributions.",
        name: "Github (New)",
        src: "/images/SVG/github1.svg",
        href: "https://github.com/brianBoolean88",
    },
    {
        quote:
            "This is my old GitHub account. I lost access to it, but it still contains valuable contributions and projects.",
        name: "Github (Old)",
        src: "/images/SVG/github2.svg",
        href: "https://github.com/88BrianW",
    },
    {
        quote:
            "This is my linkedIn profile. Feel free to connect with me for professional networking and opportunities.",
        name: "LinkedIn",
        src: "/images/SVG/linkedin.svg",
        href: "https://www.linkedin.com/in/brian-wang-professional/",
    },
    {
        quote:
            "This is my instagram profile. Follow me for updates on my personal projects and interests.",
        name: "Instagram",
        src: "/images/SVG/instagram.svg",
        href: "https://www.instagram.com/brianwanggg/",
    },
];

const BottomGradient = () => {
    return (
        <>
            <span
                className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#AEC8A4] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span
                className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[#AEC8A4] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};


const Contact = () => {
    const recaptchaRef = useRef(null);
    const [captchaToken, setCaptchaToken] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = {
            firstname: form.firstname.value,
            lastname: form.lastname.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
        };

        if (!data.firstname || !data.lastname || !data.email || !data.subject || !data.message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!captchaToken) {
            alert("Please complete the reCAPTCHA.");
            return;
        }

        alert("Message queued for sending. Press OK to continue.");
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, token: captchaToken }),
            });
            if (res.ok) {
                alert('Message sent!');
                form.reset();
                setCaptchaToken("");
                recaptchaRef.current.reset();
            } else {
                alert('Failed to send message.');
            }
        } catch (err) {
            alert('Error sending message.');
        }
    };
    return (
        <div className="select-none mt-50 mb-50 lg:mb-100 w-full h-full">
            <AnimatedTestimonials contact={contactMethods} />

            <div
                className="mx-auto w-full lg:w-[800px] rounded-none bg-transparent p-4 md:rounded-2xl md:p-8 mt-20">
                <h2 className="text-3xl font-bold text-white ">
                    Contact Form
                </h2>
                <p className="mt-2 max-w-sm text-sm text-neutral-400">
                    If there is no ReCAPTCHA, please reload the page or disable your adblocker. If you are still having issues, please contact me through my social media links above. You cannot send a message without completing the ReCAPTCHA.
                </p>
                <form className="my-8" onSubmit={handleSubmit}>
                    <div
                        className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" placeholder="Brian" type="text" />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input id="lastname" placeholder="Wang" type="text" />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="88brianw@gmail.com" type="email" />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Hiring Position" type="text" />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="message">Message</Label>
                        <Input id="message" placeholder="Hi! I would love to discuss about hiring you!" type="textarea" />
                    </LabelInputContainer>

                    <ReCAPTCHA
                        sitekey={SITE_KEY}
                        ref={recaptchaRef}
                        className="ml-3 mb-4 mx-auto"
                        onChange={setCaptchaToken}
                    />

                    <button
                        className="group/btn relative block h-10 w-full rounded-md bg-[#44624a] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset][0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                        type="submit">
                        Send Message
                        <BottomGradient />
                    </button>



                </form>
            </div>
        </div >
    );
}

export default Contact;