"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faMapMarkerAlt, faPhone, faQuestionCircle, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useState, useEffect } from "react"

interface Props {
  content: any
}

export default function Contact({ content }: Props) {
  const [emailHref, setEmailHref] = useState("#")
  const [emailDisplay, setEmailDisplay] = useState("Loading...")

  useEffect(() => {
    // Obfuscate email to prevent scraping
    const user = "support"
    const domain = "visernic.com"
    setEmailHref(`mailto:${user}@${domain}`)
    setEmailDisplay(`${user}@${domain}`)
  }, [])

  return (
    <div className="animate-contact-reveal w-full max-w-4xl mx-auto">
      <style jsx>{`
        @keyframes rgb-border-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .group:hover .rgb-border {
          opacity: 1;
        }
      `}</style>

      <div className="bg-white/80 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl border border-emerald-100/50 relative overflow-hidden transition-all duration-500 hover:shadow-emerald-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-emerald-50/30 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600"></div>

        <div className="relative z-10">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center justify-center space-x-3 mb-3">
              <FontAwesomeIcon icon={faQuestionCircle} className="w-6 h-6 md:w-8 md:h-8 text-emerald-600 animate-pulse-slow" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">{content.contact.title}</h2>
            </div>
            <p className="text-slate-600 text-sm md:text-base max-w-lg mx-auto">{content.contact.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: faPhone,
                title: content.contact.phone.label,
                value: content.contact.phone.value,
                href: `tel:+447366493955`,
                delay: "0s",
              },
              {
                icon: faEnvelope,
                title: content.contact.email.label,
                value: emailDisplay,
                href: emailHref,
                delay: "0.1s",
              },
              {
                icon: faMapMarkerAlt,
                title: content.contact.office.label,
                value: content.contact.office.value,
                href: "https://maps.google.com/?q=Nazipur,Naogaon",
                delay: "0.2s",
              },
            ].map((item, index) => (
              <div key={index} className="group relative h-full animate-contact-card" style={{ animationDelay: item.delay }}>
                <div className="absolute -inset-[1px] bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm rgb-border" style={{ backgroundSize: '200% 200%', animation: 'rgb-border-flow 3s linear infinite' }}></div>
                
                <Link
                  href={item.href}
                  target={item.icon === faMapMarkerAlt ? "_blank" : undefined}
                  rel={item.icon === faMapMarkerAlt ? "noopener noreferrer" : undefined}
                  className="relative block bg-white/90 backdrop-blur-xl rounded-2xl p-5 md:p-6 text-center shadow-lg border border-emerald-100 hover:border-transparent transition-all duration-300 h-full transform group-hover:scale-[1.02]"
                >
                  <div className="flex flex-col items-center justify-between h-full space-y-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-50 to-green-100 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                      <FontAwesomeIcon icon={item.icon} className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                    </div>
                    
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-slate-800 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-xs md:text-sm font-medium break-words px-2">{item.value}</p>
                    </div>

                    <div className="flex items-center justify-center text-emerald-600 text-xs font-bold uppercase tracking-wider opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                       {item.icon === faPhone && <span>Call Now</span>}
                       {item.icon === faEnvelope && <span>Email Us</span>}
                       {item.icon === faMapMarkerAlt && (
                        <span className="flex items-center gap-1">
                          View Map <FontAwesomeIcon icon={faExternalLinkAlt} className="w-2.5 h-2.5" />
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-10 text-center">
            <Link
              href={emailHref}
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-xl font-bold text-sm md:text-base shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-15deg]"></div>
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>{content.contact.contactUs}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
