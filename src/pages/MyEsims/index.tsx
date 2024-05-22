import * as React from "react";
import Header from "../../components/common/Header/index.tsx";
import StoreSearch from "../../components/common/StoreSearch/index.tsx";
import Footer from "../../components/common/Footer/index.tsx";
import NavigationForBlocks from "../../components/common/NavigationForBlocks/index.tsx";
import { useParams } from "react-router-dom";
import BreadcrumbsComponent from "../../components/common/Breadcrumbs/index.tsx";
import SettingsPage from "../Profile/Settings/index.tsx";
import EsimsPage from "./EsimsPage/index.tsx";
import EmptyEsimsPage from "./EmptyPage/index.tsx";
import { TabPanelMyEsims } from "../../components/common/TabPanel/index.tsx";

const MyEsimsPage: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { esimsType } = useParams();
  const [childComponent, setChildComponent] =
    React.useState<React.ReactNode>(null);
  const [breadcrumbsLabelPage, setBreadcrumbsLabelPage] = React.useState<
    string | null
  >(null);

  const getChildComponent = () => {
    if (!esimsType) {
      setBreadcrumbsLabelPage("Current eSIMs");
      // return <SettingsPage profileContent={profileContent} />;
      return <EsimsPage />;
    }

    switch (esimsType) {
      case "current":
        setBreadcrumbsLabelPage("Current eSIMs");
        // return <EsimsPage profileContent={profileContent} />;
        return <EsimsPage />;
        break;
      case "archived":
        setBreadcrumbsLabelPage("Archived eSIMs");
        // return <SettingsPage profileContent={profileContent} />;
        return <EmptyEsimsPage />;
        break;
      default:
        setBreadcrumbsLabelPage("Current eSIMs");
        // return <SettingsPage profileContent={profileContent} />;
        return <EsimsPage />;
        break;
    }
  };

  const breadcrumbsData = [
    { label: "Home", link: "/" },
    { label: "My eSIMs", link: "/my-esims" },
  ];

  React.useEffect(() => {
    const newComponent = getChildComponent();
    return setChildComponent(newComponent);
  }, []);
  // https://www.airalo.com/api/v2/users/me/sims/?type=normal
  // https://www.airalo.com/api/v2/users/me/sims/?type=archived

  // const profileContent = {
  //   name: "Ivan Ivanov",
  //   role: "Traveler",
  //   email: "ivanov.i@gmail.com",
  //   password: "No password created",
  // };

  const navItems = [
    { name: "Current eSIMs", url: "/my-esims" || "/my-esims/current" },
    { name: "Archived eSIMs", url: "/my-esims/archived" },
  ];

  //добавить кнопку перехода на другую страницу
  return (
    <React.Fragment>
    <Header />
    <h1 className="main-title typo-h1">My eSIMs</h1>
    {/* <BreadcrumbsComponent
        items={breadcrumbsData}
        unclickableLabel={breadcrumbsLabelPage}
      /> */}
      <TabPanelMyEsims />

    <div>
        {/* <div className="grid grid-cols-6 gap-30 md:grid-cols-12"> */}
        <div>
          {/* <div className="hidden lg:flex lg:col-span-4">
            <div className="w-full">
              <NavigationForBlocks navItems={navItems} />
            </div>
          </div> */}
          {/* <div className="col-span-6 md:col-span-12 lg:col-span-7 lg:col-start-6"> */}
            {childComponent}
          {/* </div> */}
        </div>
      </div>
    <Footer />
  </React.Fragment>
  );
};
export default MyEsimsPage;
