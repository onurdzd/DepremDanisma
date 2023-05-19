import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Dashboard from "./Components/Dashboard.jsx";
import Header from "./Components/Header.jsx";
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
import { ReactComponent as Harita } from "../src/assets/vectormap.svg";
import SehirİsimleriEkle from "./Components/SehirİisimleriEkle.jsx";
import AnaSayfaSolMenu from "./Components/AnaSayfaSolMenu.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col  items-center gap-10 bg-slate-100 h-screen w-screen">
        <Header />
        <App />
        <Harita/>
        <SehirİsimleriEkle/>
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div className="h-screen">
        <Header />
        <div className="mt-8 pl-6">
          <Dashboard />
        </div>
      </div>
    ),
  },
  {
    path: "/adana",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex h-[auto] w-[30vw] mt-8 pl-6 gap-10">
          <Dashboard />
          <Adana />
        </div>
      </div>
    ),
  },
  {
    path: "/osmaniye",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex h-[auto] w-[30vw] mt-8 pl-6 gap-10">
          <Dashboard />
          <Osmaniye />
        </div>
      </div>
    ),
  },
  {
    path: "/hatay",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex h-[auto] w-[30vw] mt-8 pl-6 gap-10">
          <Dashboard />
          <Hatay />
        </div>
      </div>
    ),
  },
  {
    path: "/gaziantep",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex h-[auto] w-[30vw] mt-8 pl-6 gap-10">
          <Dashboard />
          <Gaziantep />
        </div>
      </div>
    ),
  },
  {
    path: "/kilis",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex h-[auto] w-[30vw] mt-8 pl-6 gap-10">
          <Dashboard />
          <Kilis />
        </div>
      </div>
    ),
  },
  {
    path: "/sanliurfa",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex h-[auto] w-[30vw] mt-8 pl-6 gap-10">
          <Dashboard />
          <Sanliurfa />
        </div>
      </div>
    ),
  },
  {
    path: "/adiyaman",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex h-[auto] w-[30vw] mt-8 pl-6 gap-10">
          <Dashboard />
          <Adiyaman />
        </div>
      </div>
    ),
  },
  {
    path: "/kahramanmaras",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex h-[auto] w-[30vw] mt-8 pl-6 gap-10">
          <Dashboard />
          <Kahramanmaras />
        </div>
      </div>
    ),
  },
  {
    path: "/diyarbakir",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex h-[auto] w-[30vw] mt-8 pl-6 gap-10">
          <Dashboard />
          <Diyarbakir />
        </div>
      </div>
    ),
  },
  {
    path: "/malatya",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex h-[auto] w-[30vw] mt-8 pl-6 gap-10">
          <Dashboard />
          <Malatya />
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
