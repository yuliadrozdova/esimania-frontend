import * as React from "react";
import ShareBlock from "../../../components/common/ShareBlock/index.tsx";
import PositionedSnackbar from "../../../components/common/Snackbar/index.tsx";
import apiSettings from "../../../API/API.tsx";

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
  console.log(referral);

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

const CopyableInput = ({ referralData }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string>("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(referralData.code)
      .then(() => {
        setText("Текст скопирован в буфер обмена");
        setIsOpen(true);
      })
      .catch(() => {
        setText("Не удалось скопировать текст в буфер обмена");
        setIsOpen(true);
      });
  };

  return (
    <div>
      {isOpen && <PositionedSnackbar text={text} setIsOpen={setIsOpen} />}
      {referralData && (
        <div
          onClick={copyToClipboard}
          className="display-flex justify-content-between align-items-center color-bg-white text-black box-rounded shadowed w-full px-20 pt-15 pb-5 pt-5 mt-10 mb-10 cursor-pointer"
        >
          {referralData.code}
        </div>
      )}
    </div>
  );
};
