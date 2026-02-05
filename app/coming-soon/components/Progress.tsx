"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faClock, faCode, faStar } from "@fortawesome/free-solid-svg-icons"

interface Props {
  content: any
}

export default function Progress({ content }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 animate-status-reveal w-full max-w-4xl mx-auto">
      <div className="bg-white/90 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl border border-emerald-100/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
          <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
            <div className="p-3 md:p-4 bg-emerald-100 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon icon={faCode} className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800">{content.progress.title}</h3>
              <p className="text-sm md:text-base text-slate-600">{content.progress.subtitle}</p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-slate-700 font-medium text-sm md:text-base">{content.progress.overall}</span>
              <span className="text-emerald-600 font-bold text-lg md:text-xl">78%</span>
            </div>

            <div className="relative bg-slate-200 rounded-full h-3 md:h-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-100 animate-pulse"></div>
              <div
                className="bg-gradient-to-r from-emerald-500 to-green-500 h-full rounded-full animate-progress-fill relative overflow-hidden"
                style={{ width: "78%" }}
              >
                <div className="absolute inset-0 bg-white/30 animate-progress-shine"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 md:mt-6">
              <div className="text-center p-3 md:p-4 rounded-xl bg-slate-50 group-hover:bg-white/50 transition-colors duration-300">
                <div className="text-xl md:text-3xl font-bold text-emerald-600 mb-1">15+</div>
                <div className="text-xs md:text-sm text-slate-600 font-medium">{content.progress.features}</div>
              </div>
              <div className="text-center p-3 md:p-4 rounded-xl bg-slate-50 group-hover:bg-white/50 transition-colors duration-300">
                <div className="text-xl md:text-3xl font-bold text-emerald-600 mb-1">99%</div>
                <div className="text-xs md:text-sm text-slate-600 font-medium">{content.progress.uptime}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl border border-emerald-100/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
          <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
            <div className="p-3 md:p-4 bg-green-100 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800">{content.features.title}</h3>
              <p className="text-sm md:text-base text-slate-600">{content.features.subtitle}</p>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {content.features.items.map((feature: any, index: number) => (
              <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50/80 transition-colors duration-300">
                {feature.completed ? (
                  <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 flex-shrink-0" />
                ) : (
                  <FontAwesomeIcon icon={faClock} className="w-4 h-4 md:w-5 md:h-5 text-slate-400 flex-shrink-0" />
                )}
                <span className={`${feature.completed ? "text-slate-700 font-semibold" : "text-slate-500 font-medium"} text-sm md:text-base`}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}