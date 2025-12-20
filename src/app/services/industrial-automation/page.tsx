import { ServiceDetailClient } from "@/components/service-detail-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Automation Services | Argynix",
  description: "Optimizing manufacturing with smart PLCs, sensors, and SCADA systems.",
};

export default function IndustrialAutomationPage() {
  return (
    <ServiceDetailClient
      title="Industrial Automation"
      subtitle="Optimize Production"
      description="We transform traditional manufacturing lines into smart, data-driven ecosystems. By integrating advanced sensors, PLCs, and SCADA monitoring, we reduce downtime and maximize throughput."
      targetAudience="Manufacturing plants, Factories, and Assembly lines looking for efficiency."
      image="https://images.unsplash.com/photo-1565514020176-8c2cf828c2e7?q=80&w=1964&auto=format&fit=crop"
      benefits={[
        "Reduced Operational Costs through efficiency.",
        "Predictive Maintenance to prevent downtime.",
        "Real-time Monitoring of all production assets.",
        "Enhanced Safety protocols and sensors.",
        "Scalable Architecture for future growth."
      ]}
      process={[
        { title: "Audit & Analysis", description: "We assess your current line and identify bottlenecks." },
        { title: "System Design", description: "Custom PLC and SCADA architecture tailored to your needs." },
        { title: "Deployment", description: "Seamless installation with minimal disruption to operations." },
        { title: "Optimization", description: "Continuous tuning based on real-time data." }
      ]}
    />
  );
}
