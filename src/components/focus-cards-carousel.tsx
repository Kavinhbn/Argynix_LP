"use client"

import React, { useCallback, useEffect, useState, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

type CardData = {
    title: string
    description: string
    icon: React.ReactNode
    href: string
}

interface FocusCardsCarouselProps {
    items: CardData[]
    options?: EmblaOptionsType
}

export function FocusCardsCarousel({ items, options }: FocusCardsCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        skipSnaps: false,
        ...options,
    })

    const [selectedIndex, setSelectedIndex] = useState(0)
    const isScrolling = useRef(false)

    const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slides = emblaApi.slideNodes()
        const snaps = emblaApi.scrollSnapList()

        emblaApi.scrollSnapList().forEach((snap, index) => {
            // Correct for loop
            let diff = snap - scrollProgress
            if (engine.options.loop) {
                // Adjust diff to be shortest path
                if (diff < -0.5) diff += 1
                if (diff > 0.5) diff -= 1
            }

            const absDiff = Math.abs(diff)
            const sign = Math.sign(diff) // -1 if left, 1 if right

            // Math for the stack effect
            const TWEEN_FACTOR_BASE = 4 // Sensitivity
            const scale = 1 - Math.min(absDiff * 0.4, 0.25) // Less drastic scale down (min 0.75)

            // Blur: Only blur items that are NOT the center or immediate neighbors
            // i.e., absDiff > 1.25 (approx)
            // This ensures the 3 visible cards are always clear
            const blur = absDiff <= 0.2 ? 0 : Math.min((absDiff - 0.2) * 10, 5)

            // Opacity: User requested opacity 1 (no fade)
            const opacity = 1

            // TranslateX: Pull cards towards center
            const translateX = sign * -1 * (Math.abs(diff) * 35) + "%"

            // Z-Index: 
            // Center (diff ~ 0) -> High Z
            // Away -> Low Z
            // We use standard z-indexes: 30 for center, 20 forimmediate neighbors, 10 for others
            const zIndex = 30 - Math.round(absDiff * 20)

            const node = slides[index].querySelector('.slide_card') as HTMLElement
            // Inner container for border/shadow changes
            const inner = node?.querySelector('.inner_card') as HTMLElement

            if (node) {
                node.style.transform = `translateX(${translateX}) scale(${scale})`
                node.style.filter = `blur(${blur}px)`
                node.style.opacity = `${opacity}`
                node.style.zIndex = `${zIndex}`
                // Add relative positioning to make z-index work if not already
                node.style.position = 'relative'

                // "Special thing" for center: Border Highlight & Glow
                if (inner) {
                    if (absDiff < 0.3) {
                        inner.style.borderColor = 'hsl(var(--primary))' // Use primary color
                        inner.style.boxShadow = '0 0 30px -5px hsl(var(--primary) / 0.3)'
                        inner.style.transform = 'scale(1.02)' // Slight extra pop
                    } else {
                        inner.style.borderColor = 'rgba(255,255,255,0.05)'
                        inner.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        inner.style.transform = 'scale(1)'
                    }
                }
            }
        })
    }, [])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onScroll(emblaApi)
        onSelect(emblaApi)

        emblaApi.on("reInit", onScroll)
        emblaApi.on("scroll", onScroll)
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)

        const onSettle = () => {
            isScrolling.current = false
        }
        emblaApi.on("settle", onSettle)

        return () => {
            emblaApi.off("reInit", onScroll)
            emblaApi.off("scroll", onScroll)
            emblaApi.off("select", onSelect)
            emblaApi.off("reInit", onSelect)
            emblaApi.off("settle", onSettle)
        }
    }, [emblaApi, onScroll, onSelect])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

    const handleHover = useCallback((index: number) => {
        if (!emblaApi) return
        if (isScrolling.current) return
        if (index === selectedIndex) return

        isScrolling.current = true
        emblaApi.scrollTo(index)
    }, [emblaApi, selectedIndex])

    // Helper to check if a dot is a neighbor (prev or next) accounting for loop
    const isNeighbor = (index: number) => {
        if (items.length <= 1) return false
        const prev = selectedIndex === 0 ? items.length - 1 : selectedIndex - 1
        const next = selectedIndex === items.length - 1 ? 0 : selectedIndex + 1
        return index === prev || index === next
    }

    return (
        <div className="relative w-full max-w-7xl mx-auto px-12 md:px-20">
            <style jsx global>{`
                @keyframes type-reveal {
                    0% { opacity: 0; transform: translateY(2px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .group\\/card:hover .animate-type-char {
                    animation: type-reveal 0.3s forwards;
                }
            `}</style>
            {/* Carousel Container */}
            <div className="overflow-hidden py-10" ref={emblaRef}>
                <div className="flex touch-pan-y -ml-4">
                    {items.map((item, index) => (
                        <div
                            className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 pl-4 relative py-10"
                            key={index}
                        >
                            <div className="slide_card transition-all duration-300 ease-out h-full select-none">
                                {/* Card Design */}
                                <div
                                    className="inner_card bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] rounded-3xl p-8 h-full flex flex-col items-center text-center relative border border-gray-100 transition-all duration-300 group/card cursor-pointer"
                                    onMouseEnter={() => handleHover(index)}
                                >
                                    {/* Animated Abstract Background */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        {/* Subtle Grid Pattern Overlay */}
                                        <div className="absolute inset-0 opacity-[0.6] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />
                                    </div>
                                    {/* Top Icon Circle - Enhanced Design */}
                                    <div className="relative w-24 h-24 -mt-16 mb-6 group-hover:scale-110 transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) z-10">
                                        {/* Glow/Shadow Layer */}
                                        <div className="absolute inset-0 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] transition-shadow duration-500" />

                                        {/* Main Circle */}
                                        <div className="relative w-full h-full rounded-full bg-white flex items-center justify-center border-[1px] border-black ring-1 ring-black/5 overflow-hidden">

                                            {/* Decorative Background Interaction */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-black/0 to-black/0 group-hover:bg-black/[3] transition-colors duration-500" />

                                            {/* Icon - Always Black */}
                                            <div className="relative text-black">
                                                {item.icon}
                                            </div>
                                        </div>

                                        {/* Floating Badge/Accent (Optional Tech Detail) */}
                                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-black rounded-full border-4 border-[#d9d9d9] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                                    <p className="text-neutral-600 mb-8 line-clamp-3 text-sm leading-relaxed font-medium">
                                        {item.description}
                                    </p>

                                    <div className="mt-auto w-full">
                                        <Link href={item.href} className="w-full">
                                            <Button className="w-full bg-neutral-900 text-white hover:bg-neutral-800 rounded-xl py-6 font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                                                View More
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors z-20"
                onClick={scrollPrev}
                aria-label="Previous slide"
            >
                <ArrowLeft className="w-6 h-6" />
            </button>
            <button
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors z-20"
                onClick={scrollNext}
                aria-label="Next slide"
            >
                <ArrowRight className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center mt-8 gap-3">
                {items.map((_, index) => {
                    const isActive = index === selectedIndex
                    const isNb = isNeighbor(index)
                    return (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={cn(
                                "transition-all duration-300 rounded-full",
                                isActive
                                    ? "w-16 h-4 bg-[#09090b]" // Pill shape for active
                                    : isNb
                                        ? "w-4 h-4 bg-[#09090b]/60 hover:bg-[#09090b]/80" // Darker/Light shade for allies
                                        : "w-4 h-4 bg-[#09090b]/20 hover:bg-[#09090b]/40" // Lighter for others
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const TypingText = ({ text }: { text: string }) => {
    return (
        <span className="inline-flex  whitespace-nowrap">
            {text.split("").map((char, i) => (
                <span
                    key={i}
                    className="animate-type-char opacity-1 group-hover/card:opacity-0"
                    style={{
                        animationDelay: `${i * 50}ms`,
                        animationFillMode: 'forwards'
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </span>
    )
}

