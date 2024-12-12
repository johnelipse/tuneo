"use client";

import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Download } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-md text-white py-4 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-green-600 hover:bg-green-600 transition-colors">
            <SkipBack size={20} />
          </button>
          <button
            className="p-3 rounded-full bg-green-600 hover:bg-green-600 transition-colors"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button className="p-2 rounded-full bg-green-600 hover:bg-green-600 transition-colors">
            <SkipForward size={20} />
          </button>
        </div>
        <div className="flex-grow mx-8">
          <Slider
            defaultValue={[0]}
            max={100}
            step={1}
            className="[&>span:first-child]:bg-green-600 [&_[role=slider]]:bg-green-600"
          />
        </div>
        <div className="">
          <button
            className="group-hover:opacity-100 transition-opacity p-2 hover:bg-white/20 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              // Add download logic here
            }}
          >
            <Download size={25} className="text-green-600 bg-re" />
          </button>
        </div>
      </div>
    </div>
  );
}
