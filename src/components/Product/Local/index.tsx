import * as React from "react";
import Box from "@mui/material/Box";
import apiSettings, { Country } from "../../../API/API.tsx";
import { TabPanel } from "../../common/TabPanel/index.tsx";
import ShowMoreButton from "../../common/Buttons/ShowMore/index.tsx";
import CircularProgress from "@mui/material/CircularProgress";

//Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { grey } from "@mui/material/colors";

//Styles
import "./categoryItem.scss";

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

export default function Local() {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [countriesType, setCountriesType] =
    React.useState<string>("popularCountries");
  const [loading, setLoading] = React.useState(true);

  const getPopularCountries = async () => {
    let searchTerm = "countries?type=popular";
    const countries: Country[] = await apiSettings.fetchCountries(searchTerm);
    setCountries(countries);
    setCountriesType("popularCountries");
    setLoading(false);
  };

  const getAllCountries = async () => {
    let searchTerm = "countries?sort=asc";
    const countries: Country[] = await apiSettings.fetchCountries(searchTerm);
    setCountries(countries);
    setCountriesType("allCountries");
    setLoading(false);
  };

  React.useEffect(() => {
    getPopularCountries();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <TabPanel />
      {countriesType === "popularCountries" && (
        <h2 className="typo-h1 mb-20 text-center mb-sm-40">
          Popular Countries
        </h2>
      )}
      {countriesType === "allCountries" && (
        <h2 className="typo-h1 mb-20 text-center mb-sm-40">All Countries</h2>
      )}
      {loading ? (
        <div className="flex justify-center items-center h-[20vh]">
          <CircularProgress />
        </div>
      ) : (
        <div className="customGrid">
          {countries?.map((country, id) => {
            return (
              <a href={`/local-esim/${country.slug}`}>
                <CategoryItem>
                  <div>
                    <img
                      alt={country.slug}
                      src={country.image.url}
                      width={country.image.width / 4}
                      height={country.image.height / 4}
                    ></img>
                  </div>
                  <p style={{ marginLeft: "15px" }}>{country.title}</p>
                </CategoryItem>
              </a>
            );
          })}
        </div>
      )}
      {countriesType === "popularCountries" && (
        <ShowMoreButton click={getAllCountries}>
          <span>SHOW 200+ COUNTRIES</span>
        </ShowMoreButton>
      )}
      {countriesType === "allCountries" && (
        <ShowMoreButton click={getPopularCountries}>
          <span>SHOW POPULAR COUNTRIES</span>
        </ShowMoreButton>
      )}
    </Box>
  );
}
