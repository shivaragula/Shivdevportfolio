import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Icon from '../AppIcon';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-105 group"
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        <Icon
          name={isDarkMode ? 'Sun' : 'Moon'}
          size={20}
          className={`transition-all duration-300 ${
            isDarkMode 
              ? 'text-yellow-500 group-hover:text-yellow-400' 
              : 'text-slate-600 group-hover:text-slate-800 dark:text-slate-300 dark:group-hover:text-slate-100'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;