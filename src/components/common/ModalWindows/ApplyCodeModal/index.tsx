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
import "./../../ModalWindows/modalWindow.scss";

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
      <div className="modal-dialog modal-general modal-dialog-centered">
        <div className="modal-content ">
          <div className="modal-body mh-540">
            <div
              dir="ltr"
              className="c--modals_general-modal modal-general-close"
            >
              <CancelIcon onClick={onClose} className="sim-detail-close" />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
              <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                <h2 className="text-xl font-bold">Apply Code / Use Airmoney</h2>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Apply Code</h3>
                <p className="text-sm text-gray-500">
                  Please enter your discount or referral code to apply.
                </p>
                <div className="mt-2 flex">
                  <input
                    type="text"
                    placeholder="Code"
                    className="w-full p-2 border rounded-l-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button className="p-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-700">
                    APPLY
                  </button>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold">Use Airmoney</h3>
                <p className="text-sm text-gray-500">
                  You have a total of US $0.87 Airmoney in your wallet.
                </p>
                <div className="mt-2 bg-yellow-100 text-yellow-800 p-2 rounded-md flex items-center">
                  <span>
                    You don’t have enough Airmoney for this purchase. The
                    minimum Airmoney amount must be US $1.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ApplyCodeModal;
