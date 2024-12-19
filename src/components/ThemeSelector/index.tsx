import React, { useState, useRef } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { DropdownButton } from './DropdownButton'
import { DropdownMenu } from './DropdownMenu'

export const ThemeSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(dropdownRef, () => setIsOpen(false))

  const handleSelect = (newTheme: typeof theme) => {
    setTheme(newTheme)
    setIsOpen(false)
  }

  return (
    <div
      className='relative'
      ref={dropdownRef}
    >
      <DropdownButton
        theme={theme}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <DropdownMenu
          currentTheme={theme}
          onSelect={handleSelect}
        />
      )}
    </div>
  )
}
