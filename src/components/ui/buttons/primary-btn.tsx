import React from 'react'
import clsx from 'clsx'

interface PrimaryBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

export const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
  label,
  variant = 'primary',
  size = 'sm',
  className,
  ...props
}) => {
  const baseStyles =
    'rounded transition font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants: Record<typeof variant, string> = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
  }

  const sizes: Record<typeof size, string> = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button className={clsx(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {label}
    </button>
  )
}
