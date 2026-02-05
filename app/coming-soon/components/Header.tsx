"use client"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons"

interface Props {
  content: any
  language: "en" | "bn"
  setLanguage: (lang: "en" | "bn") => void
}

export default function Header({ content, language, setLanguage }: Props) {
  return (
    <header className="w-full pt-4 pb-2 px-4 md:pt-8 md:pb-4 animate-header-slide z-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Glass Container */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl md:rounded-full border border-white/20 shadow-lg px-4 py-3 md:px-8 md:py-4 flex items-center justify-between transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:border-white/30">
          
          {/* Left Side: Logo & Company Name */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-emerald-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 md:p-2.5 shadow-md border border-white/40 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/icon.svg"
                  alt="Visernic Limited"
                  width={48}
                  height={48}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  priority
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-base md:text-xl font-black text-slate-800 tracking-tight leading-tight">
                {content.header.company}
              </h3>
              <p className="hidden md:block text-xs md:text-sm text-slate-600 font-medium opacity-80">
                {content.header.tagline}
              </p>
            </div>
          </div>

          {/* Right Side: Language & Status */}
          <div className="flex items-center space-x-2 md:space-x-4">
            
            {/* Status Badge (Hidden on very small screens, visible on mobile) */}
            <div className="hidden sm:flex items-center space-x-2 bg-emerald-50/50 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-emerald-200/50">
              <div className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-emerald-500"></span>
              </div>
              <span className="text-xs md:text-sm font-bold text-emerald-800 tracking-wide">
                {content.header.status}
              </span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-white/40 backdrop-blur-md rounded-xl border border-white/30 p-1 shadow-sm">
              <button
                onClick={() => setLanguage("en")}
                className={`relative flex items-center justify-center space-x-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 ${
                  language === "en"
                    ? "bg-white text-emerald-600 shadow-md transform scale-105"
                    : "text-slate-600 hover:text-emerald-700 hover:bg-white/50"
                }`}
              >
                <FontAwesomeIcon icon={faGlobe} className={`w-3 h-3 md:w-4 md:h-4 ${language === "en" ? "animate-spin-slow" : ""}`} />
                <span>EN</span>
              </button>
              
              <button
                onClick={() => setLanguage("bn")}
                className={`relative flex items-center justify-center space-x-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold transition-all duration-300 ${
                  language === "bn"
                    ? "bg-white text-emerald-600 shadow-md transform scale-105"
                    : "text-slate-600 hover:text-emerald-700 hover:bg-white/50"
                }`}
              >
                <span className="font-serif">বাং</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}