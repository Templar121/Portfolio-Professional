import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navItems } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-gray-800 py-2' 
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Name */}
          <a 
            href="#home" 
            className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center space-x-2 min-w-0"
          >
            <span className="truncate">Subhayan Mukherjee</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-900/50 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-gray-900/50 hover:bg-gray-800/70 border border-gray-700 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-gray-300" />
              ) : (
                <Sun size={20} className="text-yellow-400" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md bg-gray-900/50 hover:bg-gray-800/70 text-blue-400 border border-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black md:hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <span className="text-lg font-bold text-white">Menu</span>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-900/50 hover:bg-gray-800/70 border border-gray-700 transition-colors"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <Moon size={20} className="text-gray-300" />
                ) : (
                  <Sun size={20} className="text-yellow-400" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md bg-gray-900/50 hover:bg-gray-800/70 text-blue-400 border border-gray-700 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>
          <div className="p-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="px-4 py-3 text-lg font-medium rounded-lg text-gray-300 hover:text-blue-400 hover:bg-gray-900/50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;