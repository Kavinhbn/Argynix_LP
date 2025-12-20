"use client"
import Link from "next/link"
import { Factory, Sprout, HomeIcon, Briefcase, Layers, Rocket, ShieldCheck, Zap, Lightbulb, MoveRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useState, useEffect } from 'react'
import { AnimateIcon } from "@/components/animate-ui/icons/icon"
import { Bot } from "@/components/animate-ui/icons/bot"
import { Wifi } from "@/components/animate-ui/icons/wifi"
import { HouseWifi } from "@/components/animate-ui/icons/house-wifi"
import { CircuitBoard } from "@/components/animate-ui/icons/circuit-board"
import { RoboArm } from "@/components/animate-ui/icons/robo-arm"
import { Agri } from "@/components/animate-ui/icons/agri"

const services = [
    {
        icon: (
            <AnimateIcon animateOnHover={true}>
                <Wifi className="h-8 w-8" />
            </AnimateIcon>
        ),
        title: "IOT Development",
        href: "/services/iot-development",
        description: "End-to-end IoT solutions that connect your devices, collect data, and deliver actionable insights."
    },
    {
        icon: (
            <AnimateIcon animateOnHover={true}>
                <RoboArm className="h-8 w-8" />
            </AnimateIcon>
        ),
        title: "Industrial Automation",
        href: "/services/industrial-automation",
        description: "Advanced automation solutions to streamline your manufacturing and industrial processes."
    },
    {
        icon: (
            <AnimateIcon animateOnHover={true}>
                <Bot className="h-8 w-8" />
            </AnimateIcon>
        ),
        title: "Robotics & AI",
        href: "/services/robotics-ai",
        description: "Intelligent robotics and AI integration to automate complex tasks and drive efficiency."
    },
    {
        icon: (
            <AnimateIcon animateOnHover={true} >
                <CircuitBoard className="h-8 w-8" />
            </AnimateIcon>
        ),
        title: "Electronics R&D",
        href: "/services/electronics-rd",
        description: "Custom electronics design and development from concept to production-ready solutions."
    },
    {
        icon: (
            <AnimateIcon animateOnHover={true}>
                <HouseWifi className="h-8 w-8" />
            </AnimateIcon>
        ),
        title: "Smart Home Systems",
        href: "/services/smart-home",
        description: "Connected home solutions that enhance comfort, security, and energy efficiency."
    },
    {
        icon: (
            <AnimateIcon animateOnHover={true}>
                <Agri className="h-8 w-8" />
            </AnimateIcon>
        ),
        title: "Agriculture Tech",
        href: "/services/agri-tech",
        description: "Technology solutions designed to improve agricultural yield and sustainability."
    },
];


const GlobeAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] animate-pulse-slow">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full"></div>
            <div className="absolute inset-10 border-2 border-primary/20 rounded-full"></div>
            <div className="absolute inset-20 border-2 border-primary/20 rounded-full"></div>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            className="w-full h-full animate-spin-slow"
        >
            <defs>
                <radialGradient id="globe-gradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </radialGradient>
            </defs>
            <circle cx="400" cy="400" r="300" fill="url(#globe-gradient)" />
            <g stroke="hsl(var(--primary))" strokeOpacity="0.3">
                <ellipse cx="400" cy="400" rx="300" ry="100" fill="none" strokeWidth="1" />
                <ellipse cx="400" cy="400" rx="300" ry="200" fill="none" strokeWidth="1" />
                <ellipse cx="400" cy="400" rx="300" ry="280" fill="none" strokeWidth="1" />
                <ellipse transform="rotate(90 400 400)" cx="400" cy="400" rx="300" ry="100" fill="none" strokeWidth="1" />
                <ellipse transform="rotate(90 400 400)" cx="400" cy="400" rx="300" ry="200" fill="none" strokeWidth="1" />
                <ellipse transform="rotate(90 400 400)" cx="400" cy="400" rx="300" ry="280" fill="none" strokeWidth="1" />
            </g>
        </svg>
    </div>
);

const AnimatedGrid = () => (
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]">
            <div className="absolute inset-[-10%] animate-pulse-slow">
                <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_300px,hsl(var(--primary-foreground)),transparent)] opacity-20"></div>
            </div>
        </div>
    </div>
);

import { FocusCardsCarousel } from "@/components/focus-cards-carousel"
import { RevealText } from "@/components/ui/reveal-text"

export default function Home() {
    const [activeService, setActiveService] = useState<number | null>(null);
    const [floatingIcons, setFloatingIcons] = useState<Array<{ id: number, angle: number, radius: number, serviceIndex: number }>>([]);

    useEffect(() => {
        const icons = [];
        const radius = 260; 
        for (let i = 0; i < 6; i++) {
            const angle = (i * 60) * (Math.PI / 180); 
            if (i % 2 !== 0) {
                icons.push({
                    id: i,
                    angle: angle,
                    radius: radius - 40,
                    serviceIndex: i
                })
            }
            else {
                icons.push({
                    id: i,
                    angle: angle,
                    radius: radius,
                    serviceIndex: i
                });
            }
        }
        setFloatingIcons(icons);
    }, []);

    // Animate the icons to orbit around the globe
    useEffect(() => {
        const interval = setInterval(() => {
            setFloatingIcons(prev =>
                prev.map(icon => ({
                    ...icon,
                    angle: icon.angle + 0.01 // Slow rotation
                }))
            );
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col animate-in fade-in duration-500">
            <section className="relative w-full bg-background overflow-hidden">
                <AnimatedGrid />
                <div className="container mx-auto max-w-7xl px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-20">
                        <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left animate-in fade-in slide-in-from-left duration-700">
                            <RevealText>
                                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
                                    Building Tomorrow's Connected World
                                </h1>
                            </RevealText>
                            <div className="max-w-xl text-lg text-muted-foreground md:text-xl">
                                <RevealText>
                                    We turn your innovative ideas into smart, connected solutions. From concept to deployment, we engineer the future of IoT and automation.
                                </RevealText>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg">
                                    <Link href="/services">
                                        Explore Our Services <MoveRight className="ml-2" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link href="/contact">Get in Touch</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center justify-center h-[500px] animate-in fade-in slide-in-from-right duration-700 relative">
                            <GlobeAnimation />

                            {/* Floating service icons around the globe */}
                            {floatingIcons.map((icon) => {
                                // Calculate position based on angle and radius
                                const x = 50 + (icon.radius * Math.cos(icon.angle)) / 5; // Scale down for container
                                const y = 50 + (icon.radius * Math.sin(icon.angle)) / 5;

                                return (
                                    <div
                                        key={icon.id}
                                        className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125"
                                        style={{
                                            left: `${x}%`,
                                            top: `${y}%`,
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveService(icon.serviceIndex);
                                        }}
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary border-2 border-primary ">
                                            {/* Use animated icons for floating service icons */}
                                            {icon.serviceIndex === 0 && (
                                                <AnimateIcon animateOnHover>
                                                    <Wifi className="h-6 w-6" />
                                                </AnimateIcon>
                                            )}
                                            {icon.serviceIndex === 1 && (
                                                <AnimateIcon animateOnHover>
                                                    <RoboArm className="h-6 w-6" />
                                                </AnimateIcon>
                                            )}
                                            {icon.serviceIndex === 2 && (
                                                <AnimateIcon animateOnHover>
                                                    <Bot className="h-6 w-6" />
                                                </AnimateIcon>
                                            )}
                                            {icon.serviceIndex === 3 && (
                                                <AnimateIcon animateOnHover>
                                                    <CircuitBoard className="h-6 w-6" />
                                                </AnimateIcon>
                                            )}
                                            {icon.serviceIndex === 4 && (
                                                <AnimateIcon animateOnHover>
                                                    <HouseWifi className="h-6 w-6" />
                                                </AnimateIcon>
                                            )}
                                            {icon.serviceIndex === 5 && (
                                                <AnimateIcon animateOnHover>
                                                    <Agri className="h-6 w-6" />
                                                </AnimateIcon>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Service detail card that appears when an icon is clicked */}
                            {activeService !== null && (
                                <div
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black rounded-2xl p-6 w-80 shadow-2xl z-50 animate-in fade-in zoom-in-95"
                                    style={{ maxWidth: '90%' }}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold">{services[activeService]?.title}</h3>
                                        <button
                                            onClick={() => setActiveService(null)}
                                            className="text-gray-500 hover:text-black"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            {services[activeService]?.icon}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        {services[activeService]?.description}
                                    </p>
                                    <Link href={services[activeService]?.href || "#"}>
                                        <Button className="w-full">
                                            Learn More <MoveRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            )}

                            {/* Click outside to close */}
                            {activeService !== null && (
                                <div
                                    className="absolute inset-0 z-40"
                                    onClick={() => setActiveService(null)}
                                ></div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="w-full py-16 md:py-24 bg-secondary">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="grid lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-2 text-center lg:text-left">
                            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Adaptive, solution-driven, and approachable.
                            </p>
                        </div>
                        <div className="lg:col-span-3 text-muted-foreground space-y-4 text-lg text-center lg:text-left">
                            <p>At Argynix, we deliver innovative and customizable solutions in IoT, industrial automation, robotics integration, and electronics product development. We combine cutting-edge technology with practical engineering to help businesses automate, connect, and innovate efficiently.</p>
                            <p>Our mission is to design and develop tailored solutions — whether starting from scratch or enhancing your existing systems — to meet your exact requirements. No matter the challenge, our team stays focused and ready to provide the right answers and exceptional service at every stage of your project.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="services" className="w-full py-16 md:py-24 bg-background">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="space-y-4 text-center mb-12 animate-in fade-in-up duration-700">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Do</h2>
                        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                            We provide end-to-end services to transform your vision into reality.
                        </p>
                    </div>

                    {/* Carousel for services */}
                    <div className="mt-16 w-full max-w-[1400px] mx-auto">
                        <div className="relative">
                            {/* Background gradient for depth */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                            <FocusCardsCarousel
                                items={services.map(s => ({
                                    title: s.title,
                                    description: s.description,
                                    icon: s.icon,
                                    href: s.href
                                }))}
                            />
                        </div>
                    </div>

                    {/* Custom animations */}
                    <style jsx>{`
                        @keyframes float {
                          0%, 100% {
                            transform: translateY(0) translateX(0);
                          }
                          25% {
                            transform: translateY(-20px) translateX(10px);
                          }
                          50% {
                            transform: translateY(-10px) translateX(-15px);
                          }
                          75% {
                            transform: translateY(-30px) translateX(5px);
                          }
                        }

                        @keyframes ripple {
                          0% {
                            transform: scale(0.8);
                            opacity: 0.3;
                          }
                          100% {
                            transform: scale(1.5);
                            opacity: 0;
                          }
                        }
                        
                        /* Carousel item entrance animations */
                        @keyframes carouselEnterLeft {
                          0% {
                            transform: translateX(-50px) rotate(-5deg);
                            opacity: 0;
                          }
                          100% {
                            transform: translateX(0) rotate(0);
                            opacity: 1;
                          }
                        }
                        
                        @keyframes carouselEnterRight {
                          0% {
                            transform: translateX(50px) rotate(5deg);
                            opacity: 0;
                          }
                          100% {
                            transform: translateX(0) rotate(0);
                            opacity: 1;
                          }
                        }
                        
                        @keyframes carouselEnterBottom {
                          0% {
                            transform: translateY(50px) scale(0.9);
                            opacity: 0;
                          }
                          100% {
                            transform: translateY(0) scale(1);
                            opacity: 1;
                          }
                        }
                        
                        .carousel-content > div:nth-child(3n+1) {
                          animation: carouselEnterLeft 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                        }
                        
                        .carousel-content > div:nth-child(3n+2) {
                          animation: carouselEnterBottom 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                        }
                        
                        .carousel-content > div:nth-child(3n+3) {
                          animation: carouselEnterRight 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                        }
                      `}</style>
                </div>
            </section>


        </div>
    )
}


