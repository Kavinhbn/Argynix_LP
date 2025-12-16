'use client';

import * as React from 'react';
import Lottie from 'lottie-react';

import roboArmData from './Robo-arm-icon.json';

interface RoboArmProps {
    className?: string;
    size?: number;
}

function RoboArm({ className, size = 24 }: RoboArmProps) {
    return (
        <div className={className} style={{ width: size, height: size }}>
            <Lottie
                animationData={roboArmData}
                loop={true}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}

export { RoboArm, RoboArm as RoboArmIcon };