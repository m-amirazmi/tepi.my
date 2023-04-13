import { type NextPage } from "next";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

const Home: NextPage = () => {
  return (
    <>
      <section className="w-full">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex w-full items-center justify-between gap-4 rounded bg-outrageous-orange-200/40 px-6 py-4">
            <p className="">
              Join us and share any road side stalls you have visited here! Let
              others have the same experience with yours.
            </p>
            <Link
              className="flex items-center gap-2 text-outrageous-orange-900 hover:text-outrageous-orange-900/70"
              href="/"
            >
              <span>Share stalls</span>
              <span className="text-xl">
                <HiArrowLongRight />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
