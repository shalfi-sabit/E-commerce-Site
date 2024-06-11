import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
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
        modules={[Pagination]}
        slidesPerView={1}
        className=""
      >
        <SwiperSlide>
          <CarouselImageContainer
            productName="iPhone 14 Series"
            title="Up to 10% off Voucher"
            imageSource={sliderImageOne}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImageContainer
            productName="Samsung Super Ultrawide Screen QLED"
            title="Up to 10% off Voucher"
            imageSource={sliderImageTwo}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImageContainer
            productName="Solid Gold Petite Micropave"
            title="Up to 10% off Voucher"
            imageSource={sliderImageThree}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
