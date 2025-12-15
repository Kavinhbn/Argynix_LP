"use client"
import Link from "next/link"
import { Bot, Factory, Sprout, Wifi, HomeIcon, Briefcase, Layers, Rocket, ShieldCheck, Zap, Lightbulb, MoveRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useState, useEffect } from 'react'


const services = [
    {
        icon: <Wifi className="h-8 w-8" />,
        title: "IOT Development",
        href: "/services/iot-development",
        description: "End-to-end IoT solutions that connect your devices, collect data, and deliver actionable insights."
    },
    {
        icon: <Factory className="h-8 w-8" />,
        title: "Industrial Automation",
        href: "/services/industrial-automation",
        description: "Advanced automation solutions to streamline your manufacturing and industrial processes."
    },
    {
        icon: <Bot className="h-8 w-8" />,
        title: "Robotics & AI",
        href: "/services/robotics-ai",
        description: "Intelligent robotics and AI integration to automate complex tasks and drive efficiency."
    },
    {
        icon: <Sprout className="h-8 w-8" />,
        title: "Electronics R&D",
        href: "/services/electronics-rd",
        description: "Custom electronics design and development from concept to production-ready solutions."
    },
    {
        icon: <HomeIcon className="h-8 w-8" />,
        title: "Smart Home Systems",
        href: "/services/smart-home",
        description: "Connected home solutions that enhance comfort, security, and energy efficiency."
    },
    {
        icon: <Briefcase className="h-8 w-8" />,
        title: "Agriculture Tech",
        href: "/services/agri-tech",
        description: "Technology solutions designed to improve agricultural yield and sustainability."
    },
];

const benefits = [
    {
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
        title: "Pioneering Spirit",
        description: "We thrive on innovation and constantly explore new frontiers in technology."
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Agile & Adaptive",
        description: "We respond quickly to change and tailor solutions to fit your exact needs."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Quality First",
        description: "We are committed to delivering robust and reliable high-quality solutions."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Client-Centric",
        description: "Your success is our priority. We build partnerships based on trust and results."
    },
    {
        icon: <Rocket className="h-8 w-8 text-primary" />,
        title: "Future-Focused",
        description: "We build solutions that are scalable, sustainable, and ready for tomorrow."
    },
    {
        icon: <Layers className="h-8 w-8 text-primary" />,
        title: "End-to-End Solutions",
        description: "From concept to deployment, we manage every step of the product lifecycle."
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

const RotatingCube = () => (
    <div className="w-full h-full flex items-center justify-center [perspective:1000px]">
        <div className="w-48 h-48 md:w-64 md:h-64 relative [transform-style:preserve-3d] animate-spin-cube">
            {['front', 'back', 'left', 'right', 'top', 'bottom'].map((side, i) => {
                const rotation = [
                    'rotateY(0deg)', 'rotateY(180deg)',
                    'rotateY(-90deg)', 'rotateY(90deg)',
                    'rotateX(90deg)', 'rotateX(-90deg)'
                ][i];
                const translateZ = "128px";
                const mobileTranslateZ = "96px";
                return (
                    <div
                        key={side}
                        className={cn(
                            "absolute w-48 h-48 md:w-64 md:h-64 border border-primary/20 bg-background/50 backdrop-blur-sm flex items-center justify-center",
                            "flex items-center justify-center p-4"
                        )}
                        style={{ transform: `${rotation} translateZ(var(--translate-z))` }}
                    >
                        <style>{`:root { --translate-z: ${mobileTranslateZ}; } @media (min-width: 768px) { :root { --translate-z: ${translateZ}; } }`}</style>
                        <div className="text-center">
                            {benefits[i] && (
                                <>
                                    <div className="mx-auto flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                                        {benefits[i].icon}
                                    </div>
                                    <h3 className="text-sm md:text-base font-semibold">{benefits[i].title}</h3>
                                </>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
);


export default function Home() {
    const [activeService, setActiveService] = useState<number | null>(null);
    const [floatingIcons, setFloatingIcons] = useState<Array<{ id: number, angle: number, radius: number, serviceIndex: number }>>([]);

    useEffect(() => {
        const icons = [];
        const radius = 260; // Distance from center
        for (let i = 0; i < 6; i++) {
            const angle = (i * 60) * (Math.PI / 180); // Convert to radians, 60 degrees apart
            if(i%2!==0){
                icons.push({
                    id: i,
                    angle: angle,
                    radius: radius-40,
                    serviceIndex: i
                })
            }
           else{
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
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
                                Building Tomorrow's Connected World
                            </h1>
                            <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                                We turn your innovative ideas into smart, connected solutions. From concept to deployment, we engineer the future of IoT and automation.
                            </p>
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

                            {/* Floating service icons orbiting around the globe */}
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
                                        <div className="flex h-19 w-19 items-center justify-center text-primary">
                                            {services[icon.serviceIndex]?.icon}
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
                                        <div className="flex h-16 w-16 items-center justify-center bg-primary/10 text-primary rounded-full">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className="group relative"
                            >
                                <Link
                                    href={service.href}
                                    className="block h-full"
                                >
                                    <div className="relative h-full overflow-hidden rounded-3xl border-2 border-black bg-white p-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2">
                                        {/* Particle effect container */}
                                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                            {[...Array(20)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute h-1 w-1 w-1 bg-black rounded-full opacity-0 transition-all duration-1000 group-hover:opacity-20"
                                                    style={{
                                                        top: `${(i * 13) % 100}%`,
                                                        left: `${(i * 17) % 100}%`,
                                                        animation: `float ${5 + (i % 10)}s infinite ease-in-out`,
                                                        animationDelay: `${i % 2}s`
                                                    }}
                                                ></div>
                                            ))}
                                        </div>

                                        {/* Icon with wave animation */}
                                        <div className="relative mb-8 flex justify-center">
                                            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-black text-white transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                                                <div className="transition-transform duration-700 group-hover:scale-110">
                                                    {service.icon}
                                                </div>

                                                {/* Wave rings */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="h-28 w-28 rounded-full border border-black opacity-0 transition-all duration-1000 group-hover:opacity-30" style={{ animation: 'ripple 2s infinite' }}></div>
                                                </div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="h-32 w-32 rounded-full border border-black opacity-0 transition-all duration-1000 group-hover:opacity-20" style={{ animation: 'ripple 2s infinite 0.5s' }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content with staggered reveal */}
                                        <div className="relative text-center">
                                            <h3 className="mb-4 text-2xl font-bold text-black transition-colors duration-500 group-hover:text-black relative inline-block">
                                                {service.title}
                                                <div className="absolute bottom-0 left-0 h-1 w-full bg-black transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100 origin-left"></div>
                                            </h3>

                                            {/* Description with typewriter effect on hover */}
                                            <div className="overflow-hidden max-h-0 transition-all duration-700 group-hover:max-h-32">
                                                <p className="text-gray-600 mb-6 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                                                    Innovative solutions designed to transform your business with cutting-edge technology.
                                                </p>
                                            </div>

                                            {/* Animated CTA button */}
                                            <div className="transform transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                                                <div className="inline-flex items-center rounded-full bg-black px-6 py-3 text-white transition-all duration-500 hover:bg-gray-800 hover:px-8">
                                                    <span className="font-semibold">Explore Solutions</span>
                                                    <svg
                                                        className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Corner decorations */}
                                        <div className="absolute top-4 right-4 w-8 h-8 opacity-0 transition-all duration-700 group-hover:opacity-20"></div>
                                        <div className="absolute bottom-4 left-4 w-8 h-8 opacity-0 transition-all duration-700 group-hover:opacity-20"></div>
                                    </div>
                                </Link>
                            </div>
                        ))}
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
                    `}</style>
                </div>
            </section>


        </div>
    )
}


