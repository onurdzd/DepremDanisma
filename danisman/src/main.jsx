import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Dashboard from "./Components/Dashboard.jsx";
import Header from "./Components/Header.jsx";
import TableHeader from "./Components/TableHeader.jsx";
import İletisim from "./Components/İletisim.jsx";
import Adana from "./Components/City/Adana.jsx";
import Adiyaman from "./Components/City/Adiyaman.jsx";
import Diyarbakir from "./Components/City/Diyarbakir.jsx";
import Gaziantep from "./Components/City/Gaziantep.jsx";
import Hatay from "./Components/City/Hatay.jsx";
import Kahramanmaras from "./Components/City/Kahramanmaras.jsx";
import Kilis from "./Components/City/Kilis.jsx";
import Malatya from "./Components/City/Malatya.jsx";
import Osmaniye from "./Components/City/Osmaniye.jsx";
import Sanliurfa from "./Components/City/Sanliurfa.jsx";
import Footer from "./Components/Footer.jsx";

const localToken = JSON.parse(localStorage.getItem("user"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-20  mt-40 mb-10">
        <div className="flex bg-white h-screen  rounded-l-[2rem] flex-col basis-1/5 ">
          <Header />
        </div>
        <div className="basis-4/5  h-screen mt-5 mr-4  flex flex-col bg-[url('mapZone.png')] rounded-3xl ">
          <App />
          <Footer />
        </div>
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>

        <div className="p-5 flex flex-col items-center bg-slate-100 rounded-[2rem] h-[90vh] overflow-auto w-[90vw]">
          <div className=" pt-2 bg-white rounded-[2rem] ">
            <TableHeader />
          </div>
          <div className="flex flex-col w-full bg-slate-100 rounded-[2rem] p-4">

            {localToken ? (
              <Dashboard />
            ) : (
              <div className="flex  bg-slate-100 ">
                Dashboard ekranına ulaşmak için önce giriş yapın
              </div>
            )}
          </div>
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/adana",
    element: (
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-20  mt-40 mb-10  ">
        <div className="flex bg-white h-screen  rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col  h-screen ">
          <div className="flex  h-screen mt-5 mr-4  basis-10/12 bg-[url('mapZone.png')] rounded-3xl">
            <App />
            <Adana />
          </div>
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/osmaniye",
    element: (
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-20  mt-40 mb-10">
        <div className="flex bg-white h-screen rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col  h-screen ">
          <div className="flex  h-screen mt-5 mr-4  basis-10/12 bg-[url('mapZone.png')] rounded-3xl">
            <App />
            <Osmaniye />
          </div>
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/hatay",
    element: (
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-20  mt-40 mb-10">
        <div className="flex bg-white h-screen rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col  h-screen ">
          <div className="flex  h-screen mt-5 mr-4  basis-10/12 bg-[url('mapZone.png')] rounded-3xl">
            <App />
            <Hatay />
          </div>
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/gaziantep",
    element: (
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-20  mt-40 mb-10 ">
        <div className="flex bg-white h-screen rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col  h-screen ">
          <div className="flex  h-screen mt-5 mr-4  basis-10/12 bg-[url('mapZone.png')] rounded-3xl">
            <App />
            <Gaziantep />
          </div>
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/kilis",
    element: (
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-20  mt-40 mb-10  ">
        <div className="flex bg-white h-screen  rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col  h-screen ">
          <div className="flex  h-screen mt-5 mr-4  basis-10/12 bg-[url('mapZone.png')] rounded-3xl">
            <App />
            <Kilis />
          </div>
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/sanliurfa",
    element: (
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-20  mt-40 mb-10  ">
        <div className="flex bg-white h-screen rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col  h-screen ">
          <div className="flex  h-screen mt-5 mr-4  basis-10/12 bg-[url('mapZone.png')] rounded-3xl">
            <App />
            <Sanliurfa />
          </div>
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/adiyaman",
    element: (
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-20  mt-40 mb-10  ">
        <div className="flex bg-white h-screen rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col  h-screen ">
          <div className="flex  h-screen mt-5 mr-4  basis-10/12 bg-[url('mapZone.png')] rounded-3xl">
            <App />
            <Adiyaman />
          </div>
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/kahramanmaras",
    element: (
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-20  mt-40 mb-10">
        <div className="flex bg-white h-screen rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col  h-screen ">
          <div className="flex  h-screen mt-5 mr-4  basis-10/12 bg-[url('mapZone.png')] rounded-3xl">
            <App />
            <Kahramanmaras />
          </div>
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/diyarbakir",
    element: (
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-20  mt-40 mb-10">
        <div className="flex bg-white h-screen rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col  h-screen ">
          <div className="flex  h-screen mt-5 mr-4  basis-10/12 bg-[url('mapZone.png')] rounded-3xl">
            <App />
            <Diyarbakir />
          </div>
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/malatya",
    element: (
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-20  mt-40 mb-10 ">
        <div className="flex bg-white h-screen rounded-l-[2rem] flex-col basis-2/12 ">
          <Header />
        </div>
        <div className="flex flex-col  h-screen ">
          <div className="flex  h-screen mt-5 mr-4  basis-10/12 bg-[url('mapZone.png')] rounded-3xl">
            <App />
            <Malatya />
          </div>
          <div className="mt-12">
            <Footer />
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/iletisim",
    element: (
      <div className="flex flex-row items-center bg-white rounded-[2rem] w-[90vw] pb-20  mt-40 mb-10">
        <div className="flex bg-white h-screen rounded-l-[2rem] flex-col basis-1/5">
          <Header />
        </div>
        <div className="basis-4/5 h-screen mt-5 mr-4  flex flex-col bg-[url('mapZone.png')] rounded-3xl">
          <İletisim />
          <Footer />
        </div>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
