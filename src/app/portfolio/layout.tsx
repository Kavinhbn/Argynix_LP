import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Our Work at Argynix",
    description: "Explore the innovative projects delivered by Argynix. Real problems, engineered solutions, and tangible results.",
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
