import { useState } from "react";
import { useForm } from "react-hook-form";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import axios from "axios";
import { toast } from "react-toastify";

const DestekBasvuru = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    toast.success("Başvurunuz gönderildi");
    await axios.post(`${import.meta.env.VITE_API_URL}/danisan`, {
      danisan_ad: data.danisan_ad,
      danisan_soyad: data.danisan_soyad,
      danisan_tel_no: data.danisan_tel_no,
      danisan_il: data.danisan_il,
      danisan_aciklama: data.danisan_aciklama,
      danisan_kisi: data.supportPerson[0] == "myself" ? true : false,
    });
    reset();
  };
  const [supportPerson, setSupportPerson] = useState("");
  const [relationship, setRelationship] = useState("");
  return (
    <div className="flex   ">
      <div className="  basis-2/3">
        <h1 className="font-bold ml-10 mt-4 text-5xl text-blue-950">
          Pisikolojik Destek <br /> Almak İçin <br />
          Başvurun
        </h1>
        <form
          className="w-full ml-11 sm:ml-20   max-w-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 mt-8">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Adınız*
            </label>
            <input
              type="text"
              id="danisan_ad"
              {...register("danisan_ad", { required: true })}
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.danisan_ad && "border-red-500"
                }`}
            />
            {errors.danisan_ad && (
              <span className="text-red-500">Bu alan zorunludur.</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="danisan_soyad"
              className="block text-gray-700 font-bold mb-2"
            >
              Soyadınız*
            </label>
            <input
              type="text"
              id="danisan_soyad"
              {...register("danisan_soyad", { required: true })}
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.danisan_soyad && "border-red-500"
                }`}
            />
            {errors.danisan_soyad && (
              <span className="text-red-500">Bu alan zorunludur.</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="danisan_tel_no"
              className="block text-gray-700 font-bold mb-2"
            >
              İletişim Numaranız*
            </label>
            <input
              placeholder="örn:555 555 55 55"
              type="tel"
              id="danisan_tel_no"
              {...register("danisan_tel_no", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.danisan_tel_no && "border-red-500"
                }`}
            />
            {errors.danisan_tel_no?.type === "required" && (
              <span className="text-red-500">Bu alan zorunludur.</span>
            )}
            {errors.danisan_tel_no?.type === "minLength" && (
              <span className="text-red-500">
                Telefon numarası 10 karakter olmalıdır.
              </span>
            )}
            {errors.danisan_tel_no?.type === "maxLength" && (
              <span className="text-red-500">
                Telefon numarası 10 karakter olmalıdır.
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="danisan_il"
              className="block text-gray-700 font-bold mb-2"
            >
              Yaşadığınız İl*
            </label>
            <input
              type="text"
              id="danisan_il"
              {...register("danisan_il", { required: true })}
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.danisan_il && "border-red-500"
                }`}
            />
            {errors.danisan_il && (
              <span className="text-red-500">Bu alan zorunludur.</span>
            )}
          </div>
          <div className="mb-4 flex flex-col">
            <label className="block text-gray-700 font-bold mb-2">
              Destek alacak Kişi*
            </label>
            <div className="flex flex-row ">
              <div className="mr-6">
                <input
                  type="checkbox"
                  id="myself"
                  value="myself"
                  {...register("supportPerson", { required: true })}
                  checked={supportPerson === "myself"}
                  onChange={(e) => setSupportPerson(e.target.value)}
                />
                <label htmlFor="myself" className="ml-2  font-light">
                  Kendim
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="relative"
                  value="relative"
                  {...register("supportPerson", { required: true })}
                  checked={supportPerson === "relative"}
                  onChange={(e) => setSupportPerson(e.target.value)}
                />
                <label htmlFor="relative" className="ml-2 font-light">
                  Yakınım
                </label>
              </div>
            </div>
            {errors.supportPerson && (
              <p className="text-red-500">Bu alan gereklidir.</p>
            )}
          </div>
          {supportPerson === "relative" && (
            <div className="mb-4">
              <label
                htmlFor="relationship"
                className="block text-gray-700 font-bold mb-2"
              >
                Yakınlık Dereceniz
              </label>
              <input
                type="text"
                id="relationship"
                className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
              />
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="danisan_aciklama"
              className="block text-gray-700 font-bold mb-2"
            >
              Başvuru nedeninizi kıssaca anlatır mısınız?*
            </label>
            <textarea
              id="danisan_aciklama"
              {...register("danisan_aciklama", { required: true })}
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.danisan_aciklama && "border-red-500"
                }`}
            ></textarea>
            {errors.danisan_aciklama && (
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
          <div className="flex items-center my-6">
            <button
              type="submit"
              className="bg-amber-300 hover:bg-amber-400 text-blue-950 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              BAŞVURUMU GÖNDER
            </button>
          </div>
          <p className="text-sm font-thin pb-8">* Zorunlu bilgi</p>
        </form>
      </div>
      <div className="flex flex-col basis-1/3 ">
        <div className="hidden md:block ">
          <img className="h-[11rem]  mt-16 py-4 ml-5 " src={logo3} />
        </div>
        <div className="hidden md:block ">
          <img className="h-[12rem]  mt-2 py-4 ml-5 " src={logo4} />
        </div>
        <div className="hidden md:block ">
          <img className="h-[12rem]  mt-2 py-4 ml-5 " src={logo5} />
        </div>
      </div>
    </div>
  );
};

export default DestekBasvuru;
