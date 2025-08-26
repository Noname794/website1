import React, { useState } from "react";
import "./DetailProduct.css";

export default function DetailProduct() {
  const [selectedVersion, setSelectedVersion] = useState("S25 256GB");
  const [selectedColor, setSelectedColor] = useState("Xám bạc");

  const versions = [
    "S25 Ultra 1TB",
    "S25 Ultra 512GB",
    "S25 Ultra 256GB",
    "S25 Plus 512GB",
    "S25 Plus 256GB",
    "S25 512GB",
    "S25 256GB",
  ];

  const colors = [
    { name: "Xám bạc", price: "18.690.000đ", img: "/img/grey.png" },
    { name: "Xanh navy", price: "18.690.000đ", img: "/img/navy.png" },
    { name: "Xanh da trời", price: "18.690.000đ", img: "/img/sky.png" },
    { name: "Xanh lá", price: "18.690.000đ", img: "/img/green.png" },
  ];

  return (
    <div className="detail-container">
      {/* Cột trái */}
      <div className="left">
        <h1>Samsung Galaxy S25 256GB</h1>
        <div className="rating">
          ⭐ 5 (3 đánh giá)
        </div>
        <div className="actions">
          <button>🤍 Yêu thích</button>
          <button>💬 Hỏi đáp</button>
          <button>📋 Thông số</button>
          <button>🔗 So sánh</button>
        </div>

        <div className="highlight-box">
          <img
            src="/img/galaxy-s25.png"
            alt="Galaxy S25"
            className="main-img"
          />
          <div className="highlight-text">
            <h3>TÍNH NĂNG NỔI BẬT</h3>
            <ul>
              <li>Màn hình Dynamic AMOLED 2X 6.2 inch 120Hz – Hiển thị sắc nét, mượt mà, tiết kiệm pin.</li>
              <li>Chip Snapdragon 8 Elite – Hiệu năng mạnh mẽ, tối ưu AI, tiết kiệm năng lượng.</li>
              <li>Camera 50MP + Zoom quang 3X – Quay video 8K, chụp đêm tốt.</li>
              <li>Thiết kế cao cấp, IP68 – Chống nước, chống bụi.</li>
            </ul>
          </div>
        </div>

        <div className="thumb-list">
          <div className="thumb active">Tính năng nổi bật</div>
          <div className="thumb">Ảnh 1</div>
          <div className="thumb">Ảnh 2</div>
          <div className="thumb">Ảnh 3</div>
        </div>
      </div>

      {/* Cột phải */}
      <div className="right">
        <div className="price-box">
          <div className="discount-label">Giá dành riêng cho S-Student</div>
          <div className="price">17.990.000đ</div>
          <div className="old-price">22.580.000đ</div>
        </div>

        <div className="section">
          <h4>Phiên bản</h4>
          <div className="option-list">
            {versions.map((v) => (
              <button
                key={v}
                className={selectedVersion === v ? "active" : ""}
                onClick={() => setSelectedVersion(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="section">
          <h4>Màu sắc</h4>
          <div className="option-list">
            {colors.map((c) => (
              <button
                key={c.name}
                className={selectedColor === c.name ? "active" : ""}
                onClick={() => setSelectedColor(c.name)}
              >
                <img src={c.img} alt={c.name} />
                <div>{c.name}</div>
                <small>{c.price}</small>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}