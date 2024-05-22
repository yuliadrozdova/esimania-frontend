import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Checkbox from "@mui/joy/Checkbox";
import "./settings.scss";

const InputField = ({ value, helperText }) => {
  return (
    <FormControl>
      <FormHelperText>{helperText}</FormHelperText>
      <Input value={value} placeholder="Placeholder" />
    </FormControl>
  );
};

const DeleteAccount = () => {
  return (
    <div className="delete-box-row mt-10 px-md-30 px-lg-0">
      <div className=" delete-box border-top pt-20 mb-0">
        <div className="delete-box-inner">
          <h3 className="mb-0">Delete Account</h3>
          <p className="mb-0 mt-5">
            You can delete your account permanently. *Note that this process can
            take a while and can't be undone after completion.
          </p>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-7 gap-30">
            <button className="button button-delete-outline small col-span-lg-1 col-span-lg-3 mt-5">
              DELETE ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function SettingsPage({ profileContent }) {
  return (
    <>
      <div className="font-bold text-2xl mb-4">Account Information</div>
      <div className="space-y-6">
        <div className="bg-gray-100 p-4 rounded-md">
          <InputField
            value={profileContent.name.split(" ")[0]}
            helperText="First Name"
          />
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <InputField
            value={profileContent.name.split(" ")[1]}
            helperText="Last Name (Optional)"
          />
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <InputField value={profileContent.email} helperText="Email" />
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <InputField
            value={profileContent.password}
            helperText="Current Password"
          />
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
            Create
          </button>
          <i className="fas fa-edit text-gray-600 cursor-pointer"></i>
        </div>
        <div className="flex items-center">
          <Checkbox
            disabled={false}
            label="I'd like to receive promotional emails."
            size="md"
          />
        </div>
        <div className="mt-10">
          <button className="bg-black text-white w-full py-3 rounded-md">
            Save Changes
          </button>
        </div>
      </div>
      <DeleteAccount />
    </>
  );
}
