'use client';

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation(['menu']);
  const menuItems = t('menu:navigation', { returnObjects: true });

  return (
    <div className="navigation">
      <nav className="hidden lg:flex items-center gap-8">
        {Array.isArray(menuItems) && menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-white font-semibold relative hover:text-white transition-colors group"
          >
            <span className="relative z-10">{item.label}</span>
            <span className="absolute inset-x-0 bottom-0 h-[50%] opacity-0 bg-primary transition-opacity duration-200 ease-in-out group-hover:opacity-100" />
          </Link>
        ))}
      </nav>

      <button
        className="lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div
        className={`lg:hidden fixed inset-0 z-50 transition-[visibility] duration-300 ${
          isMenuOpen ? "visible" : "invisible delay-300"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300
             ${isMenuOpen ? "bg-opacity-50" : "bg-opacity-0"}`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="flex justify-end h-full">
          <div
            className={`w-full max-w-sm bg-primary-900 h-full transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col items-end px-8 gap-10">
              {Array.isArray(menuItems) && menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white text-xl relative hover:text-white transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-x-0 bottom-0 h-[50%] opacity-0 bg-primary transition-opacity duration-200 ease-in-out group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
