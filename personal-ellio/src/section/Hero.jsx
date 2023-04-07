import React from "react";
import TradingIdeas from "./TradingIdeas";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { Timeline } from "react-ts-tradingview-widgets";
import { EconomicCalendar } from "react-ts-tradingview-widgets";
import Footer from "../components/Footer";
function Hero() {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-lg sm:text-3xl md:text-6xl xl:text-8xl text-red-600 text-center">
          Premium Research
        </h1>
        <h1 className="font-bold text-lg sm:text-3xl md:text-6xl xl:text-8xl text-red-600 text-center">
          Delivered to You
        </h1>
        <p className="flex  font-medium text-xs sm:text-xl md:text-3xl xl:text-6xl xl:py-6  text-gray-700 text-center px-3 py-3">
          Your time is valuable, so im here to do most the work for you.
        </p>
      </div>

      <div>
        <TradingIdeas />
      </div>
      <div className="w-full p-3 h-3/4 ">
        <AdvancedRealTimeChart autosize />
      </div>

      <div className="py-3 flex justify-center items-center flex-col">
        <h1 className="font-bold text-md sm:text-3xl xl:text-8xl md:text-6xl text-red-600 text-center pb-3 px-3">
          IT'S TIME TO BRING CHANGE
        </h1>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5fa2c68fbb04ec5a87170e77/1633140264234-P0SQZ9UQNGWBH5MH3XIQ/corporate+price.png?format=1500w"
          alt=""
        />
        <div className="flex items-center sm:w-3/4 flex-col justify-center   md:w-3/4 xl:w-3/4">
          <div className="w-3/4 sm:w-3/4 py-3 flex flex-col justify-center items-center">
            <p className="flex text-xs font-bold sm:text-xl sm:w-full xl:text-3xl md:text-xl text-gray-800 text-center px-3 py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 grid gap-3 grid-cols-2">
        <Timeline
          colorTheme="dark"
          feedMode="market"
          market="forex"
          height={600}
          width="100%"
        />
        <EconomicCalendar
          colorTheme="dark"
          height={600}
          width="100%"
        ></EconomicCalendar>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Hero;
