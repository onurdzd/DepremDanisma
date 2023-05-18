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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div className="h-screen">
        <Header />
        <Dashboard />
      </div>
    ),
  },
  {
    path: "/adana",
    element: (
      <div className="h-screen">
        <Header />
        <Adana />
      </div>
    ),
  },
  {
    path: "/osmaniye",
    element: (
      <div className="h-screen">
        <Header />
        <Osmaniye />
      </div>
    ),
  },
  {
    path: "/hatay",
    element: (
      <div className="h-screen">
        <Header />
        <Hatay />
      </div>
    ),
  },
  {
    path: "/gaziantep",
    element: (
      <div className="h-screen">
        <Header />
        <div className="flex h-[auto] w-[30vw] mt-8 pl-6 flex gap-10">
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
        <Kilis />
      </div>
    ),
  },
  {
    path: "/sanliurfa",
    element: (
      <div className="h-screen">
        <Header />
        <Sanliurfa />
      </div>
    ),
  },
  {
    path: "/adiyaman",
    element: (
      <div className="h-screen">
        <Header />
        <Adiyaman />
      </div>
    ),
  },
  {
    path: "/kahramanmaras",
    element: (
      <div className="h-screen">
        <Header />
        <Kahramanmaras />
      </div>
    ),
  },
  {
    path: "/diyarbakir",
    element: (
      <div className="h-screen">
        <Header />
        <Diyarbakir />
      </div>
    ),
  },
  {
    path: "/malatya",
    element: (
      <div className="h-screen">
        <Header />
        <Malatya />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
