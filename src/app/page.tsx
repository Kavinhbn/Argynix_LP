"use client"
import Link from "next/link"
import { Factory, Sprout, HomeIcon, Briefcase, Layers, Rocket, ShieldCheck, Zap, Lightbulb, MoveRight, Users, CheckCircle, ArrowRight, Star, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useState, useEffect } from 'react'
import Image from "next/image"
import { motion } from "motion/react"
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

const benefits = [
    {
        icon: <Lightbulb className="h-8 w-8" />,
        title: "Pioneering Spirit",
        description: "We thrive on innovation and constantly explore new frontiers in technology."
    },
    {
        icon: <Zap className="h-8 w-8" />,
        title: "Agile & Adaptive",
        description: "We respond quickly to change and tailor solutions to fit your exact needs."
    },
    {
        icon: <ShieldCheck className="h-8 w-8" />,
        title: "Quality First",
        description: "We are committed to delivering robust and reliable high-quality solutions."
    },
    {
        icon: <Users className="h-8 w-8" />,
        title: "Client-Centric",
        description: "Your success is our priority. We build partnerships based on trust and results."
    },
    {
        icon: <Rocket className="h-8 w-8" />,
        title: "Future-Focused",
        description: "We build solutions that are scalable, sustainable, and ready for tomorrow."
    },
    {
        icon: <Layers className="h-8 w-8" />,
        title: "End-to-End Solutions",
        description: "From concept to deployment, we manage every step of the product lifecycle."
    },
];

const projects = [
    {
        title: "Smart Factory Overhaul",
        category: "Industrial Automation",
        description: "Complete digitalization of a manufacturing floor, increasing efficiency by 40%."
    },
    {
        title: "Agri-Drone Fleet",
        category: "Robotics & AI",
        description: "Autonomous drone system for precision agriculture and crop monitoring."
    },
    {
        title: "Connected City Grid",
        category: "IoT Infrastructure",
        description: "City-wide sensor network for real-time traffic and energy management."
    }
];
const clients = [
    {
        name: "Frontline",
        logo: "/assets/clients/Frontline.webp"
    },
    {
        name: "Solid_construction",
        logo: "/assets/clients/Logo.png"
    },

]




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
                                    Building Tomorrow's <br className="hidden md:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-black to-secondary animate-gradient-x">
                                        Connected World
                                    </span>
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

            {/* Why Choose Us Section - Redesigned */}
            <section className="w-full py-24 bg-background relative z-10 overflow-hidden">
                {/* Background decoration elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
                </div>

                <div className="container mx-auto max-w-7xl px-4 relative z-20">
                    <div className="text-center mb-20 space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase">
                                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Argynix?</span>
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: false }}
                            className="max-w-2xl mx-auto text-lg text-muted-foreground font-light"
                        >
                            We engineer value through innovation. Here is the Argynix edge.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20,
                                    delay: index * 0.1
                                }}
                                viewport={{ once: false, margin: "-50px" }}
                                whileHover={{ scale: 1.05, y: -5, zIndex: 10 }}
                                className="group relative"
                            >
                                {/* Unique Shape: Tech Chamfer/Tab Style with Clip Path */}
                                <div
                                    className="relative h-full bg-card/40 backdrop-blur-sm border-l-4 border-primary/20 hover:border-primary transition-all duration-500 p-8 
                                                shadow-sm hover:shadow-2xl hover:shadow-primary/10"
                                    style={{
                                        clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" // Cut bottom-right corner
                                    }}
                                >

                                    {/* Animated Borders using pseudo-elements manually simulated since clip-path cuts borders */}
                                    <div className="absolute top-0 right-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
                                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />

                                    {/* Tech Marker in the Cut Corner */}
                                    {/* Note: This might be clipped if outside content area, so we position it carefully inside or use the background */}

                                    <div className="relative z-10">
                                        <div className="mb-6 inline-flex p-4 rounded-tl-2xl rounded-br-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 ">
                                            {benefit.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                                            {benefit.description}
                                        </p>
                                    </div>

                                    {/* Hover glow effect background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    {/* Little decorative corner piece for high-tech feel */}
                                    <div className="absolute bottom-1 right-1 w-2 h-2 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-300" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trusted Partners Section - Infinite Marquee */}
            <section className="w-full py-5 bg-secondary/20 border-y border-white/5 relative overflow-hidden">
                <div className="container mx-auto max-w-7xl px-4 text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4"
                    >
                        Our Ecosystem
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: false }}
                        className="text-3xl md:text-5xl font-black tracking-tight mb-4"
                    >
                        Trusted by Leading <span className="text-primary">Innovators</span>
                    </motion.h2>
                </div>

                {/* Infinite Marquee Container */}
                <div className="relative w-full overflow-hidden">
                    {/* Gradient Masks for Fade Effect */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-secondary to-transparent z-10" />
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-secondary to-transparent z-10" />

                   
                    <div className="flex w-max animate-marquee">
                        {/* Repeat the logos multiple times to ensure seamless infinite loop 
                            Since we only have 2 clients, we need significantly more duplicates to fill the width */ }
                        {[...Array(10)].map((_, setIndex) => (
                            <div key={setIndex} className="flex items-center gap-6 mx-4">
                                {clients.map((client, i) => (
                                    <div key={i} className="relative group cursor-pointer">
                                        <div className="w-80 h-60 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition-all duration-300 hover:bg-white/10 hover:border-primary/30 hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] p-4">
                                            <div className="relative w-full h-full flex items-center justify-center">
                                                <Image
                                                    src={client.logo}
                                                    alt={client.name}
                                                    width={240}
                                                    height={160}
                                                    className="object-contain w-full h-full filter group-hover:brightness-110 transition-all duration-300"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Animation Styles */}
                <style jsx global>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee {
                        animation: marquee 40s linear infinite;
                    }
                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                    
                    /* Keep existing animations if needed, otherwise clean up */
                    @keyframes float {
                        0%, 100% { transform: translateY(0) translateX(0); }
                        25% { transform: translateY(-20px) translateX(10px); }
                        50% { transform: translateY(-10px) translateX(-15px); }
                        75% { transform: translateY(-30px) translateX(5px); }
                    }
                `}</style>
            </section>


        </div>
    )
}


