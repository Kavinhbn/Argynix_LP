import Image from "next/image"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | IoT, Automation, Robotics & Electronics",
  description: "Explore the comprehensive services offered by Argynix, including IoT development, industrial automation, robotics & AI, electronics R&D, smart home systems, and agriculture technology.",
};
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { Bot } from "@/components/animate-ui/icons/bot"
import { Wifi } from "@/components/animate-ui/icons/wifi"
import { HouseWifi } from "@/components/animate-ui/icons/house-wifi"
import { CircuitBoard } from "@/components/animate-ui/icons/circuit-board"
import { RoboArm } from "@/components/animate-ui/icons/robo-arm"
import { Agri } from "@/components/animate-ui/icons/agri"

const services = [
  {
    icon:   <AnimateIcon>
                <Wifi className="h-8 w-8 text-primary" />
            </AnimateIcon> ,
    title: "IOT Development",
    description: "End-to-end IoT solutions from hardware to cloud.",
    href: "/services/iot-development",
  },
  {
    icon: <AnimateIcon><RoboArm className="h-8 w-8 text-primary" /></AnimateIcon>,
    title: "Industrial Automation",
    description: "Enhancing efficiency with advanced automation.",
    href: "/services/industrial-automation",
  },
  {
    icon: <AnimateIcon><Bot className="h-8 w-8 text-primary" /></AnimateIcon>,
    title: "Robotics & AI",
    description: "Integrating robotics to streamline operations.",
    href: "/services/robotics-ai",
  },
  {
    icon: <AnimateIcon><CircuitBoard className="h-8 w-8 text-primary" /></AnimateIcon>,
    title: "Electronics R&D",
    description: "Custom electronics design and development.",
    href: "/services/electronics-rd",
  },
  {
    icon: <AnimateIcon><HouseWifi className="h-8 w-8 text-primary" /></AnimateIcon>,
    title: "Smart Home Systems",
    description: "Intelligent solutions for modern living.",
    href: "/services/smart-home",
  },
  {
    icon: <AnimateIcon><Agri className="h-8 w-8 text-primary" /></AnimateIcon>,
    title: "Agriculture Tech",
    description: "Smart farming to improve yield and sustainability.",
    href: "/services/agri-tech",
  },
];

export default function ServicesPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We offer a comprehensive suite of services to bring your technological vision to life, from initial idea to final product.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service) => (
              <Link href={service.href} key={service.title} className="block">
                <Card className="text-center p-6 h-full hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="link">Know more</Button>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12">
            <h2 className="text-3xl font-bold">Have a project in mind?</h2>
            <p className="mt-4 max-w-xl mx-auto text-lg">
              Our team is ready to collaborate with you.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Let's Talk</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
