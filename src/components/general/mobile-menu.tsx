import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import { menu } from "~/utils/data";

const MobileMenu = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!toggleMobileMenu && !animate) return;
    if (toggleMobileMenu && !animate) setAnimate(true);
    else if (!toggleMobileMenu && animate) {
      setTimeout(() => setAnimate(false), 500);
    }
  }, [toggleMobileMenu]);

  return (
    <div className="relative md:hidden">
      <div
        className="cursor-pointer text-3xl transition-colors duration-100 ease-linear hover:text-outrageous-orange-400"
        onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
      >
        <HiBars3 />
      </div>
      <div
        className={`${
          toggleMobileMenu
            ? "animate-menu-slide-in"
            : animate
            ? "animate-menu-slide-out"
            : "hidden"
        } mobile-menu fixed right-0 top-0 h-screen w-screen bg-white`}
      >
        <div className="flex px-4 py-5">
          <div
            className="ml-auto cursor-pointer text-3xl transition-colors duration-100 ease-linear hover:text-outrageous-orange-400"
            onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
          >
            <HiOutlineXMark />
          </div>
        </div>
        {/* <nav className="flex h-full w-full flex-col items-center justify-center gap-6 pb-20 text-xl">
          {menu.map((i) => (
            <Link
              key={i.id}
              className="block w-full text-center transition-colors duration-100 ease-linear hover:text-outrageous-orange-800"
              href={i.link}
            >
              {i.name}
            </Link>
          ))}
          <div className="mt-6 flex w-full flex-col items-center gap-6 px-4 text-xl">
            <Link
              className="block w-full rounded py-1 text-center text-outrageous-orange-800 hover:text-outrageous-orange-900"
              href="/en"
            >
              English (EN)
            </Link>
            <Link
              className="block w-full rounded border border-outrageous-orange-800 bg-outrageous-orange-800 px-8 py-4 text-center text-white shadow-md hover:bg-outrageous-orange-900 hover:shadow-none"
              href="/signin"
            >
              Sign In
            </Link>
          </div>
        </nav> */}
      </div>
    </div>
  );
};

export default MobileMenu;
