import * as React from "react";
import Header from "../../components/common/Header/index.tsx";
import StoreSearch from "../../components/common/StoreSearch/index.tsx";
import apiSettings, { Package } from "../../API/API.tsx";
import { useParams } from "react-router-dom";
import './buy.scss';
import { Checkbox, FormControlLabel } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChoosePaymentMethodModal from "../../components/common/ModalWindows/ChoosePaymentModal/index.tsx";
import ApplyCodeModal from "../../components/common/ModalWindows/ApplyCodeModal/index.tsx";

const BuyPageContent: React.FC = () => {

  const [isOpenChoosePayment, setIsOpenChoosePayment] = React.useState(false);
  const [isOpenApplyCode, setIsOpenApplyCode] = React.useState(false);

  const openChoosePaymentModal = () => {
    setIsOpenChoosePayment(true);
  };
  const openApplyCodeModal = () => {
    setIsOpenApplyCode(true);
  };

  const closeModal = () => {
    setIsOpenChoosePayment(false);
    setIsOpenApplyCode(false);
  };
  

  return (
  <>
      <div className="px-20 px-sm-30 checkout-bottom-space">
  <div className="new-container mx-auto">
    {/* <div className="d-grid gap-30 grid-cols-lg-1 grid-cols-lg-12"> */}
    <div className="">
      <div className="col-span-lg-8 col-start-lg-3">
        <div className="d-grid grid-cols-1 gap-20 gap-sm-30 gap-lg-40 py-20 py-sm-30 py-lg-40">
          <div>
            <div className="c--checkout_header esim-buy-header-wrapper w-100 theme-light secure-checkout">
              <div className="esim-buy-header relative">
                {/* <div className="esim-buy-header-image"><img
                    src="https://cdn.airalo.com/images/a6a51f14-44b9-425f-b7f1-688c046ceba5.jpg" width="335"
                    alt="kargi-mobile-7days-1gb" className="lazyLoad isLoaded" /></div> */}
                <div data-testid="checkout-sim-detail-header" className="esim-buy-header-inner relative shadowed-big"
                  style={{background: "linear-gradient(90deg, rgb(208, 4, 35) 0px, rgb(237, 4, 37))"}}>
                  <div className="tw-flex">
                    <div className="esim-buy-header-info-top tw-grow">
                      <div className="sm:ltr:tw-pl-5 sm:rtl:tw-pr-5">
                        <p className="operator-title">Kargi Mobile</p>
                      </div>
                    </div>
                  </div>
                  <div className="esim-buy-header-info-bottom">
                    <ul className="esim-buy-header-info-list">
                      <li>
                        <div className="c--sim_item-row sim-item-row coverage light">
                          <span
                            className="airalo-icon-globe-2 list-icon sim-item-row-left-icon row-item-icon-padding"></span>
                          <p data-testid="COVERAGE-row" className="key sim-item-row-left-key">COVERAGE
                          </p>
                          <p data-testid="promotional-price-value"
                            className="value sim-item-row-right-value ltr:!tw-ml-auto rtl:!tw-mr-auto overflow-hidden">
                            Georgia

                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="c--sim_item-row sim-item-row light"><span
                            className="airalo-icon-arrows-up-and-down list-icon sim-item-row-left-icon row-item-icon-padding"></span>
                          <p data-testid="DATA-row" className="key sim-item-row-left-key">DATA</p>
                          <p data-testid="promotional-price-value"
                            className="value sim-item-row-right-value ltr:!tw-ml-auto rtl:!tw-mr-auto overflow-hidden">
                            1 GB

                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="c--sim_item-row sim-item-row light"><span
                            className="airalo-icon-calendar list-icon sim-item-row-left-icon row-item-icon-padding"></span>
                          <p data-testid="VALIDITY-row" className="key sim-item-row-left-key">VALIDITY
                          </p>
                          <p data-testid="promotional-price-value"
                            className="value sim-item-row-right-value ltr:!tw-ml-auto rtl:!tw-mr-auto overflow-hidden">
                            7 Days

                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="c--sim_item-row sim-item-row light last"><span
                            className="list-icon sim-item-row-left-icon"><svg width="22" height="22" viewBox="0 0 22 22"
                              fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M12.4219 2.80794L12.4231 2.80672C12.6211 2.61014 12.8888 2.49989 13.1678 2.5C13.1679 2.5 13.1679 2.5 13.168 2.5H17.8955H17.8959V3L12.4219 2.80794ZM12.4219 2.80794L2.96965 12.2579L2.96964 12.2579M12.4219 2.80794L2.96964 12.2579M2.96964 12.2579L2.96878 12.2588M2.96964 12.2579L2.96878 12.2588M2.96878 12.2588C2.66856 12.5604 2.5 12.9687 2.5 13.3942C2.5 13.8198 2.66856 14.228 2.96878 14.5297L2.96965 14.5305M2.96878 12.2588L2.96965 14.5305M2.96965 14.5305L7.47072 19.0305L7.47159 19.0314M2.96965 14.5305L7.47159 19.0314M7.47159 19.0314C7.77328 19.3315 8.18155 19.5 8.60711 19.5C9.03267 19.5 9.44095 19.3315 9.74264 19.0314L9.7435 19.0305M7.47159 19.0314L9.7435 19.0305M9.7435 19.0305L19.1919 9.58437L19.1931 9.58314M9.7435 19.0305L19.1931 9.58314M19.1931 9.58314C19.3899 9.38511 19.5002 9.11725 19.5 8.8381M19.1931 9.58314L19.5 8.8381M19.5 8.8381V4.10886M19.5 8.8381V8.83846H19L19.5 4.10886M19.5 4.10886C19.5008 3.89801 19.4601 3.68907 19.38 3.494L18.9175 3.68385M19.5 4.10886C19.5 4.10929 19.5 4.10971 19.5 4.11014L19 4.10769M19.5 4.10886V4.10769H19M19.5 4.10886L18.9175 3.68385M18.9175 3.68385C18.9726 3.81831 19.0007 3.96235 19 4.10769M18.9175 3.68385L19 4.10769M18.9175 3.68385L19.38 3.494C19.2998 3.29854 19.1817 3.12088 19.0325 2.97124C19.0325 2.97124 19.0325 2.97124 19.0325 2.97123L18.9175 3.68385Z"
                                stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M13.1678 3H17.8959C18.0413 2.9998 18.1852 3.02834 18.3195 3.08398C18.4538 3.13962 18.5758 3.22126 18.6784 3.32421C18.781 3.42717 18.8623 3.54939 18.9175 3.68385C18.9726 3.81831 19.0007 3.96235 19 4.10769V8.83846C19.0001 8.98544 18.942 9.12648 18.8384 9.23077L9.38999 18.6769C9.18201 18.8838 8.90053 19 8.60711 19C8.3137 19 8.03222 18.8838 7.82423 18.6769L3.32316 14.1769C3.11619 13.969 3 13.6876 3 13.3942C3 13.1009 3.11619 12.8195 3.32316 12.6115L12.7754 3.16154C12.8797 3.05797 13.0208 2.99989 13.1678 3ZM14.6111 7.51827C14.8372 7.66936 15.1031 7.75 15.375 7.75C15.7397 7.75 16.0894 7.60513 16.3473 7.34727C16.6051 7.08941 16.75 6.73967 16.75 6.375C16.75 6.10305 16.6694 5.83721 16.5183 5.61109C16.3672 5.38497 16.1524 5.20874 15.9012 5.10467C15.6499 5.0006 15.3735 4.97337 15.1068 5.02642C14.84 5.07948 14.595 5.21043 14.4027 5.40273C14.2104 5.59503 14.0795 5.84003 14.0264 6.10675C13.9734 6.37348 14.0006 6.64994 14.1047 6.90119C14.2087 7.15244 14.385 7.36718 14.6111 7.51827Z"
                                fill="currentColor"></path>
                            </svg></span>
                          <p data-testid="PRICE-row" className="key sim-item-row-left-key">PRICE</p>
                          <p data-testid="promotional-price-value"
                            className="value sim-item-row-right-value ltr:!tw-ml-auto rtl:!tw-mr-auto price overflow-hidden">
                            US $5.50

                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid grid-cols-1 gap-20">
            <div className="choosing-wrapper d-grid grid-cols-1 grid-cols-sm-2 gap-30">
              <div className="choose-payment-method-wrapper">
                <div className="c--checkout_choose-box choose-box-wrapper d-flex flex-column h-100">
                  <div className="choose-box-header w-100 mb-20">
                    <h2>
                      Choose Payment Method
                    </h2>
                    <p>
                      You can choose or change the payment method to complete your order.
                    </p>
                  </div>
                  <div className="choose-box w-100 mt-auto">
                    <div onClick={openChoosePaymentModal}
                      className="choose-box-inner relative d-flex justify-content-between align-items-center cursor-pointer">
                      <p data-testid="Choose Payment Method-payment-option" className="select">Choose
                        Payment Method</p>
                        <ArrowForwardIosIcon fontSize="small" className="ml-10" />
                      {/* <div className="d-flex select-icon 666"><i className="airalo-icon-arrow-right tw-text-3"></i></div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="choose-code-wrapper">
                <div className="c--checkout_choose-box choose-box-wrapper d-flex flex-column h-100">
                  <div className="choose-box-header w-100 mb-20">
                    <h2>
                      Apply Code or Use Airmoney
                    </h2>
                    <p>
                      You can apply your discount / referral code or use Airmoney upon purchase.
                    </p>
                  </div>
                  <div className="choose-box w-100 mt-auto" onClick={openApplyCodeModal}>
                    <div 
                      className="choose-box-inner relative d-flex justify-content-between align-items-center cursor-pointer">
                      <p data-testid="Apply Code / Use Airmoney-payment-option" className="select">Apply
                        Code / Use Airmoney</p>
                        <ArrowForwardIosIcon fontSize="small" className="ml-10" />
                      {/* <div className="d-flex select-icon 666"><i className="airalo-icon-arrow-right tw-text-3"></i></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-summary-wrapper">
            <div className="c--checkout_summary order-summary">
              <div className=" display-sm-grid grid-cols-1 gap-20">
                <div className="order-summary-header">
                  <h2>
                    Order Summary
                  </h2>
                  <p>
                    You can review your order summary.
                  </p>
                </div>
                <div className="order-summary-list">
                  <div className="order-summary-item d-flex align-items-center justify-content-between">
                    <p className="key">
                      TOTAL PRICE
                    </p>
                    <p data-testid="total-price" className="value ltr:tw-ml-auto rtl:tw-mr-auto">
                      US $5.50
                    </p>
                  </div>
                </div>
              </div>



              <div className="order-summary-mobile display-sm-none">
                <div className="order-summary-mobile-inner">
                  <div id="" className="collapse show">
                    <div className="d-grid grid-cols-2 gap-20 px-20 py-20">
                      <div
                        className="order-summary-mobile-info d-flex flex-column align-items-start justify-content-center">
                        <p className="title m-0">
                          AMOUNT TO BE PAID
                        </p>
                        <p className="price d-flex align-items-start justify-content-center mb-0 mt-10">
                          US $5.50
                          {/* <span className="c--shared_icons airalo-icon-wrapper display-flex"><img
                              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+NjVGNjM2Q0MtMEU4Ni00RTY0LUI2OTEtNjU4NjNFODAzQUFFPC90aXRsZT4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iX0Fzc2V0cy9JY29ucy9pY19hcnJvd19nZW5lcmFsL0xpZ2h0LU1vZGUiIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS41Mjk3OTEzLDE3IEMxNS43ODIxNjMyLDE3IDE2LjAwMTMyODMsMTYuOTEzNDI5NSAxNi4xNzQwMDM4LDE2LjczMzYyOTMgTDIxLjI2NzkzMTcsMTEuNzM5MTc4NyBDMjEuNTAwMzc5NSwxMS41MTk0MjI5IDIxLjYsMTEuMjc5Njg5MiAyMS42LDExIEMyMS42LDEwLjcxMzY1MTUgMjEuNTAwMzc5NSwxMC40ODA1NzcxIDIxLjI2NzkzMTcsMTAuMjYwODIxMyBMMTYuMTc0MDAzOCw1LjI2NjM3MDcgQzE2LjAwMTMyODMsNS4wODY1NzA0OCAxNS43ODg4MDQ2LDUgMTUuNTI5NzkxMyw1IEMxNS4wMTg0MDYxLDUgMTQuNiw1LjQxMjg3NDU4IDE0LjYsNS45MjU2MzgxOCBDMTQuNiw2LjE3ODY5MDM0IDE0LjcwNjI2MTksNi40MTE3NjQ3MSAxNC44OTIyMjAxLDYuNTk4MjI0MiBMMTkuNDA4MzQ5MSwxMC45OTMzNDA3IEwxNC44OTIyMjAxLDE1LjQwMTc3NTggQzE0LjcwNjI2MTksMTUuNTgxNTc2IDE0LjYsMTUuODE0NjUwNCAxNC42LDE2LjA3NDM2MTggQzE0LjYsMTYuNTg3MTI1NCAxNS4wMTg0MDYxLDE3IDE1LjUyOTc5MTMsMTcgWiIgaWQ9IvSAhooiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                              alt="" width="22" height="22" loading="lazy" /></span> */}
                        </p>
                      </div>
                      <div className="order-summary-mobile-button">
                        <div className="relative pay-button-general">
                          <div className="c--checkout_pay-button pay-button-wrapper">
                            <button data-testid="complete-order-button"
                              className="button button-secondary cursor-pointer btn-primary-hv"><span>
                                COMPLETE ORDER
                              </span></button>
                          </div>
                        </div>
                      </div>
                      {/* <div className="order-summary-mobile-open not-collapsed" role="button" tabindex="0"
                        aria-expanded="true" aria-controls="" style={{overflowAnchor: 'none'}}></div> */}
                    </div>
                  </div>
                  <div id="" className="collapse" style={{display: "none"}}>
                    <div className="order-summary-mobile-list">
                      <div className="order-summary-mobile-list-header px-20 pb-20"><button type="button"
                          className="btn close-btn btn-link not-collapsed" aria-expanded="true" aria-controls=""
                          style={{overflowAnchor: 'none'}}><span
                            className="c--shared_icons airalo-icon-wrapper display-flex"><img
                              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+MzUwMTUzMDUtNzVBMy00M0Q3LUJCQUQtN0FGMTRDMTdCRjM5PC90aXRsZT4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iX0Fzc2V0cy9JY29ucy9pY19jbGVhci9MaWdodC1Nb2RlIiBmaWxsPSIjNEE0QTRBIj4KICAgICAgICAgICAgPHBhdGggZD0iTTEwLjk5NjEzMzQsMTkgQzE1LjM4MDg2MDMsMTkgMTksMTUuMzc5MTEwMyAxOSwxMSBDMTksNi42MjA4ODk3NSAxNS4zNzMxMjcxLDMgMTAuOTg4NDAwMiwzIEM2LjYxMTQwNjQ4LDMgMyw2LjYyMDg4OTc1IDMsMTEgQzMsMTUuMzc5MTEwMyA2LjYxOTEzOTY4LDE5IDEwLjk5NjEzMzQsMTkgWiBNMTMuNjI1NDIyOSwxNC4zNzMzMDc1IEMxMy40MTY2MjY0LDE0LjM3MzMwNzUgMTMuMjM4NzYyNywxNC4yOTU5MzgxIDEzLjA5MTgzMTgsMTQuMTU2NjczMSBMMTAuOTk2MTMzNCwxMi4wNTk5NjEzIEw4LjkwMDQzNDk5LDE0LjE1NjY3MzEgQzguNzYxMjM3MzEsMTQuMzAzNjc1IDguNTc1NjQwNDEsMTQuMzczMzA3NSA4LjM1OTExMDY4LDE0LjM3MzMwNzUgQzcuOTQ5MjUwODUsMTQuMzczMzA3NSA3LjYyNDQ1NjI2LDE0LjA0ODM1NTkgNy42MjQ0NTYyNiwxMy42MzA1NjA5IEM3LjYyNDQ1NjI2LDEzLjQ0NDg3NDMgNy43MDE3ODgzLDEzLjI1OTE4NzYgNy44NDg3MTkxOSwxMy4xMTk5MjI2IEw5Ljk1MjE1MDgsMTEuMDA3NzM2OSBMNy44NDg3MTkxOSw4LjkwMzI4ODIgQzcuNzAxNzg4Myw4Ljc2NDAyMzIxIDcuNjI0NDU2MjYsOC41NzgzMzY1NiA3LjYyNDQ1NjI2LDguMzkyNjQ5OSBDNy42MjQ0NTYyNiw3Ljk3NDg1NDkzIDcuOTQ5MjUwODUsNy42NTc2NDAyMyA4LjM1OTExMDY4LDcuNjU3NjQwMjMgQzguNTc1NjQwNDEsNy42NTc2NDAyMyA4Ljc0NTc3MDksNy43MjcyNzI3MyA4Ljg4NDk2ODU4LDcuODY2NTM3NzIgTDEwLjk5NjEzMzQsOS45NzA5ODY0NiBMMTMuMTE1MDMxNCw3Ljg1ODgwMDc3IEMxMy4yNjk2OTU1LDcuNzExNzk4ODQgMTMuNDMyMDkyOCw3LjY0MjE2NjM0IDEzLjY0MDg4OTMsNy42NDIxNjYzNCBDMTQuMDUwNzQ5Miw3LjY0MjE2NjM0IDE0LjM3NTU0MzcsNy45NjcxMTc5OSAxNC4zNzU1NDM3LDguMzc3MTc2MDIgQzE0LjM3NTU0MzcsOC41NzA1OTk2MSAxNC4yOTgyMTE3LDguNzQwODEyMzggMTQuMTUxMjgwOCw4Ljg5NTU1MTI2IEwxMi4wNDc4NDkyLDExLjAwNzczNjkgTDE0LjE1MTI4MDgsMTMuMTEyMTg1NyBDMTQuMjkwNDc4NSwxMy4yNTkxODc2IDE0LjM2NzgxMDUsMTMuNDM3MTM3MyAxNC4zNjc4MTA1LDEzLjYzMDU2MDkgQzE0LjM2NzgxMDUsMTQuMDQ4MzU1OSAxNC4wNDMwMTU5LDE0LjM3MzMwNzUgMTMuNjI1NDIyOSwxNC4zNzMzMDc1IFoiIGlkPSL0gIGhIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
                              alt="" width="30" loading="lazy" /></span></button>
                        <h2>
                          Order Summary
                        </h2>
                        <p>
                          You can review your order summary.
                        </p>
                      </div>
                      <div className="order-summary-list">
                        <div className="order-summary-item d-flex align-items-center justify-content-start">
                          <p className="key">
                            TOTAL PRICE
                          </p>
                          <p data-testid="total-price" className="value ltr:tw-ml-auto rtl:tw-mr-auto">
                            US $5.50
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
          <div className="agreement-wrapper my-10">
            <div className="c--checkout_agreement">
              <div className="agreement-list d-grid grid-cols-1 gap-10">

                <div>
                <div className="new-checkbox custom-control custom-checkbox">
                <FormControlLabel 
                required 
                control={<Checkbox />} 
                label="Before completing this order, please confirm your device is eSIM compatible and network-unlocked." />
                <span
                  // data-testid="learn-more-device-compatibility-link"
                  className="label-link cursor-pointer"
                >
                  Learn More
                </span>
                  {/* <input
                    data-testid="device-compatibility-checkbox"
                    id="device-compatibility-checkbox"
                    type="checkbox"
                    name=""
                    className="custom-control-input"
                    value="true"
                  />
                  <label htmlFor="device-compatibility-checkbox" className="custom-control-label">
                    <span>
                      Before completing this order, please confirm your device is eSIM compatible and network-unlocked.{' '}
                      <span
                        data-testid="learn-more-device-compatibility-link"
                        className="label-link cursor-pointer"
                        // @ts-ignore
                        // place="learnMore"
                      >
                        Learn More
                      </span>
                    </span>
                  </label> */}
                </div>
                </div>

              </div>
            </div>
          </div>
          <div className=" d-sm-flex">
            <div className="d-grid grid-cols-md-12 grid-cols-lg-12 w-100">
              <div
                className="d-flex flex-column justify-content-center align-items-center pay-button-wrapper pay-button-general">
                <div className="c--checkout_pay-button pay-button-wrapper"><button data-testid="complete-order-button"
                    className="button button-secondary cursor-pointer btn-primary-hv"><span>
                      COMPLETE ORDER
                    </span></button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  {isOpenChoosePayment && <ChoosePaymentMethodModal isOpen={isOpenChoosePayment} onClose={closeModal} />}
  {isOpenApplyCode && <ApplyCodeModal  isOpen={isOpenApplyCode} onClose={closeModal} />}
</>
  )
}

// const OpenBuyModal: React.FC = () => {
//   const [isOpenChoosePayment, setIsOpenChoosePayment] = React.useState(false);
//   const [isOpenApplyCode, setIsOpenApplyCode] = React.useState(false);

//   const openModal = () => {
//     setIsOpenChoosePayment(true);
//     setIsOpenApplyCode(true);
//   };

//   const closeModal = () => {
//     setIsOpenChoosePayment(false);
//     setIsOpenApplyCode(false);
//   };

//   return(<>
//       {isOpenChoosePayment && <ChoosePaymentMethodModal props={props} isOpen={isOpenChoosePayment} onClose={closeModal} />}
//       {isOpenApplyCode && <ChoosePaymentMethodModal props={props} isOpen={isOpenChoosePayment} onClose={closeModal} />}
//       </>

//   )
//  }

const BuyEsimPage: React.FC<React.PropsWithChildren<{}>> = () => {
  // /esim-buy/:packageName

  // https://www.airalo.com/api/v3/checkouts
  // https://www.airalo.com/api/v3/packages/kargi-mobile-7days-1gb
 
  const { packageName } = useParams();

  const [esimPackage, setEsimPackage] = React.useState<Package | null>(null);
  const [esimCheckouts, setCheckouts] = React.useState<any>(null);

  const getEsimPackage = async () => {
    const response: Package = await apiSettings.fetchPackage(packageName);
    setEsimPackage(response);
  };

  const getEsimCheckouts = async () => {
    const response: Package = await apiSettings.fetchCheckouts(esimPackage?.id);
    setCheckouts(response);
  };

  React.useEffect(() => {
    getEsimPackage();

    if (esimPackage) {
      getEsimCheckouts();
    }
  }, []);

  return (
    <React.Fragment>
      <Header />
      <h1 className="main-title typo-h1">Secure Checkout</h1>
      <BuyPageContent />
      {/* <OpenBuyModal /> */}
    </React.Fragment>
  );
};
export default BuyEsimPage;