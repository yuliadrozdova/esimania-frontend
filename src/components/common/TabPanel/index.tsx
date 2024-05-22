import React from "react";
import "./tabPanel.scss";

export const TabPanel: React.FC = () => {
  const arrayEsims = ["local", "regional", "global"];

  const activeTab =
    arrayEsims.find((item) =>
      window.location.pathname.includes(`/${item}-esim`)
    ) || "local";

  const getClassName = (tab) => {
    return activeTab === tab ? "nuxt-link-active active-tab" : "";
  };

  return (
    <div className="route-switcher-tabs noselect">
      <ul>
        <li>
          <a href="/local-esim" className={getClassName("local")}>
            Local eSIMs
          </a>
        </li>
        <li>
          <a href="/regional-esim" className={getClassName("regional")}>
            Regional eSIMs
          </a>
        </li>
        <li>
          <a href="/global-esim" className={getClassName("global")}>
            Global eSIMs
          </a>
        </li>
      </ul>
    </div>
  );
};

export const TabPanelMyEsims: React.FC = () => {
  const arrayEsims = ["current", "archived"];

  const activeTab =
    arrayEsims.find((item) =>
      window.location.pathname.includes(`/${item}`)
    ) || "current";

  const getClassName = (tab) => {
    return activeTab === tab ? "nuxt-link-active active-tab" : "";
  };

  return (
    <div className="route-switcher-tabs noselect">
      <ul>
        <li>
          <a href="/my-esims/current" className={getClassName("current")}>
            Current
          </a>
        </li>
        <li>
          <a href="/my-esims/archived" className={getClassName("archived")}>
            Archived
          </a>
        </li>
      </ul>
    </div>
  );
};
