import * as React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { grey } from "@mui/material/colors";
import "./header.scss";

const Navigation: React.FC = () => {
  return (
    <div className="header-navigation d-sm-block ml-auto">
      <nav>
        <ul className="cf d-flex align-items-center flex-wrap justify-content-end">
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
                    href="/partner-with-us/airalo-partner-hub"
                    className=""
                    target="_self"
                    data-testid="Airalo Partner Platform-item"
                  >
                    Airalo Partner Platform
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
                    href="/partner-with-us/airalo-for-corporates"
                    className=""
                    target="_self"
                    data-testid="Airalo for Corporates-item"
                  >
                    Airalo for Corporates
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
                    href="/about-us/about-airalo"
                    target="_self"
                    data-testid="About Airalo-item"
                    className=""
                  >
                    About Airalo
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

export default function Header() {
  return (
    <header className="c--shared_header header">
      <div className="header-content d-flex align-items-center">
        <div className="header-logo-link-wrapper d-flex justify-content-center align-items-center w-full align-items-md-start w-md-auto">
          <a
            href="/"
            className="display-inline-flex nuxt-link-exact-active nuxt-link-active"
            aria-current="page"
          >
            <img
              src="https://cdn.airalo.com/assets/images/svg/Logo.svg?w=149&amp;h=44"
              width="149"
              height="44"
              alt="Airalo logo"
              loading="eager"
              data-testid="airalo-logo"
              className="w-auto"
            />
          </a>
        </div>
        <div className="store-link tw-py-2.5 lg:tw-block tw-border-solid tw-border-0 tw-border-zinc-300 ltr:tw-pl-5 ltr:tw-ml-5 ltr:tw-border-l rtl:tw-pr-5 rtl:tw-mr-5 rtl:tw-border-r">
          <a
            href="/"
            className="d-flex justify-content-start align-items-center !tw-no-underline !tw-text-primary nuxt-link-exact-active nuxt-link-active"
            aria-current="page"
          >
            <StorefrontIcon sx={{ color: grey[500] }} fontSize="small" />
            <span className="store-link-text">Store</span>
          </a>
        </div>
        <Navigation />
      </div>
    </header>
  );
}