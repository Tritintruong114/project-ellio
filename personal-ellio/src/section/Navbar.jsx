import React from "react";
import { TickerTape } from "react-ts-tradingview-widgets";
import { Link } from "react-router-dom";
import {
  UilFacebookF,
  UilInstagram,
  UilTelegramAlt,
  UilTrademark,
} from "@iconscout/react-unicons";
function Navbar() {
  return (
    <div>
      <div>
        <TickerTape colorTheme="dark" />
      </div>

      <div className="w-full flex justify-center gap-3 p-3 items-center">
        <div className="w-1/4">
          <Link to={"home"}>Ellio</Link>
        </div>

        <div className="flex w-3/4 gap-3 justify-center items-center">
          <Link
            to={"education"}
            className="text-md md:text-xl xl:text-3xl font-light hover:text-red-300"
          >
            Education
          </Link>
          <Link
            to={"broker"}
            className="text-md md:text-xl xl:text-3xl font-light hover:text-red-300"
          >
            Broker
          </Link>
          <Link
            to={"trading"}
            className="text-md md:text-xl xl:text-3xl font-light hover:text-red-300"
          >
            Trading
          </Link>
          <Link
            to={"community"}
            className="text-md md:text-xl xl:text-3xl font-light hover:text-red-300"
          >
            Community
          </Link>
          <div className="w-1/4 text-right opacity-0 sm:opacity-100">
            <h1>Login</h1>
          </div>
        </div>

        <div className="fixed grid justify-center z-50 items-center gap-1 right-0 bottom-1/2 bg-slate-200 rounded-l-md py-3 ">
          <a
            className="hover:scale-110"
            href="https://www.facebook.com/tradewithElio/"
            target="_blank"
            rel="noreferrer"
          >
            <UilFacebookF />
          </a>
          <a
            className="hover:scale-110"
            href="https://www.instagram.com/hey.elio/"
            target="_blank"
            rel="noreferrer"
          >
            <UilInstagram />
          </a>
          <a
            className="hover:scale-110"
            href="https://t.me/ElioLe2222"
            target="_blank"
            rel="noreferrer"
          >
            <UilTelegramAlt />
          </a>
          <a
            className="hover:scale-110"
            href="https://vn.tradingview.com/u/Elio_Le_111199/"
            target="_blank"
            rel="noreferrer"
          >
            <UilTrademark />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
