import Link from "next/link";
import MobileMenu from "./mobile-menu";
import MainMenu from "./main-menu";

const Header = () => {
  return (
    <header className="fixed w-full bg-white text-zinc-700 shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <Link href="/" className="text-xl font-semibold tracking-wider">
          <span>TEPI</span>
          <span className="text-outrageous-orange-800">.MY</span>
        </Link>
        <MainMenu />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
