import { ServiceDetailClient } from "@/components/service-detail-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Home Solutions | Argynix",
  description: "Advanced home automation for security, comfort, and energy management.",
};

export default function SmartHomePage() {
  return (
    <ServiceDetailClient
      title="Smart Home Solutions"
      subtitle="Living Redefined"
      description="Experience the ultimate convenience with our integrated smart home ecosystems. Control lighting, climate, security, and entertainment from a single interface."
      targetAudience="Homeowners, Real Estate Developers, and Architects."
      image="https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=2071&auto=format&fit=crop"
      benefits={[
        "Energy Efficiency through automated climate control.",
        "Enhanced Security with smart locks and cameras.",
        "Voice Control integration (Alexa/Google).",
        "Mood Lighting scenes for every occasion.",
        "Remote Access via secure mobile app."
      ]}
      process={[
        { title: "Site Survey", description: "Analyzing the home layout and connectivity." },
        { title: "Solution Design", description: "Selecting compatible devices and hubs." },
        { title: "Installation", description: "Professional setup and wiring." },
        { title: "Training", description: "Teaching you how to command your home." }
      ]}
    />
  );
}
