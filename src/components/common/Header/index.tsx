import * as React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SimCardIcon from "@mui/icons-material/SimCard";
import LogoutIcon from "@mui/icons-material/Logout";
import PixIcon from "@mui/icons-material/Pix";
import { grey, red } from "@mui/material/colors";
import "./header.scss";
import { IS_AUTH } from "../../../config/config.tsx";

const Navigation: React.FC = () => {
  return (
    <div className="header-navigation d-sm-block ml-auto">
      <nav>
        <ul className="cf flex align-items-center flex-wrap justify-content-end">
          <li className="nav-item-with-sub-menu">
            <div
              dir="ltr"
              className="c--shared_header_item-block header-item-block"
            >
              <span className="c--shared_header_item header-item">
                Partner with Us
              </span>
              <KeyboardArrowDownIcon fontSize="small" className="ml-10" />
            </div>
            <div className="header-sub-menu-wrapper">
              <ul className="c--shared_header_sub-menu sub-menu size-small">
                <li>
                  <a
                    href="/partner-with-us/partner-hub"
                    className=""
                    target="_self"
                    data-testid="Partner Platform-item"
                  >
                    Partner Platform
                  </a>
                </li>
                <li>
                  <a
                    href="/partner-with-us/affiliate-partners"
                    className=""
                    target="_self"
                    data-testid="Affiliate Partners-item"
                  >
                    Affiliate Partners
                  </a>
                </li>
                <li>
                  <a
                    href="/partner-with-us/distrubition-partners"
                    className=""
                    target="_self"
                    data-testid="Distribution Partners-item"
                  >
                    Distribution Partners
                  </a>
                </li>
                <li>
                  <a
                    href="/partner-with-us/api-partners"
                    className=""
                    target="_self"
                    data-testid="API Partners-item"
                  >
                    API Partners
                  </a>
                </li>
                <li>
                  <a
                    href="/partner-with-us/esim-for-corporates"
                    className=""
                    target="_self"
                    data-testid="Esim for Corporates-item"
                  >
                    Esim for Corporates
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item-with-sub-menu">
            <div
              dir="ltr"
              className="c--shared_header_item-block header-item-block"
            >
              <span className="c--shared_header_item header-item">
                About Us
              </span>
              <KeyboardArrowDownIcon fontSize="small" className="ml-10" />
            </div>
            <div className="header-sub-menu-wrapper">
              <ul className="c--shared_header_sub-menu sub-menu size-small">
                <li>
                  <a
                    href="/about-us/about-us"
                    target="_self"
                    data-testid="About us"
                    className=""
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us/impact"
                    target="_self"
                    data-testid="Impact-item"
                    className=""
                  >
                    Impact
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us/newsroom"
                    target="_self"
                    data-testid="Newsroom-item"
                    className=""
                  >
                    Newsroom
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us/media-center"
                    target="_self"
                    data-testid="Media Center-item"
                    className=""
                  >
                    Media Center
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="">
            <div
              dir="ltr"
              className="c--shared_header_item-block header-item-block"
            >
              <AccountCircleIcon
                sx={{ color: grey[500] }}
                fontSize="small"
                className="c--shared_header_item header-item mr-10"
              />
              <a
                href="/auth/login"
                className="d-inline-flex justify-content-start align-items-center"
                data-testid="Log in-btn"
              >
                <span className="c--shared_header_item header-item">
                  Log in
                </span>
              </a>
              <span className="c--shared_header_item header-item ml-5px mr-5px">
                /
              </span>
              <a
                href="/auth/signup"
                className="d-inline-flex justify-content-start align-items-center"
                data-testid="Sign up-btn"
              >
                <span className="c--shared_header_item header-item">
                  Sign up
                </span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const MoneyHeader: React.FC = () => {
  return (
    <div className="ml-auto">
      <div data-testid="money-header" className="c--shared_header_money">
        <a
          href="/profile/money"
          className="flex flex-sm-row justify-content-center align-items-end align-items-sm-center text-decoration-none color-text-primary"
        >
          <span className="flex justify-content-start align-items-center">
            <PixIcon
              sx={{ color: grey[500] }}
              fontSize="small"
              className="tw-text-zinc-500 tw-text-4 mr-3px"
            />
            <span className="typo-h6 typo-sm-p font-weight-sm-normal">
              money:
            </span>
          </span>
          <span
            data-testid="money-value"
            className="money-box flex justify-content-center align-items-center border-default border-solid color-border-light border-sm-unset box-rounded px-10 px-sm-0 py-3px py-sm-0 ml-5px"
          >
            <sup className="typo-input-heading">US$</sup>
            <span className="typo-h3">0.00</span>
          </span>
        </a>
      </div>
    </div>
  );
};

const AuthorizedNavigation: React.FC = () => {
  const userName = 'Ivan Ivanov';
  return (
    <div className="header-navigation d-sm-block">
      <nav>
        <ul className="cf flex align-items-center flex-wrap justify-content-end border-l border-l-solid color-border-left-light pl-10 ml-10 pl-lg-20 ml-lg-20">
          <li data-testid="account-menu" className="">
            <div
              dir="ltr"
              className="c--shared_header_item-block header-item-block"
            >
              <a
                href="/my-esims/"
                className="d-inline-flex justify-content-start align-items-center"
              >
                <span className="c--shared_header_item header-item">
                  <SimCardIcon
                    sx={{ color: grey[500] }}
                    fontSize="small"
                    className="tw-text-zinc-500 tw-text-4 mr-10 mr-md-5px"
                  />
                  My eSIMs
                </span>
              </a>
            </div>
          </li>
          <li data-testid="account-menu" className="nav-item-with-sub-menu">
            <div
              dir="ltr"
              className="c--shared_header_item-block header-item-block"
            >
              <span className="c--shared_header_item header-item">
                <AccountCircleIcon
                  sx={{ color: grey[500] }}
                  fontSize="small"
                  className="c--shared_header_item header-item mr-10"
                />
                {userName}
              </span>
              <KeyboardArrowDownIcon fontSize="small" className="ml-10" />
            </div>
            <div className="header-sub-menu-wrapper">
              <ul className="c--shared_header_sub-menu sub-menu size-small">
                <li>
                  <a
                    href="/profile/settings"
                    className=""
                    target="_self"
                    data-testid="Account Information-item"
                  >
                    Account Information
                  </a>
                </li>
                <li>
                  <a
                    href="/profile/money"
                    className=""
                    target="_self"
                    data-testid="money &amp; Membership-item"
                  >
                    Money &amp; Membership
                  </a>
                </li>
                <li>
                  <a
                    href="/profile/credit-cards"
                    className=""
                    target="_self"
                    data-testid="Saved Cards-item"
                  >
                    Saved Cards
                  </a>
                </li>
                <li>
                  <a
                    href="/profile/referral"
                    className=""
                    target="_self"
                    data-testid="Refer &amp; Earn-item"
                  >
                    Refer &amp; Earn
                  </a>
                </li>
                <li>
                  <a
                    href="/profile/orders"
                    className=""
                    target="_self"
                    data-testid="Orders-item"
                  >
                    Orders
                  </a>
                </li>
                <li>
                  <a className="logout-text">
                    Logout
                    <LogoutIcon
                      sx={{ color: red[500] }}
                      fontSize="small"
                      className="tw-text-4 sub-menu-item-image"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default function Header() {
  return (
    <header className="c--shared_header header">
      <div className="header-content flex align-items-center">
        <div className="header-logo-link-wrapper flex justify-content-center align-items-center w-full align-items-md-start w-md-auto">
          <a
            href="/"
            className="display-inline-flex nuxt-link-exact-active nuxt-link-active"
            aria-current="page"
          >
            <img
              src=""
              width="149"
              height="44"
              alt="logo"
              loading="eager"
              data-testid="logo"
              className="w-auto"
            />
          </a>
        </div>
        <div className="store-link tw-py-2.5 lg:tw-block tw-border-solid tw-border-0 tw-border-zinc-300 ltr:tw-pl-5 ltr:tw-ml-5 ltr:tw-border-l rtl:tw-pr-5 rtl:tw-mr-5 rtl:tw-border-r">
          <a
            href="/"
            className="flex justify-content-start align-items-center !tw-no-underline !tw-text-primary nuxt-link-exact-active nuxt-link-active"
            aria-current="page"
          >
            <StorefrontIcon sx={{ color: grey[500] }} fontSize="small" />
            <span className="store-link-text">Store</span>
          </a>
        </div>
        {IS_AUTH && (
          <>
            <MoneyHeader />
            <AuthorizedNavigation />
          </>
        )}
        {!IS_AUTH && <Navigation />}
      </div>
    </header>
  );
}
