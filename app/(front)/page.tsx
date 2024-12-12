import SearchBar from "@/components/front/searchBar";
import EventList from "@/components/front/eventList";
import AnimatedBackground from "@/components/front/animatedBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Discover Music Events & Tracks
        </h1>
        <SearchBar />
        {/* <FilterSystem /> */}
        <EventList />
      </div>
    </div>
  );
}
