import * as React from "react";

function ButtonWithBorder({text}) {
  return (
    <div className="sim-item-bottom-button flex">
      <button type="button" className="btn btn-sim-item-btn btn-block">
        {text.toUpperCase()}
      </button>
    </div>
  );
}
export default ButtonWithBorder;
