"use client"
import Image from "next/image"

interface Props {
  backgroundLogos: any[]
  particleLogos: any[]
}

export default function BackgroundLayers({ backgroundLogos, particleLogos }: Props) {
  return (
    <>
      {/* Layer 0: Deepest background elements (Slowest, blurred) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {backgroundLogos
          .filter((logo) => logo.layer === 0)
          .map((logo, index) => (
            <div
              key={logo.id}
              // Hide some elements on mobile (index > 15) to prevent lag
              className={`absolute animate-professional-float-${logo.direction} ${
                index > 15 ? "hidden md:block" : "block"
              }`}
              style={{
                left: `${logo.left}%`,
                top: `${logo.top}%`,
                width: `${logo.size}px`,
                height: `${logo.size}px`,
                opacity: logo.opacity,
                animationDuration: `${logo.animationDuration}s`,
                animationDelay: `${logo.animationDelay}s`,
                filter: "blur(1.5px)",
                willChange: "transform", // Performance optimization
              }}
            >
              <Image 
                src="/icon.svg" 
                alt="" 
                width={logo.size} 
                height={logo.size} 
                className="w-full h-full object-contain grayscale opacity-60" 
              />
            </div>
          ))}
      </div>

      {/* Layer 1: Mid-ground elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {backgroundLogos
          .filter((logo) => logo.layer === 1)
          .map((logo, index) => (
            <div
              key={logo.id}
              // Hide some elements on mobile to prevent lag
              className={`absolute animate-professional-float-${logo.direction} ${
                index > 10 ? "hidden md:block" : "block"
              }`}
              style={{
                left: `${logo.left}%`,
                top: `${logo.top}%`,
                width: `${logo.size * 0.8}px`,
                height: `${logo.size * 0.8}px`,
                opacity: logo.opacity * 1.2,
                animationDuration: `${logo.animationDuration * 0.9}s`,
                animationDelay: `${logo.animationDelay}s`,
                willChange: "transform",
              }}
            >
               <Image 
                src="/visernic-logo.png" 
                alt="" 
                width={logo.size} 
                height={logo.size} 
                className="w-full h-full object-contain grayscale opacity-40" 
              />
            </div>
          ))}
      </div>

      {/* Particles: Foreground details */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particleLogos.map((logo, index) => (
          <div
            key={logo.id}
            // Limit particles on mobile
            className={`absolute animate-particle-${logo.direction} ${
              index > 15 ? "hidden md:block" : "block"
            }`}
            style={{
              left: `${logo.left}%`,
              top: `${logo.top}%`,
              width: `${logo.size}px`,
              height: `${logo.size}px`,
              opacity: logo.opacity,
              animationDuration: `${logo.animationDuration}s`,
              animationDelay: `${logo.animationDelay}s`,
              filter: "blur(0.5px)",
              willChange: "transform",
            }}
          >
             <Image 
                src="/visernic-logo.png" 
                alt="" 
                width={logo.size} 
                height={logo.size} 
                className="w-full h-full object-contain" 
              />
          </div>
        ))}
      </div>
    </>
  )
}