import { InnovationsPageClient } from "@/components/innovations-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovation Showcase | Argynix AI & R&D",
  description: "Explore the latest innovations from Argynix, including breakthroughs in AI-powered predictive maintenance, self-learning home automation, and next-generation IoT protocols.",
};

export default function InnovationsPage() {
  return <InnovationsPageClient />;
}
