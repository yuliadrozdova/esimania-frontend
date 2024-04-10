import * as React from "react";
import './showMoreButton.scss';

export default function ShowMoreButton({click, children}) {
  return (
    <div className="show-all-btn-wrapper">
      <button
      onClick={click}
        data-testid="show-all-countries-button"
        className="show-all-btn btn-primary-hv"
      >
        {children}
      </button>
    </div>
  );
}
