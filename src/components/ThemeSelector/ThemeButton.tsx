import React from 'react';
import type { Theme } from '@/types/theme';

interface ThemeButtonProps {
  theme: Theme;
  currentTheme: Theme;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

export const ThemeButton: React.FC<ThemeButtonProps> = ({
  theme,
  currentTheme,
  onClick,
  icon,
  label,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-lg transition-all ${
        currentTheme === theme
          ? 'bg-cyber-accent text-cyber-background-dark shadow-cyber'
          : 'hover:bg-cyber-background-dark/10 dark:hover:bg-cyber-background-light/10'
      }`}
      aria-label={label}
    >
      {icon}
    </button>
  );
};