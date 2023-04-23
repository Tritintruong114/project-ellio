import React, { useContext } from "react";
import { TickerTape } from "react-ts-tradingview-widgets";
import { Link } from "react-router-dom";
import {
  // import Community from './../pages/Community';
  UilFacebookF,
  UilInstagram,
  UilTelegramAlt,
  UilTrademark,
} from "@iconscout/react-unicons";
import { AuthContext } from "../context/authProvider";

function Navbar() {
  const auth = useContext(AuthContext);
  return (
    <div>
      <div>
        <TickerTape colorTheme="dark" />
      </div>

      <div className="w-full flex justify-center gap-3 p-3 items-center">
        <div className="w-full absolute left-3 opacity-0 sm:opacity-100">
          <Link to={"/"}>
            <button>Ellio</button>
          </Link>
        </div>

        <div className="flex w-3/4 gap-6 justify-center items-center">
          <Link to={"education"}>
            <button className="text-md md:text-xl xl:text-3xl font-light hover:text-red-300">
              Education
            </button>
          </Link>
          <Link to={"broker"}>
            <button className="text-md md:text-xl xl:text-3xl font-light hover:text-red-300">
              Broker
            </button>
          </Link>
          <Link to={"trading"}>
            <button className="text-md md:text-xl xl:text-3xl font-light hover:text-red-300">
              Trading
            </button>
          </Link>
          <Link to={"community"}>
            <button className="text-md md:text-xl xl:text-3xl font-light hover:text-red-300">
              Community
            </button>
          </Link>

          <div className="w-full text-right right-3 absolute opacity-0  sm:opacity-100">
            {auth.isLogin ? (
              <button onClick={() => auth.logout()}>Log Out</button>
            ) : (
              <Link to={"login"}>
                <h1>Login</h1>
              </Link>
            )}
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
