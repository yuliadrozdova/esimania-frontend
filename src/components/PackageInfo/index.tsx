import React from "react";
import "./packageInfo.scss";
import PackageModal from "../ModalWindow/index.tsx";
import InfoItem from "../InfoItem/index.tsx";
import { Package } from "../../API/API.tsx";
import BuyButton from "../Button/buyButton.tsx";

// Types
type Props = {
  props: Package;
  children?: any;
  callback?: () => void;
};

const PackageInfo: React.FC<Props> = ({ props }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <div style={{ cursor: "pointer" }} onClick={openModal}>
        <div
          className="c--sim_item sim-item theme-light"
          style={{ background: "linear-gradient(90deg, #d00423 0, #ed0425)" }}
        >
          <div className="sim-item-header tw-relative">
            <div className="sim-item-header-info">
              <p data-testid="operator-title" className="operator-title">
                {props.operator.title}
              </p>
            </div>
            <div className="sim-item-image">
              <img
                src={props.operator.image.url}
                width="140"
                alt={props.operator.title}
                className="lazyLoad"
              />
            </div>
          </div>

          <div className="sim-item-info">
            <ul className="sim-item-list">
              <InfoItem name={"COVERAGE"} value={props.operator.countries} />
              <InfoItem name={"DATA"} value={props.data} />
              {props?.voice && (
                <InfoItem name={"CALLS"} value={props.voice + " Mins"} />
              )}
              {props?.text && (
                <InfoItem name={"TEXTS"} value={props.text + " SMS"} />
              )}
              <InfoItem name={"VALIDITY"} value={props.validity} />
              <InfoItem name={"PRICE"} value={"US $" + props.price} />
            </ul>
          </div>

          <div className="sim-item-bottom">
            <BuyButton />
          </div>
        </div>
      </div>
      <PackageModal props={props} isOpen={isOpen} onClose={closeModal} />
    </React.Fragment>
  );
};

export default PackageInfo;
