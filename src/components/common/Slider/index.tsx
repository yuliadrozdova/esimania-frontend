import * as React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import apiSettings, { TopapPackage } from "../../../API/API.tsx";
import InfoItem from "../../Product/InfoItem/index.tsx";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.scss";

function Slide({ props }) {
  return (
    <div data-testid="top-up-package" className="card-package-wrapper">
      <div
        className=" package-base tw-overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, rgb(208, 4, 35) 0px, rgb(237, 4, 37))",
        }}
      >
        <div className="package-base-header light">
          <p className="tx-center">{props.title}</p>
        </div>

        <ul className="package-base-list">
          <li>
            <InfoItem name={"DATA"} value={props.data} />
          </li>
          {props?.voice && (
            <li>
              <InfoItem name={"CALLS"} value={props.voice + " Mins"} />
            </li>
          )}
          {props?.text && (
            <li>
              <InfoItem name={"TEXTS"} value={props.text + " SMS"} />
            </li>
          )}
          <li>
            <InfoItem name={"VALIDITY"} value={props.validity} />
          </li>
          <li>
            <InfoItem name={"PRICE"} value={"US $" + props.price} />
          </li>
        </ul>
      </div>
    </div>
  );
}

const SwiperSlider = ({ data }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={2}
      pagination={{ clickable: true }}
    >
      {data?.map((pack, id) => {
        return (
          <div key={`slide-${pack?.slug}`}>
            <SwiperSlide>
              <Slide props={pack} />
            </SwiperSlide>
          </div>
        );
      })}
    </Swiper>
  );
};

function TopupSlider({ operatorId }) {
  const [packages, setPackages] = React.useState<TopapPackage[]>([]);

  const getPackages = async () => {
    const response: TopapPackage[] = await apiSettings.fetchAvailablePackages(
      operatorId
    );
    setPackages(response);
  };

  React.useEffect(() => {
    getPackages();
  }, []);

  if (packages?.length === 0) {
    return <></>;
  }

  return (
    <div className="sim-detail-available-packages-wrapper">
      <div
        data-testid="top-up-header"
        className="sim-detail-available-packages-header"
      >
        <p>
          Available Top-up Packages
          <span>({packages?.length})</span>
        </p>
      </div>
      <div className="sim-detail-available-packages">
        <div
          data-testid="top-up-carousel"
          className="-carousel swiper-card-package-carousel"
        >
          <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
            <SwiperSlider data={packages} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopupSlider;
