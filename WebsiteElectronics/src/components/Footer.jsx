import React from "react";
import footer1 from "../assets/footer1.jfif";
import footer2 from "../assets/footer2.jfif";
import footer3 from "../assets/footer3.jfif";
import footer4 from "../assets/footer5.jfif";
import h1 from "../assets/h1.jfif";
import h2 from "../assets/h2.jfif";
import h3 from "../assets/h3.jfif";
import h4 from "../assets/h4.jfif";


export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top-news">
        {[
          {
            img: footer1,
            title: "Trên tay TP-Link Archer GE230: Router Wi-Fi 7 bằng th...",
          },
          {
            img: footer2,
            title: "Cách sử dụng thẻ căn cước đi tàu Metro thay vé tháng đơn giản,...",
          },
          {
            img: footer3,
            title: "Hướng dẫn thủ tục cấp đổi thẻ căn cước trên VNeID mới nhất",
          },
          {
            img: footer4,
            title: "POCO M7 Plus được xác nhận có màn hình 6.9 inch, tần số quét...",
          },
        ].map((news, i) => (
          <div className="footer-news-card" key={i}>
            <img src={news.img} alt="" />
            <div className="footer-news-title">{news.title}</div>
          </div>
        ))}
      </div>
      <div className="footer-main">
        <div className="footer-col">
          <div className="footer-title">Tổng đài hỗ trợ miễn phí</div>
          <div>
            Mua hàng - bảo hành <b>1800.2097</b> (7h30 - 22h00)
            <br />
            Khiếu nại <b>1800.2063</b> (8h00 - 21h30)
          </div>
          
          <div className="footer-title" style={{marginTop:14}}>Đăng ký nhận tin khuyến mãi</div>
          <div className="footer-note">Nhận ngay voucher 10%<br />Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới</div>
          <input className="footer-input" placeholder="Nhập email của bạn"/>
          <input className="footer-input" placeholder="Nhập số điện thoại của bạn"/>
          <label className="footer-checkbox">
            <input type="checkbox" defaultChecked /> Tôi đồng ý với điều khoản của CellphoneS
          </label>
          <button className="footer-btn-red">ĐĂNG KÝ NGAY</button>
        </div>
        <div className="footer-col">
          <div className="footer-title">Thông tin và chính sách</div>
          <div className="footer-link">Mua hàng và thanh toán Online</div>
          <div className="footer-link">Mua hàng trả góp Online</div>
          <div className="footer-link">Mua hàng trả góp bằng thẻ tín dụng</div>
          <div className="footer-link">Chính sách giao hàng</div>
          <div className="footer-link">Chính sách đổi trả</div>
          <div className="footer-link">Trả điểm Smember</div>
          <div className="footer-link">Xem ưu đãi Smember</div>
          <div className="footer-link">Tra thông tin bảo hành</div>
          <div className="footer-link">Tra cứu hoá đơn điện tử</div>
          <div className="footer-link">Thông tin hoá đơn mua hàng</div>
          <div className="footer-link">Trung tâm bảo hành chính hãng</div>
          <div className="footer-link">Quy định về việc sao lưu dữ liệu</div>
          <div className="footer-link">Hướng dẫn khui hộp sản phẩm Apple</div>
          <div className="footer-link">VAT Refund</div>
        </div>
        <div className="footer-col">
          <div className="footer-title">Dịch vụ và thông tin khác</div>
          <div className="footer-link">Khách hàng doanh nghiệp (B2B)</div>
          <div className="footer-link">Ưu đãi thanh toán</div>
          <div className="footer-link">Quy chế hoạt động</div>
          <div className="footer-link">Chính sách bảo mật thông tin cá nhân</div>
          <div className="footer-link">Chính sách Bảo hành</div>
          <div className="footer-link">Liên hệ hợp tác kinh doanh</div>
          <div className="footer-link">Tuyển dụng</div>
          <div className="footer-link">Dịch vụ bảo hành mở rộng</div>
          <div style={{marginTop:18, fontWeight:600, lineHeight:"20px"}}>
            Mua sắm dễ dàng – Ưu đãi ngập tràn cùng app CellphoneS
          </div>
          <div className="footer-app-row">
            
            <div>
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="play" className="footer-appstore" /></a>
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="appstore" className="footer-appstore" /></a>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-title">Kết nối với CellphoneS</div>
          
          <div className="footer-title" style={{marginTop:16}}>Website thành viên</div>
          <div className="footer-member-link"><span className="footer-member-label red">dienthoaivui</span></div>
          <div className="footer-member-link"><span className="footer-member-label blue">careS</span></div>
          <div className="footer-member-link"><span className="footer-member-label orange">SChannel</span> network</div>
          <div className="footer-member-link"><span className="footer-member-label red">Sforum.vn</span></div>
        </div>
      </div>
      <div className="footer-float-btns">
        <button className="footer-gotop">⬆️ Lên đầu</button>
        <button className="footer-contact"><span role="img" aria-label="phone">🎧</span> Liên hệ</button>
      </div>
      <style>
        {`
        body { background: #fff;}
        .footer-container {
          font-family: 'Segoe UI', Arial, sans-serif;
          margin: 0;
          background: #fff;
          padding: 0 0 110px 0;
        }
        .footer-top-news {
          display: flex;
          gap: 18px;
          margin: 0 auto;
          max-width: 1100px;
          padding: 16px 0 8px 0;
        }
        .footer-news-card {
          width: 230px;
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 10px #0001;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        .footer-news-card img {
          width: 100%; height: 102px; object-fit: cover;
        }
        .footer-news-title {
          padding: 9px 11px;
          font-size: 15px;
          color: #222;
          font-weight: 500;
          min-height: 32px;
        }
        .footer-main {
          max-width: 1100px;
          margin: 18px auto 0 auto;
          display: flex;
          gap: 26px;
          align-items: flex-start;
        }
        .footer-col {
          flex: 1;
          min-width: 210px;
        }
        .footer-title {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 7px;
        }
        .footer-link {
          font-size: 15px;
          color: #222;
          margin: 3px 0;
          cursor: pointer;
          transition: color 0.15s;
        }
        .footer-link:hover {
          color: #d8000c;
        }
        .footer-payments img {
          height: 28px;
          width: 48px;
          margin-right: 7px;
          margin-bottom: 3px;
        }
        .footer-note {
          font-size: 14px;
          color: #1976d2;
          margin: 7px 0 7px 0;
        }
        .footer-input {
          width: 90%;
          margin-bottom: 7px;
          padding: 9px 12px;
          border-radius: 8px;
          border: 1px solid #dadcdf;
          font-size: 15px;
        }
        .footer-checkbox {
          font-size: 14px;
          color: #222;
          margin-bottom: 7px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-btn-red {
          background: #d8000c;
          color: #fff;
          border: none;
          border-radius: 9px;
          padding: 9px 18px;
          font-size: 16px;
          font-weight: 600;
          margin-top: 4px;
          cursor: pointer;
        }
        .footer-app-row {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-top: 10px;
        }
        .footer-qr {
          width: 64px; height: 64px; border-radius: 8px; border: 1px solid #eee;
        }
        .footer-appstore {
          width: 120px; height: 37px; margin-bottom: 5px; margin-top: 2px;
        }
        .footer-socials {
          display: flex;
          gap: 10px;
          margin-bottom: 7px;
        }
        .footer-social-icon {
          width: 30px; height: 30px; border-radius: 50%; background: #f5f6fa;
          border: 1.5px solid #eee;
        }
        .footer-member-link {
          margin: 4px 0;
        }
        .footer-member-label {
          padding: 2px 8px;
          border-radius: 5px;
          color: #fff;
          font-weight: 600;
          font-size: 15px;
        }
        .footer-member-label.red { background: #d8000c; }
        .footer-member-label.blue { background: #1976d2; }
        .footer-member-label.orange { background: #ff9800; }
        .footer-float-btns {
          position: fixed;
          right: 24px;
          bottom: 22px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          z-index: 99;
        }
        .footer-gotop {
          background: #fff;
          border: none;
          border-radius: 12px;
          box-shadow: 0 3px 12px #0002;
          padding: 7px 18px;
          font-size: 17px;
          color: #222;
          font-weight: 600;
          cursor: pointer;
        }
        .footer-contact {
          background: #d8000c;
          color: #fff;
          border: none;
          border-radius: 12px;
          box-shadow: 0 3px 12px #d8000c1a;
          padding: 7px 23px;
          font-size: 17px;
          font-weight: 600;
          cursor: pointer;
        }
        @media (max-width: 1100px) {
          .footer-main, .footer-top-news { max-width: 99vw; flex-wrap: wrap;}
          .footer-news-card { width: 44vw; min-width: 170px;}
          .footer-main { gap: 14px;}
          .footer-col { min-width: 170px;}
        }
        @media (max-width: 800px) {
          .footer-main { flex-direction: column; }
          .footer-news-card { width: 98vw;}
        }
        `}
      </style>
    </div>
  );
}