import React from "react";
import {
  UilFacebookF,
  UilInstagramAlt,
  UilTrademarkCircle,
  UilEnvelope,
} from "@iconscout/react-unicons";

function Footer() {
  return (
    <div>
      <div className="flex h-fit flex-col justify-center items-center">
        <h1 className="font-bold sm:text-xl text-md xl:text-8xl md:text-6xl">
          PAYMENT OPTIONS
        </h1>
        <p className="font-light sm:text-lg text-xs xl:text-6xl md:text-3xl">
          🔒 100% Secure Payment by:
        </p>
      </div>

      <div className="flex h-fit flex-row sm:flex-row gap-3 md:gap-1 justify-center items-center">
        <a
          href="https://vn.tradingview.com/symbols/IDX-ICON/"
          title="visa icons"
        >
          <img
            className="h-10 sm:h-10 xl:h-40 md:h-20 hover:scale-125 transition ease-in-out"
            src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
            alt="#"
          ></img>
        </a>
        <a
          href="https://vn.tradingview.com/symbols/IDX-ICON/"
          title="visa icons"
        >
          <img
            className="h-10 sm:h-10 xl:h-40 md:h-20  hover:scale-125 transition ease-in-out"
            src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"
            alt="#"
          ></img>
        </a>
        <a
          href="https://vn.tradingview.com/symbols/IDX-ICON/"
          title="visa icons"
        >
          <img
            className="h-10 sm:h-10 xl:h-40 md:h-20 hover:scale-125 transition ease-in-out"
            src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_Paypal-39-512.png"
            alt="#"
          ></img>
        </a>
      </div>

      <div className="flex flex-row justify-center items-center">
        <a href="https://vn.tradingview.com/symbols/IDX-ICON/">
          <img
            className="h-10 sm:h-10 xl:h-40 md:h-20 hover:scale-125 transition ease-in-out"
            src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_bitcoin-512.png"
            alt="#"
          ></img>
        </a>
        <p className="flex w-2/6 sm:text-md xl:text-3xl md:text-xl text-xs font-light hover:text-red-500 text-center ">
          Crypto Currency Payment Accepted.Reach out to Ellio on Telegram
        </p>
        <a href="https://vn.tradingview.com/symbols/IDX-ICON/">
          <img
            className="h-10 sm:h-10 xl:h-40 md:h-20 hover:scale-125 transition ease-in-out"
            src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-6/24/telegram-256.png"
            alt="#"
          ></img>
        </a>
      </div>

      <div className="flex h-fit flex-row gap-3 p-3 justify-center items-center ">
        <a href="https://iconscout.com/unicons">
          <button>
            <UilFacebookF
              size="20"
              className="hover:text-red-400 hover:scale-150 xl:h-10 xl:w-20 md:h-10 md:w-10  transition ease-in-out px-1"
              href="https://iconscout.com/unicons"
            />
          </button>
        </a>

        <a href="https://iconscout.com/unicons">
          <button>
            <UilInstagramAlt
              size="20"
              className="hover:text-red-600 hover:scale-150 xl:h-10 xl:w-20 md:h-10 md:w-10  transition ease-in-out px-1"
              href="https://iconscout.com/unicons"
            />
          </button>
        </a>

        <a href="https://iconscout.com/unicons">
          <button>
            <UilTrademarkCircle
              size="20"
              className="hover:text-red-600 hover:scale-150 xl:h-10 xl:w-20 md:h-10 md:w-10  transition ease-in-out px-1"
              href="https://iconscout.com/unicons"
            />
          </button>
        </a>

        <a href="https://iconscout.com/unicons">
          <button className="">
            <UilEnvelope
              size="20"
              className="hover:text-red-600 hover:scale-150 xl:h-10 xl:w-20 md:h-10 md:w-10  transition ease-in-out px-1"
              href="https://iconscout.com/unicons"
            />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
