import React from 'react'
import MonitorIcon from '~icons/carbon/screen'
import SunIcon from '~icons/carbon/sun'
import MoonIcon from '~icons/carbon/moon'
import type { Theme } from '@/types/theme'

interface ThemeIconProps {
  theme: Theme
  className?: string
}

export const ThemeIcon: React.FC<ThemeIconProps> = ({
  theme,
  className = 'w-5 h-5 text-cyber-accent',
}) => {
  switch (theme) {
    case 'light':
      return <SunIcon className={className} />
    case 'dark':
      return <MoonIcon className={className} />
    case 'system':
      return <MonitorIcon className={className} />
  }
}
