"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faAward, faGlobe, faRocket, faUsers } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

interface Props {
  content: any
}

export default function Company({ content }: Props) {
  return (
    <div className="animate-company-reveal w-full max-w-4xl mx-auto relative z-10">
      <style jsx>{`
        @keyframes rgb-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-rgb-border {
          background: linear-gradient(60deg, #ff0000, #00ff00, #0000ff, #ff0000, #00ff00, #0000ff);
          background-size: 300% 300%;
          animation: rgb-border 4s ease infinite;
        }
      `}</style>

      <div className="relative p-[2px] rounded-3xl overflow-hidden animate-rgb-border shadow-2xl">
        {/* Main Card Content */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-[22px] p-6 md:p-12 relative overflow-hidden h-full">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>
          
          <div className="relative z-10 text-center space-y-8">
            {/* Header Section */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 md:space-x-3 bg-slate-50/80 backdrop-blur-sm px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-slate-200 shadow-sm animate-fade-in-down hover:scale-105 transition-transform duration-300">
                <FontAwesomeIcon icon={faGlobe} className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-600 animate-spin-slow" />
                <span className="text-emerald-800 font-bold text-xs md:text-sm tracking-wide">{content.company.poweredBy}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-2 md:mb-4 tracking-tighter drop-shadow-sm">
                {content.company.title}
              </h2>

              <p className="text-sm sm:text-base md:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                {content.company.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8 mt-8 md:mt-10">
              {[
                { icon: faUsers, title: content.company.team.title, desc: content.company.team.desc, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
                { icon: faAward, title: content.company.quality.title, desc: content.company.quality.desc, color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
                { icon: faRocket, title: content.company.delivery.title, desc: content.company.delivery.desc, color: "text-purple-500", bg: "bg-purple-50", border: "border-purple-100" },
              ].map((item, index) => (
                <div key={index} className={`flex flex-col items-center p-5 rounded-2xl ${item.bg} border ${item.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-default`}>
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <FontAwesomeIcon icon={item.icon} className={`w-6 h-6 md:w-7 md:h-7 ${item.color}`} />
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-xs md:text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 md:pt-8">
              <Link
                href="https://visernic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center space-x-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 md:px-10 md:py-4 rounded-xl font-bold text-sm md:text-base shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">{content.company.cta}</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}