import React from 'react'
import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <button
      onClick={toggleDarkMode}
      className='p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'
      aria-label='Toggle dark mode'
    >
      {darkMode ? (
        <Sun className='w-5 h-5 text-yellow-500' />
      ) : (
        <Moon className='w-5 h-5 text-gray-600' />
      )}
    </button>
  )
}

export default ThemeToggle
