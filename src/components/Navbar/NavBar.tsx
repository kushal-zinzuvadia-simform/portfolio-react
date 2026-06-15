import { useState } from 'react';

import { NavItem } from './NavItem';

const navLinks = ['Home', 'Skills', 'Projects', 'Contact'];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1A0B2E] shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="text-2xl font-bold tracking-wide text-white">KZ</div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none md:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </div>
          </button>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <NavItem key={link} label={link} />
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 pb-4 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-[#1A0B2E]/95 p-4">
            {navLinks.map((link) => (
              <NavItem
                key={link}
                label={link}
                className="w-full bg-white/5 text-left hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
