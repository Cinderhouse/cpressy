'use client'

import { useState } from 'react'
import { Coins } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { connectWallet } from '../utils/wallet'

function VideoEmbed({ url, title }) {
  const getVideoId = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
      return match ? match[1] : null;
    } else if (url.includes('tiktok.com')) {
      const match = url.match(/video\/(\d+)/);
      return match ? match[1] : null;
    }
    return null;
  }

  const videoId = getVideoId(url)

  if (!videoId) return null

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      className="w-full aspect-video rounded-lg"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

function TipModal({ open, onOpenChange, creatorName }) {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    const result = await connectWallet();
    setIsConnecting(false);
    if (result && result.address) {
      setWalletAddress(result.address);
    }
  };

  const formatAddress = (address) => {
    const start = address.slice(0, 6);
    const end = address.slice(-4);
    const middle = Array.from({length: 6}, () => ['🚀', '💎', '🌟', '🔥'][Math.floor(Math.random() * 4)]).join('');
    return `${start}${middle}${end}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Tip {creatorName}
          </DialogTitle>
        </DialogHeader>
        
        {!walletAddress ? (
          <Button onClick={handleConnectWallet} className="w-full mt-4" disabled={isConnecting}>
            {isConnecting ? 'Connecting...' : 'Connect Wallet to Tip'}
          </Button>
        ) : (
          <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg mt-4 text-white">
            <p className="text-lg font-bold mb-2">Wallet Connected! 🎉</p>
            <p className="font-mono">
              {formatAddress(walletAddress)}
            </p>
            <p className="mt-4">
              Ready to send tip to {creatorName}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default function VideoGrid({ title, description, videos }) {
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [isTipModalOpen, setIsTipModalOpen] = useState(false);

  const handleTipClick = (creatorName) => {
    setSelectedCreator(creatorName);
    setIsTipModalOpen(true);
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <VideoEmbed url={video.url} title={video.title} />
              <div className="p-4">
                <h3 className="font-semibold mb-2 text-base sm:text-lg">{video.title}</h3>
                {video.description && (
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">{video.description}</p>
                )}
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="flex items-center text-sm font-medium text-gray-700">
                    <Coins className="w-4 h-4 mr-1.5 text-yellow-500" />
                    Award: ${video.award}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleTipClick(video.title)}
                    className="text-sm"
                  >
                    Tip Creator
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TipModal 
        open={isTipModalOpen}
        onOpenChange={setIsTipModalOpen}
        creatorName={selectedCreator}
      />
    </section>
  )
}

