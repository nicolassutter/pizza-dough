import React from 'react';
import { ThemeIcon } from './ThemeIcon';
import type { Theme } from '@/types/theme';

interface DropdownMenuProps {
  currentTheme: Theme;
  onSelect: (theme: Theme) => void;
}

const themeOptions: Array<{ value: Theme; label: string }> = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
];

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  currentTheme,
  onSelect,
}) => {
  return (
    <div 
      className="absolute right-0 mt-2 w-48 rounded-lg 
                border-2 border-cyber-accent bg-cyber-background-light 
                dark:bg-cyber-background-dark shadow-cyber
                animate-in fade-in slide-in-from-top-2"
      role="listbox"
      aria-label="Theme options"
    >
      {themeOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={`w-full flex items-center gap-2 px-4 py-2
                     hover:bg-cyber-accent/10 transition-colors
                     ${currentTheme === option.value 
                       ? 'text-cyber-accent' 
                       : 'text-cyber-text-light dark:text-cyber-text-dark'}`}
          role="option"
          aria-selected={currentTheme === option.value}
        >
          <ThemeIcon theme={option.value} />
          <span className="font-cyber">{option.label}</span>
        </button>
      ))}
    </div>
  );
};