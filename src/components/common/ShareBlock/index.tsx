import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
// import { white } from "@mui/material/colors";

import './shareItem.scss';
import { Tooltip } from "@mui/material";

const ShareItem = ({ href, title, icon, bgClass }) => {
  return (
    <Tooltip title={title} arrow>
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`square-44 relative box-rounded shadowed display-flex justify-content-center 
      align-items-center mx-30 cursor-pointer color-text-primary text-decoration-none share-button ${bgClass}`}
    >
      {icon}
    </a></Tooltip>
  );
};

const ShareBlock = () => {
  const message =
    "Hey, have you tried an eSIM? Get US$3 off your first eSIM data pack from Esimania. Use code YULIYA3205 when you sign up or apply it at checkout. https://ref.esimania.com/";
  return (
    <div className="display-flex align-items-start justify-content-center flex-wrap row-gap-40 mt-30 share-item-wrapper">
      
      <ShareItem
        href={`https://www.facebook.com/sharer/sharer.php?quote=${message}@esimaniacom&amp;u=https://ref.esimania.com/`}
        title="Facebook"
        icon={<FacebookIcon style={{ color: 'white' }}/>}
        bgClass="tw-bg-facebook"
      />
      <ShareItem
        href={`https://api.whatsapp.com/send?text=${message}`}
        title="WhatsApp"
        icon={<WhatsAppIcon style={{ color: 'white' }}/>}
        bgClass="tw-bg-whatsapp"
      />
      <ShareItem
        href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://ref.esimania.com/P4eB&amp;source=Esimania"
        title="LinkedIn"
        icon={<LinkedInIcon style={{ color: 'white' }}/>}
        bgClass="tw-bg-linkedin"
      />
      <ShareItem
        href={`https://twitter.com/share?url=${message}@esimaniacom`}
        title="X"
        icon={<XIcon style={{ color: 'white' }}/>}
        bgClass="tw-bg-neutral-600"
      />
     
      <ShareItem
        href={`https://telegram.me/share/?url=${message}`}
        title="Telegram"
        icon={<TelegramIcon style={{ color: 'white' }}/>}
        bgClass="tw-text-telegram"
      />
      <ShareItem
        href={`mailto:?body=${message}`}
        title="Email"
        icon={<AlternateEmailIcon />}
        bgClass="tw-bg-white"
      />
    </div>
  );
};

export default ShareBlock;
