import { MainNav } from "./MainNav";
import { Marquee } from "./Marquee";
import { TopHeader } from "./TopHeader";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      <div className="hidden lg:block">
        <TopHeader />
      </div>
      <MainNav />
      <Marquee />
    </header>
  );
}

export { TopHeader };
