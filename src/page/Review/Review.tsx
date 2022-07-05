import React from "react";
import { data } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import style from "./Review.module.scss";

export default function Review() {
  return (
    <>
      <div className={style.review}>
        <h1 className={style.title}>
          client's <span>review</span>
        </h1>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          effect="fade"
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            250: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
          }}
        >
          {data.map((el, i) => {
            return (
              <SwiperSlide key={i}>
                <div className={style.slide}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequuntur veniam deserunt praesentium natus quibusdam ea
                    nam commodi.
                  </p>
                  <div className={style.user}>
                    <img src={el.img} alt="photo" />
                    <div className={style.info}>
                      <h3>john deo</h3>
                      <span>happy client</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
