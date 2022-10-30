import { useRouter } from "next/router";
import { Fragment, useState, useContext, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PUT } from "../../lib/api";
import { Context } from "../../context/authContext";


export default function UserEditModal({ visible, setVisible, user }) {
  //Context  State
  const { state, dispatch } = useContext(Context);

  // Router
  const router = useRouter();

  const [signInActive, setSignInActive] = useState(true);
  const [incorrectCreds, setIncorrectCreds] = useState(false);

  // login form data

  // Update form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setName(user.name || "");
    setEmail(user.email || "");
    setPhone(user.phone || "");
    setType(user.type || "");
  }, [user.name, user.email, user.type, user.phone]);

  const body = {
    name: name,
    email: email,
    phone: phone,
    type: type,
  };

  // Reset State
  function resetState() {
    setName("");
    setEmail("");
    setPhone("");
    setType("");
  }

  // Edit API
  const handlePutRequest = () => {
    PUT(`/users/${user._id}`, body).then(({ data, status }) => {
      if (status !== 200) {
        console.log(data);
        console.log(status);
      } else if (status === 200) {
        console.log("Update successful");
        console.log(data);
        resetState();
        // setVisible(false);
        location.reload();
      }
    });
  };

  const closeModal = () => {
    setVisible(false);
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
                    Update User
                  </Dialog.Title>

                  <div>
                    <div className="mt-2">
                      <input
                        className="outline-none text-sm text-gray-800 border px-4 py-2 w-full rounded-md "
                        placeholder="Name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        className="outline-none text-sm text-gray-800 border px-4 py-2 w-full rounded-md"
                        placeholder="Email ID"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        className="outline-none text-sm text-gray-800 border px-4 py-2 w-full rounded-md "
                        placeholder="Phone"
                        type="text"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                    {user.type === "admin" ? (
                      <div className="mt-2">
                        <input
                          className="outline-none text-sm text-gray-800 border px-4 py-2 w-full rounded-md "
                          placeholder="User Type"
                          type="text"
                          value={type}
                          onChange={(e) => {
                            setType(e.target.value);
                          }}
                        />
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="pt-4">
                      <button
                        type="button"
                        className={`cursor-pointer inline-flex justify-center rounded-md border bg-gray-600 px-4 py-2 font-medium text-gray-100 ${
                          email && name ? "hover:bg-gray-700" : "hover:bg-gray-700"
                        } w-full transition-all duration-75`}
                        disabled={!email && !name}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePutRequest();
                        }}
                      >
                        Confirm Update
                      </button>
                      <button
                        className={`inline-flex justify-center rounded-md border bg-rose-300 px-4 py-2 font-medium text-gray-800 hover:bg-rose-400 w-full transition-all duration-150`}
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
