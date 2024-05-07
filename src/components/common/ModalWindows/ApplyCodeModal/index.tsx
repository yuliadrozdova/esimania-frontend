import React from "react";
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

//Styles
import './../../ModalWindows/modalWindow.scss';

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


const ApplyCodeModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const handleClose = (event, reason) => {
    if (reason === "backdropClick") {
      onClose();
    }
  };
  // console.log(props);
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <div className="modal-dialog modal-general modal-dialog-centered"><span></span>
  <div id="payment-33899454-code-or-airmoney-modal___BV_modal_content_" className="modal-content">
    <div id="payment-33899454-code-or-airmoney-modal___BV_modal_body_" className="modal-body">
      <div  dir="ltr" className="c--modals_general-modal modal-general-close"><button 
          type="button" className="btn"><span  data-testid="close-button"
            className="airalo-icon-close-round-filled tw-text-5.5 tw-text-neutral-600"></span></button></div>
      <div 
        className="general-item-wrapper relative tw-flex tw-flex-col tw-h-full tw-w-full tw-pt-10 height-unset"
        style={{minHeight: "540px;"}}>
        <div  data-testid="Apply Code / Use Airmoney-title" className="general-item-wrapper-header mb-20">
          <p >Apply Code / Use Airmoney</p>
        </div>
        <div 
          className="c--checkout_apply-code-use-airmoney payment-apply-use-wrapper pb-40" checkout-id="33899454">
          <div  className="payment-apply-use-header px-20 mb-20">
            <p  className="title-sub">
              Apply Code
            </p>
            <p  className="title-sub-description">
              Please enter your discount or referral code to apply.
            </p>
          </div>
          <div  className="payment-apply-use-apply-form px-20">
            <form  className="">
              <div  className="payment-apply-use-row d-flex justify-content-between align-items-start">
                <div  className="payment-apply-use-input">
                  <div  className="mb-0">
                    <div  className="general-input">
                      {/* <div  className="field">
                        <input  id="discountReferralCode_input"
                          data-testid="discount-referral-code-input" name="discountReferralCode"
                          data-vv-validate-on="blur" type="text" className="input text-uppercase empty" aria-required="true"
                          aria-invalid="false"> <label  for="discountReferralCode"
                          data-testid="applied-code">Code</label></div>  */}
                    </div>
                  </div>
                </div>
                <div  className="payment-apply-use-input-button"><button  type="submit"
                    data-testid="apply-airmoney-button" className="button button-secondary block btn-primary-hv">
                    APPLY
                  </button></div>
              </div>
            </form>
          </div>
          <div  className="payment-apply-use-seperator mt-30 mb-30">
            <p >
              OR USE AIRMONEY
            </p>
          </div>
          <div  className="payment-apply-use-airmoney-wrapper px-20">
            <p  className="title-sub">
              Use Airmoney
            </p>
            {/* <p  className="title-sub-description">You have a total of 
            <span 
                place="amount">US $0.00</span> Airmoney in your wallet.</p> */}
            <div  className="insufficient-banner mt-20">
              <div  className="insufficient-banner-inner">
                <p  className="message">
                  You don’t have enough Airmoney for this purchase. The minimum Airmoney amount must be US$1.
                </p>
              </div>
              <div  className="insufficient-banner-image"><img 
                  src="https://cdn.airalo.com/assets/images/svg/ic_info_banner.svg?w=75&amp;h=75" width="75" height="75"
                  alt="" loading="lazy" /></div>
            </div>   
          </div>
        </div>
      </div>
    </div>
  </div><span ></span>
</div>
    </Modal>
  );
};

export default ApplyCodeModal;
