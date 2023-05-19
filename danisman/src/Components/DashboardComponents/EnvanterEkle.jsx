const EnvanterEkle = () => {
  return (
    <>
      <section className="min-h-min bg-cover ml-12 mr-12 border rounded-2xl border-solid  bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]  ">
        <div className="flex flex-col min-h-min border rounded-2xl border-solid  bg-black/60">
          <div className="container flex flex-col flex-1 px-5 py-6 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-1">
              <div className="mt-24 lg:w-1/2 lg:mx-1">
                <div className="w-full px-16 py-5 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                  <h1 className="text-x font-medium text-gray-700 dark:text-gray-200">
                    Envanter Kayıt Formu
                  </h1>
                  <form className="mt-3">
                    <div className="-mx-2 md:items-center md:flex">
                      <div className="flex-1 px-2">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Personel Adı:
                        </label>
                        <input
                          type="text"
                          placeholder="Ad "
                          className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div className="flex-1 px-2 mt-4 md:mt-0">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Personel Soyadı:
                        </label>
                        <input
                          type="text"
                          placeholder="Soyad"
                          className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                    </div>
                    <div className="flex-1 mt-3">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Cep Telefonu :
                      </label>
                      <input
                        type="tel"
                        placeholder=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="flex-1 mt-3">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        E-Posta:
                      </label>
                      <input
                        type="email"
                        placeholder="johndoe@example.com"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>
                    <div className="w-full mt-3">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Adres:
                      </label>
                      <textarea
                        className="block w-full h-10 px-2 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-28 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        placeholder="Mesaj"
                      ></textarea>
                    </div>
                    <button className="w-full px-3 py-3 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                      Danışan Kaydet
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnvanterEkle;
