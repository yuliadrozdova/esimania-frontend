import * as React from "react";
import './showMoreButton.scss';

export default function ShowMoreButton({children, url}) {
  return (
    <div className="show-all-btn-wrapper">
      <a href={url}><button
        data-testid="show-all-countries-button"
        className="show-all-btn btn-primary-hv"
      >
        {children}
        {/* <span>
          ПОКАЗАТЬ <KeyboardArrowRightIcon fontSize="small" /> 200 СТРАН
        </span> */}
      </button></a>
    </div>
  );
}
