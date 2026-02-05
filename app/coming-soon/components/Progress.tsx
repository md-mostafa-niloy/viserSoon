"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faClock, faCode, faStar, faChartLine, faServer } from "@fortawesome/free-solid-svg-icons"

interface Props {
  content: any
}

export default function Progress({ content }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-5 w-full max-w-4xl mx-auto animate-status-reveal">
      <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-emerald-100/60 hover:border-emerald-200 hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-105 transition-transform duration-300 border border-emerald-200/50">
            <FontAwesomeIcon icon={faCode} className="w-5 h-5" />
          </div>
          <div className="flex flex-col items-start text-left">
            <h3 className="text-lg font-bold text-slate-800 leading-tight">{content.progress.title}</h3>
            <p className="text-xs text-slate-500 font-medium mt-1 leading-snug">{content.progress.subtitle}</p>
          </div>
        </div>

        <div className="flex-grow flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-sm font-semibold text-slate-600">{content.progress.overall}</span>
              <span className="text-lg font-bold text-emerald-600">78%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner border border-slate-100">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full w-[78%] relative overflow-hidden animate-progress-fill">
                 <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite]"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50/50 rounded-lg p-3 border border-slate-100 hover:border-emerald-100 transition-colors flex flex-col items-center justify-center text-center">
              <div className="text-emerald-600 mb-1.5">
                  <FontAwesomeIcon icon={faChartLine} className="w-4 h-4" />
              </div>
              <div className="text-lg font-bold text-slate-800 leading-none">15+</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">{content.progress.features}</div>
            </div>
            <div className="bg-slate-50/50 rounded-lg p-3 border border-slate-100 hover:border-emerald-100 transition-colors flex flex-col items-center justify-center text-center">
              <div className="text-emerald-600 mb-1.5">
                  <FontAwesomeIcon icon={faServer} className="w-4 h-4" />
              </div>
              <div className="text-lg font-bold text-slate-800 leading-none">99%</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">{content.progress.uptime}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100/60 hover:border-blue-200 hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-105 transition-transform duration-300 border border-blue-200/50">
            <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
          </div>
          <div className="flex flex-col items-start text-left">
            <h3 className="text-lg font-bold text-slate-800 leading-tight">{content.features.title}</h3>
            <p className="text-xs text-slate-500 font-medium mt-1 leading-snug">{content.features.subtitle}</p>
          </div>
        </div>

        <div className="space-y-3 flex-grow">
          {content.features.items.map((feature: any, index: number) => (
            <div 
              key={index} 
              className="flex items-start p-2.5 rounded-lg transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-100"
            >
              <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${feature.completed ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                <FontAwesomeIcon 
                  icon={feature.completed ? faCheckCircle : faClock} 
                  className="w-3 h-3" 
                />
              </div>
              <span className={`text-sm font-medium leading-snug ${feature.completed ? 'text-slate-700' : 'text-slate-500'}`}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
