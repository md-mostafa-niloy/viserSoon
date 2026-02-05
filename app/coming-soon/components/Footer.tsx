"use client"
import Image from "next/image"

interface Props {
  content: any
}

export default function Footer({ content }: Props) {
  return (
    // Height reduced: py-2 instead of py-4
    <footer className="w-full py-2 px-4 md:py-4 animate-footer-fade z-50 relative mt-auto">
      <style jsx>{`
        @keyframes border-rgb {
          0% { border-color: rgba(239, 68, 68, 0.3); }
          33% { border-color: rgba(34, 197, 94, 0.3); }
          66% { border-color: rgba(59, 130, 246, 0.3); }
          100% { border-color: rgba(239, 68, 68, 0.3); }
        }
        .animate-border-rgb {
          animation: border-rgb 6s linear infinite;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Padding reduced: px-4 py-2 and md:px-6 md:py-3 */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-full border-2 border-white/20 shadow-lg px-4 py-2 md:px-6 md:py-3 flex flex-col md:flex-row items-center justify-between gap-2 transition-all duration-300 hover:bg-white/20 hover:shadow-xl animate-border-rgb relative overflow-hidden group">
          
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="flex items-center space-x-2 z-10">
            <div className="relative group/logo">
              <div className="absolute inset-0 bg-emerald-400/30 rounded-lg blur-md opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-1 rounded-lg shadow-sm border border-emerald-100">
                <Image 
                  src="/visernic-logo.png" 
                  alt="Visernic" 
                  width={20} 
                  height={20} 
                  className="w-4 h-4 md:w-5 md:h-5 object-contain"
                />
              </div>
            </div>
            <div className="text-[10px] md:text-xs text-slate-700 font-medium tracking-wide">
              {content.footer.copyright}
            </div>
          </div>

          <div className="flex items-center space-x-3 md:space-x-6 text-[10px] md:text-xs text-slate-600 font-medium z-10">
            <span className="hover:text-emerald-600 transition-colors duration-300 cursor-default">
              {content.footer.tagline1}
            </span>
            <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
            <span className="hover:text-emerald-600 transition-colors duration-300 cursor-default">
              {content.footer.tagline2}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}