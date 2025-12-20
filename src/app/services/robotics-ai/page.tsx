import { ServiceDetailClient } from "@/components/service-detail-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotics & AI Integration | Argynix",
  description: "Intelligent robotics and AI solutions for complex automation tasks.",
};

export default function RoboticsPage() {
  return (
    <ServiceDetailClient
      title="Robotics & AI"
      subtitle="Intelligent Autonomy"
      description="Beyond simple automation, we engineer intelligent systems capable of perception and decision making. From AGVs to collaborative arms, we bring robotics to life."
      targetAudience="Warehouses, Advanced Manufacturing, and R&D labs."
      image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
      benefits={[
        "24/7 Operation without fatigue.",
        "Precision handling of delicate tasks.",
        "Safe Collaboration with human workers.",
        "Adaptive Behavior using Machine Learning.",
        "Reduction in Hazardous tasks for humans."
      ]}
      process={[
        { title: "Task Analysis", description: "Mapping out the workflow for automation." },
        { title: "Robot Selection/Build", description: "Choosing the right arm or mobile base." },
        { title: "AI Integration", description: "training models for perception and navigation." },
        { title: "Integration", description: "Merging the robot into the existing workflow." }
      ]}
    />
  );
}
