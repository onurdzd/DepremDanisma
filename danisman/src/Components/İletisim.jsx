import { useState } from "react";
import Header from "./Header";

const İletisim = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <div className=" md:flex md:flex-row sm:bg-white  bg-[url('/src/assets/mapZone.png')] sm:bg-none sm:rounded-[2rem]  pb-2 ">
        <div className="flex bg-white h-full rounded-l-[2rem] flex-col basis-1/5 ">
          <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
        <div className="w-full h-full sm:mt-3 sm:mx-4  flex flex-col sm:bg-[url('/src/assets/mapZone.png')] sm:rounded-3xl bg-cover sm:min-h-[80vh] justify-center">
          <div className="w-full h-full flex flex-col items-center justify-evenly">
            <div className="text-center text-2xl text-sky-800 font-bold font-serif italic">
              <h1>İLETİŞİM BİLGİLERİMİZ</h1>
            </div>
            <div className="flex flex-col flex-wrap justify-center">
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-8 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center"></div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Genel Merkez</p>
                    <p className="text-gray-500">support@example.com</p>
                    <p className="text-gray-500">+1 234-567-89</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-8 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center"></div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Merkez-1</p>
                    <p className="text-gray-500">sales@example.com</p>
                    <p className="text-gray-500">+1 234-567-89</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-8 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center"></div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Merkez-2</p>
                    <p className="text-gray-500">press@example.com</p>
                    <p className="text-gray-500">+1 234-567-89</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default İletisim;
