import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { stall_categories } from "~/utils/data";

const StallCategories = () => {
  const swiperSettings = {
    breakpoints: {
      0: { slidesPerView: 3.1, spaceBetween: 0 },
      768: { slidesPerView: 7, spaceBetween: 6 },
    },
  };

  return (
    <section className="mx-auto max-w-6xl pt-6">
      <h1 className="mb-3 px-4 text-xl md:text-2xl">Stall Categories</h1>
      <div className="px-2">
        <Swiper {...swiperSettings}>
          {stall_categories.map((i) => (
            <SwiperSlide key={i.id}>
              <div className="pb-2 pl-2">
                <Link
                  href="/?"
                  className="flex w-full cursor-pointer items-center justify-center rounded bg-zinc-200 p-2 text-zinc-500 shadow hover:bg-zinc-200/50 hover:shadow-none"
                >
                  {i.name}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StallCategories;
