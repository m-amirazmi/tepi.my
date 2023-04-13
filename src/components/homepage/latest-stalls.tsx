import { Swiper, SwiperSlide } from "swiper/react";
import { latest_stalls } from "~/utils/data";

const LatestStalls = () => {
  const swiperSettings = {
    breakpoints: {
      0: { slidesPerView: 2.25, spaceBetween: 8 },
      768: { slidesPerView: 4, spaceBetween: 16 },
    },
  };

  return (
    <section className="mx-auto max-w-6xl px-4 pt-6">
      <h1 className="mb-3 text-xl md:text-2xl">Latest Stalls</h1>
      <div className="h-52">
        <Swiper {...swiperSettings}>
          {latest_stalls.map((i) => (
            <SwiperSlide key={i.id}>
              <div className="flex h-full w-full flex-col text-sm text-zinc-500">
                <div className="flex h-full w-full items-center justify-center rounded bg-zinc-200">
                  Image Here
                </div>
                <div className="py-2">{i.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LatestStalls;
