'use client';

import * as React from 'react';
import Lottie from 'lottie-react';

import agriData from './Agri-icon.json';

interface AgriProps {
    className?: string;
    size?: number;
}

function Agri({ className, size = 24 }: AgriProps) {
    return (
        <div className={className} style={{ width: size, height: size }}>
            <Lottie
                animationData={agriData}
                loop={true}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}

export { Agri, Agri as AgriIcon };