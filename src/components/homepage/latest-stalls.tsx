import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { latest_stalls } from "~/utils/data";

const LatestStalls = () => {
  const swiperSettings = {
    breakpoints: {
      0: { slidesPerView: 2.1, spaceBetween: 8 },
      768: { slidesPerView: 4, spaceBetween: 16 },
    },
  };

  return (
    <section className="mx-auto max-w-6xl px-4 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="mb-3 text-xl md:text-2xl">Latest Stalls</h1>
        <Link className="text-outrageous-orange-900" href="/#listings">
          View all
        </Link>
      </div>
      <Swiper {...swiperSettings}>
        {latest_stalls.map((i) => (
          <SwiperSlide key={i.id}>
            <div className="flex h-full w-full flex-col text-sm text-zinc-500">
              <div className="flex h-60 w-full items-center justify-center rounded bg-zinc-200">
                Image Here
              </div>
              <div className="py-2">{i.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LatestStalls;
