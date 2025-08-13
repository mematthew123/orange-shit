'use client'

import React, { useEffect, useRef, useState, createContext, useContext } from 'react'

const FadeInStaggerContext = createContext(false)

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
}

export function FadeIn({ children, delay = 0, className = '', ...props }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInStaggerGroup = useContext(FadeInStaggerContext)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  // Calculate delay based on stagger context
  const animationDelay = isInStaggerGroup ? `${delay}ms` : '0ms'

  return (
    <div
      ref={ref}
      className={`fade-in-element ${isVisible ? 'fade-in-visible' : ''} ${className}`}
      style={{
        '--fade-in-delay': animationDelay,
        animationDelay: animationDelay,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  )
}

interface FadeInStaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  faster?: boolean
}

export function FadeInStagger({ 
  children, 
  faster = false,
  className = '',
  ...props 
}: FadeInStaggerProps) {
  const childrenArray = React.Children.toArray(children)
  
  return (
    <FadeInStaggerContext.Provider value={true}>
      <div className={className} {...props}>
        {React.Children.map(childrenArray, (child, index) => {
          if (React.isValidElement(child)) {
            const delay = index * (faster ? 120 : 200)
            return React.cloneElement(child as React.ReactElement<{delay?: number}>, {
              delay,
            })
          }
          return child
        })}
      </div>
    </FadeInStaggerContext.Provider>
  )
}