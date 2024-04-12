import React from "react";
import InfoItem from "../../Product/InfoItem/index.tsx";
import { Package } from "../../../API/API.tsx";
import TopupSlider from "../Slider/index.tsx";
import Modal from "@mui/material/Modal";

//Icons
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GradingIcon from "@mui/icons-material/Grading";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import AddCardIcon from "@mui/icons-material/AddCard";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LteMobiledataIcon from "@mui/icons-material/LteMobiledata";

//Styles
import "./modalWindow.scss";

type Props = {
  props: Package;
  isOpen: boolean;
  onClose: () => void;
};

const SearchCountry = ({ searchArray, callback }) => {
  const [searchVal, setSearchVal] = React.useState("");
  const handleInput = (e) => {
    setSearchVal(e.target.value);
    const filteredProducts = searchArray.filter((country) => {
      return (
        country.title.toLowerCase().includes(searchVal) ||
        country.slug.toLowerCase().includes(searchVal)
      );
    });
    callback(filteredProducts);
  };

  return (
    <div className="country-list-search-container">
      <span className="icon search">
        <SearchIcon color="action" />
      </span>
      <input
        onChange={handleInput}
        value={searchVal}
        placeholder="Country Name"
        data-testid="country-list-search-input"
        type="text"
        className="country-list-search w-100"
      />
    </div>
  );
};

const SupportedCountries = ({ props }) => {
  const [countries, setCountries] = React.useState(props.operator.countries);

  return (
    <div className="c--shared_country-list country-list-wrapper type-inline">
      <div className="country-list-header mb-20">
        <p className="title-sub">Supported Countries</p>
      </div>
      <div className="country-list-container">
        <div className="card c--card-boxes_box-type-simple box-type-shadow-card w-100 type-normal shadowed box-rounded">
          {props.operator.countries.length > 1 && (
            <SearchCountry
              searchArray={props.operator.countries}
              callback={setCountries}
            />
          )}

          <ul className="country-list">
            {countries.map((country, id) => {
              return (
                <li key={country.slug}>
                  <div className="c--shared_country-name-in-flag d-flex align-items-center country-name flex-row-reverse justify-content-between">
                    <div className="flag country-list-item">
                      <img
                        src={country.image.url}
                        alt={country.slug}
                        width="37"
                        height="27.75"
                        className="lazyLoad isLoaded"
                      />
                    </div>
                    <p>{country.title}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const AdditionalInfo = ({ otherInfo }) => {
  return (
    <div className="c--sim_additional-information additional-information-wrapper">
      <div className="additional-information-header mb-20">
        <p className="title-sub">Additional Information</p>
      </div>
      <div className="additional-information-container">
        <div className="card c--card-boxes_box-type-simple box-type-shadow-card w-100 type-normal shadowed box-rounded">
          <ul className="additional-information">
            <li className="item-network-modal">
              <div className="additional-information-item">
                <div className="info-icon">
                  <SignalCellularAltIcon />
                </div>
                <div className="info-content">
                  <p className="info-title">NETWORK</p>
                  <p className="info-network-list">
                    <span>
                      <span dir="auto">Cellfie</span>
                      <span>
                        <LteMobiledataIcon fontSize="small" />
                      </span>
                    </span>
                  </p>
                </div>
                <div className="info-right-icon">
                  <span className="right-icon d-flex">
                    <InfoOutlinedIcon id="networks-info" fontSize="small" />
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="additional-information-item">
                <div className="info-icon">
                  <ListAltIcon />
                </div>
                <div className="info-content">
                  <p className="info-title">PLAN TYPE</p>
                  <p className="info-text">Data Only</p>
                </div>
                <div className="info-right-icon">
                  <InfoOutlinedIcon id="plan-type-info" fontSize="small" />
                </div>
              </div>
            </li>
            <li>
              <div className="additional-information-item">
                <div className="info-icon">
                  <GradingIcon />
                </div>
                <div className="info-content">
                  <p className="info-title">ACTIVATION POLICY</p>
                  <p className="info-text">
                    The validity period starts when the eSIM connects to any
                    supported network/s.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="additional-information-item">
                <div className="info-icon">
                  <FingerprintIcon />
                </div>
                <div className="info-content">
                  <p className="info-title">eKYC (IDENTITY VERIFICATION)</p>
                  <p className="info-text">Not Required</p>
                </div>
                <div className="info-right-icon"> </div>
              </div>
            </li>
            <li>
              <div className="additional-information-item">
                <div className="info-icon">
                  <AddCardIcon />
                </div>
                <div className="info-content">
                  <p className="info-title">TOP-UP OPTION</p>
                  <p className="info-text">Available</p>
                </div>
              </div>
            </li>
            {otherInfo && (
              <li>
                <div className="additional-information-item">
                  <div className="info-icon">
                    <InfoOutlinedIcon />
                  </div>
                  <div className="info-content">
                    <p className="info-title">OTHER INFO</p>
                    <p className="info-text">{otherInfo}</p>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PackageModal: React.FC<Props> = ({ props, isOpen, onClose }) => {
  const handleClose = (event, reason) => {
    if (reason === "backdropClick") {
      onClose();
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="package-detail-wrapper-inner">
        <div className="package-detail modal">
          <div className="c--sim_detail sim-detail theme-light">
            <div
              className="sim-detail-header"
              style={{
                background: "linear-gradient(90deg,#d00423 0,#ed0425)",
              }}
            >
              <CancelIcon
                onClick={onClose}
                className="sim-detail-close tw-text-white"
              />
              <div className="sim-detail-operator">
                <p>{props.operator.title}</p>
                <div></div>
              </div>
              <div className="sim-detail-top">
                <div className="sim-detail-image">
                  <img
                    src={props.operator.image.url}
                    width="335"
                    alt=""
                    className="lazyLoad isLoaded"
                  />
                </div>
                <div className="sim-detail-info tw-relative">
                  <ul className="sim-detail-info-list">
                    <InfoItem
                      name={"COVERAGE"}
                      value={props.operator.countries}
                    />
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
              </div>
            </div>
            <div className="sim-detail-content">
              <div>
                <TopupSlider operatorId={props.operator.id} />
              </div>
              <div className="d-grid grid-cols-1 grid-cols-sm-2 gap-30 mt-35 mt-sm-40 mb-40">
                <div>
                  <SupportedCountries props={props} />
                </div>
                <div>
                  <AdditionalInfo otherInfo={props.operator.other_info} />
                </div>
              </div>
            </div>
            <div className="sim-detail-bottom">
              <div className="tw-flex tw-flex-row tw-gap-7.5">
                <div className="tw-hidden sm:tw-flex tw-flex-row tw-w-1/2">
                  <div className="tw-flex tw-items-center tw-grow tw-text-7 tw-font-semibold tw-text-primary tw-justify-start">
                    {"US $" + props.price}
                  </div>
                </div>
                <div className="tw-flex sm:tw-hidden tw-flex-row tw-w-1/2">
                  <div className="tw-flex tw-items-center tw-grow tw-text-7 tw-font-semibold tw-text-primary tw-justify-start">
                    {"US $" + props.price}
                  </div>
                </div>
                <div className="tw-w-1/2">
                  <button
                    type="button"
                    className="btn topup-package-price-btn tw-font-semibold tw-text-4.5 tw-leading-4 tw-py-4 btn-secondary btn-block"
                  >
                    BUY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PackageModal;
