import React from "react";
import InfoItem from "../InfoItem/index.tsx";
import PackageModal from "../../common/ModalWindows/PackageInfoModal/index.tsx";
import ButtonWithBorder from "../../common/Buttons/ButtonWithBorder/index.tsx";

// Types
type Props = {
  props: any;
  children?: any;
  callback?: () => void;
};

const PurchasedEsim: React.FC<Props> = ({ props }) => {
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
          className="sim-item theme-light"
          style={{ background: "linear-gradient(90deg, #d00423 0, #ed0425)" }}
        >
          <div className="sim-item-header tw-relative">
            <div className="sim-item-header-info">
              <p data-testid="operator-title" className="operator-title">
                {props.operator.title}
              </p>
            </div>
          </div>

          <div className="sim-item-info">
            <ul className="sim-item-list">
              <InfoItem name={"ICCID"} value={props.iccid} />

              <InfoItem name={"COVERAGE"} value={props.operator.countries} />
              {/* <InfoItem name={"REMAINING DATA"} value={props.status} /> //?????????*/}

              {/* <InfoItem name={"DATA"} value={props.data} /> */}
              {props?.voice && (
                <InfoItem name={"CALLS"} value={props.voice + " Mins"} />
              )}
              {props?.text && (
                <InfoItem name={"TEXTS"} value={props.text + " SMS"} />
              )}
              {/* <InfoItem name={"VALIDITY"} value={props.validity} /> */}
              {/* <InfoItem name={"PRICE"} value={"US $" + props.price} /> */}
            </ul>
          </div>

          <div className="sim-item-bottom">
            <ButtonWithBorder text={'Details'}/>
          </div>
        </div>
      </div>
      {/* {isOpen && <PackageModal props={props} isOpen={isOpen} onClose={closeModal} />} */}
    </React.Fragment>
  );
};

export default PurchasedEsim;
