"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface AnimationObserverProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  delay?: number
}

export default function AnimationObserver({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
  delay = 0,
}: AnimationObserverProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
