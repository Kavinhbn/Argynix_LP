'use client';

import * as React from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import accuracyData from './accuracy.json';

interface AccuracyIconProps {
    className?: string;
    size?: number;
    play?: boolean;
}

function AccuracyIcon({ className, size = 35, play }: AccuracyIconProps) {
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
                animationData={accuracyData}
                loop={false}
                autoplay={false}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}

export { AccuracyIcon };
