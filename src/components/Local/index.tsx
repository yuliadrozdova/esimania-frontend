import * as React from "react";
import Box from "@mui/material/Box";
import apiSettings, { Country } from "../../API/API.tsx";
import CategoryItem from "../Category/index.tsx";
import TabPanel from "../TabPanel/index.tsx";

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
    </Box>
  );
}
