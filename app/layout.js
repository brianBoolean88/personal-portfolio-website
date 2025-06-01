import "./globals.css";

export const metadata = {
  title: "Brian's Portfolio Website",
  description: "This is Brian's portfolio website showcasing his projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`Inter antialiased`}> 
        {children}
      </body>
    </html>
  );
}
