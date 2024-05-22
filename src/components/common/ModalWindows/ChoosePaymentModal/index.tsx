import React, { useState } from "react";
import InfoItem from "../../../Product/InfoItem/index.tsx";
import { Package } from "../../../../API/API.tsx";
import TopupSlider from "../../Slider/index.tsx";
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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//Styles
import "./../../ModalWindows/modalWindow.scss";
import "./choosePaymentModal.scss";

type Props = {
  // props: Package;
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
      <span className="package-icon search">
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

const stripeFrameStyles = {
  border: '0px',
  margin: '0px',
  padding: '0px',
  width: '1px',
  minWidth: '100%',
  overflow: 'hidden',
  display: 'block',
  userSelect: 'none',
  transform: 'translate(0px)',
  colorScheme: 'light only',
  height: '18px',
};

const ChoosePaymentMethodModal: React.FC<Props> = ({ isOpen, onClose }) => {
  // const[isChoosePaymentContent, setIsChoosePaymentContent] = useState(true);
  // const[isAddNewCardContent, setIsAddNewCardContent] = useState(false);


  const handleClose = (event, reason) => {
    if (reason === "backdropClick") {
      onClose();
    }
  };

  // const addPaymentCard = () => {
  //   setIsChoosePaymentContent(false);
  //   setIsAddNewCardContent(true);
  // };

  // const choosePaymentContent = () => {
  //   setIsChoosePaymentContent(true);
  //   setIsAddNewCardContent(false);
  // };
  // console.log(props);
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal-dialog modal-general modal-dialog-centered">
        <div className="modal-content ">
          <div className="modal-body mh-540">
            <div
              dir="ltr"
              className="c--modals_general-modal modal-general-close"
            >
              <CancelIcon onClick={onClose} className="sim-detail-close" />
            </div>

            <div
              className="general-item-wrapper relative tw-flex tw-flex-col tw-h-full w-full tw-pt-10 height-unset"
              // style={{ minHeight: "540px;" }}
            >
              <div className="c--checkout_choose-payment-method flex flex-column h-100">
                <div className="payment-choose-method-top-title mb-20">
                  <p className="flex justify-content-start align-items-center">
                    Choose Payment Method
                  </p>
                </div>
                <div className="payment-choose-method-wrapper pb-sm-40">
                  <div
                    className="steps animated"
                    style={{ transform: "translateX(0%);" }}
                  >
                    <div className="step">
                      <div className="payment-choose-method-header px-20 mb-20">
                        <p className="title-sub">Payment Methods</p>
                        <p className="title-sub-description">
                          Please select your payment method down below.
                        </p>
                      </div>
                      <div className="payment-choose-method-list grid grid-cols-1 gap-10 px-20">
                        <div
                          data-testid="payment-method-top-item-0"
                          className="payment-choose-method-item flex justify-content-center flex-column relative cursor-pointer"
                          // onClick={addPaymentCard}
                        >
                          <div className="method-title-row">
                            <span className="c--shared_icons icon-wrapper flex mr-15">
                            <img
                              className="stripe-logo"
                              alt=""
                              width="44"
                              height="28"
                              loading="lazy"
                            />
                          
                            </span>
                            <p
                              data-testid="Credit / Debit Card-option"
                              className="method-title"
                            >
                              <span>Credit / Debit Card</span>
                              <span className="method-title-subtitle">
                                Visa, Mastercard, AMEX, CUP, JCB
                              </span>
                            </p>
                          </div>
                      
                           <div data-testid="not-card-select" className="select">
                            <p>SELECT</p>
                          </div>
                        </div>
                        <div
                          data-testid="payment-method-top-item-1"
                          className="payment-choose-method-item flex justify-content-center flex-column relative cursor-pointer"
                        >
                          <div className="method-title-row">
                            <span className="c--shared_icons icon-wrapper flex mr-15">
                               <img
                              className="paypal-logo"
                              alt=""
                              width="44"
                              height="28"
                              loading="lazy"
                            />
                            </span>
                            <p
                              data-testid="PayPal-option"
                              className="method-title"
                            >
                              <span>PayPal</span>
                            </p>
                          </div>
                          <div data-testid="not-card-select" className="select">
                            <p>SELECT</p>
                          </div>
                        </div>
                        <div
                          data-testid="payment-method-top-item-2"
                          className="payment-choose-method-item flex justify-content-center flex-column relative cursor-pointer"
                        >
                          <div className="method-title-row">
                            <span className="c--shared_icons icon-wrapper flex mr-15">
         
                            <img
                              className="alipay-logo"
                              alt=""
                              width="44"
                              height="28"
                              loading="lazy"
                            />
                            </span>
                            <p
                              data-testid="Alipay-option"
                              className="method-title"
                            >
                              <span>Alipay</span>
                            </p>
                          </div>
                          <div data-testid="not-card-select" className="select">
                            <p>SELECT</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="step step-credit-cards"
                      style={{ display: "none;" }}
                    >
                      <div className="payment-choose-method-form grid grid-cols-1 gap-10 px-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>













          </div>
        </div>
        <span></span>
      </div>
    </Modal>
  );
};

export default ChoosePaymentMethodModal;





