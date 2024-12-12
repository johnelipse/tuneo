import EventCard from "./eventCard";

const events = [
  {
    id: 1,
    artist: "Peru",
    venue: "Fireboy DML & Ed Sheeran",
    date: "2023-12-15",
    price: 45,
    image: "https://hrty.vercel.app/ZnR-gk",
    musicLink: "/tracks/peru.mp3",
    duration: "3:07",
    views: 344199661,
    explicit: true,
  },
  {
    id: 2,
    artist: "Last Last",
    venue: "Burna Boy",
    date: "2023-12-20",
    price: 55,
    image: "https://hrty.vercel.app/ZnR-gk",
    musicLink: "/tracks/last-last.mp3",
    duration: "2:52",
    views: 245678123,
    explicit: true,
  },
  {
    id: 3,
    artist: "Rush",
    venue: "Ayra Starr",
    date: "2023-12-25",
    price: 40,
    image: "https://hrty.vercel.app/ZnR-gk",
    musicLink: "/tracks/rush.mp3",
    duration: "3:05",
    views: 178453962,
    explicit: false,
  },
];

export default function EventList() {
  return (
    <div className="flex flex-col gap-2 mt-8 bg-black/20 rounded-lg p-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
