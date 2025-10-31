import React from 'react'
import { Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="bg-gradient-to-r from-transparent via-white/5 to-transparent h-0.5"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-2xl font-extrabold">TripMind</div>
            <div className="text-white/80 mt-1">AI-powered travel planning for modern explorers.</div>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#" className="text-white/80 hover:text-white transition">Home</a>
            <a href="#" className="text-white/80 hover:text-white transition">About</a>
            <a href="#" className="text-white/80 hover:text-white transition">Contact</a>
            <a href="#" className="text-white/80 hover:text-white transition">Privacy Policy</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#" className="p-2 rounded-md hover:bg-white/6 transition" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="p-2 rounded-md hover:bg-white/6 transition" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-2 rounded-md hover:bg-white/6 transition" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="mt-8 text-center text-white/70 text-sm">© {year} TripMind. All rights reserved.</div>
      </div>
    </footer>
  )
}
