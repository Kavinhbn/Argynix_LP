"use client"

import React, { useRef } from 'react';
import { motion, useInView } from "motion/react";

/** 
 * Text Reveal Animation
 * Splitting text into lines/words for "Arrival and Exit" effect. 
 */
export const RevealText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 }); // Re-triggers on exit

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
