import * as React from "react";
import { useParams } from "react-router-dom";
import TabPanel from "../TabPanel/index.tsx";
import Box from "@mui/material/Box";
import apiSettings, { Country } from "../../API/API.tsx";
import "../Regional/regional.scss";
import PackageInfo from "../PackageInfo/index.tsx";

export default function CardsList() {
  const { regionSlug } = useParams();
  const { countrySlug } = useParams();
  const [esims, setEsims] = React.useState<Country>();

  const getRegionEsims = async () => {
    const response: Country = await apiSettings.fetchRegions(regionSlug);
    setEsims(response);
  };

  const getCountry = async () => {
    let searchTerm = `countries/${countrySlug}`;
    const response: Country = await apiSettings.fetchCountries(searchTerm);
    setEsims(response);
  };

  React.useEffect(() => {
    if (regionSlug) {
      getRegionEsims();
    } else if (countrySlug) {
      getCountry();
    }
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <TabPanel />
      <h2 id="store-title" className="typo-h1 mb-20 text-center mb-sm-40">
        {esims?.title}
      </h2>
      <div className="grid">
        {esims?.packages?.map((pack, id) => {
          return <div key={pack.slug}> <PackageInfo props={pack} /> </div>;
        })}
      </div>
    </Box>
  );
}
