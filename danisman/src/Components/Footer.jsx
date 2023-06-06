import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>

      <section className="w-full">
      <p className=" text-xs leading-1 text-center text-gray-400">
            <button className="underline font-semibold">
              KVKK ve Gizlilik Sözleşmesi ile Kullanım Koşulları © TARDE 2023
            </button>
          </p>

        <div className="max-w-screen-xl text-end px-4 py-1 mx-auto  overflow-hidden sm:px-1 lg:px-1">
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

        </div>
      </section>
    </>
  );
};

export default Footer;
