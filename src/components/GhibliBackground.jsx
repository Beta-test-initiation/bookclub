import { useEffect, useRef } from 'react'
import '../styles/background.css'

export const GhibliBackground = () => {
  const containerRef = useRef(null)
  const rainContainerRef = useRef(null)

  useEffect(() => {
    // Create rain drops
    const rainContainer = rainContainerRef.current
    if (!rainContainer) return

    const createRain = () => {
      for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div')
        drop.className = 'rain-drop'
        drop.style.left = Math.random() * 100 + '%'
        drop.style.top = Math.random() * -100 + '%'
        drop.style.animationDuration = (Math.random() * 0.5 + 0.3) + 's'
        drop.style.animationDelay = Math.random() * 0.5 + 's'
        rainContainer.appendChild(drop)
      }
    }

    createRain()

    // Parallax effect
    let scrollY = 0
    const handleScroll = () => {
      scrollY = window.scrollY
      const slowLayer = containerRef.current?.querySelector('.parallax-layer.slow')
      const fastLayer = containerRef.current?.querySelector('.parallax-layer.fast')

      if (slowLayer) {
        slowLayer.style.transform = `translateY(${scrollY * 0.5}px)`
      }
      if (fastLayer) {
        fastLayer.style.transform = `translateY(${scrollY * 0.3}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="ghibli-background">
      {/* Sky layer */}
      <div className="sky-layer" />

      {/* Parallax slow layer - trees and main elements */}
      <div className="parallax-layer slow">
        {/* Tree silhouettes */}
        <div className="tree-left">
          <svg viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg">
            <g fill="#2a4d3a" opacity="0.6">
              {/* Main trunk */}
              <rect x="180" y="300" width="140" height="300" fill="#1a3a28" />
              {/* Branch structure - stylized forest silhouette */}
              <circle cx="150" cy="250" r="80" />
              <circle cx="250" cy="280" r="100" />
              <circle cx="350" cy="240" r="75" />
              <circle cx="100" cy="200" r="60" />
              <circle cx="400" cy="180" r="70" />
              {/* Smaller branches */}
              <circle cx="120" cy="150" r="40" />
              <circle cx="380" cy="130" r="45" />
              <circle cx="200" cy="120" r="50" />
            </g>
          </svg>
        </div>

        {/* Tree silhouettes - right */}
        <div className="tree-right">
          <svg viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg">
            <g fill="#2a4d3a" opacity="0.6">
              <rect x="180" y="300" width="140" height="300" fill="#1a3a28" />
              <circle cx="150" cy="250" r="80" />
              <circle cx="250" cy="280" r="100" />
              <circle cx="350" cy="240" r="75" />
              <circle cx="100" cy="200" r="60" />
              <circle cx="400" cy="180" r="70" />
              <circle cx="120" cy="150" r="40" />
              <circle cx="380" cy="130" r="45" />
              <circle cx="200" cy="120" r="50" />
            </g>
          </svg>
        </div>
      </div>

      {/* Parallax fast layer - clouds */}
      <div className="parallax-layer fast">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
        <div className="cloud cloud-4" />
      </div>

      {/* Mist overlay */}
      <div className="mist-overlay" />

      {/* Rain effect */}
      <div ref={rainContainerRef} className="rain-container" />
    </div>
  )
}
