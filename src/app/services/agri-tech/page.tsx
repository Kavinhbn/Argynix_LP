import { ServiceDetailClient } from "@/components/service-detail-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agri-Tech Solutions | Argynix",
  description: "Smart farming technologies for higher yield and sustainable agriculture.",
};

export default function AgriTechPage() {
  return (
    <ServiceDetailClient
      title="Agri-Tech Solutions"
      subtitle="Precision Farming"
      description="Empowering farmers with data. Our sensing and automation tools monitor soil health, weather conditions, and crop growth to optimize resource usage."
      targetAudience="Farms, Greenhouses, and Agricultural Research Centers."
      image="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=1896&auto=format&fit=crop"
      benefits={[
        "Water Conservation via smart irrigation.",
        "Higher Yields through nutrient monitoring.",
        "Disease Prediction using climate data.",
        "Automated Harvesting (Robotics).",
        "Remote Farm Management dashboard."
      ]}
      process={[
        { title: "Soil Analysis", description: "Mapping field conditions and needs." },
        { title: "Sensor Deployment", description: "Installing wireless nodes across the farm." },
        { title: "Automation Setup", description: "Linking irrigation/fans to sensor data." },
        { title: "Monitoring", description: "Real-time alerts and analytics." }
      ]}
    />
  );
}
