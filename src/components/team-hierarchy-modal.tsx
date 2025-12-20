"use client"

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Define the interface here for now, or import from a shared types file if one existed.
// Given the scope, defining it here and exporting is fine.
export interface TeamMember {
    name: string;
    role: string;
    department: string;
    image: string;
    bio?: string; // Optional for subordinates if not needed
    subordinates?: TeamMember[];
}

interface TeamHierarchyModalProps {
    member: TeamMember | null;
    isOpen: boolean;
    onClose: () => void;
}

// Recursive component to render the tree
const TreeNode = ({ member, isRoot = false }: { member: TeamMember; isRoot?: boolean }) => {
    const hasSubordinates = member.subordinates && member.subordinates.length > 0;

    return (
        <div className="flex flex-col items-center">
            {/* Node Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className={cn(
                    "relative flex flex-col items-center p-4 bg-background/90 backdrop-blur-md rounded-xl border shadow-lg transition-all hover:shadow-xl hover:scale-105 hover:border-primary/50",
                    isRoot ? "border-primary/50 min-w-[200px]" : "border-border min-w-[150px]"
                )}
            >
                <div className={cn("relative overflow-hidden rounded-full mb-3 border-2", isRoot ? "w-24 h-24 border-primary" : "w-16 h-16 border-muted")}>
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <h3 className={cn("font-bold text-center", isRoot ? "text-lg text-primary" : "text-sm text-foreground")}>{member.name}</h3>
                <p className="text-xs text-muted-foreground text-center font-medium capitalize">{member.role}</p>
            </motion.div>

            {/* Connecting Lines and Children */}
            {hasSubordinates && (
                <>
                    {/* Vertical Line from Parent */}
                    <div className="w-px h-8 bg-border"></div>

                    {/* Children Container */}
                    <div className="relative flex gap-8 pt-4">
                        {/* Horizontal Bar connecting children */}
                        {member.subordinates!.length > 1 && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-border w-[calc(100%-2rem)]"></div> // Adjust width logic for perfect connector
                        )}
                        {/* Better Connector Logic:
                 We need a horizontal line that spans from the center of the first child to the center of the last child.
                 A simple way with flexbox is to have each child have a "top connector" that goes up to a common rail.
             */}

                        {member.subordinates!.map((sub, index) => (
                            <div key={index} className="flex flex-col items-center relative">
                                {/* Top Vertical Connector for Child */}
                                {/* Hacky visual connector:
                     The parent line comes down.
                     Then we need a horizontal bar branching out.
                     CSS Grid or Flex with pseudo-elements is best for trees, but let's keep it simple with absolute lines if possible.
                     
                     Actually, a cleaner CSS tree Approach:
                     Parent
                       |
                     -------
                     |     |
                   Child Child
                  */}

                                {/* Connector logic applied to the mapping wrapper */}
                                {/* Horizontal Branch Line (Spans full width of this child's area) but we mask it */}
                                <div className={cn(
                                    "absolute top-[-1rem] h-px bg-border",
                                    // Use calc to position left/right halves
                                    member.subordinates!.length === 1 ? "hidden" : "block", // No horizontal line for single child
                                    index === 0 ? "left-1/2 w-1/2" : (index === member.subordinates!.length - 1 ? "right-1/2 w-1/2" : "w-full")
                                )}></div>

                                {/* Vertical Line to Child Node */}
                                <div className="w-px h-4 bg-border absolute top-[-1rem]"></div>

                                <TreeNode member={sub} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export function TeamHierarchyModal({ member, isOpen, onClose }: TeamHierarchyModalProps) {
    if (!isOpen || !member) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-auto"
                    onClick={onClose} // Close on backdrop click
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
                    >
                        <X size={24} />
                    </button>

                    <div onClick={(e) => e.stopPropagation()} className="relative max-w-[90vw] max-h-[90vh] overflow-auto p-12">
                        <TreeNode member={member} isRoot />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
