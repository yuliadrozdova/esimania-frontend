import React, { useState } from "react";
import { isValid } from "../../../API/auth/validation.tsx";
import { fetchLoginUser } from "../../../API/auth/authApi.tsx";
import { useNavigate } from "react-router-dom";
import PositionedSnackbar from "../../../components/common/Snackbar/index.tsx";

interface IAlertProps {
  text: string;
  isSuccess: boolean;
}

const Login = () => {
  // const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<IAlertProps>({
    text: "",
    isSuccess: false,
  });
  const navigate = useNavigate();

  const handleLoginUser = async (email: string, password: string) => {
    // setLoading(true);
    let isErr = isValid(email, password);

    if (isErr) {
      setMessage({
        text: isErr,
        isSuccess: false,
      });
      setIsOpen(true);

      return;
    }

    await fetchLoginUser(email, password, () => {
      navigate(-1);
    });

    // setLoading(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleLoginUser(email, password);
  };

  return (
    <>
      {isOpen && <PositionedSnackbar message={message} setIsOpen={setIsOpen} />}

      <div className="h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="" alt="Esimania" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event: any) => {
                    const value = event.target.value;
                    if (!/\s/.test(value)) {
                      setPassword(value);
                    }
                  }}
                />
              </div>
              <div className="text-sm text-right mt-2">
                <a
                  href="/auth/forgot-password"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            New in Esimania?
            <a
              href="/auth/register"
              className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
