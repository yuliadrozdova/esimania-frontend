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
import BreadcrumbsComponent from "../../components/common/Breadcrumbs/index.tsx";
import LogoutButton from "../../components/common/Buttons/Logout/index.tsx";
import Footer from "../../components/common/Footer/index.tsx";

const UserProfilePage: React.FC = () => {
  const { profilePage } = useParams();
  const [childComponent, setChildComponent] =
    React.useState<React.ReactNode>(null);
  const [breadcrumbsLabelPage, setBreadcrumbsLabelPage] = React.useState<
    string | null
  >(null);

  const getChildComponent = () => {
    if (!profilePage) {
      setBreadcrumbsLabelPage("Account Information");
      return <SettingsPage profileContent={profileContent} />;
    }

    switch (profilePage) {
      case "settings":
        setBreadcrumbsLabelPage("Account Information");
        return <SettingsPage profileContent={profileContent} />;
        break;
      case "money":
        setBreadcrumbsLabelPage("Money & Membership");
        return <MoneyPage />;
        break;
      case "credit-cards":
        setBreadcrumbsLabelPage("Saved Cards");
        return <CreditCardsPage />;
        break;
      case "referral":
        setBreadcrumbsLabelPage("Refer & Earn");
        return <ReferralPage />;
        break;
      case "orders":
        setBreadcrumbsLabelPage("Orders");
        return <OrdersPage />;
        break;
      default:
        setBreadcrumbsLabelPage("Account Information");
        return <SettingsPage profileContent={profileContent} />;
        break;
    }
  };

  const breadcrumbsData = [
    { label: "Home", link: "/" },
    { label: "Profile", link: "/profile" },
  ];

  React.useEffect(() => {
    const newComponent = getChildComponent();
    return setChildComponent(newComponent);
  }, []);

  const profileContent = {
    name: "Ivan Ivanov",
    role: "Traveler",
    email: "ivanov.i@gmail.com",
    password: "No password created",
  };

  const navItems = [
    { name: "Account Information", url: "/profile/settings" },
    { name: "Esimoney & Membership", url: "/profile/money" },
    { name: "Saved Cards", url: "/profile/credit-cards" },
    { name: "Refer & Earn", url: "/profile/referral" },
    { name: "Orders", url: "/profile/orders" },
  ];

  return (
    <React.Fragment>
      <Header />
      <h1 className="main-title typo-h1">Profile</h1>
      <BreadcrumbsComponent
        items={breadcrumbsData}
        unclickableLabel={breadcrumbsLabelPage}
      />
      <div>
        <div className="grid grid-cols-6 gap-30 md:grid-cols-12">
          <div className="hidden lg:flex lg:col-span-4">
            <div className="w-full">
              <NavigationForBlocks navItems={navItems} />
              <LogoutButton />
            </div>
          </div>
          <div className="col-span-6 md:col-span-12 lg:col-span-7 lg:col-start-6">
            {childComponent}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default UserProfilePage;
