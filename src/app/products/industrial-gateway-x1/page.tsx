import { ProductDetailClient } from "@/components/product-detail-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industrial Gateway X1 | Argynix",
    description: "Protocol converter for legacy industrial systems.",
};

export default function IndustrialGatewayPage() {
    return (
        <ProductDetailClient
            title="Industrial Gateway X1"
            tagline="Legacy Bridge"
            description="Don't replace your reliable old machines—connect them. The X1 Gateway speaks the language of legacy equipment (Modbus, Profibus, CAN) and translates it to modern cloud standards (MQTT, OPC UA)."
            image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
            specs={[
                { label: "Protocols", value: "Modbus RTU/TCP, CAN" },
                { label: "Processor", value: "Dual-Core ARM Cortex" },
                { label: "Interfaces", value: "RS485, RS232, Eth" },
                { label: "Power", value: "PoE or 24V DC" },
                { label: "Mounting", value: "DIN Rail" }
            ]}
            features={[
                "Edge Computing Capabilities",
                "Built-in Firewall & VPN",
                "Local Data Buffering",
                "Visual Configuration Interface",
                "Remote Troubleshooting"
            ]}
            benefits={[
                { title: "Modernize Legacy", description: "Bring 20-year-old machines into the Industry 4.0 era without expensive upgrades." },
                { title: "Secure by Design", description: "Hardware-based security ensures your factory network remains isolated and safe." },
                { title: "Edge Intelligence", description: "Process data locally to reduce latency and bandwidth costs." }
            ]}
        />
    );
}
