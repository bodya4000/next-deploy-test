import React from 'react'

interface PageContainerProps {
  children?: React.ReactNode
  className?: string
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, className }) => {
  return <div className={`max-w-[1200px] mx-auto  ${className || ''}`}>{children}</div>
}
