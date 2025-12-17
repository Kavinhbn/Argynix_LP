'use client';

import * as React from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import roboArmData from './Robo-arm-icon.json';

interface RoboArmProps {
  className?: string;
  size?: number;
}

function RoboArm({ className, size = 24 }: RoboArmProps) {
  const lottieRef = React.useRef<LottieRefCurrentProps | null>(null);

  return (
    <div
      className={className}
      style={{ width: size, height: size }}
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()} 
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={roboArmData}
        loop={true}
        autoplay={false}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

export { RoboArm, RoboArm as RoboArmIcon };
