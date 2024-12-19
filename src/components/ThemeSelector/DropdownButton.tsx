import React from 'react';
import ChevronDownIcon from '~icons/carbon/chevron-down';
import { ThemeIcon } from './ThemeIcon';
import type { Theme } from '@/types/theme';

interface DropdownButtonProps {
  theme: Theme;
  isOpen: boolean;
  onClick: () => void;
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  theme,
  isOpen,
  onClick,
}) => {
  const labels: Record<Theme, string> = {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  };

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 rounded-lg 
                bg-cyber-background-light/10 dark:bg-cyber-background-dark/10 
                border-2 border-cyber-accent hover:shadow-cyber
                transition-all duration-200"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-label="Select theme"
    >
      <ThemeIcon theme={theme} />
      <span className="font-cyber text-cyber-text-light dark:text-cyber-text-dark">
        {labels[theme]}
      </span>
      <ChevronDownIcon 
        className={`w-4 h-4 text-cyber-accent transition-transform duration-200
                   ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
      />
    </button>
  );
};