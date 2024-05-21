import * as React from "react";
import ShareBlock from "../../../components/common/ShareBlock/index.tsx";
import PositionedSnackbar from "../../../components/common/Snackbar/index.tsx";
import apiSettings from "../../../API/API.tsx";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import { grey } from "@mui/material/colors";

// Types
export type ReferralType = {
  show_banner: boolean;
  code: string;
  link: string;
};

export default function ReferralPage() {
  const [referral, setReferral] = React.useState<ReferralType | null>(null);

  React.useEffect(() => {
    const getReferral = async () => {
      const response = await apiSettings.fetchReferralEnroll();
      setReferral(response);
    };

    getReferral();
  }, []);

  return (
    <>
      <div className="font-bold text-2xl mb-4">Refer & Earn</div>
      <div className="space-y-6">
        <CopyableInput referralData={referral} />
      </div>
      <ShareBlock />
    </>
  );
}

interface IAlert {
  text: string;
  isSuccess: boolean;
}
const CopyableInput = ({ referralData }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<IAlert>({
    text: "",
    isSuccess: false,
  });

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(referralData.code)
      .then(() => {
        setMessage({
          text: "The text was successfully copied to the clipboard",
          isSuccess: true,
        });
        setIsOpen(true);
      })
      .catch(() => {
        setMessage({
          text: "Failed to copy text to clipboard",
          isSuccess: false,
        });
        setIsOpen(true);
      });
  };

  return (
    <div>
      {isOpen && <PositionedSnackbar message={message} setIsOpen={setIsOpen} />}
      {referralData && (
        <div
          title="Click to copy code"
          onClick={copyToClipboard}
          className="flex justify-content-between align-items-center color-bg-white text-black box-rounded shadowed w-full px-20 pt-15 pb-5 pt-5 mt-10 mb-10 cursor-pointer"
        >
          {referralData.code}
          <CopyAllIcon sx={{ color: grey[600] }} />
        </div>
      )}
    </div>
  );
};
