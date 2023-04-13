import Link from "next/link";
import { menu } from "~/utils/data";

const MainMenu = () => {
  return (
    <>
      <nav className="hidden gap-4 md:flex">
        {menu.map((i) => (
          <Link
            key={i.id}
            className="transition-colors duration-100 ease-linear hover:text-outrageous-orange-900"
            href={i.link}
          >
            {i.name}
          </Link>
        ))}
      </nav>
      <div className="hidden items-center gap-6 md:flex">
        {/* <Link
          className="rounded py-1 text-outrageous-orange-900 hover:text-outrageous-orange-900"
          href="/en"
        >
          English (EN)
        </Link> */}
        <Link
          className="rounded border border-outrageous-orange-900 bg-outrageous-orange-900 px-5 py-1 text-white shadow-md hover:bg-outrageous-orange-900 hover:shadow-none"
          href="/signin"
        >
          Sign In
        </Link>
      </div>
    </>
  );
};

export default MainMenu;
