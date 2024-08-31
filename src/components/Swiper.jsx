import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "./Swiper.css";
import jhabarImg from "../assets/image/jhabar.webp";
import lalchandImg from "../assets/image/lalchand.webp";
import laxmanImg from "../assets/image/laxman.webp";

function swiper() {
  const pagination = {
    clickable: true,
  };
  return (
    <>
      <Swiper
        navigation={true}
        pagination={pagination}
        modules={[Navigation, Pagination]}
        className="mySwiper py-14"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center m-auto w-full md:max-w-[800px] mx-4 rounded-lg p-9 shadow-[0_0px_60px_rgba(59,130,246,0.6)] cursor-grab">
            <img
              className="shrink-0 md:w-[180px] md:h-[180px] w-[130px] h-[130px] rounded-full drop-shadow-[0_0px_60px_rgba(59,130,246,1)]"
              src={jhabarImg}
              alt="jhabarImg"
            />
            <div className="ml-6 text-left pt-6 md:pt-12 relative">
              <p className="text-sm md:text-base mb-2">
                “Gokul Kumar is a talented, committed individual who will leave
                no stone unturned in his pursuit to provide with the best. His
                attention to detail and in-depth experience in the of web
                development is indeed commendable. He has exhibited exemplary
                skills in the field, and I hope to see all the great projects
                coming up!”
              </p>
              <h2 className="text-right text-[rgb(59,130,246)] font-bold text-2xl md:text-4xl pt-2">
                Jhabar Mal Saini
              </h2>
              <h5 className="text-right text-[rgb(59,130,246)] text-base md:text-lg">
                Founder, Bookstore
              </h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center m-auto w-full md:max-w-[800px] mx-4 rounded-lg p-9 shadow-[0_0px_60px_rgba(59,130,246,0.6)] cursor-grab">
            <img
              className="shrink-0  md:w-[180px] md:h-[180px] w-[130px] h-[130px] rounded-full drop-shadow-[0_0px_60px_rgba(59,130,246,1)]"
              src={lalchandImg}
              alt="lalchandImg"
            />
            <div className="ml-6 text-left pt-6 md:pt-12 relative">
              <p className="text-sm md:text-base mb-2">
                “Gokul Kumar was a wonderful developer to work with! He
                anticipated everything I need to consider for my website. He
                also went the extra mile and added details that I hadn&#39;t
                considered! He is helping my business grow, and I will
                definitely work with him again!”
              </p>
              <h2 className="text-right text-[rgb(59,130,246)] font-bold text-2xl md:text-4xl">
                Lal Chand
              </h2>
              <h5 className="text-right text-[rgb(59,130,246)] text-base md:text-lg">
                Founder, Constraction
              </h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center m-auto w-full md:max-w-[800px] mx-4 rounded-lg p-9 shadow-[0_0px_60px_rgba(59,130,246,0.6)] cursor-grab">
            <img
              className="shrink-0  md:w-[180px] md:h-[180px] w-[130px] h-[130px] rounded-full drop-shadow-[0_0px_60px_rgba(59,130,246,1)]"
              src={laxmanImg}
              alt="laxmanImg"
            />
            <div className="ml-6 text-left pt-6 md:pt-12 relative">
              <p className="text-sm md:text-base mb-2">
                “I worked with Gokul Kumar to make my website. I am speechless
                by looking at his work ethic and dedication. Working with him
                was the best decision I made.”
              </p>
              <h2 className="text-right text-[rgb(59,130,246)] font-bold text-2xl md:text-4xl">
                Laxman Katariya
              </h2>
              <h5 className="text-right text-[rgb(59,130,246)] text-base md:text-lg">
                Founder, Goshala
              </h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default swiper;
