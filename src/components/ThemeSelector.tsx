import React from 'react';
import MonitorIcon from '~icons/carbon/screen';
import SunIcon from '~icons/carbon/sun';
import MoonIcon from '~icons/carbon/moon';
import { useTheme } from '@/hooks/useTheme';

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 bg-cyber-background-light dark:bg-cyber-background-dark p-2 rounded-lg">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-lg transition-all ${
          theme === 'light'
            ? 'bg-cyber-accent text-cyber-background-dark shadow-cyber'
            : 'hover:bg-cyber-background-dark/10 dark:hover:bg-cyber-background-light/10'
        }`}
        aria-label="Light mode"
      >
        <SunIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-lg transition-all ${
          theme === 'dark'
            ? 'bg-cyber-accent text-cyber-background-dark shadow-cyber'
            : 'hover:bg-cyber-background-dark/10 dark:hover:bg-cyber-background-light/10'
        }`}
        aria-label="Dark mode"
      >
        <MoonIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-lg transition-all ${
          theme === 'system'
            ? 'bg-cyber-accent text-cyber-background-dark shadow-cyber'
            : 'hover:bg-cyber-background-dark/10 dark:hover:bg-cyber-background-light/10'
        }`}
        aria-label="System theme"
      >
        <MonitorIcon className="w-5 h-5" />
      </button>
    </div>
  );
};