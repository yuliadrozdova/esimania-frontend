import React, { useState } from "react";
import { isValid, isValidEmail } from "../../../API/auth/validation.tsx";
import { fetchForgotPassword } from "../../../API/auth/authApi.tsx";
import { useNavigate } from "react-router-dom";
import PositionedSnackbar from "../../../components/common/Snackbar/index.tsx";

interface IAlertProps {
  text: string;
  isSuccess: boolean;
}

const ForgotPassword = () => {
  // const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<IAlertProps>({
    text: "",
    isSuccess: false,
  });
  const navigate = useNavigate();

  const handleForgotPassword = async (email: string) => {
    // setLoading(true);
    let isErr = isValidEmail(email);

    if (isErr) {
      setMessage({
        text: isErr,
        isSuccess: false,
      });
      setIsOpen(true);

      return;
    }

    await fetchForgotPassword(email, () => {
      navigate("/");
    });

    // setLoading(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleForgotPassword(email);
  };

  return (
    <>
      {isOpen && <PositionedSnackbar message={message} setIsOpen={setIsOpen} />}

      <div className="h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="" alt="Esimania" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Forgot password
          </h2>
          <p>
            Please enter the email address associated with your account and we
            will email you a code to reset your password.
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event: any) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Forgot Password
              </button>
            </div>

            <div>
              <div className="flex w-full justify-center rounded-md bg-indigo-400 px-3 py-2 text-sm cursor-pointer font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <a
                  href="/auth/login"
                  className="ml-2 font-semibold leading-6 text-white hover:text-white"
                >
                  Back to Login
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
