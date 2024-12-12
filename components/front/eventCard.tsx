"use client";
import Image from "next/image";
import { Play, Download } from "lucide-react";

interface Event {
  id: number;
  artist: string;
  venue: string;
  date: string;
  price: number;
  image: string;
  musicLink: string;
  duration: string;
  views: number;
  explicit?: boolean;
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="group flex items-center gap-4 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
      <div className="text-sm text-gray-400 w-6 text-center">{event.id}</div>
      <div className="relative w-10 h-10">
        <Image
          src={event.image}
          alt={event.artist}
          fill
          className="object-cover rounded"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center">
          <Play size={16} className="text-green-600" />
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <span className="font-medium text-green-600">{event.artist}</span>
          {event.explicit && (
            <span className="px-1 text-xs bg-gray-600 rounded">E</span>
          )}
        </div>
        <div className="text-sm text-gray-400">{event.venue}</div>
      </div>
      <div className="text-sm text-gray-400">{event.views}</div>
      <div className="text-sm text-gray-400 w-12 text-right">
        {event.duration}
      </div>
      <button
        className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/20 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          // Add download logic here
          console.log(`Downloading ${event.artist} - ${event.venue}`);
        }}
      >
        <Download size={16} className="text-green-600" />
      </button>
    </div>
  );
}
