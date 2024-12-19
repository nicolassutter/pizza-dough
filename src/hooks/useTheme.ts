import { useState, useEffect } from 'react'
import type { Theme } from '@/types/theme'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme
    return stored || 'system'
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    function updateTheme() {
      const resolvedTheme =
        theme === 'system' ? (mediaQuery.matches ? 'dark' : 'light') : theme

      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(resolvedTheme)
    }

    updateTheme()
    localStorage.setItem('theme', theme)

    if (theme === 'system') {
      mediaQuery.addEventListener('change', updateTheme)
      return () => mediaQuery.removeEventListener('change', updateTheme)
    }
  }, [theme])

  return { theme, setTheme }
}
