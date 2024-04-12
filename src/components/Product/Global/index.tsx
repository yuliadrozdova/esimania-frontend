import * as React from "react";
import Box from "@mui/material/Box";
import apiSettings, { Country, Package } from "../../../API/API.tsx";
import PackageInfo from "../PackageInfo/index.tsx";
import TabPanel from "../../common/TabPanel/index.tsx";

function ButtonBlock({ callback }) {
  const [selectionStyle, setSelectionStyle] = React.useState({
    othersTab: "selected",
    dataVoiceTextTab: "",
  });
  const standartClass = `data-type-tabs-button tw-min-w-[50%] sm:tw-min-w-[175px] 
    typo-label typo-sm-p-tabs tw-py-[7.5px] sm:tw-py-[15px] px-20 border-none tw-relative`;

  const btnClick = (e) => {
    callback(e.target.dataset.testid);

    switch (e.target.dataset.testid) {
      case "others-tab":
        setSelectionStyle({ othersTab: "selected", dataVoiceTextTab: "" });
        break;
      case "data-voice-text-tab":
        setSelectionStyle({ othersTab: "", dataVoiceTextTab: "selected" });
        break;
    }
  };

  return (
    <div className="d-flex justify-content-center mt-sm-15 mb-30">
      <div className="data-type-tabs overflow-hidden box-rounded">
        <button
          onClick={btnClick}
          data-testid="others-tab"
          className={`${standartClass} ${selectionStyle.othersTab}`}
        >
          <span data-testid="others-tab" className="tw-relative tw-z-10">
            Data
          </span>
        </button>

        <button
          onClick={btnClick}
          data-testid="data-voice-text-tab"
          className={`${standartClass} ${selectionStyle.dataVoiceTextTab}`}
        >
          <span
            data-testid="data-voice-text-tab"
            className="tw-relative tw-z-10"
          >
            Data / Calls / Texts
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Global() {
  const [globalEsims, setGlobalEsims] = React.useState<Package[]>([]);
  const [otherEsims, setOtherEsims] = React.useState<Package[]>([]);
  const [callsEsims, setCallsEsims] = React.useState<Package[]>([]);
  const [activeTab, setActiveTab] = React.useState<string>("others-tab");

  const getGlobalEsims = async () => {
    const esims: Country = await apiSettings.fetchGlobal();
    return esims;
  };

  React.useEffect(() => {
    async function func() {
      let otherArray: Package[] = [];
      let callsArray: Package[] = [];
      (await getGlobalEsims())?.packages?.forEach((pack, id) => {
        pack?.voice ? callsArray.push(pack) : otherArray.push(pack);
      });
      setOtherEsims(otherArray);
      setCallsEsims(callsArray);
      setGlobalEsims(otherArray);
    }
    func();
  }, []);

  React.useEffect(() => {
    switch (activeTab) {
      case "others-tab":
        setGlobalEsims(otherEsims);

        break;
      case "data-voice-text-tab":
        setGlobalEsims(callsEsims);
        break;
    }
  }, [activeTab]);

  return (
    <Box sx={{ width: "100%" }}>
      <TabPanel />
      <ButtonBlock callback={setActiveTab} />
      <div className="grid">
        {globalEsims?.map((pack, id) => {
          return <PackageInfo props={pack} />;
        })}
      </div>
    </Box>
  );
}
