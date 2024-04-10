import * as React from "react";
import { useParams } from "react-router-dom";
import TabPanel from "../TabPanel/index.tsx";
import Box from "@mui/material/Box";
import apiSettings, { Country } from "../../API/API.tsx";
import "../Regional/regional.scss";
import PackageInfo from "../PackageInfo/index.tsx";
import ShowMoreButton from "../Button/ShowMoreButton.tsx";

export default function CardsList() {
  const { regionSlug } = useParams();
  const { countrySlug } = useParams();
  const [esims, setEsims] = React.useState<Country>();
  const [buttonType, setButtonType] = React.useState<string>(
    regionSlug ? "allRegion" : "popularCountries"
  );

  const getRegionEsims = async () => {
    const response: Country = await apiSettings.fetchRegions(regionSlug);
    setEsims(response);
    setButtonType("allRegion");
  };

  const getCountry = async () => {
    let searchTerm = `countries/${countrySlug}`;
    const response: Country = await apiSettings.fetchCountries(searchTerm);
    setEsims(response);
    setButtonType("popularCountries");
  };

  React.useEffect(() => {
    if (regionSlug) {
      getRegionEsims();
    } else if (countrySlug) {
      getCountry();
    }
  }, []);

  const goToPopularCountries = () => {
    window.location.href = "/local-esim";
  };

  const goToRegionsEsims = () => {
    window.location.href = "/regional-esim";
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabPanel />
      <h2 id="store-title" className="typo-h1 mb-20 text-center mb-sm-40">
        {esims?.title}
      </h2>
      <div className="grid">
        {esims?.packages?.map((pack, id) => {
          return (
            <div key={pack.slug}>
              <PackageInfo props={pack} />
            </div>
          );
        })}
      </div>
      {buttonType === "popularCountries" && (
        <ShowMoreButton click={goToPopularCountries}>
          <span>SHOW POPULAR COUNTRIES</span>
        </ShowMoreButton>
      )}
      {buttonType === "allRegion" && (
        <ShowMoreButton click={goToRegionsEsims}>
          <span>SHOW ALL REGIONS</span>
        </ShowMoreButton>
      )}
    </Box>
  );
}
