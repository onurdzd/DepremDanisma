import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewEntry() {
  const [showModal, setShowModal] = useState(false);

  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data)
    navigate("/dashboard")
    closeModal();
  };
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
 
  return  (
    <div className="flex justify-center">
      {/* Buton */}
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Giriş Yap
      </button>

      {/* Modal Ekranı */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={closeModal}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Username :
                    </label>
                    {errors?.body && (
                      <span className="text-sm text-red-700">
                        {errors.body.message}
                      </span>
                    )}
                    <input
                      id="username"
                      {...register("username", { required: "Username boş olamaz" })}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Password :
                    </label>
                    {errors?.body && (
                      <span className="text-sm text-red-700">
                        {errors.body.message}
                      </span>
                    )}
                    <input
                      id="password"
                      type="password"
                      {...register("password", { required: "Password boş olamaz" })}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mt-4"></div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Kapat
                    </button>
                    <button
                      disabled={!isValid}
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                     Giriş Yap
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  ) ;
}
