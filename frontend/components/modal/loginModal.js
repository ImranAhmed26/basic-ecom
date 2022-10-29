import { useRouter } from "next/router";
import { Fragment, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GET, POST } from "../../lib/api";
import { Context } from "../../context/authContext";

export default function LoginModal({ visible, setVisible }) {
  //Context  State
  const { state, dispatch } = useContext(Context);

  // Router
  const router = useRouter();

  const [signInActive, setSignInActive] = useState(true);
  const [incorrectCreds, setIncorrectCreds] = useState(false);

  // login form data

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const body = {
    email: loginEmail,
    password: loginPassword,
  };

  // Register form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [cityState, setCityState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");

  const regBody = {
    name: name,
    email: email,
    phone: phone,
    companyName: companyName,
    website: website,
    type: type,
    password: password,
    address: {
      street: street,
      city: city,
      state: cityState,
      country: country,
      zip: zip,
    },
  };

  // Login API
  const handleLogin = () => {
    POST(`/user/login`, body).then(({ data, status }) => {
      if (status !== 200) {
        console.log(data);
        console.log(status);
        setIncorrectCreds(true);
      } else if (status === 200) {
        console.log("Login success");
        console.log(data);
        dispatch({
          type: "LOGIN",
          payload: data,
        });

        localStorage.setItem("user", JSON.stringify(data));
        setIncorrectCreds(false);
        setVisible(false);
        router.push(
          `/${
            data.type === "admin"
              ? "/admin/dashboard"
              : data.type === "editor"
              ? "/editor/dashboard"
              : data.type === "user"
              ? "/user/dashboard"
              : "/"
          }`,
        );
      }
    });
  };

  // Registration API
  const handleRegistration = () => {
    POST("/user/register", regBody).then(({ data, status }) => {
      if (status !== 200) {
        console.log(data);
        console.log(status);
      } else if (status === 200) {
        console.log("Registration successful");
        console.log(data);
        handleActiveForm2();
      }
    });
  };

  const closeModal = () => {
    setVisible(false);
    setTimeout(() => {
      setSignInActive(true);
    }, 500);
    setIncorrectCreds(false);
  };

  const handleActiveForm1 = () => {
    setSignInActive(false);
  };
  const handleActiveForm2 = () => {
    setSignInActive(true);
    setSignInActive(true);
  };

  return (
    <>
      <Transition appear show={visible} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl leading-6 text-gray-900 text-center pb-4 font-bold"
                  >
                    LOGO
                  </Dialog.Title>
                  {signInActive === true && (
                    <div>
                      <div className="text-lg text-gray-500 text-center font-semibold px-4 py-2 w-full rounded-md">
                        Sign In
                      </div>

                      <div className="mt-2">
                        <input
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md"
                          placeholder="Email ID"
                          type="email"
                          value={loginEmail}
                          onChange={(e) => {
                            setLoginEmail(e.target.value);
                          }}
                        />
                      </div>

                      <div className="mt-2">
                        <input
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md "
                          placeholder="Password"
                          type="password"
                          value={loginPassword}
                          onChange={(e) => {
                            setLoginPassword(e.target.value);
                          }}
                        />
                      </div>
                      <div className="text-center py-2 text-rose-500 font-medium h-10">
                        <span
                          className={`${
                            incorrectCreds === false ? "invisible" : "visible"
                          } transition-all duration-300`}
                        >
                          Your email or password is incorrect
                        </span>
                      </div>

                      <div className="">
                        <button
                          type="button"
                          className={`inline-flex justify-center rounded-md border bg-gray-600 px-4 py-2 font-medium text-gray-100 ${
                            loginEmail && loginPassword ? "hover:bg-gray-700" : "hover:bg-gray-600"
                          } w-full transition-all duration-75`}
                          disabled={!loginEmail && !loginPassword}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLogin();
                          }}
                        >
                          Sign In
                        </button>
                      </div>
                      <div className="text-right w-full px-1 py-1 text-gray-600 hover:text-gray-900">
                        <div className="cursor-pointer">Forgot Password</div>
                      </div>
                      <div className="text-center w-full px-1 pt-3">Don't Have an account?</div>
                      <div className="py-1">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border bg-gray-600 px-4 py-2 font-medium text-gray-100 hover:bg-gray-700 w-full transition-all duration-75"
                          onClick={() => {
                            handleActiveForm1();
                          }}
                        >
                          Register Account
                        </button>
                      </div>
                    </div>
                  )}
                  {signInActive === false && (
                    <div>
                      <div className="text-lg text-gray-500 text-center font-semibold px-4 py-2 w-full rounded-md">
                        Register
                      </div>

                      <div className="mt-2">
                        <input
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md "
                          placeholder="Name"
                          type="text"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mt-2">
                        <input
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md "
                          placeholder="Company Name"
                          type="text"
                          onChange={(e) => {
                            setCompanyName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mt-2">
                        <input
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md"
                          placeholder="Email ID"
                          type="email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mt-2 flex">
                        <input
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md mr-2"
                          placeholder="Phone"
                          type="text"
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                        <select
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md ml-2"
                          onChange={(e) => {
                            setType(e.target.value);
                          }}
                        >
                          <option value={"default"}>Type</option>
                          <option value={"buyer"}>Buyer</option>
                          <option value={"supplier"}>Supplier</option>
                        </select>
                      </div>
                      <div className="mt-2">
                        <input
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md "
                          placeholder="Website"
                          type="text"
                          onChange={(e) => {
                            setWebsite(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mt-2 flex">
                        <input
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md mr-2"
                          placeholder="Password"
                          type="password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <input
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md ml-2"
                          placeholder="Re enter Password"
                          type="password"
                          onChange={(e) => {
                            setRePassword(e.target.value);
                          }}
                        />
                      </div>

                      <div className="mt-2 flex">
                        <input
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md mr-2"
                          placeholder="Street"
                          type="text"
                          onChange={(e) => {
                            setStreet(e.target.value);
                          }}
                        />
                        <input
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md ml-2"
                          placeholder="City"
                          type="text"
                          onChange={(e) => {
                            setCity(e.target.value);
                          }}
                        />
                      </div>

                      <div className="mt-2 flex px-">
                        <input
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md mr-2"
                          placeholder="State"
                          type="text"
                          onChange={(e) => {
                            setCityState(e.target.value);
                          }}
                        />

                        <input
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md ml-2"
                          placeholder="Zip"
                          type="text"
                          onChange={(e) => {
                            setZip(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mt-2">
                        <input
                          className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md "
                          placeholder="Country"
                          type="text"
                          onChange={(e) => {
                            setCountry(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border bg-gray-600 px-4 py-2 font-medium text-gray-100 hover:bg-gray-700 w-full transition-all duration-75"
                          onClick={(e) => {
                            e.preventDefault();
                            handleRegistration();
                          }}
                        >
                          Register Your Account
                        </button>
                      </div>

                      <div className="text-center w-full px-1 pt-3">Already have an account?</div>
                      <div className="py-1">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border bg-gray-600 px-4 py-2 font-medium text-gray-100 hover:bg-gray-700 w-full transition-all duration-75"
                          onClick={() => {
                            handleActiveForm2();
                          }}
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
