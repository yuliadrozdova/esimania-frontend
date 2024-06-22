import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import "./search.scss";
import apiSettings from "../../../API/API.tsx";

const SearchResult = ({ props }) => {
  return (
    <ul className="countries-list position-absolute">
      {props.countries.length !== 0 && (
        <>
          <li className="countries-list-segment-container">
            <div className="countries-search-segment">
              <p>Local</p>
            </div>
          </li>
          {props.countries.map((country) => {
            return (
              <a
                href={`/local-esim/${country.slug}`}
                key={`search-result-country-${country?.slug}`}
              >
                <li key={`search-result-country-${country?.slug}`}>
                  <span
                    data-testid={`${country.title}-name`}
                    className="country-name"
                  >
                    {country.title}
                  </span>
                  <img
                    data-testid={`${country.title}-flag`}
                    src={country.image.url}
                    alt={country.title}
                    data-not-lazy=""
                    className="country-flag"
                  />
                </li>
              </a>
            );
          })}
        </>
      )}

      {props.regions.length !== 0 && (
        <>
          <li className="countries-list-segment-container">
            <div className="countries-search-segment">
              <p>Regional</p>
            </div>
          </li>
          {props.regions.map((region) => {
            return (
              <div key={`search-result-region-${region?.slug}`}>
                <a href={`/regional-esim/${region.slug}`}>
                  <li>
                    <span data-testid={`${region.title}-name`}>
                      {region.title}
                    </span>
                    <img
                      src={region.image.url}
                      alt={region.title}
                      data-not-lazy=""
                      className="country-flag"
                    />
                  </li>
                </a>
              </div>
            );
          })}
        </>
      )}
      {props.globals.length !== 0 && (
        <>
          <li className="countries-list-segment-container">
            <div className="countries-search-segment segment-global">
              <p>Global</p>
            </div>
          </li>
          {props.globals.map((global) => {
            return (
              <div key={`search-result-global-${global?.slug}`}>
                <a href={`/global-esim`}>
                  <li>
                    <span
                      data-testid={`${global.title}-name`}
                      className="country-name"
                    >
                      {global.title}
                    </span>
                    <img
                      src={global.image.url}
                      alt={global.title}
                      data-not-lazy=""
                      className="country-flag"
                    />
                  </li>
                </a>
              </div>
            );
          })}
        </>
      )}
    </ul>
  );
};

export default function StoreSearch() {
  const [query, setQuery] = React.useState("");
  const timerRef = React.useRef<number | undefined>();
  const [isShowResults, setShowResults] = React.useState(false);
  const [esims, setEsims] = React.useState(null);
  const searchContainerRef = React.useRef<HTMLDivElement>(null);
  const searchResultRef = React.useRef<HTMLDivElement>(null);

  const handleSearchResultClick = () => {
    setShowResults(true);
  };

  const handleDocumentClick = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target) &&
      !event.target.closest(".search-container")
    ) {
      setShowResults(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  React.useEffect(() => {
    if (searchResultRef.current) {
      searchResultRef.current.addEventListener(
        "click",
        handleSearchResultClick
      );
    }
  }, [searchResultRef]);

  React.useEffect(() => {
    const handleSearchRequest = async () => {
      const response = await apiSettings.fetchSearchEsim(query);
      if (response) {
        setEsims(response);
        setShowResults(true);
      } else {
        setEsims(null);
        setShowResults(false);
      }
    };

    if (query.length >= 2) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        handleSearchRequest();
      }, 1000) as unknown as number;
    } else {
      setShowResults(false);
    }
  }, [query]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div
      ref={searchContainerRef}
      className="c--homepage_country-search country-search-component search-container position-relative"
    >
      <div className="inp-search-container">
        <input
          data-testid="search-input"
          value={query}
          onChange={handleSearch}
          onFocus={() => setShowResults(true)}
          type="text"
          placeholder="Search data packs for 200+ countries and regions"
          className="inp-search mobile-w-100"
        />
        <CancelIcon
          onClick={() => setQuery("")}
          className="clear-close"
          fontSize="small"
        />
        <SearchIcon color="action" />
      </div>

      <div className="search-result-container" ref={searchResultRef}>
        {isShowResults && esims && <SearchResult props={esims} />}
      </div>
    </div>
  );
}
