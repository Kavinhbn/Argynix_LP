import { ProductDetailClient } from "@/components/product-detail-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Argynix IoT Platform | Argynix",
  description: "Remote device management and industrial monitoring solution.",
};

export default function ArgynixIoTPage() {
  return (
    <ProductDetailClient
      title="Argynix IoT"
      tagline="Flagship Platform"
      description="Argynix IoT is our flagship product for remote device management. Whether you need to monitor water pumps in a remote field, track vehicles in a fleet, or control industrial machinery, our platform provides the hardware, software, and cloud infrastructure you need to stay connected and in control."
      image="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
      specs={[
        { label: "Connectivity", value: "4G LTE / LoRaWAN / Wi-Fi" },
        { label: "Input Voltage", value: "9-36V DC" },
        { label: "Operating Temp", value: "-40°C to +85°C" },
        { label: "Ingress Protection", value: "IP67 Rated" },
        { label: "Cloud Protocol", value: "MQTT / HTTPs" }
      ]}
      features={[
        "Real-time Dashboard & Analytics",
        "Over-the-Air (OTA) Firmware Updates",
        "Customizable Alert Rules (SMS/Email)",
        "Data Storage & Export (CSV/JSON)",
        "Role-based Access Control"
      ]}
      benefits={[
        { title: "Universal Compatibility", description: "Works with almost any industrial sensor or PLC via Modbus/Analogue inputs." },
        { title: "Rapid Deployment", description: "Plug-and-play hardware that connects instantly to our secured cloud." },
        { title: "Enterprise Reliability", description: "Built with redundancy and rigorous security standards for mission-critical apps." }
      ]}
    />
  );
}
