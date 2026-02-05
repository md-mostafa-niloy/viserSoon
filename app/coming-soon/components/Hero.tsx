"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRocket } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

interface Props {
  content: any
}

export default function Hero({ content }: Props) {
  return (
    <div className="relative w-full max-w-5xl mx-auto space-y-4 md:space-y-6 animate-hero-entrance pb-0 mb-0">
      <style jsx>{`
        @keyframes rgb-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes text-cycle {
          0%, 100% { opacity: 0; transform: translateY(10px); }
          20%, 80% { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-rgb-text {
          background-size: 200% auto;
          animation: rgb-flow 3s linear infinite;
        }
        .animate-word-cycle {
          animation: text-cycle 6s ease-in-out infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 20s linear infinite;
        }
      `}</style>

      <div className="flex justify-center pt-2 md:pt-4">
        <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] flex items-center justify-center">
          
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

          <div className="absolute inset-0 animate-spin-slower">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border border-transparent rounded-[45%]"
                style={{
                  transform: `rotate(${i * 15}deg)`,
                  borderColor: i % 3 === 0 ? 'rgba(239, 68, 68, 0.4)' : i % 3 === 1 ? 'rgba(34, 197, 94, 0.4)' : 'rgba(59, 130, 246, 0.4)',
                  height: '100%',
                  width: '40%',
                  left: '30%',
                }}
              ></div>
            ))}
            {[...Array(12)].map((_, i) => (
              <div
                key={`sub-${i}`}
                className="absolute inset-0 border-[0.5px] border-white/20 rounded-full"
                style={{
                  transform: `rotate(${i * 15}deg) scale(0.8)`,
                  height: '100%',
                  width: '100%',
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse"></div>
            <Image
              src="/icon.svg"
              alt="Visernic Logo"
              width={120}
              height={120}
              className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>

      <div className="space-y-2 md:space-y-4 flex flex-col items-center text-center px-2 -mt-4 md:-mt-6 relative z-20">
        <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-3 py-1 md:px-5 md:py-2 rounded-full border border-emerald-100 shadow-sm animate-fade-in-up hover:shadow-emerald-500/10 transition-all duration-300 transform hover:scale-105">
          <FontAwesomeIcon icon={faRocket} className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-emerald-600 animate-bounce" />
          <span className="text-[10px] md:text-sm font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent uppercase tracking-wider">
            {content.hero.badge}
          </span>
        </div>

        <div className="relative">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-rgb-text tracking-tighter leading-[0.9] pb-1 filter drop-shadow-sm">
            {content.hero.title}
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 blur-3xl opacity-10 -z-10 animate-pulse"></div>
        </div>

        <div className="max-w-2xl mx-auto space-y-1 md:space-y-2">
          <div className="min-h-[50px] md:min-h-[70px] flex items-center justify-center flex-wrap gap-x-1.5 px-5">
            {content.hero.subtitle.split(" ").map((word: string, i: number) => (
              <span
                key={i}
                className="text-base sm:text-xl md:text-2xl font-light text-slate-800 animate-word-cycle inline-block"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  textShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}
              >
                {word}
              </span>
            ))}
          </div>
          
          <p className="text-[10px] sm:text-xs md:text-base text-slate-500 max-w-xl mx-auto font-medium leading-relaxed opacity-90 px-4">
             {content.hero.description}
          </p>
        </div>
      </div>
      
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-emerald-200/20 to-transparent mt-2"></div>
    </div>
  )
}