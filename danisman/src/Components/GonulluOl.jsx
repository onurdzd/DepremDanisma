import React, { useState } from "react";
import { useForm } from "react-hook-form";

const GonulluOl = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Form submission logic here
    console.log(data);
  };
  const [supportPerson, setSupportPerson] = useState("");
  const [relationship, setRelationship] = useState("");
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="font-bold ml-10 mt-4 text-5xl text-blue-950">
          Sahada Destek <br /> Olmak İçin <br />
          Gönüllü Ol
        </h1>
        <form
          className="w-full ml-20 max-w-md"
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
              id="name"
              {...register("name", { required: true })}
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.name && "border-red-500"
              }`}
            />
            {errors.name && (
              <span className="text-red-500">Bu alan zorunludur.</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="surname"
              className="block text-gray-700 font-bold mb-2"
            >
              Soyadınız*
            </label>
            <input
              type="text"
              id="surname"
              {...register("surname", { required: true })}
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.surname && "border-red-500"
              }`}
            />
            {errors.surname && (
              <span className="text-red-500">Bu alan zorunludur.</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              İletişim Numaranız*
            </label>
            <input
              type="tel"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: true,
                minLength: 11,
                maxLength: 11,
              })}
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.phoneNumber && "border-red-500"
              }`}
            />
            {errors.phoneNumber?.type === "required" && (
              <span className="text-red-500">Bu alan zorunludur.</span>
            )}
            {errors.phoneNumber?.type === "minLength" && (
              <span className="text-red-500">
                Telefon numarası 11 karakter olmalıdır.
              </span>
            )}
            {errors.phoneNumber?.type === "maxLength" && (
              <span className="text-red-500">
                Telefon numarası 11 karakter olmalıdır.
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-gray-700 font-bold mb-2"
            >
              Sahada Çalışmak İstediğiniz İl*
            </label>
            <input
              type="text"
              id="city"
              {...register("city", { required: true })}
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.city && "border-red-500"
              }`}
            />
            {errors.city && (
              <span className="text-red-500">Bu alan zorunludur.</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="dateb"
              className="block text-gray-700 font-bold mb-2"
            >
              Sahada Çalışmak İstediğiniz Tarih Başlangıcı*
            </label>
            <input
              type="date"
              id="dateb"
              {...register("dateb", { required: true })}
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.dateb && "border-red-500"
              }`}
            />
            {errors.dateb && (
              <span className="text-red-500">Bu alan zorunludur.</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="datebi"
              className="block text-gray-700 font-bold mb-2"
            >
              Sahada Çalışmak İstediğiniz Tarih Bitişi*
            </label>
            <input
              type="date"
              id="datebi"
              {...register("datebi", { required: true })}
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.datebi && "border-red-500"
              }`}
            />
            {errors.datebi && (
              <span className="text-red-500">Bu alan zorunludur.</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="reason"
              className="block text-gray-700 font-bold mb-2"
            >
              Sahada gönüllü çalışma motivasyonunuzu <br /> kısaca anlatır
              mısınız? *
            </label>
            <textarea
              id="reason"
              {...register("reason", { required: true })}
              className={`appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.reason && "border-red-500"
              }`}
            ></textarea>
            {errors.reason && (
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
    </div>
  );
};

export default GonulluOl;
