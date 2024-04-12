"use client";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";


function NavigationForBlocks() {
  const profileContent = {
    name: "Юлия Дроздова",
    role: "Traveler",
    email: "drozdova.y16@gmail.com",
  };

  const navItems = [
    { name: "Account Information", url: "/profile/settings" },
    { name: "Airmoney & Membership", url: "/profile/money" },
    { name: "Saved Cards", url: "/profile/credit-cards" },
    { name: "Refer & Earn", url: "/profile/referral" },
    { name: "Orders", url: "/profile/orders" },
  ];

  return (
    <>
      <div className="w-30 bg-white box-rounded shadowed overflow-hidden">
        <div className="py-sm-30 w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
          <div>
            <div className="font-bold text-xl mb-2">{profileContent.name}</div>
            <div className="text-gray-700 text-base mb-4">
              {profileContent.role}
            </div>
          </div>
          <ul className="border-top pt-5 d-grid gap-10 px-30 pb-30">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className={`menu-item typo-h5 color-text-secondary text-decoration-none display-flex px-20 py-5px ${
                    window.location.pathname === item.url
                      ? "nuxt-link-active"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex mt-3 text-red-600 flex items-center cursor-pointer">
        <span>Logout </span>
        <LogoutIcon className='ml-10' fontSize='small'/>
      </div>
    </>
  );
}

export default NavigationForBlocks;