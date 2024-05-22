import * as React from "react";
import Header from "../../components/common/Header/index.tsx";
import StoreSearch from "../../components/common/StoreSearch/index.tsx";
import apiSettings, { Package } from "../../API/API.tsx";
import { useParams } from "react-router-dom";
import "./buy.scss";
import { Checkbox, FormControlLabel } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChoosePaymentMethodModal from "../../components/common/ModalWindows/ChoosePaymentModal/index.tsx";
import ApplyCodeModal from "../../components/common/ModalWindows/ApplyCodeModal/index.tsx";
import Footer from "../../components/common/Footer/index.tsx";
import InfoItem from "../../components/Product/InfoItem/index.tsx";

//TYPES
type Props = {
  props: Package;
  children?: any;
  callback?: () => void;
};

const BuyPageContent: React.FC<Props> = ({ props }) => {
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
          {/* <div className="grid gap-30 grid-cols-lg-1 grid-cols-lg-12"> */}
          <div className="">
            <div className="col-span-lg-8 col-start-lg-3">
              <div className="grid grid-cols-1 gap-20 gap-sm-30 gap-lg-40 py-20 py-sm-30 py-lg-40">
                <div>
                  <div className="c--checkout_header esim-buy-header-wrapper w-100 theme-light secure-checkout">
                    <div className="esim-buy-header relative">
                      {/* <div className="esim-buy-header-image"><img
                    src="" width="335"
                    alt="kargi-mobile-7days-1gb" className="lazyLoad isLoaded" /></div> */}
                      <div
                        data-testid="checkout-sim-detail-header"
                        className="esim-buy-header-inner relative shadowed-big"
                        style={{
                          background:
                            "linear-gradient(90deg, rgb(208, 4, 35) 0px, rgb(237, 4, 37))",
                        }}
                      >
                        <div className="tw-flex">
                          <div className="esim-buy-header-info-top tw-grow">
                            <div className="sm:ltr:tw-pl-5 sm:rtl:tw-pr-5">
                              <p className="operator-title">
                                {props.operator.title}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="esim-buy-header-info-bottom">
                          <ul className="esim-buy-header-info-list">
                            {/* <ul className="sim-detail-info-list"> */}
                            <InfoItem
                              name={"COVERAGE"}
                              value={props.operator.countries}
                            />
                            <InfoItem name={"DATA"} value={props.data} />
                            {props?.voice && (
                              <InfoItem
                                name={"CALLS"}
                                value={props.voice + " Mins"}
                              />
                            )}
                            {props?.text && (
                              <InfoItem
                                name={"TEXTS"}
                                value={props.text + " SMS"}
                              />
                            )}
                            <InfoItem
                              name={"VALIDITY"}
                              value={props.validity}
                            />
                            <InfoItem
                              name={"PRICE"}
                              value={"US $" + props.price}
                            />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-20">
                  <div className="choosing-wrapper grid grid-cols-1 grid-cols-sm-2 gap-30">
                    <div className="choose-payment-method-wrapper">
                      <div className="c--checkout_choose-box choose-box-wrapper flex flex-column h-100">
                        <div className="choose-box-header w-100 mb-20">
                          <h2>Choose Payment Method</h2>
                          <p>
                            You can choose or change the payment method to
                            complete your order.
                          </p>
                        </div>
                        <div className="choose-box w-100 mt-auto">
                          <div
                            onClick={openChoosePaymentModal}
                            className="choose-box-inner relative flex justify-content-between align-items-center cursor-pointer"
                          >
                            <p
                              data-testid="Choose Payment Method-payment-option"
                              className="select"
                            >
                              Choose Payment Method
                            </p>
                            <ArrowForwardIosIcon
                              fontSize="small"
                              className="ml-10"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="choose-code-wrapper">
                      <div className="c--checkout_choose-box choose-box-wrapper flex flex-column h-100">
                        <div className="choose-box-header w-100 mb-20">
                          <h2>Apply Code or Use Esimoney</h2>
                          <p>
                            You can apply your discount / referral code or use
                            Esimoney upon purchase.
                          </p>
                        </div>
                        <div
                          className="choose-box w-100 mt-auto"
                          onClick={openApplyCodeModal}
                        >
                          <div className="choose-box-inner relative flex justify-content-between align-items-center cursor-pointer">
                            <p
                              data-testid="Apply Code / Use Emoney-payment-option"
                              className="select"
                            >
                              Apply Code / Use Esimoney
                            </p>
                            <ArrowForwardIosIcon
                              fontSize="small"
                              className="ml-10"
                            />
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
                        <h2>Order Summary</h2>
                        <p>You can review your order summary.</p>
                      </div>
                      <div className="order-summary-list">
                        <div className="order-summary-item flex align-items-center justify-content-between">
                          <p className="key">TOTAL PRICE</p>
                          <p
                            data-testid="total-price"
                            className="value ltr:tw-ml-auto rtl:tw-mr-auto"
                          >
                            {"US $" + props.price}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="order-summary-mobile display-sm-none">
                      <div className="order-summary-mobile-inner">
                        <div id="" className="collapse show">
                          <div className="grid grid-cols-2 gap-20 px-20 py-20">
                            <div className="order-summary-mobile-info flex flex-column align-items-start justify-content-center">
                              <p className="title m-0">AMOUNT TO BE PAID</p>
                              <p className="price flex align-items-start justify-content-center mb-0 mt-10">
                                {"US $" + props.price}
                                {/* <span className="c--shared_icons icon-wrapper flex"><img
                              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+NjVGNjM2Q0MtMEU4Ni00RTY0LUI2OTEtNjU4NjNFODAzQUFFPC90aXRsZT4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iX0Fzc2V0cy9JY29ucy9pY19hcnJvd19nZW5lcmFsL0xpZ2h0LU1vZGUiIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS41Mjk3OTEzLDE3IEMxNS43ODIxNjMyLDE3IDE2LjAwMTMyODMsMTYuOTEzNDI5NSAxNi4xNzQwMDM4LDE2LjczMzYyOTMgTDIxLjI2NzkzMTcsMTEuNzM5MTc4NyBDMjEuNTAwMzc5NSwxMS41MTk0MjI5IDIxLjYsMTEuMjc5Njg5MiAyMS42LDExIEMyMS42LDEwLjcxMzY1MTUgMjEuNTAwMzc5NSwxMC40ODA1NzcxIDIxLjI2NzkzMTcsMTAuMjYwODIxMyBMMTYuMTc0MDAzOCw1LjI2NjM3MDcgQzE2LjAwMTMyODMsNS4wODY1NzA0OCAxNS43ODg4MDQ2LDUgMTUuNTI5NzkxMyw1IEMxNS4wMTg0MDYxLDUgMTQuNiw1LjQxMjg3NDU4IDE0LjYsNS45MjU2MzgxOCBDMTQuNiw2LjE3ODY5MDM0IDE0LjcwNjI2MTksNi40MTE3NjQ3MSAxNC44OTIyMjAxLDYuNTk4MjI0MiBMMTkuNDA4MzQ5MSwxMC45OTMzNDA3IEwxNC44OTIyMjAxLDE1LjQwMTc3NTggQzE0LjcwNjI2MTksMTUuNTgxNTc2IDE0LjYsMTUuODE0NjUwNCAxNC42LDE2LjA3NDM2MTggQzE0LjYsMTYuNTg3MTI1NCAxNS4wMTg0MDYxLDE3IDE1LjUyOTc5MTMsMTcgWiIgaWQ9IvSAhooiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                              alt="" width="22" height="22" loading="lazy" /></span> */}
                              </p>
                            </div>
                            <div className="order-summary-mobile-button">
                              <div className="relative pay-button-general">
                                <div className="c--checkout_pay-button pay-button-wrapper">
                                  <button
                                    data-testid="complete-order-button"
                                    className="button button-secondary cursor-pointer btn-primary-hv"
                                  >
                                    <span>COMPLETE ORDER</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* <div className="order-summary-mobile-open not-collapsed" role="button" tabindex="0"
                        aria-expanded="true" aria-controls="" style={{overflowAnchor: 'none'}}></div> */}
                          </div>
                        </div>
                        <div
                          id=""
                          className="collapse"
                          style={{ display: "none" }}
                        >
                          <div className="order-summary-mobile-list">
                            <div className="order-summary-mobile-list-header px-20 pb-20">
                              <button
                                type="button"
                                className="btn close-btn btn-link not-collapsed"
                                aria-expanded="true"
                                aria-controls=""
                                style={{ overflowAnchor: "none" }}
                              >
                                <span className="c--shared_icons icon-wrapper flex">
                                  <img
                                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+MzUwMTUzMDUtNzVBMy00M0Q3LUJCQUQtN0FGMTRDMTdCRjM5PC90aXRsZT4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iX0Fzc2V0cy9JY29ucy9pY19jbGVhci9MaWdodC1Nb2RlIiBmaWxsPSIjNEE0QTRBIj4KICAgICAgICAgICAgPHBhdGggZD0iTTEwLjk5NjEzMzQsMTkgQzE1LjM4MDg2MDMsMTkgMTksMTUuMzc5MTEwMyAxOSwxMSBDMTksNi42MjA4ODk3NSAxNS4zNzMxMjcxLDMgMTAuOTg4NDAwMiwzIEM2LjYxMTQwNjQ4LDMgMyw2LjYyMDg4OTc1IDMsMTEgQzMsMTUuMzc5MTEwMyA2LjYxOTEzOTY4LDE5IDEwLjk5NjEzMzQsMTkgWiBNMTMuNjI1NDIyOSwxNC4zNzMzMDc1IEMxMy40MTY2MjY0LDE0LjM3MzMwNzUgMTMuMjM4NzYyNywxNC4yOTU5MzgxIDEzLjA5MTgzMTgsMTQuMTU2NjczMSBMMTAuOTk2MTMzNCwxMi4wNTk5NjEzIEw4LjkwMDQzNDk5LDE0LjE1NjY3MzEgQzguNzYxMjM3MzEsMTQuMzAzNjc1IDguNTc1NjQwNDEsMTQuMzczMzA3NSA4LjM1OTExMDY4LDE0LjM3MzMwNzUgQzcuOTQ5MjUwODUsMTQuMzczMzA3NSA3LjYyNDQ1NjI2LDE0LjA0ODM1NTkgNy42MjQ0NTYyNiwxMy42MzA1NjA5IEM3LjYyNDQ1NjI2LDEzLjQ0NDg3NDMgNy43MDE3ODgzLDEzLjI1OTE4NzYgNy44NDg3MTkxOSwxMy4xMTk5MjI2IEw5Ljk1MjE1MDgsMTEuMDA3NzM2OSBMNy44NDg3MTkxOSw4LjkwMzI4ODIgQzcuNzAxNzg4Myw4Ljc2NDAyMzIxIDcuNjI0NDU2MjYsOC41NzgzMzY1NiA3LjYyNDQ1NjI2LDguMzkyNjQ5OSBDNy42MjQ0NTYyNiw3Ljk3NDg1NDkzIDcuOTQ5MjUwODUsNy42NTc2NDAyMyA4LjM1OTExMDY4LDcuNjU3NjQwMjMgQzguNTc1NjQwNDEsNy42NTc2NDAyMyA4Ljc0NTc3MDksNy43MjcyNzI3MyA4Ljg4NDk2ODU4LDcuODY2NTM3NzIgTDEwLjk5NjEzMzQsOS45NzA5ODY0NiBMMTMuMTE1MDMxNCw3Ljg1ODgwMDc3IEMxMy4yNjk2OTU1LDcuNzExNzk4ODQgMTMuNDMyMDkyOCw3LjY0MjE2NjM0IDEzLjY0MDg4OTMsNy42NDIxNjYzNCBDMTQuMDUwNzQ5Miw3LjY0MjE2NjM0IDE0LjM3NTU0MzcsNy45NjcxMTc5OSAxNC4zNzU1NDM3LDguMzc3MTc2MDIgQzE0LjM3NTU0MzcsOC41NzA1OTk2MSAxNC4yOTgyMTE3LDguNzQwODEyMzggMTQuMTUxMjgwOCw4Ljg5NTU1MTI2IEwxMi4wNDc4NDkyLDExLjAwNzczNjkgTDE0LjE1MTI4MDgsMTMuMTEyMTg1NyBDMTQuMjkwNDc4NSwxMy4yNTkxODc2IDE0LjM2NzgxMDUsMTMuNDM3MTM3MyAxNC4zNjc4MTA1LDEzLjYzMDU2MDkgQzE0LjM2NzgxMDUsMTQuMDQ4MzU1OSAxNC4wNDMwMTU5LDE0LjM3MzMwNzUgMTMuNjI1NDIyOSwxNC4zNzMzMDc1IFoiIGlkPSL0gIGhIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
                                    alt=""
                                    width="30"
                                    loading="lazy"
                                  />
                                </span>
                              </button>
                              <h2>Order Summary</h2>
                              <p>You can review your order summary.</p>
                            </div>
                            <div className="order-summary-list">
                              <div className="order-summary-item flex align-items-center justify-content-start">
                                <p className="key">TOTAL PRICE</p>
                                <p
                                  data-testid="total-price"
                                  className="value ltr:tw-ml-auto rtl:tw-mr-auto"
                                >
                                  {"US $" + props.price}
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
                    <div className="agreement-list grid grid-cols-1 gap-10">
                      <div>
                        <div className="new-checkbox custom-control custom-checkbox">
                          <FormControlLabel
                            required
                            control={<Checkbox />}
                            label="Before completing this order, please confirm your device is eSIM compatible and network-unlocked."
                          />
                          <span className="label-link cursor-pointer">
                            Learn More
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" d-sm-flex">
                  <div className="grid grid-cols-md-12 grid-cols-lg-12 w-100">
                    <div className="flex flex-column justify-content-center align-items-center pay-button-wrapper pay-button-general">
                      <div className="c--checkout_pay-button pay-button-wrapper">
                        <button
                          data-testid="complete-order-button"
                          className="button button-secondary cursor-pointer btn-primary-hv"
                        >
                          <span>COMPLETE ORDER</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpenChoosePayment && (
        <ChoosePaymentMethodModal
          isOpen={isOpenChoosePayment}
          onClose={closeModal}
        />
      )}
      {isOpenApplyCode && (
        <ApplyCodeModal isOpen={isOpenApplyCode} onClose={closeModal} />
      )}
    </>
  );
};

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
      {esimPackage && <BuyPageContent props={esimPackage} />}
      <Footer />
    </React.Fragment>
  );
};
export default BuyEsimPage;
