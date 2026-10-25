import { MainNav } from "./MainNav";
import { Marquee } from "./Marquee";
import { TopHeader } from "./TopHeader";

export function SiteHeader() {
  return (
    <>
      <div className="sticky top-0 z-[60] w-full min-w-0">
        <TopHeader />
        <MainNav />
      </div>
      <Marquee />
    </>
  );
}
