import Footer from "@/components/front/footer";
import Header from "@/components/front/header";
import MusicPlayer from "@/components/front/musicPlayer";
import React, { ReactNode } from "react";

export default function FeontLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main className="flex-grow">{children}</main>
      <MusicPlayer />
      <Footer />
    </div>
  );
}
