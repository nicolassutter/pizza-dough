import React, { useRef, useState } from 'react'
import MonitorIcon from '~icons/carbon/screen'
import SunIcon from '~icons/carbon/sun'
import MoonIcon from '~icons/carbon/moon'
import ChevronDownIcon from '~icons/carbon/chevron-down'
import { useTheme } from '@/hooks/useTheme'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import type { Theme } from '@/types/theme'

const themeOptions: { value: Theme; label: string; icon: React.ReactNode }[] = [
  { value: 'light', label: 'Light', icon: <SunIcon className='w-5 h-5' /> },
  { value: 'dark', label: 'Dark', icon: <MoonIcon className='w-5 h-5' /> },
  {
    value: 'system',
    label: 'System',
    icon: <MonitorIcon className='w-5 h-5' />,
  },
]

export const ThemeDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(dropdownRef, () => setIsOpen(false))

  const currentTheme = themeOptions.find((option) => option.value === theme)

  return (
    <div
      className='relative'
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-background-light/10 dark:bg-cyber-background-dark/10 
                 border-2 border-cyber-border-light dark:border-cyber-border-dark hover:shadow-cyber transition-all'
        aria-expanded={isOpen}
        aria-haspopup='listbox'
        aria-label='Select theme'
      >
        {currentTheme?.icon}
        <span className='font-cyber text-cyber-text-light dark:text-cyber-text-dark'>
          {currentTheme?.label}
        </span>
        <ChevronDownIcon className='w-4 h-4 text-cyber-accent' />
      </button>

      {isOpen && (
        <div
          className='absolute right-0 mt-2 w-48 rounded-lg border-2 border-cyber-border-light dark:border-cyber-border-dark 
                      bg-cyber-background-light dark:bg-cyber-background-dark shadow-cyber'
          role='listbox'
          aria-label='Theme options'
        >
          {themeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setTheme(option.value)
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-2 px-4 py-2 hover:bg-cyber-accent/10 transition-colors
                         ${theme === option.value ? 'text-cyber-accent' : 'text-cyber-text-light dark:text-cyber-text-dark'}`}
              role='option'
              aria-selected={theme === option.value}
            >
              {option.icon}
              <span className='font-cyber'>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
