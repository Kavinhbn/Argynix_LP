'use client';

import * as React from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import agriData from './Agri-icon.json';

interface AgriProps {
  className?: string;
  size?: number;
}

function Agri({ className, size = 24 }: AgriProps) {
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
        animationData={agriData}
        loop={true}        
        autoplay={false}   
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

export { Agri, Agri as AgriIcon };
