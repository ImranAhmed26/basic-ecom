import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { Context } from "../../context/authContext";
import { GET, POST, POSTFORM } from "../../lib/api";
import Logo from "../../public/assets/logo2.png";

export default function ProductAddModal({ visible, setVisible }) {
  //Context  State
  const { state, dispatch } = useContext(Context);

  // Router
  const router = useRouter();

  const [signInActive, setSignInActive] = useState(true);
  const [incorrectCreds, setIncorrectCreds] = useState(false);

  // product add form data
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const body = {
    name: name,
    description: description,
    unitPrice: unitPrice,
    category: category,
    quantity: quantity,
  };

  // POST API
  const handleAddOProducts = () => {
    POST("/products/createProduct", body).then(({ data, status }) => {
      if (status !== 200) {
        console.log(data);
        console.log(status);
      } else if (status === 200) {
        console.log("Registration successful");
        console.log(data);
        location.reload();
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
                    <Image src={Logo} width={50.0} height={68} alt={"logo"} />
                  </Dialog.Title>

                  <div>
                    <div className="text-lg text-gray-500 text-center font-semibold px-4 py-2 w-full rounded-md">
                      Add Product
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
                        className="outline-none text-sm text-gray-500 border px-4 py-2 w-full rounded-md"
                        placeholder="description"
                        type="text"
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        className="outline-none text-sm text-gray-800 border px-4 py-2 w-full rounded-md "
                        placeholder="UnitPrice"
                        type="number"
                        value={unitPrice}
                        onChange={(e) => {
                          setUnitPrice(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mt-2 ">
                      <input
                        className="outline-none text-sm text-gray-800 border px-4 py-2 w-full rounded-md "
                        placeholder="UnitPrice"
                        type="number"
                        value={quantity}
                        onChange={(e) => {
                          setQuantity(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        className="outline-none text-sm text-gray-800 border px-4 py-2 w-full rounded-md "
                        placeholder="Category"
                        type="text"
                        value={category}
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                      />
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border bg-gray-600 px-4 py-2 font-medium text-gray-100 hover:bg-gray-700 w-full transition-all duration-75"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddOProducts();
                        }}
                      >
                        Add Product
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
