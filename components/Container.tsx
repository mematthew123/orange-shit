import React from 'react'

type ContainerProps<T extends React.ElementType> = {
  as?: T
  className?: string
  children: React.ReactNode
}

export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>) {
  const Component = as ?? 'div'

  // Merge classes properly
  const classes = className 
    ? `mx-auto max-w-7xl px-6 lg:px-8 ${className}` 
    : 'mx-auto max-w-7xl px-6 lg:px-8'

  return (
    <Component className={classes}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  )
}