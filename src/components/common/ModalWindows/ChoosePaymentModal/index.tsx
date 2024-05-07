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

const ChoosePaymentMethodModal: React.FC<Props> = ({ isOpen, onClose }) => {
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
        <span></span>
        <div
          id="payment-33894125-choose-payment___BV_modal_content_"
          className="modal-content"
        >
          <div
            id="payment-33894125-choose-payment___BV_modal_body_"
            className="modal-body"
          >
            <div
             
              dir="ltr"
              className="c--modals_general-modal modal-general-close"
            >
              <CancelIcon onClick={onClose} className="sim-detail-close" />
              {/* <button
          type="button" className="btn"><span data-testid="close-button"
            className="airalo-icon-close-round-filled tw-text-5.5 tw-text-neutral-600"></span></button> */}
            </div>
            <div
             
              className="general-item-wrapper relative tw-flex tw-flex-col tw-h-full tw-w-full tw-pt-10 height-unset"
              style={{ minHeight: "540px;" }}
            >
              <div
                className="c--checkout_choose-payment-method d-flex flex-column h-100"
              >
                <div
                  
                  className="payment-choose-method-top-title mb-20"
                >
                  <p
                    
                    className="d-flex justify-content-start align-items-center"
                  >
                    Choose Payment Method
                  </p>
                </div>
                <div
                  
                  className="payment-choose-method-wrapper pb-sm-40"
                >
                  <div
                    
                    className="steps animated"
                    style={{ transform: "translateX(0%);" }}
                  >
                    <div  className="step">
                      <div
                        
                        className="payment-choose-method-header px-20 mb-20"
                      >
                        <p  className="title-sub">
                          Payment Methods
                        </p>
                        <p  className="title-sub-description">
                          Please select your payment method down below.
                        </p>
                      </div>
                      <div
                        
                        className="payment-choose-method-list d-grid grid-cols-1 gap-10 px-20"
                      >
                        <div
                          
                          data-testid="payment-method-top-item-0"
                          className="payment-choose-method-item d-flex justify-content-center flex-column relative cursor-pointer"
                        >
                          <div  className="method-title-row">
                            <span
                              
                              className="c--shared_icons airalo-icon-wrapper display-flex mr-15"
                            >
                              <img
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgNDQgMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+QUYxN0VEMTgtNTgzNy00NkI2LUFFM0UtMzZBOEY0MUM0NDhCPC90aXRsZT4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iX0Fzc2V0cy9JY29ucy9QYXltZW50LU1ldGhvZC9pY19jcmVkaXQtY2FyZF9wYXltZW50LW1ldGhvZC9MaWdodC1Nb2RlIiBmaWxsPSIjNEE0QTRBIj4KICAgICAgICAgICAgPHBhdGggZD0iTTM3LjQxMjU4NzQsMjggQzM4LjkxNjg2MDksMjggNDAuMDU3NDk4MSwyNy42MDc3NjUzIDQwLjgzNDQ5ODgsMjYuODIzMjk1OCBDNDEuNjExNDk5NiwyNi4wMzg4MjY0IDQyLDI0LjkxMTUzNzYgNDIsMjMuNDQxNDI5NSBMNDIsNC41NTg1NzA0OCBDNDIsMy4wNzYxMDg1NCA0MS42MTE0OTk2LDEuOTQ1NzMxMyA0MC44MzQ0OTg4LDEuMTY3NDM4NzggQzQwLjA1NzQ5ODEsMC4zODkxNDYyNjEgMzguOTE2ODYwOSwwIDM3LjQxMjU4NzQsMCBMNi42MDYwNjA2MSwwIEM1LjA4OTM1NTA5LDAgMy45NDI1MDE5NCwwLjM4Mjk2OTMzNiAzLjE2NTUwMTE3LDEuMTQ4OTA4MDEgQzIuMzg4NTAwMzksMS45MTQ4NDY2OCAyLDMuMDUxNDAwODQgMiw0LjU1ODU3MDQ4IEwyLDIzLjQ0MTQyOTUgQzIsMjQuOTM2MjQ1MyAyLjM4ODUwMDM5LDI2LjA2OTcxMSAzLjE2NTUwMTE3LDI2Ljg0MTgyNjYgQzMuOTQyNTAxOTQsMjcuNjEzOTQyMiA1LjA4OTM1NTA5LDI4IDYuNjA2MDYwNjEsMjggTDM3LjQxMjU4NzQsMjggWiBNNDAuOTczMjY1LDUuNDMxMDU4NjQgTDMuMDI0LDUuNDMxMDU4NjQgTDMuMDI1NjQxMDMsNC41OTU2MzIwMyBDMy4wMjU2NDEwMywzLjQwOTY2MjQ4IDMuMzMwMjI1MzMsMi41MTQwMDgzOCAzLjkzOTM5Mzk0LDEuOTA4NjY5NzYgQzQuNTQ4NTYyNTUsMS4zMDMzMzExMyA1LjQ0OTg4MzQ1LDEuMDAwNjYxODEgNi42NDMzNTY2NCwxLjAwMDY2MTgxIEwzNy4zNTY2NDM0LDEuMDAwNjYxODEgQzM4LjUwMDM4ODUsMS4wMDA2NjE4MSAzOS4zODkyNzc0LDEuMzAzMzMxMTMgNDAuMDIzMzEsMS45MDg2Njk3NiBDNDAuNjU3MzQyNywyLjUxNDAwODM4IDQwLjk3NDM1OSwzLjQwOTY2MjQ4IDQwLjk3NDM1OSw0LjU5NTYzMjAzIEw0MC45NzMyNjUsNS40MzEwNTg2NCBaIE0zNy4zNTY2NDM0LDI2Ljk5OTMzODIgTDYuNjQzMzU2NjQsMjYuOTk5MzM4MiBDNS40NDk4ODM0NSwyNi45OTkzMzgyIDQuNTQ4NTYyNTUsMjYuNjkzNTgwNCAzLjkzOTM5Mzk0LDI2LjA4MjA2NDkgQzMuMzMwMjI1MzMsMjUuNDcwNTQ5MyAzLjAyNTY0MTAzLDI0LjU3MTgwNjggMy4wMjU2NDEwMywyMy4zODU4MzcyIEwzLjAyNCw5LjIyODY5MTI5IEw0MC45NzMyNjUsOS4yMjg2OTEyOSBMNDAuOTc0MzU5LDIzLjM4NTgzNzIgQzQwLjk3NDM1OSwyNC41NzE4MDY4IDQwLjY1NzM0MjcsMjUuNDcwNTQ5MyA0MC4wMjMzMSwyNi4wODIwNjQ5IEMzOS4zODkyNzc0LDI2LjY5MzU4MDQgMzguNTAwMzg4NSwyNi45OTkzMzgyIDM3LjM1NjY0MzQsMjYuOTk5MzM4MiBaIE0xMy4wMzk2MjcsMjMuMDE1MjIxNyBDMTMuNTYxNzcxNiwyMy4wMTUyMjE3IDEzLjk4MTM1MiwyMi44NjA3OTg2IDE0LjI5ODM2ODMsMjIuNTUxOTUyMyBDMTQuNjE1Mzg0NiwyMi4yNDMxMDYxIDE0Ljc3Mzg5MjgsMjEuODQxNjA2IDE0Ljc3Mzg5MjgsMjEuMzQ3NDUyIEwxNC43NzM4OTI4LDE4LjEwNDU2NjUgQzE0Ljc3Mzg5MjgsMTcuNjEwNDEyNSAxNC42MTUzODQ2LDE3LjIwNTgyNCAxNC4yOTgzNjgzLDE2Ljg5MDgwMDggQzEzLjk4MTM1MiwxNi41NzU3Nzc2IDEzLjU2MTc3MTYsMTYuNDE4MjY2IDEzLjAzOTYyNywxNi40MTgyNjYgTDguNzMxOTM0NzMsMTYuNDE4MjY2IEM4LjIyMjIyMjIyLDE2LjQxODI2NiA3LjgwODg1NzgxLDE2LjU3NTc3NzYgNy40OTE4NDE0OSwxNi44OTA4MDA4IEM3LjE3NDgyNTE3LDE3LjIwNTgyNCA3LjAxNjMxNzAyLDE3LjYxMDQxMjUgNy4wMTYzMTcwMiwxOC4xMDQ1NjY1IEw3LjAxNjMxNzAyLDIxLjM0NzQ1MiBDNy4wMTYzMTcwMiwyMS44NDE2MDYgNy4xNzQ4MjUxNywyMi4yNDMxMDYxIDcuNDkxODQxNDksMjIuNTUxOTUyMyBDNy44MDg4NTc4MSwyMi44NjA3OTg2IDguMjIyMjIyMjIsMjMuMDE1MjIxNyA4LjczMTkzNDczLDIzLjAxNTIyMTcgTDEzLjAzOTYyNywyMy4wMTUyMjE3IFoiIGlkPSL0gI2vIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
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
                              <span >
                                Credit / Debit Card
                              </span>{" "}
                              <span
                                
                                className="method-title-subtitle"
                              >
                                Visa, Mastercard, AMEX, CUP, JCB
                              </span>
                            </p>
                          </div>
                          {/* <div  className="d-flex credit-arrow-icon"><i 
                        className="airalo-icon-arrow-right tw-text-3"></i></div> */}
                          <ArrowForwardIosIcon
                            fontSize="small"
                            className="d-flex credit-arrow-icon ml-10"
                          />
                        </div>
                        <div
                          
                          data-testid="payment-method-top-item-1"
                          className="payment-choose-method-item d-flex justify-content-center flex-column relative cursor-pointer"
                        >
                          <div  className="method-title-row">
                            <span
                              
                              className="c--shared_icons airalo-icon-wrapper display-flex mr-15"
                            >
                              <img
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgNDQgMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+QjU4Nzc3NjQtRjExNS00REJCLThGMjYtMEFBMjhGMTZBNjAzPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMCAwIDIwLjc5NjU4ODIgMCAyMC43OTY1ODgyIDYuMTEyMzE1NDEgMCA2LjExMjMxNTQxIj48L3BvbHlnb24+CiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMyIgcG9pbnRzPSIwIDAgMTcuNDM1MjI4OCAwIDE3LjQzNTIyODggNy41MzgxNTA5NSAwIDcuNTM4MTUwOTUiPjwvcG9seWdvbj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0icGF5cGFsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyMC40NjE4NDkpIj4KICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5LjE0NTM5NjksMi4wNjA3MTAwNSBDMTkuMDI2MzEyOSwyLjg1MDU0NjY4IDE4LjQyOTI3NDUsMi44NTA1NDY2OCAxNy44NTE3NjMsMi44NTA1NDY2OCBMMTcuNTIzMTQ0LDIuODUwNTQ2NjggTDE3Ljc1MzYyMjUsMS4zNzU4NTEwNSBDMTcuNzY3NTg0NywxLjI4NjcxNzE3IDE3Ljg0MzY2ODksMS4yMjEwOTMzNiAxNy45MzMwMDcyLDEuMjIxMDkzMzYgTDE4LjA4MzU1NjgsMS4yMjEwOTMzNiBDMTguNDc2NzI2LDEuMjIxMDkzMzYgMTguODQ4MDQxMiwxLjIyMTA5MzM2IDE5LjAzOTQ2NTgsMS40NDczMDEyNyBDMTkuMTUzOTk2OCwxLjU4MjczOTggMTkuMTg4NzAwMSwxLjc4MzM5MzI2IDE5LjE0NTM5NjksMi4wNjA3MTAwNSBaIE0xOC44OTQwNzYyLDAgTDE2LjcxNjA2NDYsMCBDMTYuNTY3MTMzOCwwIDE2LjQ0MDM2MDUsMC4xMDk0NzUyMjEgMTYuNDE3MTkxMiwwLjI1ODA5OTg0NSBMMTUuNTM2NDU1OCw1LjkwMDMxNTc4IEMxNS41MTkwNTM2LDYuMDExNjMwOTIgMTUuNjA0MjQzNiw2LjExMjMxNTQxIDE1LjcxNTczOTMsNi4xMTIzMTU0MSBMMTYuODMzMjI2MSw2LjExMjMxNTQxIEMxNi45Mzc0MzcyLDYuMTEyMzE1NDEgMTcuMDI2MjY5Niw2LjAzNTY1MjA5IDE3LjA0MjQ1NzcsNS45MzE2OTY2MyBMMTcuMjkyMjYwOCw0LjMzMjA5MDkgQzE3LjMxNTQzLDQuMTgzNDY2MjggMTcuNDQyMjAzMyw0LjA3Mzk5MTA2IDE3LjU5MTEzNDEsNC4wNzM5OTEwNiBMMTguMjgwMzQzNyw0LjA3Mzk5MTA2IEMxOS43MTQ5MTU1LDQuMDczOTkxMDYgMjAuNTQyODM3MSwzLjM3MjU3Mjc4IDIwLjc1OTI1MjIsMS45ODIzMDkwMyBDMjAuODU2Njg0NSwxLjM3NDMxNzc5IDIwLjc2MzE5OCwwLjg5NjU1MTk3NiAyMC40ODE0MjM0LDAuNTYyMDk1NDY0IEMyMC4xNzE2MjMxLDAuMTk0NDE4MTggMTkuNjIyNjQzMSwwIDE4Ljg5NDA3NjIsMCBMMTguODk0MDc2MiwwIFoiIGlkPSJGaWxsLTEiIGZpbGw9IiMyMzhFQzIiIG1hc2s9InVybCgjbWFzay0yKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTMuNjExMjY4MDksMi4wNjA3MTAwNSBDMy40OTIxODQxNywyLjg1MDU0NjY4IDIuODk1MDQ0NTUsMi44NTA1NDY2OCAyLjMxNzYzNDIyLDIuODUwNTQ2NjggTDEuOTg5MDE1MiwyLjg1MDU0NjY4IEwyLjIxOTQ5MzY5LDEuMzc1ODUxMDUgQzIuMjMzNDU1OTUsMS4yODY3MTcxNyAyLjMwOTQzODk4LDEuMjIxMDkzMzYgMi4zOTg3NzcyMiwxLjIyMTA5MzM2IEwyLjU0OTQyOCwxLjIyMTA5MzM2IEMyLjk0MjQ5NjAxLDEuMjIxMDkzMzYgMy4zMTM5MTI0LDEuMjIxMDkzMzYgMy41MDUzMzcwMiwxLjQ0NzMwMTI3IEMzLjYxOTg2ODA0LDEuNTgyNzM5OCAzLjY1NDU3MTM0LDEuNzgzMzkzMjYgMy42MTEyNjgwOSwyLjA2MDcxMDA1IFogTTMuMzU5ODQ2MjEsMCBMMS4xODE4MzQ2MSwwIEMxLjAzMzAwNDk5LDAgMC45MDYxMzA1MzEsMC4xMDk0NzUyMjEgMC44ODI5NjEyNzEsMC4yNTgwOTk4NDUgTDAuMDAyMjI1ODY3NzYsNS45MDAzMTU3OCBDLTAuMDE1MDc1MTk1Myw2LjAxMTYzMDkyIDAuMDcwMDEzNjU4Nyw2LjExMjMxNTQxIDAuMTgxNjEwNTc0LDYuMTEyMzE1NDEgTDEuMjIxNDk1NTIsNi4xMTIzMTU0MSBDMS4zNzA0MjYzMSw2LjExMjMxNTQxIDEuNDk3MTk5Niw2LjAwMjg0MDE5IDEuNTIwMzY4ODYsNS44NTQyMTU1NyBMMS43NTgwMzA4Myw0LjMzMjA5MDkgQzEuNzgxMzAxMjcsNC4xODM0NjYyOCAxLjkwODA3NDU1LDQuMDczOTkxMDYgMi4wNTcwMDUzNCw0LjA3Mzk5MTA2IEwyLjc0NjExMzc2LDQuMDczOTkxMDYgQzQuMTgwNzg2NzEsNC4wNzM5OTEwNiA1LjAwODcwODM1LDMuMzcyNTcyNzggNS4yMjUxMjM0LDEuOTgyMzA5MDMgQzUuMzIyNDU0NTMsMS4zNzQzMTc3OSA1LjIyOTA2OTI1LDAuODk2NTUxOTc2IDQuOTQ3MTkzNDYsMC41NjIwOTU0NjQgQzQuNjM3NDk0MzEsMC4xOTQ0MTgxOCA0LjA4ODUxNDM4LDAgMy4zNTk4NDYyMSwwIEwzLjM1OTg0NjIxLDAgWiIgaWQ9IkZpbGwtMyIgZmlsbD0iIzI1MzY2NyIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTguNDE2MjA4MzYsMjQuNTQ4MTA2MiBDOC4zMTU0MzcyNiwyNS4xNTAxNjg4IDcuODQyNDQwMzYsMjUuNTU0MzM3OSA3LjIzOTAyNzg1LDI1LjU1NDMzNzkgQzYuOTM2NjEzMzYsMjUuNTU0MzM3OSA2LjY5NDQ5OTY1LDI1LjQ1NjAwNDQgNi41Mzg3OTAwOCwyNS4yNjk4NjU4IEM2LjM4NDQ5Njk4LDI1LjA4NTM2MjggNi4zMjY0MjIwNiwyNC44MjI1NjA5IDYuMzc1MzkxMTUsMjQuNTI5ODA5MyBDNi40NjkyODIzLDIzLjkzMzE2NDIgNi45NDk4NjczOSwyMy41MTYwMTM1IDcuNTQ0MDcyOSwyMy41MTYwMTM1IEM3Ljg0MDIxNDQ5LDIzLjUxNjAxMzUgOC4wODA3MDkzOSwyMy42MTUxNjQ3IDguMjM5NDU0MjMsMjMuODAzMDQxIEM4LjM5OTIxMDgzLDIzLjk5MjI0NjEgOC40NjE5Mzk4MywyNC4yNTY4ODc4IDguNDE2MjA4MzYsMjQuNTQ4MTA2MiBaIE05Ljg2OTU5ODg0LDIyLjQ5NzMxMTMgTDguODI2Nzc5NzksMjIuNDk3MzExMyBDOC43MzczNDAzOCwyMi40OTczMTEzIDguNjYxMjU2MTcsMjIuNTYyOTM1MSA4LjY0NzM5NTA4LDIyLjY1MjE3MTIgTDguNjAxNTYyNDQsMjIuOTQ2NzYyOCBMOC41Mjg2MTQ2OSwyMi44NDAwNDc1IEM4LjMwMjc5MDI4LDIyLjUwODc1OTcgNy43OTk0NDA2NCwyMi4zOTgxNjAxIDcuMjk2Nzk5MjMsMjIuMzk4MTYwMSBDNi4xNDQ2MDkxNCwyMi4zOTgxNjAxIDUuMTYwMzcwODgsMjMuMjgwMjk5NCA0Ljk2ODc0MzksMjQuNTE3NDQwOSBDNC44NjkwODU3MywyNS4xMzQ3MzQgNS4wMTA2MzA2OSwyNS43MjQ1MzA0IDUuMzU2OTU1NDgsMjYuMTM2MjYzNiBDNS42NzUyNTQ1NywyNi41MTQ0NjkzIDYuMTI5NDMyNzcsMjYuNjcxOTg2OSA2LjY3MDUyMDk4LDI2LjY3MTk4NjkgQzcuNTk5MjEzNzIsMjYuNjcxOTg2OSA4LjExNDI5OTc2LDI2LjA2OTIwODcgOC4xMTQyOTk3NiwyNi4wNjkyMDg3IEw4LjA2Nzc1ODg4LDI2LjM2MjA2MjYgQzguMDUwMzU2NjQsMjYuNDczMzc3NyA4LjEzNTU0NjY3LDI2LjU3NDE2NDUgOC4yNDcxNDM1OSwyNi41NzQxNjQ1IEw5LjE4NjI1NzQzLDI2LjU3NDE2NDUgQzkuMzM1MTg4MjIsMjYuNTc0MTY0NSA5LjQ2MTk2MTUxLDI2LjQ2NDc5MTUgOS40ODUxMzA3NywyNi4zMTYxNjY4IEwxMC4wNDg5ODM1LDIyLjcwOTIwODcgQzEwLjA2NjM4NTgsMjIuNTk3ODkzNiA5Ljk4MTE5NTc1LDIyLjQ5NzMxMTMgOS44Njk1OTg4NCwyMi40OTczMTEzIEw5Ljg2OTU5ODg0LDIyLjQ5NzMxMTMgWiIgaWQ9IkZpbGwtNSIgZmlsbD0iIzI1MzY2NyI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjMuOTUwMzM3MSwyNC41NDgxMDYyIEMyMy44NDk2NjcyLDI1LjE1MDE2ODggMjMuMzc2NTY5MSwyNS41NTQzMzc5IDIyLjc3MzI1NzgsMjUuNTU0MzM3OSBDMjIuNDcwNzQyMSwyNS41NTQzMzc5IDIyLjIyODYyODQsMjUuNDU2MDA0NCAyMi4wNzI5MTg4LDI1LjI2OTg2NTggQzIxLjkxODYyNTcsMjUuMDg1MzYyOCAyMS44NjA1NTA4LDI0LjgyMjU2MDkgMjEuOTA5NTE5OSwyNC41Mjk4MDkzIEMyMi4wMDM0MTExLDIzLjkzMzE2NDIgMjIuNDg0MDk3MywyMy41MTYwMTM1IDIzLjA3ODMwMjgsMjMuNTE2MDEzNSBDMjMuMzc0NDQ0NCwyMy41MTYwMTM1IDIzLjYxNDgzODIsMjMuNjE1MTY0NyAyMy43NzM1ODMsMjMuODAzMDQxIEMyMy45MzMzMzk2LDIzLjk5MjI0NjEgMjMuOTk2MDY4NiwyNC4yNTY4ODc4IDIzLjk1MDMzNzEsMjQuNTQ4MTA2MiBaIE0yNS40MDM4Mjg4LDIyLjQ5NzMxMTMgTDI0LjM2MDkwODYsMjIuNDk3MzExMyBDMjQuMjcxNTcwMywyMi40OTczMTEzIDI0LjE5NTQ4NjEsMjIuNTYyOTM1MSAyNC4xODE2MjUsMjIuNjUyMTcxMiBMMjQuMTM1NjkxMiwyMi45NDY3NjI4IEwyNC4wNjI4NDQ2LDIyLjg0MDA0NzUgQzIzLjgzNjkxOTEsMjIuNTA4NzU5NyAyMy4zMzM1Njk0LDIyLjM5ODE2MDEgMjIuODMwOTI4LDIyLjM5ODE2MDEgQzIxLjY3ODczNzksMjIuMzk4MTYwMSAyMC42OTQ0OTk2LDIzLjI4MDI5OTQgMjAuNTAyODcyNywyNC41MTc0NDA5IEMyMC40MDMyMTQ1LDI1LjEzNDczNCAyMC41NDQ3NTk1LDI1LjcyNDUzMDQgMjAuODkxMTg1NCwyNi4xMzYyNjM2IEMyMS4yMDkzODMzLDI2LjUxNDQ2OTMgMjEuNjYzNTYxNSwyNi42NzE5ODY5IDIyLjIwNDY0OTgsMjYuNjcxOTg2OSBDMjMuMTMzMzQyNSwyNi42NzE5ODY5IDIzLjY0ODUyOTcsMjYuMDY5MjA4NyAyMy42NDg1Mjk3LDI2LjA2OTIwODcgTDIzLjYwMTg4NzcsMjYuMzYyMDYyNiBDMjMuNTg0NDg1NCwyNi40NzMzNzc3IDIzLjY2OTY3NTQsMjYuNTc0MTY0NSAyMy43ODEyNzI0LDI2LjU3NDE2NDUgTDI0LjcyMDQ4NzQsMjYuNTc0MTY0NSBDMjQuODY5MzE3LDI2LjU3NDE2NDUgMjQuOTk2MDkwMywyNi40NjQ3OTE1IDI1LjAxOTM2MDcsMjYuMzE2MTY2OCBMMjUuNTgzMTEyMywyMi43MDkyMDg3IEMyNS42MDA1MTQ2LDIyLjU5Nzg5MzYgMjUuNTE1MzI0NSwyMi40OTczMTEzIDI1LjQwMzgyODgsMjIuNDk3MzExMyBMMjUuNDAzODI4OCwyMi40OTczMTEzIFoiIGlkPSJGaWxsLTYiIGZpbGw9IiMyMzhFQzIiPjwvcGF0aD4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC41NjQ3NzEsIDIwLjQ2MTg0OSkiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stNCIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcC04Ij48L2c+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNC44NTk0ODA2MSwyLjAzNTQ2MjI2IEwzLjgxMTE5ODA3LDIuMDM1NDYyMjYgQzMuNzEwOTMyODQsMi4wMzU0NjIyNiAzLjYxNzE0Mjg3LDIuMDg1NzUzNCAzLjU2MDg4OTEyLDIuMTY5NDY5NzUgTDIuMTE0ODg0NDgsNC4zMjEwNTEzOCBMMS41MDIwNjI2MiwyLjI1MzQ5Mjc0IEMxLjQ2MzcxNjk4LDIuMTI0MTg3MjggMS4zNDU4NDcxNywyLjAzNTQ2MjI2IDEuMjEyMTkzOTMsMi4wMzU0NjIyNiBMMC4xODE3MTgzMjksMi4wMzU0NjIyNiBDMC4wNTcyNzIwODU4LDIuMDM1NDYyMjYgLTAuMDMwMjQ0OTg3NywyLjE1OTE0NTc1IDAuMDA5ODIwNjMyMDgsMi4yNzgxMjcyMiBMMS4xNjQxMzU0Miw1LjcwMDk5MTE1IEwwLjA3ODQxNzgyOTUsNy4yNDg2NzAyNiBDLTAuMDA2NzcyMjAwMzQsNy4zNzAxMDQ5NiAwLjA3OTIyNzIzNiw3LjUzODE1MDk1IDAuMjI2NTM5MjEyLDcuNTM4MTUwOTUgTDEuMjczODA5OTksNy41MzgxNTA5NSBDMS4zNzMwNjM0Niw3LjUzODE1MDk1IDEuNDY2MDQ0MDMsNy40ODg5ODQyMSAxLjUyMjUwMDEzLDcuNDA2NTk2NyBMNS4wMDg3MTQ5MywyLjMyMzQwOTY5IEM1LjA5MjA4Mzc5LDIuMjAxNzcwNTYgNS4wMDU5ODMxOCwyLjAzNTQ2MjI2IDQuODU5NDgwNjEsMi4wMzU0NjIyNiIgaWQ9IkZpbGwtNyIgZmlsbD0iIzI1MzY2NyIgbWFzaz0idXJsKCNtYXNrLTQpIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYuMDY4MjQyNCwwLjE1NDk2MjEyNSBMMTUuMTc0MzU0Miw1LjkwMDQxOCBDMTUuMTU3MDUzMSw2LjAxMTczMzE0IDE1LjI0MjI0MzEsNi4xMTIzMTU0MSAxNS4zNTM3Mzg5LDYuMTEyMzE1NDEgTDE2LjI1MjY4NTksNi4xMTIzMTU0MSBDMTYuNDAxNjE2Nyw2LjExMjMxNTQxIDE2LjUyODM5LDYuMDAyODQwMTkgMTYuNTUxNTU5Myw1Ljg1NDIxNTU3IEwxNy40MzMwMDI5LDAuMjEyMTAxODUzIEMxNy40NTA0MDUxLDAuMTAwNjg0NDk0IDE3LjM2NTIxNTEsMCAxNy4yNTM2MTgyLDAgTDE2LjI0NzYyNzEsMCBDMTYuMTU4MTg3NywwIDE2LjA4MjEwMzUsMC4wNjU3MjYwMTk5IDE2LjA2ODI0MjQsMC4xNTQ5NjIxMjUiIGlkPSJGaWxsLTkiIGZpbGw9IiMyMzhFQzIiIG1hc2s9InVybCgjbWFzay00KSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMC43OTA4MTksNC42Mzg0Mzc1MyBDMjEuMDExMjgxMSwzLjIxODIyMzk3IDIwLjc4OTMwMTQsMi4yNTE4NTcyNiAyMC4wMjg5NjUyLDEuMzc2NTY2NTggQzE5LjE5MTgzNjYsMC40MTI4NTc1MzQgMTcuNjc5NTYxOCwwIDE1Ljc0NDY3NTYsMCBMMTAuMTI4MjA0MiwwIEM5LjczMjcwNzk3LDAgOS4zOTU5OTQ4OCwwLjI5MDcwNzMxIDkuMzM0Mzc4ODIsMC42ODUzNzAwODMgTDYuOTk1NzAwMDMsMTUuNjY4NDQ5NCBDNi45NDk1NjM4NiwxNS45NjQwNjMyIDcuMTc1NjkxNzksMTYuMjMxMzYyNiA3LjQ3MTkzNDU1LDE2LjIzMTM2MjYgTDEwLjkzOTIyOTUsMTYuMjMxMzYyNiBMMTAuNjk5OTQ4NywxNy43NjQ2MjkgQzEwLjY1OTU3OTUsMTguMDIzMjM5OSAxMC44NTczNzgyLDE4LjI1NzExNDIgMTEuMTE2NTkwNywxOC4yNTcxMTQyIEwxNC4wMzkxNTUsMTguMjU3MTE0MiBDMTQuMzg1MDc1MSwxOC4yNTcxMTQyIDE0LjY3OTU5NzksMTguMDAyNzk2NCAxNC43MzM1MjQ2LDE3LjY1NzYwNyBMMTQuNzYyMTU3NCwxNy41MDc1NTEzIEwxNS4zMTI3NTYxLDEzLjk4MDMyMzEgTDE1LjM0ODI2ODgsMTMuNzg1MzkzOCBDMTUuNDAyMDk0MywxMy40NDAyMDQ0IDE1LjY5NjYxNzEsMTMuMTg1ODg2NiAxNi4wNDI1MzcyLDEzLjE4NTg4NjYgTDE2LjQ3OTgxOSwxMy4xODU4ODY2IEMxOS4zMTExMjI4LDEzLjE4NTg4NjYgMjEuNTI4MDg3MSwxMi4wMjM2NzA3IDIyLjE3NTkxNTgsOC42NjI3NTA3NSBDMjIuNDQ2NTYxMSw3LjI1ODI3ODczIDIyLjMwNjYzNSw2LjA4NjA0NTQ1IDIxLjU5MDgxNjEsNS4yNjE5NjU4NyBDMjEuMzc0Mjk5OSw1LjAxMjY1Njc1IDIxLjEwNDk2OTksNC44MDY1ODU3NCAyMC43OTA4MTksNC42Mzg0Mzc1MyIgaWQ9IkZpbGwtMTEiIGZpbGw9IiMyMzhFQzIiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTIwLjc5MDgxOSw0LjYzODQzNzUzIEMyMS4wMTEyODExLDMuMjE4MjIzOTcgMjAuNzg5MzAxNCwyLjI1MTg1NzI2IDIwLjAyODk2NTIsMS4zNzY1NjY1OCBDMTkuMTkxODM2NiwwLjQxMjg1NzUzNCAxNy42Nzk1NjE4LDAgMTUuNzQ0Njc1NiwwIEwxMC4xMjgyMDQyLDAgQzkuNzMyNzA3OTcsMCA5LjM5NTk5NDg4LDAuMjkwNzA3MzEgOS4zMzQzNzg4MiwwLjY4NTM3MDA4MyBMNi45OTU3MDAwMywxNS42Njg0NDk0IEM2Ljk0OTU2Mzg2LDE1Ljk2NDA2MzIgNy4xNzU2OTE3OSwxNi4yMzEzNjI2IDcuNDcxOTM0NTUsMTYuMjMxMzYyNiBMMTAuOTM5MjI5NSwxNi4yMzEzNjI2IEwxMS44MTAyNTIsMTAuNjUxNDk5NSBMMTEuNzgzMjM4MSwxMC44MjYzOTQxIEMxMS44NDQ4NTQxLDEwLjQzMTgzMzUgMTIuMTc4NzM0MywxMC4xNDExMjYyIDEyLjU3NDEyOTMsMTAuMTQxMTI2MiBMMTQuMjIyMDgwOSwxMC4xNDExMjYyIEMxNy40NTg1OTM4LDEwLjE0MTEyNjIgMTkuOTkyODQ1NCw4LjgxMjcwNDIxIDIwLjczMzM1MTIsNC45NzA3NDc0NyBDMjAuNzU1MzA2Myw0Ljg1Njk3OTEgMjAuNzc0MDIzOCw0Ljc0Njc4ODM1IDIwLjc5MDgxOSw0LjYzODQzNzUzIiBpZD0iRmlsbC0xMiIgZmlsbD0iIzIwMjc0RiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTIuNzQ1OTI1OSw0LjY1NzM0NzgxIEMxMi43ODI5NTYyLDQuNDE5ODk1OTYgMTIuOTMzNzA4Miw0LjIyNTU3OTk5IDEzLjEzNjc2OCw0LjEyNzI0NjUxIEMxMy4yMjkwNDAzLDQuMDgyNTc3MzUgMTMuMzMyMTM4NSw0LjA1NzczODQzIDEzLjQ0MDI5NTQsNC4wNTc3Mzg0MyBMMTcuODQyODU5NSw0LjA1NzczODQzIEMxOC4zNjQ0MjA4LDQuMDU3NzM4NDMgMTguODUwNjcxNyw0LjA5MjE4NTgyIDE5LjI5NTMzOTQsNC4xNjQ1NTU5OSBDMTkuNDIyNDE2Miw0LjE4NTIwMzk4IDE5LjU0NjA1MzEsNC4yMDkwMjA3MiAxOS42NjYxNDg3LDQuMjM1OTAzOTkgQzE5Ljc4NjI0NDQsNC4yNjI4ODk0OCAxOS45MDI3OTksNC4yOTI5NDE1IDIwLjAxNTcxMTIsNC4zMjYzNjY3MSBDMjAuMDcyMTY3Myw0LjM0MjkyNTk4IDIwLjEyNzYxMTYsNC4zNjA0MDUyMiAyMC4xODIyNDY1LDQuMzc4NzAyMiBDMjAuNDAwNDgyOCw0LjQ1MTk5MjMzIDIwLjYwMzc0NSw0LjUzODM2NjM0IDIwLjc5MDgxOSw0LjYzODQzNzUzIEMyMS4wMTEyODExLDMuMjE4MjIzOTcgMjAuNzg5MzAxNCwyLjI1MTg1NzI2IDIwLjAyODk2NTIsMS4zNzY1NjY1OCBDMTkuMTkxODM2NiwwLjQxMjg1NzUzNCAxNy42Nzk1NjE4LDAgMTUuNzQ0Njc1NiwwIEwxMC4xMjgyMDQyLDAgQzkuNzMyNzA3OTcsMCA5LjM5NTk5NDg4LDAuMjkwNzA3MzEgOS4zMzQzNzg4MiwwLjY4NTM3MDA4MyBMNi45OTU3MDAwMywxNS42Njg0NDk0IEM2Ljk0OTU2Mzg2LDE1Ljk2NDA2MzIgNy4xNzU2OTE3OSwxNi4yMzEzNjI2IDcuNDcxOTM0NTUsMTYuMjMxMzYyNiBMMTAuOTM5MjI5NSwxNi4yMzEzNjI2IEwxMi43NDU5MjU5LDQuNjU3MzQ3ODEiIGlkPSJGaWxsLTEzIiBmaWxsPSIjMjUzNjY3Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
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
                              <span >PayPal</span>{" "}
                            </p>
                          </div>
                          <div
                            
                            data-testid="not-card-select"
                            className="select"
                          >
                            <p >SELECT</p>
                          </div>
                        </div>
                        <div
                          
                          data-testid="payment-method-top-item-2"
                          className="payment-choose-method-item d-flex justify-content-center flex-column relative cursor-pointer"
                        >
                          <div  className="method-title-row">
                            <span
                              
                              className="c--shared_icons airalo-icon-wrapper display-flex mr-15"
                            >
                              <img
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgNDQgMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ODEwNEEwRjctMTg3OS00NkY2LUJBRTAtMkVENkE5MDc1MjZBPC90aXRsZT4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iYWxpcGF5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgPHBhdGggZD0iTTkuMDkzMzg5NzksMjAuMTEwMTI5MSBDOS4wOTMzODk3OSwyMC42MDE1Mjg4IDkuNDQ1OTgyNCwyMC45MzIyMDA2IDkuOTM3NzA1NDgsMjAuOTMyMjAwNiBDMTAuNDI5MzA3OSwyMC45MzIyMDA2IDEwLjc4MjE0MTgsMjAuNjAxNTI4OCAxMC43ODIxNDE4LDIwLjExMDEyOTEgQzEwLjc4MjE0MTgsMTkuNjI4MzE0MiAxMC40MjkzMDc5LDE5LjI4ODA1NzcgOS45Mzc3MDU0OCwxOS4yODgwNTc3IEM5LjQ0NTk4MjQsMTkuMjg4MDU3NyA5LjA5MzM4OTc5LDE5LjYyODMxNDIgOS4wOTMzODk3OSwyMC4xMTAxMjkxIiBpZD0iRmlsbC04MiIgZmlsbD0iIzE2NzdGRiI+PC9wYXRoPgogICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC04NSIgZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSI5LjIwNDc0MjQ1IDI2LjM5MzY2NzQgMTAuNjcwNjIwMyAyNi4zOTM2Njc0IDEwLjY3MDYyMDMgMjEuMzI5MDE5MSA5LjIwNDc0MjQ1IDIxLjMyOTAxOTEiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBhdGggZD0iTTEzLjM4OTcyMjIsMjUuNTI0NDM0NCBDMTMuMjIyNzE3NCwyNS41MjQ0MzQ0IDEzLjA2NTEyNDcsMjUuNTA1NTEwOCAxMi44ODg3MDc3LDI1LjQ0ODg2MjggTDEyLjg4ODcwNzcsMjIuNzA4NjI0NiBDMTMuMTk0OTYzNywyMi40OTEyNDg3IDEzLjQ0NTQ3MDksMjIuMzg3NDE0NiAxMy43NjA4OTc3LDIyLjM4NzQxNDYgQzE0LjMwODI0ODksMjIuMzg3NDE0NiAxNC43NDQ1ODUyLDIyLjgzMTM4MjMgMTQuNzQ0NTg1MiwyMy43NzYzMzQ0IEMxNC43NDQ1ODUyLDI0Ljk4NTg0ODUgMTQuMTA0MTk4OSwyNS41MjQ0MzQ0IDEzLjM4OTcyMjIsMjUuNTI0NDM0NCBNMTQuMzE3NTQwMywyMS4yMjUwODY2IEMxMy43NzkzNiwyMS4yMjUwODY2IDEzLjM2MTk2ODUsMjEuNDMzMDAwNiAxMi44ODg3MDc3LDIxLjgyOTkwNTEgTDEyLjg4ODcwNzcsMjEuMzI5MDQzNiBMMTEuNDIyNTg4NSwyMS4zMjkwNDM2IEwxMS40MjI1ODg1LDI3Ljk5OTk4NzcgTDEyLjg4ODcwNzcsMjcuOTk5OTg3NyBMMTIuODg4NzA3NywyNi4zNDY1MDU4IEMxMy4xNjY5Njg2LDI2LjQyMjA3NzQgMTMuNDI2ODg4LDI2LjQ1OTgwMTggMTMuNzQyNDM1NSwyNi40NTk4MDE4IEMxNS4wNTA3MjA2LDI2LjQ1OTgwMTggMTYuMjI4OTI1MywyNS40NzcxMjUzIDE2LjIyODkyNTMsMjMuNzI5MTQ4MyBDMTYuMjI4OTI1MywyMi4xNjA1NzY5IDE1LjM3NTQzODgsMjEuMjI1MDg2NiAxNC4zMTc1NDAzLDIxLjIyNTA4NjYiIGlkPSJGaWxsLTg3IiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTg2IiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9IjI1Ljk5MDgyOTIgMjEuMzM4NTE3NyAyNiAyMS4zMjkwNTU5IDI0LjYxNzUwMzkgMjEuMzI5MDU1OSAyMy43NDUzMTM5IDI0LjQwOTQyNzggMjMuNjk4ODU2NiAyNC40MDk0Mjc4IDIyLjY5NjgyNzUgMjEuMzI5MDU1OSAyMS4wNTQ0MTIxIDIxLjMyOTA1NTkgMjMuMDMwODM3MiAyNi40MTI2Mjc5IDIyLjIwNDk4MzggMjcuOTYyMjc1NiAyMi4yMDQ5ODM4IDI4IDIzLjQ5NDU2NTMgMjgiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBhdGggZD0iTTE5LjMwMDcwNDMsMjUuMTY1MzQwMyBDMTguOTExMDY2NiwyNS4zODI3MTYxIDE4LjY4ODMxMywyNS40Njc3NDk1IDE4LjQyODM5MzYsMjUuNDY3NzQ5NSBDMTguMDc1OTIxNywyNS40Njc3NDk1IDE3Ljg1MzE2ODEsMjUuMjMxNTczIDE3Ljg1MzE2ODEsMjQuODUzNDY5MiBDMTcuODUzMTY4MSwyNC43MTE3ODc5IDE3Ljg4MDkyMTgsMjQuNTcwMTA2NSAxNy45OTI0MTkyLDI0LjQ1NjY4NzYgQzE4LjE2ODcxNTYsMjQuMjc3MTU5IDE4LjUxMjAxNjcsMjQuMTQ0ODE2NiAxOS4zMDA3MDQzLDIzLjk1NTk0OSBMMTkuMzAwNzA0MywyNS4xNjUzNDAzIFogTTIwLjc2NjU4MjEsMjUuMTI3NDkzMSBMMjAuNzY2NTgyMSwyMy4wMTA5OTY5IEMyMC43NjY1ODIxLDIxLjg1ODEzMDggMjAuMDk4NTYyNywyMS4yMjUxNzI2IDE4LjkyMDM1OCwyMS4yMjUxNzI2IEMxOC4xNjg3MTU2LDIxLjIyNTE3MjYgMTcuNjQ4OTk3NCwyMS4zNTczOTIyIDE2LjcwMjcxNzEsMjEuNjUwMzM5NiBMMTYuOTYyMzk1MSwyMi44MTI1NDQ3IEMxNy44MjUxNzMxLDIyLjQxNTc2MzEgMTguMjA1ODgxNCwyMi4yNDU1NzM0IDE4LjYwNDY4OTksMjIuMjQ1NTczNCBDMTkuMDg3MTIxNSwyMi4yNDU1NzM0IDE5LjMwMDcwNDMsMjIuNTk1MTY4OSAxOS4zMDA3MDQzLDIzLjEzMzc1NDcgTDE5LjMwMDcwNDMsMjMuMTcxNjAxOSBDMTcuNjIxMjQzNywyMy40OTI5MzQ4IDE3LjEwMTQwNDksMjMuNjcyNDYzNCAxNi43NzY5MjgsMjQuMDAzMTM1MiBDMTYuNTM1NTkxNiwyNC4yNDg3NzM2IDE2LjQzMzM4NTYsMjQuNTk4MzY5IDE2LjQzMzM4NTYsMjUuMDA0NzM1MyBDMTYuNDMzMzg1NiwyNS45Nzc5NDk5IDE3LjE3NTg1NzMsMjYuNDk3NjEyMiAxNy44NzE3NTEsMjYuNDk3NjEyMiBDMTguMzkxNDY5MSwyNi40OTc2MTIyIDE4LjgwODk4MTIsMjYuMjk5MjgyOCAxOS4zNzQ5MTUzLDI1Ljg2NDUzMTEgTDE5LjQ3NzAwMDYsMjYuMzkzNzc4IEwyMC45NDI4Nzg0LDI2LjM5Mzc3OCBMMjAuNzY2NTgyMSwyNS4xMjc0OTMxIFoiIGlkPSJGaWxsLTg4IiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC41NjQ1NTU3LDAgTDcuMjIzOTEyOTIsMCBDNS43NDY4MTI5NywwIDQuNTUwOTkwNjksMS4yMjg4MDYzOCA0LjU1MDk5MDY5LDIuNzQ1Mzk5MjIgTDQuNTUwOTkwNjksMTQuMzkxNjU3NSBDNC41NTA5OTA2OSwxNS45MDczOTAxIDUuNzQ2ODEyOTcsMTcuMTM2NTY1MiA3LjIyMzkxMjkyLDE3LjEzNjU2NTIgTDE4LjU2NDU1NTcsMTcuMTM2NTY1MiBDMjAuMDQwOTMxNiwxNy4xMzY1NjUyIDIxLjIzNjUxMjUsMTUuOTA3MzkwMSAyMS4yMzY1MTI1LDE0LjM5MTY1NzUgTDIxLjIzNjUxMjUsMi43NDUzOTkyMiBDMjEuMjM2NTEyNSwxLjIyODgwNjM4IDIwLjA0MDkzMTYsMCAxOC41NjQ1NTU3LDAiIGlkPSJGaWxsLTg5IiBmaWxsPSIjMTY3N0ZGIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik05LjA1OTY4NzE1LDEzLjE3ODA1MTQgQzYuNDYzNzUxMjYsMTMuMTc4MDUxNCA1LjY5NjMwMTI0LDExLjA3ODAyMTMgNi45NzkxMjUzMiw5LjkyOTIxMDIyIEM3LjQwNzEzNTU4LDkuNTQxMDMwMjggOC4xODk2NjkxMyw5LjM1MTQyNTQ2IDguNjA2NTc3OSw5LjMwODkwODc2IEMxMC4xNDg0NzY3LDkuMTUyMzU4ODMgMTEuNTc1OTgyLDkuNzU2NTYyOTIgMTMuMjYwNTEwNywxMC42MDA5OTg3IEMxMi4wNzYzOTMyLDEyLjE4NzE0MTkgMTAuNTY4NDAyMiwxMy4xNzgwNTE0IDkuMDU5Njg3MTUsMTMuMTc4MDUxNCBNMTguMjg4NTE1LDEwLjc2MDEyOTEgQzE3LjYyMTIxOTYsMTAuNTMwNTg4MSAxNi43MjUwMTY2LDEwLjE3OTM5NTIgMTUuNzI3MzMxNSw5LjgwODU0MTQzIEMxNi4zMjY4MTE0LDguNzM4NjE5NzIgMTYuODA1MTQwMyw3LjUyMDAxMjQzIDE3LjExOTcyMjQsNi4xOTU5NzM1NSBMMTMuODMxMDMwMSw2LjE5NTk3MzU1IEwxMy44MzEwMzAxLDQuOTc5MzMyMzUgTDE3Ljg1OTkwMTQsNC45NzkzMzIzNSBMMTcuODU5OTAxNCw0LjMwMDI5Mzk1IEwxMy44MzEwMzAxLDQuMzAwMjkzOTUgTDEzLjgzMTAzMDEsMi4yNzIwMjYxMyBMMTIuMTg2NTYzMywyLjI3MjAyNjEzIEMxMS44OTc5MjQ5LDIuMjcyMDI2MTMgMTEuODk3OTI0OSwyLjU2NDM1OTE3IDExLjg5NzkyNDksMi41NjQzNTkxNyBMMTEuODk3OTI0OSw0LjMwMDI5Mzk1IEw3LjgyMzE5OTY4LDQuMzAwMjkzOTUgTDcuODIzMTk5NjgsNC45NzkzMzIzNSBMMTEuODk3OTI0OSw0Ljk3OTMzMjM1IEwxMS44OTc5MjQ5LDYuMTk1OTczNTUgTDguNTMzODE0OTUsNi4xOTU5NzM1NSBMOC41MzM4MTQ5NSw2Ljg3NTAxMTk2IEwxNS4wNTg4Mjk1LDYuODc1MDExOTYgQzE0LjgxOTc4NTcsNy43MTk4MTYzNSAxNC40OTk0MTE1LDguNTEzMTMzNzUgMTQuMTE4ODIzOSw5LjIzMzcwNTgxIEMxMi4wMDE2OTk2LDguNTE2MjA1NzYgOS43NDIzMDc0LDcuOTM0NzM0NTggOC4zMjMxMjgyLDguMjkyNjg1ODggQzcuNDE1NTgyMzUsOC41MjIzNDk3OSA2LjgzMDcwMzM4LDguOTMyNDAyNDggNi40ODcyODE1Nyw5LjM2MTc0NzQzIEM0LjkxMDg3MTY1LDExLjMzMTUyNDEgNi4wNDExNzEwOCwxNC4zMjM1NDQ3IDkuMzcwNTI4NTUsMTQuMzIzNTQ0NyBDMTEuMzM4OTg5NiwxNC4zMjM1NDQ3IDEzLjIzNTE3MDMsMTMuMTk2MjM3NyAxNC43MDQ3ODg5LDExLjMzODg5NjkgQzE2Ljg5NjQ4NjEsMTIuNDIxMTA2NyAyMS4yMzY0NDAxLDE0LjI3OTE4NDggMjEuMjM2NDQwMSwxNC4yNzkxODQ4IEwyMS4yMzY0NDAxLDExLjYzMTEwNzEgQzIxLjIzNjQ0MDEsMTEuNjMxMTA3MSAyMC42OTE1MDI0LDExLjU4NjUwMTQgMTguMjg4NTE1LDEwLjc2MDEyOTEiIGlkPSJGaWxsLTkwIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTgzIiBmaWxsPSIjMDAwMDAwIiBwb2ludHM9IjYuNzM2NDczNTUgMjYuMzkzNjY3NCA4LjIwMjQ3MjAzIDI2LjM5MzY2NzQgOC4yMDI0NzIwMyAxOS40OTU4ODU3IDYuNzM2NDczNTUgMTkuNDk1ODg1NyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cGF0aCBkPSJNMi4wMzIxNzM4NywyNC4wMDMxMzUyIEwyLjkwNDM2MzkyLDIwLjkzMjIyNTIgTDIuOTQxNDA5MDcsMjAuOTMyMjI1MiBMMy43NjcyNjI1MiwyNC4wMDMxMzUyIEwyLjAzMjE3Mzg3LDI0LjAwMzEzNTIgWiBNNC4xNjYzMTI0LDE5LjczMjE3MjkgTDIuMTk5MTc4NzEsMTkuNzMyMTcyOSBMMCwyNi4zOTM3NzggTDEuMzU0NzQyMzUsMjYuMzkzNzc4IEwxLjcyNTkxNzg3LDI1LjA4OTc2ODcgTDQuMDU0OTM1NjEsMjUuMDg5NzY4NyBMNC40MDc1MjgyMSwyNi4zOTM3NzggTDYuMTQyNDk2MiwyNi4zOTM3NzggTDQuMTY2MzEyNCwxOS43MzIxNzI5IFoiIGlkPSJGaWxsLTg0IiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
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
                              <span >Alipay</span>{" "}
                            </p>
                          </div>
                          <div
                            
                            data-testid="not-card-select"
                            className="select"
                          >
                            <p >SELECT</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      
                      className="step step-credit-cards"
                      style={{ display: "none;" }}
                    >
                      <div
                        
                        className="payment-choose-method-form d-grid grid-cols-1 gap-10 px-20"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span></span>
      </div>
      {/* <div className="package-detail-wrapper-inner">
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
                    onClick={() => {
                      window.location.href = `/esim-buy/${props.slug}`;
                    }}
                    className="btn topup-package-price-btn tw-font-semibold tw-text-4.5 tw-leading-4 tw-py-4 btn-secondary btn-block"
                  >
                    BUY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Modal>
  );
};

export default ChoosePaymentMethodModal;
