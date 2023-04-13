import { type NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";

const Home: NextPage = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!toggleMobileMenu && !animate) return;
    if (toggleMobileMenu && !animate) setAnimate(true);
    else if (!toggleMobileMenu && animate) {
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }
  }, [toggleMobileMenu]);

  return (
    <>
      <header className="w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <Link href="/" className="text-xl font-semibold tracking-wider">
            <span>TEPI</span>
            <span className="text-outrageous-orange-400">.MY</span>
          </Link>
          {/* Mobile Menu */}
          <div className="relative md:hidden">
            <div
              className="cursor-pointer text-3xl transition-colors duration-100 ease-linear hover:text-outrageous-orange-400"
              onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
            >
              <HiBars3 />
            </div>
            <div
              className={`${
                toggleMobileMenu ? "open" : animate ? "animate-close" : "close"
              } mobile-menu absolute -right-4 -top-5 h-screen w-screen bg-slate-50`}
            >
              <div className="flex px-4 py-5">
                <div
                  className="ml-auto cursor-pointer text-3xl transition-colors duration-100 ease-linear hover:text-outrageous-orange-400"
                  onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
                >
                  <HiOutlineXMark />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
