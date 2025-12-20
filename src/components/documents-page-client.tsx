"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Download, FileCode, FileSpreadsheet, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// --- Data ---
const documents = [
    {
        id: 1,
        title: 'Product Catalog 2024',
        description: 'The complete catalog of our latest products, including IoT sensors, gateways, and robotics solutions.',
        fileurl: '/documents/product-catalog-2024.pdf',
        date: 'July 15, 2024',
        fileType: 'PDF',
        fileSize: '5.8 MB',
        category: 'Brochure'
    },
    {
        id: 2,
        title: 'IoT Integration Guide',
        description: 'Technical manual for integrating Argynix IoT devices with legacy SCADA and cloud systems.',
        fileurl: '/documents/iot-integration-guide.pdf',
        date: 'June 28, 2024',
        fileType: 'PDF',
        fileSize: '2.1 MB',
        category: 'Whitepaper'
    },
    {
        id: 3,
        title: 'API Documentation v2.0',
        description: 'Comprehensive reference for our REST and MQTT APIs for developer integration.',
        fileurl: '/documents/api-documentation.pdf',
        date: 'July 01, 2024',
        fileType: 'PDF',
        fileSize: '1.2 MB',
        category: 'Technical'
    },
    {
        id: 4,
        title: 'Service Level Agreement',
        description: 'Standard terms regarding our service availability, support response times, and uptime guarantees.',
        fileurl: '/documents/sla.docx',
        date: 'May 20, 2024',
        fileType: 'DOCX',
        fileSize: '780 KB',
        category: 'Legal'
    },
    {
        id: 5,
        title: 'Case Study: Smart Agriculture',
        description: 'How we helped a 500-acre farm increase yield by 20% using automated irrigation.',
        fileurl: '/documents/case-study-agri.pdf',
        date: 'Aug 10, 2024',
        fileType: 'PDF',
        fileSize: '3.5 MB',
        category: 'Datasheet' 
    },
    {
        id: 6,
        title: 'Industrial Gateway X1 Datasheet',
        description: 'Full technical specifications, pinout diagrams, and mounting instructions for the X1 Gateway.',
        fileurl: '/documents/x1-datasheet.pdf',
        date: 'Aug 05, 2024',
        fileType: 'PDF',
        fileSize: '950 KB',
        category: 'Datasheet'
    }
];

const categories = ["All", "Brochure", "Whitepaper", "Datasheet", "Technical", "Legal"];

const Blob = ({ className, delay = 0 }: { className?: string, delay?: number }) => (
    <motion.div
        animate={{
            scale: [1, 1.2, 0.9, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 30, -20, 0],
        }}
        transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
            delay: delay,
        }}
        className={cn("absolute rounded-full blur-3xl opacity-20 mix-blend-multiply pointer-events-none", className)}
    />
);

export function DocumentsPageClient() {
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredDocs = documents.filter(doc => {
        const matchesCategory = filter === "All" || doc.category === filter;
        const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-background relative overflow-hidden text-foreground selection:bg-primary/10">
            {/* Background Blobs */}
            <Blob className="w-[800px] h-[800px] bg-primary/20 -top-40 -right-40" delay={0} />
            <Blob className="w-[600px] h-[600px] bg-secondary/30 top-1/2 -left-40" delay={5} />

            <div className="container relative z-10 mx-auto px-4 py-24 md:py-32">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block mb-4 px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5 backdrop-blur-sm"
                    >
                        <span className="text-sm font-bold tracking-widest text-primary uppercase">Knowledge Base</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black mb-6"
                    >
                        Resources & <span className="text-primary">Docs</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-muted-foreground"
                    >
                        Technical guides, brochures, and insights to help you build with Argynix.
                    </motion.p>
                </div>

                {/* Controls */}
                <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between bg-secondary/10 p-6 rounded-3xl border border-white/5 backdrop-blur-md">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                    filter === cat
                                        ? "bg-primary text-primary-foreground shadow-lg scale-105"
                                        : "bg-background/50 hover:bg-background text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            placeholder="Search documents..."
                            className="pl-10 rounded-full bg-background/50 border-transparent focus:border-primary/50 transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredDocs.map((doc) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={doc.id}
                                className="group relative"
                            >
                                <div className="h-full p-8 rounded-3xl bg-background/40 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:bg-background/60 transition-all duration-500 flex flex-col relative overflow-hidden">

                                    {/* Categorization Tag */}
                                    <div className="absolute top-0 right-0 p-4">
                                        <div className="px-3 py-1 rounded-full bg-secondary/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                            {doc.fileType}
                                        </div>
                                    </div>


                                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">{doc.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                                        {doc.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                        <div className="text-xs text-muted-foreground">
                                            <span className="block font-semibold">{doc.fileSize}</span>
                                            <span>{doc.date}</span>
                                        </div>
                                        <Button size="sm" className="rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-none hover:shadow-lg group-hover:translate-x-1">
                                            Download <Download className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredDocs.length === 0 && (
                    <div className="text-center py-24">
                        <p className="text-muted-foreground text-lg">No documents found matching your criteria.</p>
                        <Button
                            variant="link"
                            onClick={() => { setFilter("All"); setSearchQuery(""); }}
                            className="text-primary mt-2"
                        >
                            Clear filters
                        </Button>
                    </div>
                )}

            </div>
        </div>
    );
}
