import { ProductDetailClient } from "@/components/product-detail-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Smart Logistics Tracker | Argynix",
    description: "Advanced fleet tracking and condition monitoring.",
};

export default function SmartLogisticsTrackerPage() {
    return (
        <ProductDetailClient
            title="Smart Logistics Tracker"
            tagline="Fleet Intelligence"
            description="Keep eyes on your valuable assets 24/7. The Smart Logistics Tracker provides real-time GPS location, shock detection, and temperature monitoring for sensitive cold-chain shipments."
            image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            specs={[
                { label: "Battery Life", value: "Up to 5 Years" },
                { label: "GPS Accuracy", value: "< 2.5 meters" },
                { label: "Communication", value: "NB-IoT / Cat-M1" },
                { label: "Sensors", value: "Accel, Temp, Humidity" },
                { label: "Dimensions", value: "100 x 60 x 25 mm" }
            ]}
            features={[
                "Live Map View & Geofencing",
                "Impact/Drop Alerts",
                "Temperature Excursion Logging",
                "Tamper Detection",
                "API Integration with ERP systems"
            ]}
            benefits={[
                { title: "Loss Prevention", description: "Instant alerts when goods leave designated routes or safe zones." },
                { title: "Cold Chain Verified", description: "Ensure perishables stay fresh with traceable temperature logs." },
                { title: "Low Maintenance", description: "Install once and forget for years thanks to ultra-low power engineering." }
            ]}
        />
    );
}
