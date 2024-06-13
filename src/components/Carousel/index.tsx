import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay CSS
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import sliderImageOne from "../../assets/images/slider/phone.png";
import sliderImageTwo from "../../assets/images/slider/monitor.png";
import sliderImageThree from "../../assets/images/slider/ring.png";
import "./index.css";
import CarouselImageContainer from "./CarouselImageContainer";

const Carousel: React.FC = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Set your desired interval in milliseconds
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        modules={[Pagination, Autoplay]} // Add Autoplay module
        slidesPerView={1}
        className=""
      >
        <SwiperSlide>
          <CarouselImageContainer
            productName="iPhone 14 Series"
            title="Up to 10% off Voucher"
            imageSource={sliderImageOne}
            to="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImageContainer
            productName="Samsung Super Ultrawide Screen QLED"
            title="Up to 10% off Voucher"
            imageSource={sliderImageTwo}
            to="/product/14"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImageContainer
            productName="Solid Gold Petite Micropave"
            title="Up to 10% off Voucher"
            imageSource={sliderImageThree}
            to="/product/6"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
