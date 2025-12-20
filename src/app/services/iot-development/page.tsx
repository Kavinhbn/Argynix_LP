import { ServiceDetailClient } from "@/components/service-detail-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Solutions Development | Argynix",
  description: "Custom IoT solutions connecting devices to the cloud for real-time insights.",
};

export default function IoTDevelopmentPage() {
  return (
    <ServiceDetailClient
      title="IoT Development"
      subtitle="Connect Everything"
      description="Unlock the power of your data by connecting physical assets to the digital world. We build end-to-end IoT solutions from custom sensor nodes to cloud dashboards."
      targetAudience="Logistics, Healthcare, Smart Cities, and Enterprises seeking data visibility."
      image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
      benefits={[
        "Real-time Asset Tracking and monitoring.",
        "Remote Control of devices from anywhere.",
        "Data-Driven Decisions based on sensor feed.",
        "Process Automation via physical triggers.",
        "Custom Hardware tailored to your constraints."
      ]}
      process={[
        { title: "Requirement Gathering", description: "Understanding the data points you need to capture." },
        { title: "Hardware Prototyping", description: "Developing custom PCBs and enclosures." },
        { title: "Firmware & Cloud", description: "Secure connectivity and robust backend setup." },
        { title: "Deployment", description: "Field testing and mass deployment." }
      ]}
    />
  );
}
