import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { EffectFade } from "swiper";
import "swiper/scss/effect-fade";

export default function Review() {
  return (
    // <Swiper modules={[EffectFade]} effect="fade">
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {[1, 2, 3, 5].map((i, el) => {
        return (
          <SwiperSlide>
            Slide{el}
            <img src="image/blog-1.jpg" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
