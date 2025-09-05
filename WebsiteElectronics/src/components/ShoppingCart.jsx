import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetProductById, GetShoppingCartByUserId } from "../services/ConnectToApi";

function formatVND(n) {
  return n.toLocaleString("vi-VN") + "đ";
}

export default function ShoppingCart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      alert("Bạn chưa đăng nhập, vui lòng đăng nhập để xem giỏ hàng!");
      navigate("/LoginForm");
      return;
    }

    // Gọi API lấy giỏ hàng
    GetShoppingCartByUserId(userId)
      .then(async (res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          const cartItems = res.data; // [{id, customer_id, product_id, quantity, created_at}]

          // Lấy danh sách promise gọi API product
          const promises = cartItems.map((c) =>
            GetProductById(c.product_id).then((resProduct) => {
              const p = resProduct.data;
              return {
                ...p, // dữ liệu product từ API
                quantity: c.quantity, // gán số lượng từ giỏ hàng
              };
            })
          );

          // Đợi tất cả promise hoàn thành
          const productsWithQty = await Promise.all(promises);
          setCart(productsWithQty);
        } else {
          setCart([]);
        }
      })
      .catch((err) => {
        alert(
          "Lỗi khi tải giỏ hàng: " +
            (err?.response?.data?.message || "Vui lòng thử lại sau.")
        );
      });
  }, [userId, navigate]);

  return (
    <div style={{ background: "#f5f6fa", minHeight: "100vh" }}>
      <div className="cart-container">
        <div className="cart-title-row">
          <button className="cart-back-btn" onClick={() => navigate(-1)}>
            &larr;
          </button>
          <h2>Giỏ hàng của bạn</h2>
        </div>
        <div className="cart-list">
          {cart.length === 0 ? (
            <div style={{ padding: 24, textAlign: "center" }}>
              Không có sản phẩm trong giỏ hàng.
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item-card" key={item.id}>
                <img
                  src={item.img || item.imgSrc}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div>
                    <span className="cart-item-price">
                      {formatVND(item.price)}
                    </span>
                  </div>
                  <div className="cart-item-desc">{item.description}</div>
                </div>
                <div className="cart-item-qty">
                  Số lượng: <span className="qty-num">{item.quantity}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <style>
        {`
        body { background: #f5f6fa;}
        .cart-header {
          background: #d8000c;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 32px;
          height: 56px;
          font-size: 15px;
          font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
        }
        .logo {
          display: flex;
          align-items: center;
          font-size: 24px;
          font-weight: bold;
        }
        .logo-text { letter-spacing: 1px; }
        .logo-s {
          background: #fff;
          color: #d8000c;
          border-radius: 3px;
          font-size: 18px;
          margin-left: 2px;
          padding: 0 5px;
        }
        .header-location {
          font-size: 13px;
          background: #fff2;
          padding: 3px 10px;
          border-radius: 8px;
        }
        .header-search {
          flex: 1;
          max-width: 380px;
          padding: 7px 18px;
          border-radius: 18px;
          border: none;
          outline: none;
          margin: 0 14px;
          font-size: 16px;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 14px;
        }
        .header-user.active {
          background: #fff4;
          padding: 7px 18px;
          border-radius: 18px;
        }
        .cart-container {
          max-width: 900px;
          margin: 28px auto 0 auto;
          background: transparent;
          min-height: 600px;
        }
        .cart-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-left: 8px;
        }
        .cart-back-btn {
          background: none;
          border: none;
          font-size: 22px;
          color: #d8000c;
          cursor: pointer;
        }
        .cart-tabs {
          display: flex;
          gap: 12px;
          margin: 16px 0 10px 0;
        }
        .cart-tab {
          background: #d8000c;
          color: #fff;
          border: none;
          padding: 7px 34px;
          border-radius: 8px 8px 0 0;
          font-weight: 500;
        }
        .cart-tab:not(.active) {
          background: #fff;
          color: #d8000c;
          border: 1px solid #d8000c;
        }
        .cart-select-all {
          background: #fff;
          padding: 10px 24px 2px 12px;
          font-size: 15px;
          border-radius: 0 0 8px 8px;
        }
        .cart-list {
          padding: 0 12px;
          margin-top: 8px;
        }
        .cart-item-card {
          background: #fff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          padding: 12px 20px;
          gap: 18px;
          box-shadow: 0 2px 8px #0001;
          margin-bottom: 12px;
        }
        .cart-item-img {
          width: 62px;
          height: 62px;
          object-fit: contain;
          border-radius: 10px;
          background: #f4f4f4;
        }
        .cart-item-info {
          flex: 1;
        }
        .cart-item-name {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 4px;
        }
        .cart-item-price {
          color: #d8000c;
          font-weight: bold;
          font-size: 17px;
          margin-right: 10px;
        }
        .cart-item-oldprice {
          color: #999;
          text-decoration: line-through;
          font-size: 15px;
        }
        .cart-item-qty {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .qty-btn {
          background: #fafbfc;
          border: 1px solid #ddd;
          border-radius: 5px;
          width: 28px;
          height: 28px;
          font-size: 16px;
          cursor: pointer;
        }
        .qty-num {
          min-width: 22px;
          text-align: center;
          font-size: 16px;
        }
        .cart-item-remove {
          background: none;
          border: none;
          color: #d8000c;
          font-size: 19px;
          cursor: pointer;
        }
        .cart-footer-bar {
          position: fixed;
          left: 0; right: 0; bottom: 0;
          background: #fff;
          box-shadow: 0 0 16px #0001;
          padding: 16px 11vw 16px 11vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 18px;
        }
        .cart-footer-total {
          color: #d8000c;
          font-weight: bold;
        }
        .cart-footer-buy {
          background: #d8000c;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 12px 38px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          opacity: 1;
          transition: 0.2s;
        }
        .cart-footer-buy:disabled {
          background: #eee;
          color: #999;
          cursor: not-allowed;
          opacity: 1;
        }
        @media (max-width: 900px) {
          .cart-container { padding: 0 6px; }
          .cart-footer-bar { padding: 16px 4vw; font-size: 15px;}
        }
        `}
      </style>
    </div>
  );
}