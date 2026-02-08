"use client";

import { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 text-white ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-emerald-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
         
          className="flex items-center space-x-2">
            <Link
              href="/"
            >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/50">
              <Zap className="w-6 h-6 text-white" />
            </div>
            
            </Link>
            <Link 
          href="/"
            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              ScaleOrbits
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
             <Link href="/" className="text-white hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <Link href="/navcomponent/services" className="text-white hover:text-emerald-400 transition-colors">
              Services
            </Link>
            <Link href="/navcomponent/contactus" className="text-white hover:text-emerald-400 transition-colors">
              Contact Us
            </Link>
           
            <Link href="/navcomponent/aboutus" className="text-white hover:text-emerald-400 transition-colors">
              About Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-emerald-500/20">
          <div className="px-4 py-4 space-y-3">
                <Link href="/" className="text-white hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <Link href="/navcomponent/services" className="block text-white hover:text-emerald-400 transition-colors">
              Services
            </Link>
          <Link href="/navcomponent/contactus" className="block text-white hover:text-emerald-400 transition-colors">
              Contact Us
            </Link>
           
            <Link href="/navcomponent/aboutus" className="block text-white hover:text-emerald-400 transition-colors">
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
