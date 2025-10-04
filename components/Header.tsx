
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `
    sticky top-0 z-50 transition-all duration-300
    ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}
  `;

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            Harapan Baru Service
          </a>
          <ul className="flex items-center space-x-6">
            <li>
              <a href="#main" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">
                Services
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
