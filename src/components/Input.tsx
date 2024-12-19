import React from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  icon?: React.ReactNode
}

export const Input: React.FC<InputProps> = ({
  label,
  icon,
  className,
  id,
  ...props
}) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className='space-y-2'>
      <label
        htmlFor={inputId}
        className='block text-sm font-cyber font-medium text-cyber-text-light dark:text-cyber-text-dark'
      >
        {label}
      </label>
      <div className='relative'>
        {icon && (
          <div className='absolute left-3 top-1/2 -translate-y-1/2 text-cyber-accent'>
            {icon}
          </div>
        )}
        <input
          id={inputId}
          {...props}
          className={twMerge(
            'w-full px-4 py-2 bg-cyber-background-light dark:bg-cyber-background-dark',
            'border-2 border-cyber-accent rounded-lg',
            'focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:border-transparent',
            'transition-all duration-200',
            'text-cyber-text-light dark:text-cyber-text-dark',
            'placeholder-cyber-text-light/50 dark:placeholder-cyber-text-dark/50',
            icon && 'pl-10',
            className,
          )}
        />
      </div>
    </div>
  )
}
