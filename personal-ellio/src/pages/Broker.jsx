import React, { useRef } from "react";
import { UilUserCircle, UilTelegramAlt } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
function Broker() {
  const data = new Date();
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col items-center justify-center w-full p-3 gap-3">
      {/* Start */}
      <div className="gap-3">
        <h1 className="font-bold text-lg">
          Top sàn forex uy tín nhất Thế giới 2023
        </h1>
        <div className="flex justify-around items-center">
          <div className="flex items-center gap-1">
            <UilUserCircle />
            <p>Ellio</p>
            <UilTelegramAlt />
          </div>

          <p>
            {data.getDate() + "-" + data.getMonth() + "-" + data.getFullYear()}
          </p>
        </div>
      </div>
      {/* End */}
      <div
        tabIndex={0}
        className="collapse md:w-2/4 xl:w-3/4 collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">Mục Lục</div>
        <div className="collapse-content gap-3">
          <Link className="py-3 hover:text-red-600">Sàn forex là gì?</Link>
          <br />
          <Link className="py-3 hover:text-red-600">
            Chọn mặt gửi vàng vào sàn forex uy tín.
          </Link>
          <br />
          <Link className="py-3 hover:text-red-600">
            Các tiêu chí để đánh giá 1 sàn forex uy tín.
          </Link>
          <br />
          <Link className="py-3 hover:text-red-600">
            Các sàn giao dịch forex uy tín nhất hiện nay.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Broker;
