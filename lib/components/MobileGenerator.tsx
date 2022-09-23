import React from 'react'

function MobileGenerator() {
    


  return (
    <div className="h-[36rem] w-[64rem]">
      <svg
        className="bg-black rounded-2xl"
        height="full"
        width="full"
        style={{
          backgroundImage:
            "radial-gradient(at 53% 12%, hsla(287,66%,68%,1) 0px, transparent 50%)",
        }}
      >
        <filter>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="6.29"
            numOctaves="6"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
    </div>
  );
}

export default MobileGenerator