import React, { useRef, useContext, useEffect } from "react";
import { UilUserCircle, UilTelegramAlt } from "@iconscout/react-unicons";
import { Link, useNavigate } from "react-router-dom";
import BrokerCard from "../components/BrokerCard";
import { AuthContext } from "../context/authProvider";

const brokerData = {
  whatisforexBoker:
    "Sàn Forex là tổ chức đóng vai trò trung gian kết nối giữa những người đầu tư, những tổ chức có nhu cầu lại với nhau hay giữa 1 bên (muốn) mua và 1 bên (muốn) bán, để từ đó tạo ra thanh khoản cho thị trường.Cũng chính vì giao dịch forex không thực sự dành cho các cá nhân nhỏ lẻ, chủ yếu dành cho những nhà đầu tư có vốn lớn, các quỹ, các ngân hàng, các nhà cung cấp thanh khoản. Nên sàn forex là thành phần không thể thiếu, nhằm kết nối giúp trader tham gia vào thị trường giao dịch tiền tệ này cùng với những cá thể kể trên. Để nhận lệnh từ trader, sàn  sẽ cung cấp các nền tảng giao dịch cho phép mua và bán ngoại tệ, sau khi trader đặt lệnh lệnh sẽ chuyển trực tiếp tới broker. Lúc này, sàn forex có thể sẽ đẩy lệnh đó ra thị trường với sàn dạng ECN, hoặc có thể ôm lệnh với các sàn dạng Market Maker hay nhà cái. Có thể thấy toàn bộ hoạt động của trader từ mở lệnh/đóng lệnh, chốt lời/cắt lỗ hay nạp tiền đều được thực hiện theo 1 chu trình khép kín dựa trên nền tảng đó. Vì thế, sàn forex đóng 1 phần quan trọng liên quan đến chất lượng giao dịch của trader.Sàn thu phí từ trader thông qua 2 nguồn chính gồm: phí spread hoặc phí hoa hồng. Thường nhà môi giới ngoại hối nào cũng có 2 dạng tài khoản như vậy để cho trader lựa chọn cái phù hợp với họ nhất. Ngoài tiền tệ forex, hiện tại sàn forex đều cung cấp rất nhiều dịch vụ sản phẩm khác nhau như: hàng hóa (đậu tương, ngô, coca, cà phê…), năng lượng (dầu thô, khí gas tự nhiên), kim loại (vàng, bạc, đồng…), tiền điện tử, chứng khoán CFD thậm chí là chỉ số hoặc trái phiếu…Một sàn forex uy tín phải là sàn chịu sự quản lý từ các các cơ quan tài chính lớn trên thế giới. Phần bên dưới chúng tôi đã giải thích rất kỹ lưỡng tại sao các cơ quan quản lý tài chính uy tín lại là 1 trong những tiêu chí quan trọng nhất để chọn. Hãy đọc kỹ phần đó, và tự chọn cho mình 1 sàn forex phù hợp nhất để giao dịch, bạn nhé.",
  whichtochoose:
    "Sau một thời gian dài phát triển, chuyển đổi từ giao dịch bản vị vàng sang hệ thống tỷ giá tự do và cuối cùng là giao dịch trực tuyến vào năm 1994, đã giúp forex hay giao dịch ngoại hối thực sự phát triển rộng rãi, cho phép ai cũng có thể tham gia miễn là có mạng internet.Tuy nhiên, forex có 1 điểm đặc thù chính là trader nhỏ lẻ không được phép giao dịch trực tiếp, mà phải thông qua 1 kênh trung gian, ở đây chính là các broker hay sàn forex. Ngoài ra, tại Việt Nam forex chưa được pháp luật công nhận, nhà nước không cho phép mở sàn, nếu có bất cứ khiếu nại gì xảy ra, sẽ rất khó lòng nhờ sự can thiệp từ các cơ quan có thẩm quyền. Vì lẽ đó, tìm kiếm 1 sàn forex uy tín để mở tài khoản giao dịch là điều vô cùng cần thiết để bạn tự bảo vệ bản thân, tránh những rắc rối gặp phải sau này.Không những vậy, nhiều trader ít có thói quen đổi sàn forex, trừ phi sàn có quá nhiều vấn đề thì nhà giao dịch mới phải “dọn” đi tìm chỗ mới. Chính vì thế, các sàn forex thường đưa ra những chiêu quảng cáo để thu hút khách hàng, nhất là khách hàng lần đầu mở tài khoản forex nhằm giữ chân trader.Vậy để tránh mua bực vào người, ảnh hưởng tới tâm lý hay bị mất tiền oan bạn nên bỏ thời gian, tìm hiểu lựa chọn sàn forex uy tín phù hợp với bạn nhất.",
  whychoose:
    "Một trong những tiêu chuẩn để đánh giá sàn forex chính là sàn được cấp phép hay chịu sự quản lý từ các tổ chức uy tín. Những cơ quan này thường có rất nhiều yêu cầu khắt khe (sẽ được chúng tôi nói kỹ lưỡng trong phần sau), sàn bắt buộc phải tuân thủ đầy đủ tiêu chí đề ra, mới được cấp phép. Nếu không sẽ bị loại ngay từ vòng gửi xe! Việc cấp phép không chỉ giúp sàn forex có “giấy thông hành” hoạt động trong thị trường tài chính, mà đây còn là thang điểm đánh giá độ uy tín của sàn, nhằm thu hút trader tham gia giao dịch.Điều đáng buồn, giao dịch forex tại Việt Nam chưa được pháp luật công nhận (dù pháp luật không cấm), và sẽ không có 1 cơ quan hay ủy ban tài chính nào đứng ra bảo vệ trader. Khi có sai phạm, sẽ không có bất cứ chế tài xử phạt những sàn forex này. Nên, thị trường Việt Nam vô hình chung trở thành “mỏ vàng” để sàn forex thiếu uy tín “hành nghề” mà không phải chịu bất cứ hình thức xử lý nào.",
  howtochoose:
    "Thực tế, rất khó để đưa ra tiêu chí cụ thể, bởi điều này không chỉ phụ thuộc vào sàn forex mà còn phụ thuộc vào mục đích giao dịch của từng trader. Nhiều trader yêu thích sàn forex có spread thấp để lướt sóng, nhưng nhiều trader lại thích chọn sàn forex ECN hoặc các loại tài khoản dạng ECN/STP chỉ thu phí hoa hồng (commision) để giao dịch. Trong khi đó, một số trader lại thích các sàn có đòn bẩy thật cao, rút tiền càng nhanh càng tốt… Nên muốn đánh giá sàn forex uy tín hay không còn phụ thuộc vào cách thức giao dịch của từng người, không ai giống ai. Dưới đây là 1 số tiêu chí cơ bản nhất bạn có thể áp dụng, khi muốn tìm sàn forex uy tín giao dịch.",
  timeBroker:
    "Forex vốn là 1 thị trường vô cùng khắc nghiệt, nhất là càng ngày càng có nhiều sàn mới được thành lập, khiến cho mức độ cạnh tranh càng trở nên khốc liệt hơn. Và sàn forex nào có thể giữ vững hoạt động trong 1 thời gian dài, không chịu sự đào thải từ thị trường, cũng là 1 trong các tiêu chí để xem xét và đánh giá mức độ tin cậy của sàn forex đó.",
  paperwork:
    "Trước khi đi sâu vào tầm quan trọng của việc tìm kiếm sàn forex chịu sự quản lý từ các tổ chức tài chính, đã bao giờ bạn tự hỏi, sàn forex và bạn có mối quan hệ như thế nào chưa?.Không bàn tới mối quan hệ giao dịch trên phương diện khách hàng và nhà môi giới, bản thân sàn forex có thể được xem như là 1 Thủ Quỹ người giữ túi tiền của trader!.Bạn muốn “thủ quỹ” của bạn là người như thế nào? Trung thực, minh bạch hay là 1 kẻ lừa đảo? Hoặc khi muốn rút tiền, nhưng “thủ quỹ” lại tìm mọi lý do không cho rút, hay dùng chính tiền ký quỹ để làm chuyện ngược với lợi ích khách hàng. Bạn muốn có 1 thủ quỹ như thế không?.Vậy, các ủy ban quản lý tài chính có ý nghĩa như thế nào đối với sàn forex. Nhất là trong việc giúp trader tìm ra 1 thủ quỹ không bao giờ tím cách “biển thủ công quỹ?.Thông thường, để xin giấy phép, sàn forex sẽ phải đáp ứng 1 số điều kiện pháp lý nhất định như:  ",

  fund: "cơ quan tổ chức càng uy tín sẽ càng quy định mức này cao. Ví dụ ASIC sẽ yêu cầu sàn forex phải có tiền vốn ít nhất là 1 triệu đô la Úc; FCA sẽ yêu cầu sàn forex có vốn 1 triệu bảng Anh; với CySEC mức vốn điều lệ tối thiểu sẽ rơi vào khoảng 50.000 USD.Đây chỉ là số vốn tối thiểu mà cơ quan tài chính yêu cầu để duy trì hoạt động từ sàn forex. Tất nhiên, đây không phải là tất cả, bản thân sàn forex còn phải trải qua nhiều yêu cầu khác trước khi được ủy ban tài chính “để mắt” tới và xét duyệt.Không kể một khi đã chịu sự quản lý từ ủy ban quản lý, thì sàn forex cứ “dăm bữa nửa tháng” lại bị cơ quan tài chính yêu cầu nộp báo cáo để xem xét. Và trong trường hợp phát hiện ra gian lận, sàn không chỉ bị phạt mà còn bị tước giấy phép. Tiêu biểu nhất chính là sàn forex FXCM đã bị ủy ban tài chính CFTC phạt 7 triệu USD, cũng như tước giấy phép hoạt động tại Mỹ.Như bạn thấy, trong nhiều trường hợp, sàn khó lòng xin cấp phép ngay từ những ngày đầu thành lập. Chính vì thế, thời điểm sàn forex có thể sở hữu giấy phép từ cơ quan uy tín, hầu hết đều có thời gian hoạt động từ 8 năm trở lên. Sàn forex sẽ có 1 độ “chín” nhất định, chứ không phải như các sàn non trẻ mới chân ướt chân ráo vào nghề, nên họ rất chuyên nghiệp trong việc xử lý, giải quyết khi có tranh chấp xảy ra. Thậm chí, đôi khi bản thân sàn phải chịu lỗ để bảo vệ uy tín, như Exness từng phải bồi thường cho khách hàng 15 triệu USD trong sự kiện SNB (Ngân hàng Trung ương Thụy Sĩ) đưa ra quyết định hủy bỏ neo tỷ giá vào đồng EUR và thả nổi đồng Franc Thụy Sĩ (CHF), năm 2015.",
  withdraw:
    "Đây có lẽ cũng là 1 trong những tiêu chí vô cùng quan trọng, để đánh giá 1 sàn forex uy tín. Bởi cho dù có là siêu sao, đánh trăm trận trăm thắng đi chăng nữa, nhưng sàn forex bạn giao dịch không có thanh khoản, thì tiền kiếm được cũng chỉ là vô nghĩa. Cho nên sàn giao dịch uy tín phải là sàn có cơ chế rút tiền càng nhanh càng tốt. Thời gian trung bình khi rút tiền bằng Ngân lượng hoặc Internet Banking để tiền về tài khoản thường trong vòng 24h (không tính ngày lễ hoặc 2 ngày cuối tuần). Với những sàn forex có thời gian rút tiền từ 3 ngày trở lên (không tính ngày lễ, tết hoặc thứ bảy và chủ nhật) thì có lẽ bạn nên tìm sàn khác để giao dịch.Ngoài ra, trong quá trình nạp và rút tiền bạn cũng cần lưu ý các khoản phí. Hiện nay, rất nhiều sàn giao dịch forex quốc tế có văn phòng tại Việt Nam, hỗ trợ khách hàng không mất phí nạp tiền thông qua cổng giao dịch điện tử như: Ngân lượng, help2pay, Skrill hay qua thẻ ngân hàng nội địa, thẻ Visa, thẻ  MasterCard. Tuy nhiên, khi rút thường vẫn phải mất 1 khoản phí, nên hãy kiểm tra xem phí rút nạp tại sàn forex bạn đang giao dịch, có trong khả năng bạn chấp nhận được không.",
  brokerFee:
    "Hiện tại, sàn forex “sống” được chủ yếu nhờ vào 2 nguồn thu chính là phí hoa hồng (commision) và spread (phí chênh lệch giữa lệnh mua và bán).Để đáp ứng nhu cầu của trader, sàn forex nào cũng có 2 dạng tài khoản cơ bản là tài khoản chỉ thu phí spread không thu phí hoa hồng. Và loại chủ yếu thu phí hoa hồng, bù lại phí spread sẽ thấp hơn nhiều so với dạng tài khoản thứ nhất.Sử dụng loại tài khoản nào còn phụ thuộc vào mục đích giao dịch từng người, để tìm loại phí phù hợp nhất. Ví dụ với trader yêu thích lướt sóng họ thường chọn các sàn forex dạng ECN thu phí hoa hồng trên mỗi lot giao dịch, thay vì chọn các loại tài khoản thu phí spread",
  brokerSupport:
    "Trong quá trình giao dịch sẽ phát sinh nhiều vấn đề. Do đó, tiêu chí để đánh giá một sàn forex uy tín là phải có đội ngũ hỗ trợ người Việt. Điều này giúp ích rất nhiều cho các trader, đặc biệt là những trader mới vào nghề. Bạn có thể tranh thủ đặt những câu hỏi liên quan đến phân tích kỹ thuật, mà đôi khi phải bỏ ra một số tiền khá lớn đi học bên ngoài các thầy mới giải đáp cho. Hầu hết, những nhân viên hỗ trợ sàn forex đều có kinh nghiệm giao dịch thực chiến, nên họ sẽ hiểu tâm lý cũng như phân tích kỹ thuật để đưa cho bạn những câu trả lời hợp lý nhất.",
};

export function Title({ title, type }) {
  return (
    <h1 className={`font-bold text-3xl py-3 text-${type}-600`}>{title}</h1>
  );
}
export function Para({ para }) {
  return <p className="text-lg font-light ">{para}</p>;
}
function Broker() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isLogin) {
      navigate("/login");
    }
  }, []);
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
          des1={"Sở hữu nhiều giấy phép uy tín"}
          des3={"Đòn bẩy cao 1: vô cực."}
          des4={"Rút tiền siêu nhanh kể cả thứ 7 và chủ nhật."}
          des2={
            "Miễn phí qua đêm (phí swap) cho tiền điện tử và VÀNG (rất ít sàn làm được)."
          }
          des5={"Nhân viên hỗ trợ nhiệt tình, chuyên nghiệp."}
          des6={"Thủ tục đăng ký nhanh chóng, đơn giản"}
          imgUrl={
            "https://kienthucforex.com/wp-content/uploads/2020/06/Exness-sidebar-320x160.png"
          }
          brokerTilte={"Sàn Exness"}
          brokerPoints={"5/5"}
          imgStarUrl={
            "https://static.vecteezy.com/system/resources/previews/009/663/133/original/5-star-rating-review-star-transparent-free-png.png"
          }
        />
        <BrokerCard
          des1={"Sở hữu nhiều giấy phép uy tín"}
          des2={"Nạp tiền tối thiểu thấp từ 1$"}
          des3={"Vàng được miễn phí qua đêm"}
          des4={"Giao dịch cổ phiếu được hưởng Cổ Tức, không mất phí Hoa hồng"}
          des5={"Nhiều talkshow và chương trình bonus tốt"}
          des6={"Nhân viên hỗ trợ nhiệt tình"}
          imgUrl={
            "https://kienthucforex.com/wp-content/uploads/2020/06/XTB-min-320x160.png"
          }
          brokerTilte={"Sàn XTB"}
          imgStarUrl={
            "https://static.vecteezy.com/system/resources/previews/009/663/133/original/5-star-rating-review-star-transparent-free-png.png"
          }
          brokerPoints={"4,5/5"}
        />
        <BrokerCard
          imgStarUrl={
            "https://static.vecteezy.com/system/resources/previews/009/663/133/original/5-star-rating-review-star-transparent-free-png.png"
          }
          brokerPoints={"4,5/5"}
          brokerTilte={"Sàn ICMarkets"}
          imgUrl={
            "https://kienthucforex.com/wp-content/uploads/2020/06/ICMarkets-Logo-min.png"
          }
          des1={"Sàn True ECN"}
          des2={
            "Spread siêu thấp, nhiều cặp bằng 0 như USDCHF, EURUSD, USDJPY…"
          }
          des3={
            "Cung cấp tín hiệu giao dịch miễn phí từ Autochartist hoặc Trading Central"
          }
          des4={"Nhân viên hỗ trợ chuyên nghiệp, nhiệt tình"}
          des5={"Cung cấp phần mềm giao dịch tiên tiến: MT5 và cTrader"}
        />
        <BrokerCard
          brokerTilte={"Sàn FBS"}
          imgStarUrl={
            "https://static.vecteezy.com/system/resources/previews/009/663/133/original/5-star-rating-review-star-transparent-free-png.png"
          }
          brokerPoints={"4,5/5"}
          imgUrl={
            "https://kienthucforex.com/wp-content/uploads/2020/06/LogoFBS-min.png"
          }
          des1={"Hỗ trợ nhiều phương thức chuyển tiền và rút tiền linh hoạt"}
          des2={"Có nhiều loại tài khoản cho khách hàng lựa chọn,"}
          des3={"Hỗ trợ khách hàng chuyên nghiệp tận tình"}
          des4={"Đòn bẩy lớn lên tới 1:3000"}
          des5={"Nạp rút tiền nhanh"}
          des6={"Thủ tục đăng ký tài khoản vô cùng đơn giản"}
        />
        <BrokerCard
          imgUrl={
            "https://kienthucforex.com/wp-content/uploads/2022/04/f83a35b45c5f24bcf491666106e63cc8.png"
          }
          brokerTilte={"Sàn FXTM"}
          imgStarUrl={
            "https://static.vecteezy.com/system/resources/previews/009/663/133/original/5-star-rating-review-star-transparent-free-png.png"
          }
          brokerPoints={"4,5/5"}
          des1={"Phí hoa hồng thấp 4 USD/lot/2 chieu"}
          des2={"Hồ sơ pháp lý uy tín"}
          des3={"Tài khoản giao dịch đa dạng, hỗ trợ các trader mới, vốn ít"}
          des4={"Nhiều công cụ hỗ trợ giao dịch, phân tích tốt"}
          des5={"Spread thấp, phí hoa hồng cạnh tranh"}
        />
      </div>
      <div className="w-3/4 gap-3 text-center">
        <Title title={"Sàn Forex là gì?"} />
        <Para para={brokerData.whatisforexBoker} />
      </div>
      <div className="w-3/4 gap-3 text-center">
        <Title title={"Chọn mặt gửi vàng vào sàn forex uy tín"} />
        <Para para={brokerData.whichtochoose} />
        <img
          className="object-cover object-center w-full"
          src="https://kienthucforex.com/wp-content/uploads/2019/03/top-san-forex-1-768x432.png"
        ></img>
      </div>
      <div className="w-3/4 gap-3 text-center">
        <Title
          title={"Tại sao việc chọn sàn forex lại quan trọng đến như vậy?"}
        />
        <Para para={brokerData.whychoose} />
      </div>
      <div className="w-3/4 gap-3 text-center">
        <Title title={"Các tiêu chí để đánh giá 1 sàn forex uy tín"} />
        <Para para={brokerData.howtochoose} />
        <Title title={"Thời gian thành lập và hoạt động của sàn forex"} />
        <Para para={brokerData.timeBroker} />
        <Title
          title={"Có giấy phép hoạt động từ những tổ chức tài chính uy tín"}
        />
        <Para para={brokerData.paperwork} />
        <Title type={"red"} title={"Quy định về vốn điều lệ"} />
        <Para para={brokerData.fund} />
        <Title title={"Rút và nạp tiền nhanh chóng"} />
        <Para para={brokerData.withdraw} />
        <Title title={"Sàn không có phí ẩn đi kèm"} />
        <img
          className="object-cover object-center w-full"
          src="https://kienthucforex.com/wp-content/uploads/2019/03/hidden-fee-768x432.png"
        ></img>
        <Para para={brokerData.brokerFee} />
        <Title
          title={"Đội ngũ hỗ trợ nhiệt tình đặc biệt có hỗ trợ là người Việt"}
        />
        <img
          className="object-cover object-center w-full"
          src="https://kienthucforex.com/wp-content/uploads/2019/03/support-768x432.png"
        ></img>
        <Para para={brokerData.brokerSupport} />
        <Title title={"Các sàn giao dịch forex uy tín nhất hiện nay"} />

        <h1 className="font-bold w-full text-left text-red-900">
          1.Sàn Exness
        </h1>
        <img className="w-full object-cover" src=""></img>
      </div>
    </div>
  );
}

export default Broker;
