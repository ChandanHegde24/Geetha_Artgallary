import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    // Guard browser storage access to avoid runtime errors in restricted contexts.
    try {
      const saved = window.localStorage.getItem('theme');
      if (saved) {
        return saved === 'dark';
      }
    } catch {
      return false;
    }
    // Default to light theme
    return false;
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }

    try {
      window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // Ignore storage write failures in restricted browsing modes.
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
