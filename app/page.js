import Nav from '../components/nav'
import Hero from '../components/hero'
import VideoGrid from '../components/video-grid'
import CardGrid from '../components/card-grid'
import BountyGrid from '../components/bounty-grid'
import GlobeSection from '../components/globe-section'
import StatsGrid from '../components/stats-grid'
import AgentGrid from '../components/agent-grid'
import { PlaySquare, Code, Image, Users, Megaphone, PenToolIcon as Tool, Clipboard } from 'lucide-react'
import { cards } from '@/data/cards-data'
import videos from '@/data/videos-data'

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <main>
        <Hero />
        <StatsGrid />
        <BountyGrid />
        <VideoGrid 
          title="Feburary '25 Posthoc Creator Awards"
          description="The COTI WAGMI Commity found and awarded these COTI creatives who are sharing important content in the wild."
          videos={videos}
        />
        <AgentGrid />
        <CardGrid
          title="Add powerful tools to your automations in minutes"
          description="Our robust toolkit is the easiest way to add multiple new capabilities to your AI solutions."
          cards={cards}
        />
        {/* <GlobeSection /> */}
      </main>
    </div>
  )
}

