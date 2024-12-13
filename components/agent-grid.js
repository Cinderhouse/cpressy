"use client"

import Image from "next/image"
import Link from "next/link"
import { agents } from '@/data/agents-data'

export default function AgentGrid() {
  return (
    <section className="py-28 px-4 bg-black ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-24 text-white">
            COTI Community Agent Marketplace
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden shadow-lg aspect-[3/4] w-full max-w-[360px] group mx-auto">
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <Image 
                  src={`/images/${(index % 3) + 1}.png`} 
                  alt={agent.title}
                  fill
                  className="object-cover"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
              </div>
              
              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-2xl text-white mb-2">
                    {agent.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm text-gray-200 opacity-80">
                    {agent.description}
                  </p>
                  <Link 
                    href={agent.href} 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    <span>Learn more</span>
                    <svg 
                      className="ml-2 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 