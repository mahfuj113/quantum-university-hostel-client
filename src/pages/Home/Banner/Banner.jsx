import banner1 from "../../../assets/images/banner/university1.jpg";
import banner2 from "../../../assets/images/banner/banner2.jpg";
import banner3 from "../../../assets/images/banner/banner3.jpg";
import banner4 from "../../../assets/images/banner/banner4.jpg";
// import Swiper from 'swiper';
// import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img className="w-full h-[700px]" src={banner1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[700px]" src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[700px]" src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-[700px]" src={banner4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
