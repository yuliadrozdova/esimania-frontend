import * as React from "react";
import Box from "@mui/material/Box";
import apiSettings, { Country, Package } from "../../../API/API.tsx";
// import PackageInfo from "../PackageInfo/index.tsx";
import TabPanel from "../../../components/common/TabPanel/index.tsx";
import ShareBlock from "../../../components/common/ShareBlock/index.tsx";

export default function ReferralPage() {
  return (
    <Box sx={{ width: "100%" }}>
      <h3>Referral</h3>
      <ShareBlock />
    </Box>
  );
}
