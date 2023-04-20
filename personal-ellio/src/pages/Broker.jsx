import React, { useRef } from "react";
import { UilUserCircle, UilTelegramAlt } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import BrokerCard from "../components/BrokerCard";
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
      <div className="w-full flex items-center justify-center">
        <p className="p-3 w-3/4">
          Chúc cho tất cả trader đọc xong bài top sàn forex uy tín sẽ được SÀN
          FOREX NUÔI, chứ KHÔNG phải đi NUÔI SÀN FOREX! Forex vốn là 1 lĩnh vực
          vô cùng “khó nhằn” nhưng lại trở thành “mỏ vàng” hấp dẫn nhà đầu tư vì
          lợi nhuận mà nó mang lại. Và bước đầu tiên nếu muốn “chạm tay” vào
          forex, chính là tìm ra sàn Forex thực sự uy tín để giao dịch, một điều
          không dễ dàng gì với trader, đặc biệt là các trader mới vào nghề. Hiểu
          được điều đó, Ellio xin giới thiệu
          <span className="text-red-600">TOP</span> sàn Forex uy tín, để bạn
          tham khảo nhằm tìm ra broker phù hợp với bản thân nhất. Một điểm đáng
          nói chính là nhờ sự phát triển của internet không chỉ giúp đầu tư tài
          chính nói chung, forex nói riêng mà ngay cả sàn forex liên tục nở rộ,
          mọc lên như “nấm sau mưa”. Chính vì thế, ngoài việc giới thiệu các sàn
          forex uy tín dựa trên kinh nghiệm giao dịch từ chính bản thân. Chúng
          tôi còn đưa ra các tiêu chí chung dùng để đánh giá một sàn giao dịch
          forex tốt nhất hiện nay, cũng như giúp các bạn trả lời câu hỏi: Tại
          Việt Nam nên chọn sàn forex nào thông qua bài viết dưới đây, bạn nhé.
        </p>
      </div>
      <div className="gap-3 h-full flex flex-col">
        <BrokerCard
          imgUrl={
            "https://kienthucforex.com/wp-content/uploads/2020/06/Exness-sidebar-320x160.png"
          }
          brokerTilte={"Sàn Exness"}
          brokerPoints={"4.5/5"}
          imgStarUrl={
            "https://static.vecteezy.com/system/resources/previews/009/663/133/original/5-star-rating-review-star-transparent-free-png.png"
          }
        />
        <BrokerCard />
        <BrokerCard />
        <BrokerCard />
        <BrokerCard />
      </div>
    </div>
  );
}

export default Broker;
