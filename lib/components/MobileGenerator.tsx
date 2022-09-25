import React from "react";

function MobileGenerator() {
  return (
    <div className="h-[36rem] w-[64rem] shadow-lg rounded-2xl">
      <svg
        id="gradientCombo"
        className="bg-black rounded-2xl"
        height="full"
        width="full"
      >
        <filter id="noiseFilter">
            {/* <feGaussianBlur stdDeviation="1" /> */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.5"
            numOctaves="5"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}

export default MobileGenerator;
