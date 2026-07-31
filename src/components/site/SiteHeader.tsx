import { MainNav } from "./MainNav";
import { Marquee } from "./Marquee";
import { TopHeader } from "./TopHeader";

export function SiteHeader() {
  return (
    <>
      <TopHeader />
      <header className="sticky top-0 z-40">
        <MainNav />
        <Marquee />
      </header>
    </>
  );
}
