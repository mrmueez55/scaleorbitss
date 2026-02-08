"use client";

import { Zap, Facebook, Linkedin, Twitter, Mail, Phone, MapPin, MessageCircle, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white ">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/50">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">ScaleOrbits</span>
            </div>
            <p className="text-slate-400">
              Crafting digital solutions with innovation, precision, and passion.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">mueez@scaleorbits.com</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div> */}
              {/* <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">E10 6AL London, UK</span>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="/" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="/navcomponent/services" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="/navcomponent/contactus" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
              <li><a href="/navcomponent/aboutus" className="hover:text-emerald-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Social Links */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-emerald-400 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Linkedin /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Instagram /></a>
            </div>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-6 text-center text-slate-400 text-sm">
          © 2026 ScaleOrbits. All rights reserved.
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      {/* <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg shadow-emerald-500/30 transition-transform transform hover:scale-110"
      >
           <img src="/whatsapp.svg" alt="WhatsApp" className="w-9 h-9" />
      </a> */}
    </footer>
  );
}
