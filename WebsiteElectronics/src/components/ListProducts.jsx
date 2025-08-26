import React, { useState, useEffect } from "react";
import { GetAllProducts } from "../services/ConnectToApi";


import h from "../assets/h.jfif";
import h1 from "../assets/h1.jfif";
import h2 from "../assets/h2.jfif";
import h3 from "../assets/h3.jfif";
import h4 from "../assets/h4.jfif";
import { useNavigate } from "react-router-dom";

function formatVND(n) {
  return n?.toLocaleString("vi-VN") + "đ";
}

function FilterBar() {
  return (
    <div className="filter-bar">
      <button className="filter-btn active">🛠️ Bộ lọc</button>
      <button className="filter-btn">🚚 Sẵn hàng</button>
      <button className="filter-btn">🆕 Hàng mới về</button>
      <button className="filter-btn">💲 Xem theo giá</button>
      <button className="filter-btn">📱 Kiểu màn hình</button>
      <button className="filter-btn">📷 Tính năng camera</button>
      <button className="filter-btn">💾 Dung lượng RAM</button>
      <button className="filter-btn">💽 Bộ nhớ trong</button>
      <button className="filter-btn">✨ Tính năng đặc biệt ▼</button>
      <button className="filter-btn">🔄 Tần số quét ▼</button>
    </div>
  );
}

function SortBar() {
  return (
    <div className="sort-bar">
      <button className="sort-btn active">⭐ Phổ biến</button>
      <button className="sort-btn">🔥 Khuyến mãi HOT</button>
      <button className="sort-btn">⬇️ Giá Thấp - Cao</button>
      <button className="sort-btn">⬆️ Giá Cao - Thấp</button>
    </div>
  );
}


function ProductCard({ p }) {
  const navigate = useNavigate();
  // Danh sách ảnh assets
  const images = [h, h1, h2, h3, h4];
  // Tính index lặp lại
  const imgSrc = images[p.id % images.length];
  return (
    <div className="product-card">
      <img className="product-img" src={imgSrc} alt={p.name} />
      <div className="product-name">{p.name}</div>
      <div className="product-prices">
        <span className="product-price">{formatVND(p.price)}</span>
      </div>
      <div className="product-specs">
        <span>{p.description}</span>
      </div>
      <div className="student-price">
        Kho: {p.quantity}
      </div>
      <div>
          <button  style={{background:"#6163e9ff",color:"#fff",borderRadius:9,padding:"6px 10px",fontWeight:600, marginLeft:"5px", marginRight:"5px"}} onClick={() => navigate("/detail")}><span >Chi tiết</span></button>
         
         <button 
           style={{background:"#f04262ff",color:"#fff",borderRadius:9,padding:"6px 21px",fontWeight:600}}
           onClick={() => {
             const userId = localStorage.getItem("userId");
             if (!userId) {
                alert("Bạn chưa đăng nhập, vui lòng đăng nhập để mua hàng!");
               navigate("/LoginForm");
             } else {
               // Thêm sản phẩm vào giỏ hàng trong localStorage
               let cart = [];
               try {
                 cart = JSON.parse(localStorage.getItem("cart")) || [];
               } catch (e) { cart = []; }
               // Kiểm tra nếu sản phẩm đã có thì tăng số lượng, chưa có thì thêm mới
               const idx = cart.findIndex(item => item.id === p.id);
               if (idx > -1) {
                 cart[idx].quantity = (cart[idx].quantity || 1) + 1;
               } else {
                 cart.push({ ...p, quantity: 1 });
               }
               localStorage.setItem("cart", JSON.stringify(cart));
               alert("Đã thêm sản phẩm vào giỏ hàng!");
             }
           }}
         >Mua ngay</button>
      </div>
    </div>
  );
}

const ListProducts = () => {
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
      async function fetchProducts() {
        try {
          const res = await GetAllProducts();
          setProducts(res.data);
        } catch (err) {
          setError("Không thể tải sản phẩm");
        } finally {
          setLoading(false);
        }
      }
      fetchProducts();
    }, []);


  
    return (
  <div className="main-container" style={{paddingTop: "unset"}}>
        {/* <h2 style={{textAlign: "center"}}>Danh sách sản phẩm</h2>
        <FilterBar />
        <br />
        <div style={{textAlign: "center", fontWeight: 600, fontSize: 22, margin: "12px 0 6px 0" }}>
          Sắp xếp theo
        </div>
        <SortBar /> */}
        {loading && <div style={{textAlign: "center"}}>Đang tải sản phẩm...</div>}
        {error && <div style={{color: "#d00", textAlign: "center"}}>{error}</div>}
        <div className="product-list">
          {products.map((p) => (
            <ProductCard p={p} key={p.id} />
          ))}
        </div>
          <style>{`
            body { background: #fafbfc; }
            .main-container {
              font-family: 'Segoe UI', Arial, sans-serif;
              background: #fafbfc;
              padding: 18px 0 0 0;
            }
            h2 {
              margin: 0 0 16px 18px;
              letter-spacing: 1px;
            }
            .filter-bar {
              display: flex;
              flex-wrap: wrap;
              gap: 12px;
              background: #fff;
              padding: 18px 20px 10px 20px;
              border-radius: 16px;
              margin: 0 18px;
              box-shadow: 0 2px 12px #0001;
              justify-content: flex-start;
            }
            .filter-btn {
              background: #f6f7fa;
              border: none;
              border-radius: 10px;
              padding: 11px 20px;
              font-size: 15px;
              color: #222;
              font-weight: 500;
              cursor: pointer;
              transition: 0.18s;
              outline: none;
              box-shadow: 0 1px 4px #0001;
              min-width: 120px;
              text-align: center;
            }
            .filter-btn.active, .filter-btn:hover {
              background: #f55353;
              color: #fff;
              box-shadow: 0 2px 8px #f5535322;
            }
            .sort-bar {
              display: flex;
              gap: 18px;
              margin: 12px 0 22px 0;
              padding-left: 18px;
            }
            .sort-btn {
              background: #fff;
              border: 1.5px solid #e5e5e5;
              border-radius: 24px;
              padding: 10px 28px;
              font-size: 16px;
              color: #232323;
              font-weight: 500;
              cursor: pointer;
              transition: 0.22s;
              box-shadow: 0 1px 4px #0001;
            }
            .sort-btn.active, .sort-btn:hover {
              background: #1976d2;
              color: #fff;
              border-color: #1976d2;
              box-shadow: 0 2px 8px #1976d222;
            }
            .product-list {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
              gap: 24px;
              margin: 24px 18px 0 18px;
            }
            .product-card {
              background: #fff;
              border-radius: 18px;
              box-shadow: 0 2px 16px #0002;
              padding: 18px 18px 14px 18px;
              min-width: 240px;
              max-width: 320px;
              margin: 0 auto;
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: stretch;
            }
            .product-img {
              width: 100%;
              height: 130px;
              object-fit: contain;
              border-radius: 10px;
              margin: 0 auto 10px auto;
              background: #f6f7fa;
              box-shadow: 0 1px 4px #0001;
            }
            .product-name {
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 6px;
              min-height: 38px;
              text-align: left;
            }
            .product-prices {
              display: flex;
              align-items: center;
              gap: 12px;
              margin-bottom: 8px;
            }
            .product-price {
              color: #f55353;
              font-size: 19px;
              font-weight: 700;
            }
            .product-specs {
              display: flex;
              gap: 10px;
              font-size: 13px;
              color: #555;
              margin-bottom: 5px;
            }
            .student-price {
              background: #f6f7fa;
              color: #1976d2;
              border-radius: 7px;
              font-size: 15px;
              padding: 2px 10px;
              font-weight: 600;
              margin-bottom: 6px;
            }
            @media (max-width: 1000px) {
              .product-list {
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: 16px;
              }
              .product-card {
                min-width: 220px;
                max-width: 99vw;
              }
            }
            @media (max-width: 700px) {
              .main-container { padding: 8px 0 0 0; }
              .filter-bar, .product-list { margin: 0 2vw; }
              .product-list { gap: 10px; }
            }
          `}</style>
      </div>
    );
}

export default ListProducts