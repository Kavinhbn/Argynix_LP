'use client';

import * as React from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import checkmarkData from './checkmark.json';

interface CheckmarkIconProps {
    className?: string;
    size?: number;
    play?: boolean;
}

function CheckmarkIcon({ className, size = 35, play }: CheckmarkIconProps) {
    const lottieRef = React.useRef<LottieRefCurrentProps | null>(null);

    React.useEffect(() => {
        if (play) {
            lottieRef.current?.play();
        } else {
            lottieRef.current?.stop();
        }
    }, [play]);

    return (
        <div
            className={className}
            style={{ width: size, height: size }}
            onMouseEnter={() => !play && lottieRef.current?.play()}
            onMouseLeave={() => !play && lottieRef.current?.stop()}
        >
            <Lottie
                lottieRef={lottieRef}
                animationData={checkmarkData}
                loop={false}
                autoplay={false}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}

export { CheckmarkIcon };
