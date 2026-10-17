import { MainNav } from "./MainNav";
import { Marquee } from "./Marquee";
import { TopHeader } from "./TopHeader";

export function SiteHeader() {
  return (
    <header className="w-full min-w-0 overflow-x-hidden">
      <TopHeader />

      <div className="sticky top-0 z-40 w-full min-w-0">
        <MainNav />
        <Marquee />
      </div>
    </header>
  );
}