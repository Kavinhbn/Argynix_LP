"use client"

import React, { useCallback, useEffect, useState } from "react"
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
            // i.e., absDiff > 1.2 (approx)
            // Stronger blur for items further away to indicate they are "Out of focus/view"
            const blur = absDiff <= 0.2 ? 0 : Math.min((absDiff - 0.2) * 20, 12)

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

        return () => {
            emblaApi.off("reInit", onScroll)
            emblaApi.off("scroll", onScroll)
            emblaApi.off("select", onSelect)
            emblaApi.off("reInit", onSelect)
        }
    }, [emblaApi, onScroll, onSelect])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

    // Helper to check if a dot is a neighbor (prev or next) accounting for loop
    const isNeighbor = (index: number) => {
        if (items.length <= 1) return false
        const prev = selectedIndex === 0 ? items.length - 1 : selectedIndex - 1
        const next = selectedIndex === items.length - 1 ? 0 : selectedIndex + 1
        return index === prev || index === next
    }

    return (
        <div className="relative w-full max-w-7xl mx-auto px-12 md:px-20">
            {/* Carousel Container */}
            <div className="overflow-hidden py-10" ref={emblaRef}>
                <div className="flex touch-pan-y -ml-4">
                    {items.map((item, index) => (
                        <div className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0 pl-4 relative py-10" key={index}>
                            <div className="slide_card transition-all duration-300 ease-out h-full select-none">
                                {/* Card Design */}
                                <div className="inner_card bg-[#1a1a1a] rounded-3xl p-8 h-full flex flex-col items-center text-center relative border border-white/5 shadow-2xl transition-all duration-300">
                                    {/* Top Icon Circle */}
                                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center -mt-16 mb-6 border-4 border-primary group-hover:scale-110 transition-transform duration-500">
                                        <div className="text-primary">
                                            {item.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 mb-8 line-clamp-3 text-sm leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="mt-auto w-full">
                                        <Link href={item.href} className="w-full">
                                            <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-xl py-6 font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-shadow">
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
