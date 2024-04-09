import * as React from "react";
import Box from "@mui/material/Box";
import apiSettings, { Country } from "../../API/API.tsx";
import TabPanel from "../TabPanel/index.tsx";
// import ShowMoreButton from "../Button/showMoreButton.tsx";
// import BuyButton from "../Button/buyButton.tsx";


//Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { grey } from "@mui/material/colors";

//Styles
import './categoryItem.scss';
// import ShowMoreButton from "../Button/showMoreButton.tsx";

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

  const getAllCountries = async () => {
    let searchTerm = "countries?type=popular";
    const countries: Country[] = await apiSettings.fetchCountries(searchTerm);
    setCountries(countries);
  };

  React.useEffect(() => {
    getAllCountries();
  }, []);
  // https://www.airalo.com/api/v3/countries?sort=asc

  return (
    <Box sx={{ width: "100%" }}>
      <TabPanel />
      <h2 className="typo-h1 mb-20 text-center mb-sm-40">Popular Countries</h2>
      <div className="grid">
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
      {/* <ShowMoreButton url={`local-esim`}> <span>ПОКАЗАТЬ 200 СТРАН</span></ShowMoreButton> */}
    </Box>
  );
}
