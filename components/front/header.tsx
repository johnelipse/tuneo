import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black bg-opacity-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MusicDiscover
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/events"
                className="hover:text-purple-400 transition-colors"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/tracks"
                className="hover:text-purple-400 transition-colors"
              >
                Tracks
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className="hover:text-purple-400 transition-colors"
              >
                Account
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
