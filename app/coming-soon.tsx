"use client"

import { useState, useEffect, useLayoutEffect } from "react"
import { content } from "./coming-soon/data"
import AnimationStyles from "./coming-soon/styles"
import BackgroundLayers from "./coming-soon/components/BackgroundLayers"
import Header from "./coming-soon/components/Header"
import Hero from "./coming-soon/components/Hero"
import Timer from "./coming-soon/components/Timer"
import Progress from "./coming-soon/components/Progress"
import Contact from "./coming-soon/components/Contact"
import Company from "./coming-soon/components/Company"
import Footer from "./coming-soon/components/Footer"

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [language, setLanguage] = useState<"en" | "bn">("en")
  const [backgroundLogos, setBackgroundLogos] = useState<any[]>([])
  const [particleLogos, setParticleLogos] = useState<any[]>([])
  const [dailyUpdate, setDailyUpdate] = useState("")

  const currentContent = content[language]

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual"
      window.scrollTo(0, 0)
    }
  }, [])

  useEffect(() => {

    const bgLogos = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      size: Math.random() * 80 + 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: Math.random() * 20 + 25,
      animationDelay: Math.random() * 10,
      direction: Math.floor(Math.random() * 8),
      opacity: Math.random() * 0.15 + 0.05, // Slightly more visible
      layer: Math.floor(Math.random() * 3),
    }))
    setBackgroundLogos(bgLogos)

    const pLogos = Array.from({ length: 80 }, (_, i) => ({
      id: i + 100,
      size: Math.random() * 30 + 5,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: Math.random() * 10 + 15,
      animationDelay: Math.random() * 5,
      direction: Math.floor(Math.random() * 6),
      opacity: Math.random() * 0.2 + 0.05,
    }))
    setParticleLogos(pLogos)
  }, [])

  useEffect(() => {
    const getDailyUpdate = () => {
      const today = new Date()
      const dayOfYear = Math.floor(
        (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24),
      )
      const updateIndex = dayOfYear % currentContent.dailyUpdates.length
      return currentContent.dailyUpdates[updateIndex]
    }
    setDailyUpdate(getDailyUpdate())
  }, [language, currentContent.dailyUpdates])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const endOfDay = new Date()
      endOfDay.setHours(23, 59, 59, 999)

      const difference = endOfDay.getTime() - now.getTime()

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ hours, minutes, seconds })
      } else {
        setTimeLeft({ hours: 23, minutes: 59, seconds: 59 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/20 to-emerald-50 relative overflow-hidden">
      
      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
          backgroundRepeat: 'repeat',
        }}
      />

      <BackgroundLayers backgroundLogos={backgroundLogos} particleLogos={particleLogos} />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Header content={currentContent} language={language} setLanguage={setLanguage} />

        <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-12">
          <div className="w-full max-w-6xl mx-auto text-center space-y-12 md:space-y-16">
            <Hero content={currentContent} />
            <Timer content={currentContent} timeLeft={timeLeft} dailyUpdate={dailyUpdate} />
            <Progress content={currentContent} />
            <Contact content={currentContent} />
            <Company content={currentContent} />
          </div>
        </main>

        <Footer content={currentContent} />
      </div>

      <AnimationStyles />
    </div>
  )
}