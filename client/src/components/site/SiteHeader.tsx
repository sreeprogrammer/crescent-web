import { MainNav } from "./MainNav";
import { Marquee } from "./Marquee";
import { TopHeader } from "./TopHeader";

export function SiteHeader() {
  return (
    <>
      <TopHeader />
      <MainNav />
      <Marquee />
    </>
  );
}
