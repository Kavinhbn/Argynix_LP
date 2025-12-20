import { ServicesPageClient } from "@/components/services-page-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Argynix",
  description: "Explore our comprehensive technology solutions including IoT, Industrial Automation, Robotics, and Electronics R&D.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
