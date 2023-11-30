import banner1 from "../../../assets/images/banner/university1.jpg";
import banner2 from "../../../assets/images/banner/banner2.jpg";
import banner3 from "../../../assets/images/banner/banner3.jpg";
import banner4 from "../../../assets/images/banner/banner4.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        // spaceBetween={30}
        // centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Navigation]}
        // modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[700px]" src={banner1} alt="" />
            <div className="absolute top-[50%] translate-x-[50%] text-white">
              <h1 className="mb-10 text-5xl font-bold">
                Where Comfort Meets Community
              </h1>
              <p className="pb-4">
                Find the perfect job that matches your skills and
                aspirations.Browse through a wide range of <br /> job
                opportunities from top companies.Apply for jobs in various
                categories and locations.Get started on your career journey
                today.
              </p>
              <input
                type="text"
                className="h-[47px] w-[360px] text-black focus:outline-none md:rounded-l-lg pl-3"
                placeholder="Search here...."
              />
              <button className="bg-[#FF444A] px-7 py-3 rounded-lg md:rounded-l-none md:rounded-r-lg text-base font-semibold text-[#FFF]">
                Search
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[700px]" src={banner2} alt="" />
            <div className="absolute top-[50%] translate-x-[50%] text-white">
              <h1 className="mb-10 text-5xl font-bold">
                Where Comfort Meets Community
              </h1>
              <p className="pb-4">
                Find the perfect job that matches your skills and
                aspirations.Browse through a wide range of <br /> job
                opportunities from top companies.Apply for jobs in various
                categories and locations.Get started on your career journey
                today.
              </p>
              <input
                type="text"
                className="h-[47px] w-[360px] text-black focus:outline-none md:rounded-l-lg pl-3"
                placeholder="Search here...."
              />
              <button className="bg-[#FF444A] px-7 py-3 rounded-lg md:rounded-l-none md:rounded-r-lg text-base font-semibold text-[#FFF]">
                Search
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[700px]" src={banner3} alt="" />
            <div className="absolute top-[50%] translate-x-[50%] text-white">
              <h1 className="mb-10 text-5xl font-bold">
                Where Comfort Meets Community
              </h1>
              <p className="pb-4">
                Find the perfect job that matches your skills and
                aspirations.Browse through a wide range of <br /> job
                opportunities from top companies.Apply for jobs in various
                categories and locations.Get started on your career journey
                today.
              </p>
              <input
                type="text"
                className="h-[47px] w-[360px] text-black focus:outline-none md:rounded-l-lg pl-3"
                placeholder="Search here...."
              />
              <button className="bg-[#FF444A] px-7 py-3 rounded-lg md:rounded-l-none md:rounded-r-lg text-base font-semibold text-[#FFF]">
                Search
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-[700px]" src={banner4} alt="" />
            <div className="absolute top-[50%] translate-x-[50%] text-white">
              <h1 className="mb-10 text-5xl font-bold">
                Where Comfort Meets Community
              </h1>
              <p className="pb-4">
                Find the perfect job that matches your skills and
                aspirations.Browse through a wide range of <br /> job
                opportunities from top companies.Apply for jobs in various
                categories and locations.Get started on your career journey
                today.
              </p>
              <input
                type="text"
                className="h-[47px] w-[360px] text-black focus:outline-none md:rounded-l-lg pl-3"
                placeholder="Search here...."
              />
              <button className="bg-[#FF444A] px-7 py-3 rounded-lg md:rounded-l-none md:rounded-r-lg text-base font-semibold text-[#FFF]">
                Search
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
