import React from "react";
import "./infoItem.scss";

//icons
import SwapVertIcon from "@mui/icons-material/SwapVert";
import LanguageIcon from "@mui/icons-material/Language";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CallIcon from "@mui/icons-material/Call";
import TextsmsIcon from "@mui/icons-material/Textsms";

function InfoItem({ name, value }) {
  const isCountries = Array.isArray(value);

  const getValue = (value) => {
    return value.length > 1 ? `${value.length} Countries` : value[0].title;
  };

  const finalValue = isCountries ? getValue(value) : value;
  let icon;
  switch (name.toLowerCase()) {
    case "coverage":
      icon = <LanguageIcon className="package-icon" />;
      break;
    case "data":
      icon = <SwapVertIcon className="package-icon" />;
      break;
    case "calls":
      icon = <CallIcon className="package-icon" />;
      break;
    case "texts":
      icon = <TextsmsIcon className="package-icon" />;
      break;
    case "validity":
      icon = <CalendarMonthIcon className="package-icon" />;
      break;
    case "price":
      icon = <LocalOfferIcon className="package-icon" />;
      break;
  }

  return (
    <li key={name}>
      <div className={`sim-item-row ${name} light`}>
        {icon}
        <p data-testid={`${name}-row`} className="key sim-item-row-left-key">
          {name}
        </p>
        <p
          data-testid="promotional-price-value"
          className="value sim-item-row-right-value tw-ml-auto overflow-hidden"
        >
          {finalValue}
        </p>
      </div>
    </li>
  );
}

export default InfoItem;
