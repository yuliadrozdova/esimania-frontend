"use client";
import React from "react";

function NavigationForBlocks({navItems}) {
  const profileContent = {
    name: "Ivan Ivanov",
    role: "Traveler",
    email: "ivanov.i@gmail.com",
  };

  return (
    <>
      <div className="w-30 bg-white box-rounded shadowed overflow-hidden">
        <div className="py-sm-30 w-full  bg-white rounded-lg shadow-lg p-6">
          <div>
            <div className="font-bold text-xl mb-2">{profileContent.name}</div>
            <div className="text-gray-700 text-base mb-4">
              {profileContent.role}
            </div>
          </div>
          <ul className="border-top pt-5 grid gap-10 px-30 pb-30">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className={`menu-item typo-h5 color-text-secondary text-decoration-none flex px-20 py-5px ${
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
    </>
  );
}

export default NavigationForBlocks;