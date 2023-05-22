import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <section className="bg-white w-full mt-12">
        <div className="max-w-screen-xl px-4 py-3 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <a
                href={"/"}
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Anasayfa
              </a>
            </div>

            <div className="px-5 py-2">
              <a
                href={"/iletisim"}
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                İletişim
              </a>
            </div>
          </nav>
          <div className=" flex  justify-center  ">
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
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 Tüm Hakları Saklıdır.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
