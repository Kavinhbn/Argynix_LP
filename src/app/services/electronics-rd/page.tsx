import { ServiceDetailClient } from "@/components/service-detail-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronics R&D Services | Argynix",
  description: "Custom PCB design, firmware, and hardware prototyping services.",
};

export default function ElectronicsPage() {
  return (
    <ServiceDetailClient
      title="Electronics R&D"
      subtitle="Hardware Innovation"
      description="We turn concepts into physical reality. Our R&D team specializes in high-speed PCB design, power management, and embedded firmware for commercial products."
      targetAudience="Startups, Consumer Electronics, and Industrial Product companies."
      image="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop"
      benefits={[
        "Professional PCB Layout and Routing.",
        "DFM (Design for Manufacturing) optimization.",
        "Rapid Prototyping and testing.",
        "Certifications support (FCC, CE).",
        "Component Sourcing and BOM optimization."
      ]}
      process={[
        { title: "Schematic Design", description: "Logic and circuit planning." },
        { title: "PCB Layout", description: "Physical board routing and layering." },
        { title: "Prototyping", description: "Assembly of first batch units." },
        { title: "Validation", description: "Rigorous thermal and signal integrity testing." }
      ]}
    />
  );
}
