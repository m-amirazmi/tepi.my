import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

const Announcement = () => {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-6">
        <div className="flex w-full flex-col items-center justify-between gap-4 rounded bg-outrageous-orange-100 px-6 py-4 md:flex-row">
          <p>
            Join us and share any road side stalls you have visited here! Let
            others have the same experience with yours.
          </p>
          <Link
            className="ml-auto flex w-full items-center justify-start gap-2 text-outrageous-orange-900 hover:text-outrageous-orange-900/70 md:w-auto"
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
  );
};

export default Announcement;
