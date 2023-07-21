// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitterSquare,
// } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/Logo.svg";
const Footer = () => {
  return (
    <>
      <section className="w-full sm:mt-2">
        <div className="flex flex-col bg-sky-950  sm:bg-transparent">
          <a href="/" className="basis-2/3 block sm:hidden ml-10">
            <img className="max-h-[200px] mt-2 py-4 " src={Logo} />
          </a>
          <p className=" text-xs leading-1 text-center text-gray-400 sm:mr-0 w-full">
            <button className="underline font-semibold max-w-[10rem] sm:max-w-none">
              KVKK ve Gizlilik Sözleşmesi ile Kullanım Koşulları © TARDE 2023
            </button>
          </p>
        </div>
        <div className="max-w-screen-xl text-end px-4  mx-auto  overflow-hidden sm:px-1 lg:px-1">
          {/* <div className=" flex  justify-center  ">
            <a href="https://twitter.com/tardeorgtr">
              <FontAwesomeIcon
                className="pr-5 pt-2 h-5 text-gray-600 hover:text-gray-500"
                icon={faTwitterSquare}
              />
            </a>
            <a
              href="https://www.instagram.com/tardeorgtr/?hl=tr"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="pr-5 pt-2 h-5 text-gray-600 hover:text-gray-500"
                icon={faInstagram}
              />
            </a>
            <a
              href="https://www.facebook.com/tardeorgtr/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="pr-5 pt-2 h-5 text-gray-600 hover:text-gray-500"
                icon={faFacebook}
              />
            </a>

          </div>
  */}
        </div>
      </section>
    </>
  );
};

export default Footer;
