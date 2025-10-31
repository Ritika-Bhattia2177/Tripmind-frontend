import React from 'react'
import { motion } from 'framer-motion'

const destinations = [
  { city: 'Paris', tag: 'Romance, art & cafés.', img: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6a2b8e8b6a0e1f1e8a3b3a6f2f8b4c7d' },
  { city: 'Goa', tag: 'Beaches, nightlife & serenity.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8c0a3d387f8c5b7a8f3b6f0e7a955f2e' },
  { city: 'Bali', tag: 'Surfing, temples & rice terraces.', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4f3c8b6c3a1f0e1f2d3c4b5a6e7f8a9b' },
  { city: 'Dubai', tag: 'Skyscrapers, desert & luxury.', img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c6d5a7b2e8c9f0b1a2d3e4f5a6b7c8d' },
  { city: 'Tokyo', tag: 'Neon streets & culinary delights.', img: 'https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7c9a8b6d5e4f3a2b1c0d9e8f7a6b5c4d' },
  { city: 'Santorini', tag: 'Blue domes & stunning sunsets.', img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3' }
];

export default function PopularDestinations(){
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Popular Destinations</h2>
        <p className="text-white/80 mt-2 max-w-2xl mx-auto">Explore curated destinations and discover what's popular among travelers.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((d, i) => (
          <motion.div 
            key={d.city} 
            className="group rounded-2xl overflow-hidden relative h-64 shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300" 
            initial={{opacity:0, y:20}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true, amount:0.2}} 
            transition={{duration:0.6, delay: i*0.08}}
          >
            {/* image */}
            <div className="absolute inset-0">
              <img src={d.img} alt={`${d.city} destination`} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors duration-300"></div>
            </div>

            {/* overlay content */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <div className="text-white text-2xl font-extrabold drop-shadow-lg">{d.city}</div>
              <div className="text-white/90 mt-2 max-w-xs text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {d.tag}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
