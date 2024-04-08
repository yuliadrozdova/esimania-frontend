import React from "react";
import "./categoryItem.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { grey } from "@mui/material/colors";

// Types
type Props = {
  children: any;
  onСlick?: () => void;
};

const CategoryItem: React.FC<Props> = ({ children, onСlick }) => {
  return (
    <React.Fragment>
      <div className="wrapper" onClick={onСlick}>
        <div className="contentWrapper">{children}</div>
        <ExpandMoreIcon sx={{ color: grey[400] }} />
      </div>
    </React.Fragment>
  );
};

export default CategoryItem;
