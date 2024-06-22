import * as React from "react";
import Box from "@mui/material/Box";
import apiSettings, { Country } from "../../../API/API.tsx";
import { TabPanel } from "../../common/TabPanel/index.tsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircularProgress from "@mui/material/CircularProgress";
import "./regional.scss";

export default function Regional() {
  const [regionsEsims, setRegionsEsims] = React.useState<Country[]>([]);
  const [loading, setLoading] = React.useState(true);

  const getRegionsEsims = async () => {
    const esims: Country[] = await apiSettings.fetchRegions();
    setRegionsEsims(esims);
    setLoading(false);
  };

  React.useEffect(() => {
    getRegionsEsims();
  }, []);

  const getRegionName = (slug) => {
    switch (slug) {
      case "asia":
        return "Asia";
      case "africa":
        return "Africa";
      case "middle-east-and-north-africa":
        return "Middle East and North Africa";
      case "europe":
        return "Europe";
      case "caribbean-islands":
        return "Caribbean Islands";
      case "latin-america":
        return "Latin America";
      case "north-america":
        return "North America";
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabPanel />
      <h2 className="typo-h1 mb-20 text-center mb-sm-40">Regions</h2>
      {loading ? (
        <div className="flex justify-center items-center h-[20vh]">
          <CircularProgress />
        </div>
      ) : (
        <div className="customGrid">
          {regionsEsims?.map((region, id) => {
            return (
              <div id={`regional-${region.id}`} className="store-item">
                <div className="c--homepage_country-list-item country-item">
                  <div>
                    <a href={`/regional-esim/${region.slug}`} className="">
                      <div className="c--shared_country-name-in-flag flex justify-content-start align-items-center country-name">
                        <div className="flag country-list-item">
                          <img
                            src={region.image.url}
                            alt={region.slug}
                            width="37"
                            height="27.75"
                            className="lazyLoad isLoaded"
                          />
                        </div>
                        <p>{getRegionName(region.slug)}</p>
                      </div>
                      <ExpandMoreIcon />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Box>
  );
}
