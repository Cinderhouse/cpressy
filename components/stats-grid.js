'use client'

import { useState, useEffect } from 'react'
import { Users, Building2 } from 'lucide-react'

export default function StatsGrid() {
  const [count, setCount] = useState(375987)

  useEffect(() => {
    let timer

    const incrementCount = () => {
      const increment = Math.floor(Math.random() * 5) + 1
      setCount(prevCount => prevCount + increment)

      const delay = Math.floor(Math.random() * 2000) + 1000
      timer = setTimeout(incrementCount, delay)
    }

    incrementCount()

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full py-6 md:py-12 mb-200 pb-200 px-4 bg-black mb-200">
      <div className="text-center mb-12">
        <div className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2 text-white">
          {count.toLocaleString()}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
          Community Members Building
        </h2>
        <p className=" text-white max-w-[70%] mx-auto text-center mb-12">
          The majority of COTI Network's community builders programatically share portions of successful builds with the community fund which ensures there are more rewards for the entire COTI community.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0">
          {/* Dubai Event */}
          <div className="relative md:col-span-2 lg:col-span-2 h-full bg-black overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/images/bangkok.JPG"
                alt="Global COTI Event"
                className="absolute w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-black/70">
              <div className="p-6 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="text-white text-3xl font-bold">Nirobi</h3>
                  <div className="flex items-center gap-2">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      build-a-thon
                    </span>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div className="text-white text-4xl font-bold">
                    117 <span className="text-xl font-normal">Attended</span>
                  </div>
                  <div className="flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 text-white">
                    <span className="sr-only">View details</span>
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Community Events */}
          <div className="md:col-span-1 lg:col-span-1 bg-purple-200 p-6 flex flex-col h-full">
            <div className="flex-1">
              <h3 className="text-xl mb-2">Community Led Events Coming in '25</h3>
              <div className="text-5xl font-bold mb-4">142</div>
              <h4 className="font-medium mb-2">Upcoming Community IRL Events</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="bg-yellow-300 rounded-full px-2 py-1 mr-2">10/02/25</span>
                  Singapore
                </li>
                <li className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="bg-yellow-300 rounded-full px-2 py-1 mr-2">19/02/25</span>
                  Ho Chi Minh City
                </li>
                <li className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="bg-yellow-300 rounded-full px-2 py-1 mr-2">26/02/25</span>
                  London
                </li>
                <li className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="bg-yellow-300 rounded-full px-2 py-1 mr-2">02/03/25</span>
                  Paris, KY
                </li>
                <li className="flex items-center">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span className="bg-yellow-300 rounded-full px-2 py-1 mr-2">10/03/25</span>
                  Tel Aviv
                </li>
                <li className="flex items-center">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span className="bg-yellow-300 rounded-full px-2 py-1 mr-2">18/03/25</span>
                  Bangkok
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <a href="#" className="flex items-center text-black hover:opacity-80 bg-purple-300 rounded-full px-4 py-2 text-sm transition-colors w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Claim a post hoc event grant.
              </a>
            </div>
          </div>

          {/* Creatives */}
          <div className="relative md:col-span-1 lg:col-span-1 h-full">
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/images/gathering.JPG"
                alt="COTI Creatives"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-black/70 p-6 flex flex-col">
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-white text-2xl font-bold">Creatives*</h3>
                  <div className="text-white text-right">
                    <div className="text-lg">January, 15th</div>
                    <div className="text-sm">1:00pm GMT</div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-white text-sm">COTI Creatives meeting to plan COTI SWAG for 2025.</p>
                <div className="mt-12">
                  <a href="#" className="flex items-center text-white hover:opacity-80 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm transition-colors w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    RSVP to join and co-create
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Network (now Poolz IDO Launch Pad) */}
          <div className="md:col-span-1 lg:col-span-1 bg-emerald-100 p-6 flex flex-col justify-between">
            <h3 className="text-2xl font-bold">
              Poolz IDO Launch Pad
            </h3>
            <div className="mt-2">
              <div className="text-lg">commits 3% of all launch tokens to community pool.</div>
           
              <div className="flex items-center mt-12">
                <a href="#" className="flex items-center text-black hover:opacity-80 bg-emerald-200 rounded-full px-4 py-2 text-sm transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  Learn How to Claim
                </a>
              </div>
            </div>
          </div>

          {/* Growth */}
          <div className="md:col-span-1 lg:col-span-1 bg-orange-200 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-sm mb-2">Growth In Community Deployed Smart Contracts Past 30 Days</h3>
              <div className="text-4xl font-bold">
                2000<span className="text-2xl">%</span>
              </div>
            </div>
            <div>
              <div className="text-sm">COTI Network</div>
              <div className="mt-12">
                <a href="#" className="flex items-center text-black hover:opacity-80 bg-orange-300 rounded-full px-4 py-2 text-sm transition-colors w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  Explorer
                </a>
              </div>
            </div>
          </div>

          {/* Active Holders */}
          <div className="md:col-span-2 lg:col-span-2 bg-yellow-100 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm mb-2">Active COTI Holders</h3>
                <div className="text-5xl font-bold">84.3K</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">Globally*</div>
                <div className="text-lg">Popular Token</div>
                <div className="text-sm opacity-60">#COTI_Network</div>
              </div>
            </div>
            <div className="flex justify-end -space-x-2 mt-4">
              <div className="w-10 h-10 rounded-full bg-emerald-300 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-purple-300 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-orange-300 border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

