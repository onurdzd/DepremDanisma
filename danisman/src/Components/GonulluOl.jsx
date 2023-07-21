import { useForm } from "react-hook-form";
import logo3 from "../assets/logo3.svg";
import logo6 from "../assets/logo6.svg";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "./Header";
import { useState } from "react";

const GonulluOl = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    toast.success("Talebiniz gönderildi");
    await axios.post(`${import.meta.env.VITE_API_URL}/gonullu`, {
      gonullu_ad: data.gonullu_ad,
      gonullu_soyad: data.gonullu_soyad,
      gonullu_calismak_istedigi_il: data.gonullu_calismak_istedigi_il,
      gonullu_tel_no: data.gonullu_tel_no,
      gonullu_baslangic_tarihi: data.gonullu_baslangic_tarihi,
      gonullu_bitis_tarihi: data.gonullu_bitis_tarihi,
      gonullu_motivasyon_aciklama: data.gonullu_motivasyon_aciklama,
    });
    reset();
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {" "}
      <div className="flex bg-white h-full rounded-l-[2rem] flex-col basis-1/5 ">
        <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </div>
      <div className="basis-4/5  h-full sm:mt-3 sm:mx-4  flex flex-col sm:bg-[url('/src/assets/mapZone.png')] sm:rounded-3xl bg-cover">
        <div className="flex  ">
          <div className="basis-2/3">
            <h1 className="font-bold ml-11 sm:ml-20 mt-4 text-5xl text-blue-950">
              Sahada Destek <br /> Olmak İçin <br />
              Gönüllü Ol
            </h1>
            <form
              className="w-full ml-20 max-w-md"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-4 mt-8">
                <label
                  htmlFor="gonullu_ad"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Adınız*
                </label>
                <input
                  type="text"
                  id="gonullu_ad"
                  {...register("gonullu_ad", { required: true })}
                  className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.gonullu_ad && "border-red-500"
                    }`}
                />
                {errors.gonullu_ad && (
                  <span className="text-red-500">Bu alan zorunludur.</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gonullu_soyad"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Soyadınız*
                </label>
                <input
                  type="text"
                  id="gonullu_soyad"
                  {...register("gonullu_soyad", { required: true })}
                  className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.gonullu_soyad && "border-red-500"
                    }`}
                />
                {errors.gonullu_soyad && (
                  <span className="text-red-500">Bu alan zorunludur.</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gonullu_tel_no"
                  className="block text-gray-700 font-bold mb-2"
                >
                  İletişim Numaranız*
                </label>
                <input
                  placeholder="örn:555 555 55 55"
                  type="tel"
                  id="gonullu_tel_no"
                  {...register("gonullu_tel_no", {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                  })}
                  className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.gonullu_tel_no && "border-red-500"
                    }`}
                />
                {errors.gonullu_tel_no?.type === "required" && (
                  <span className="text-red-500">Bu alan zorunludur.</span>
                )}
                {errors.gonullu_tel_no?.type === "minLength" && (
                  <span className="text-red-500">
                    Telefon numarası 10 karakter olmalıdır.
                  </span>
                )}
                {errors.gonullu_tel_no?.type === "maxLength" && (
                  <span className="text-red-500">
                    Telefon numarası 10 karakter olmalıdır.
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gonullu_calismak_istedigi_il"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Sahada Çalışmak İstediğiniz İl*
                </label>
                <input
                  type="text"
                  id="gonullu_calismak_istedigi_il"
                  {...register("gonullu_calismak_istedigi_il", {
                    required: true,
                  })}
                  className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.gonullu_calismak_istedigi_il && "border-red-500"
                    }`}
                />
                {errors.gonullu_calismak_istedigi_il && (
                  <span className="text-red-500">Bu alan zorunludur.</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gonullu_baslangic_tarihi"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Sahada Çalışmak İstediğiniz Tarih Başlangıcı*
                </label>
                <input
                  type="date"
                  id="gonullu_baslangic_tarihi"
                  {...register("gonullu_baslangic_tarihi", { required: true })}
                  className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.gonullu_baslangic_tarihi && "border-red-500"
                    }`}
                />
                {errors.gonullu_baslangic_tarihi && (
                  <span className="text-red-500">Bu alan zorunludur.</span>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="gonullu_bitis_tarihi"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Sahada Çalışmak İstediğiniz Tarih Bitişi*
                </label>
                <input
                  type="date"
                  id="gonullu_bitis_tarihi"
                  {...register("gonullu_bitis_tarihi", { required: true })}
                  className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.gonullu_bitis_tarihi && "border-red-500"
                    }`}
                />
                {errors.gonullu_bitis_tarihi && (
                  <span className="text-red-500">Bu alan zorunludur.</span>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="gonullu_motivasyon_aciklama"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Sahada gönüllü çalışma motivasyonunuzu <br /> kısaca anlatır
                  mısınız? *
                </label>
                <textarea
                  id="gonullu_motivasyon_aciklama"
                  {...register("gonullu_motivasyon_aciklama", { required: true })}
                  className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.gonullu_motivasyon_aciklama && "border-red-500"
                    }`}
                ></textarea>
                {errors.gonullu_motivasyon_aciklama && (
                  <span className="text-red-500">Bu alan zorunludur.</span>
                )}
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    {...register("agreementChecked", { required: true })}
                  />
                  <span className="ml-2 font-thin">
                    KVKK metnini okudum onaylıyorum*
                  </span>
                </label>
                {errors.agreementChecked && (
                  <span className="text-red-500">Bu alan zorunludur.</span>
                )}
              </div>
              <div className="flex items-center my-6 ">
                <button
                  type="submit"
                  className="bg-amber-300 hover:bg-amber-400 text-blue-950 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  BAŞVURUMU GÖNDER
                </button>
              </div>
              <p className="text-sm font-thin">* Zorunlu bilgi</p>
            </form>
          </div>
          <div className="flex flex-col basis-1/3">
            <div className=" hidden md:block ">
              <img className="h-[12rem]  mt-16 py-4 ml-5 " src={logo3} />
            </div>
            <div className="hidden md:block ">
              <img className="h-[12rem]  mt-2 py-4 ml-5 " src={logo6} />
            </div>
          </div>
        </div></div>
    </>
  );
};

export default GonulluOl;
