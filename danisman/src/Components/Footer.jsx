
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
const Footer = () => {
  return (
    <>
      <section className="sm:mb-5">
        <div className="flex flex-col p-10 bg-theme-accend-blue sm:bg-transparent sm:p-2">
          <Link to="/" >
            <img className="max-h-[200px] m-t-5 filter brightness-0 invert fill-white sm:hidden" src={Logo} />
          </Link>

          <p className="text-xs block leading-1 sm:text-center text-white sm:text-theme-blue ">
            <Link to="/kvkk-kullanim-kosullari"><span className="underline italic sm:max-w-none">KVKK ve Gizlilik Sözleşmesi ile Kullanım Koşulları</span></Link> © TARDE 2023
          </p>

        </div>
        <div className="max-w-screen-xl text-end px-4  mx-auto  overflow-hidden sm:px-1 lg:px-1">

        </div>
      </section>
    </>
  );
};

export default Footer;
