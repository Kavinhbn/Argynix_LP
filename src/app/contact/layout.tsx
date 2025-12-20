import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Argynix | Get in Touch",
    description: "Contact Argynix for inquiries about our IoT solutions, industrial automation, and electronics development services. Our team is ready to answer your questions and discuss your project.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
