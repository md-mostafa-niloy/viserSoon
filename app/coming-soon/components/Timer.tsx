"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBolt, faChartLine, faClock } from "@fortawesome/free-solid-svg-icons"

interface Props {
  content: any
  timeLeft: { hours: number; minutes: number; seconds: number }
  dailyUpdate: string
}

export default function Timer({ content, timeLeft, dailyUpdate }: Props) {
  return (
    <div className="animate-timer-reveal w-full">
      <div className="bg-white/80 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl border border-emerald-100/50 max-w-4xl mx-auto relative overflow-hidden transition-all duration-500 hover:shadow-emerald-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-green-50/30 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600"></div>

        <div className="relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center space-x-3 mb-4">
              <FontAwesomeIcon icon={faClock} className="w-6 h-6 md:w-8 md:h-8 text-emerald-600 animate-tick" />
              <h2 className="text-2xl md:text-4xl font-bold text-slate-800 tracking-tight">{content.timer.title}</h2>
              <FontAwesomeIcon icon={faBolt} className="w-5 h-5 md:w-7 md:h-7 text-emerald-500 animate-zap" />
            </div>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">{content.timer.subtitle}</p>

            <div className="mt-6 md:mt-8">
              <div className="inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 md:px-6 md:py-3 rounded-full border border-blue-200 shadow-sm animate-daily-update hover:shadow-md transition-shadow duration-300">
                <div className="relative flex h-2 w-2 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-blue-500"></span>
                </div>
                <span className="text-blue-700 font-medium text-xs md:text-sm truncate max-w-[200px] md:max-w-none">
                  {content.todayUpdate} {dailyUpdate}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-8">
            {[
              { value: timeLeft.hours, label: content.timer.hours, icon: faClock, delay: "0s" },
              { value: timeLeft.minutes, label: content.timer.minutes, icon: faChartLine, delay: "0.1s" },
              { value: timeLeft.seconds, label: content.timer.seconds, icon: faBolt, delay: "0.2s" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative animate-timer-card"
                style={{ animationDelay: item.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl md:rounded-2xl transform group-hover:scale-105 transition-transform duration-500 shadow-lg group-hover:shadow-xl"></div>
                
                <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl md:rounded-2xl p-4 md:p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-500 overflow-hidden border border-emerald-400/20">
                  <div className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 bg-white/10 rounded-full -mr-6 -mt-6 md:-mr-10 md:-mt-10 blur-sm"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 md:w-16 md:h-16 bg-white/5 rounded-full -ml-4 -mb-4 md:-ml-8 md:-mb-8 blur-sm"></div>

                  <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                    <FontAwesomeIcon icon={item.icon} className="w-5 h-5 md:w-8 md:h-8 mb-2 md:mb-4 opacity-80 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="text-2xl sm:text-3xl md:text-6xl font-black tabular-nums mb-1 md:mb-2 animate-number-pulse tracking-tight drop-shadow-md">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-[10px] sm:text-xs md:text-base font-bold opacity-90 uppercase tracking-widest">
                      {item.label}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}