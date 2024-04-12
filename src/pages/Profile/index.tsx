import * as React from "react";
import Header from "../../components/common/Header/index.tsx";
import StoreSearch from "../../components/common/StoreSearch/index.tsx";
import { useParams } from "react-router-dom";
import SettingsPage from "./Settings/index.tsx";
import MoneyPage from "./Money/index.tsx";
import CreditCardsPage from "./CreditCards/index.tsx";
import ReferralPage from "./Referral/index.tsx";
import OrdersPage from "./Orders/index.tsx";
import NavigationForBlocks from "../../components/common/NavigationForBlocks/index.tsx";

const UserProfilePage: React.FC = () => {
  const { profilePage } = useParams();
  const [childComponent, setChildComponent] =
    React.useState<React.ReactNode>(null);

  const getChildComponent = () => {
    if (!profilePage) {
        return <SettingsPage profileContent={profileContent}/>;
    }

    switch (profilePage) {
      case "settings":
        return <SettingsPage profileContent={profileContent}/>;
        break;
      case "money":
        return <MoneyPage />;
        break;
      case "credit-cards":
        return <CreditCardsPage />;
        break;
      case "referral":
        return <ReferralPage />;
        break;
      case "orders":
        return <OrdersPage />;
        break;
      default:
        return <SettingsPage profileContent={profileContent}/>;
        break;
    }
  };

  React.useEffect(() => {
    const newComponent = getChildComponent();
    return setChildComponent(newComponent);
  }, []);

  const profileContent = {
    name: "Юлия Дроздова",
    role: "Traveler",
    email: "drozdova.y16@gmail.com",
    password: "No password created",
  };

  return (
    <React.Fragment>
      <Header />
      <h1 className="main-title typo-h1">Profile</h1>
      <div>
        <div className="flex justify-between">
          <div><NavigationForBlocks /></div>
          <div className="md:w-2/3">{childComponent}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default UserProfilePage;
