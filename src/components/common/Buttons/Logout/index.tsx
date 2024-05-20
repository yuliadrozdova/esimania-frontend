import * as React from "react";
import LogoutIcon from "@mui/icons-material/Logout";

function LogoutButton() {
  return (
    <div className="flex mt-3 text-red-600 items-center cursor-pointer">
    <span>Logout </span>
    <LogoutIcon className='ml-10' fontSize='small'/>
  </div>
  );
}
export default LogoutButton;
