import React, { useState } from 'react'
import CategoryMegaMenu from './CategoryMegaMenu'
import { useNavigate } from 'react-router-dom';

const Header1 = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const navigate = useNavigate();

  function loginPage(){
    navigate("/LoginForm");
  }

  function logoutPage(){
    const userId = localStorage.getItem("userId");
    if (userId) {
      localStorage.removeItem("userId");
      alert("Đăng xuất thành công!");
    } else {
      alert("Bạn chưa đăng nhập hãy thực hiện đăng nhập trước");
      navigate("/LoginForm");
    }
  }

  return (
    <div
      style={{
        background: "linear-gradient(90deg,#e7002a,#e7002a 80%,#ff6a00)",
        height: 72,
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        color: "#fff",
        position: "relative",
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontWeight: 900,
          fontSize: 32,
          marginRight: 22,
          letterSpacing: 1,
        }}

        onClick={() => navigate("/home")}
      >
        CodeWorld{" "}
        <span
          style={{
            background: "#fff",
            color: "#e7002a",
            borderRadius: 5,
            padding: "1px 5px",
          }}
        >
          S
        </span>
      </div>

      {/* Nút Danh mục */}
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setShowMegaMenu((prev) => !prev)} // toggle mở/đóng
          style={{
            background: "#fff1",
            color: "#fff",
            fontWeight: 600,
            fontSize: 19,
            marginRight: 15,
            border: "none",
            borderRadius: 8,
            padding: "7px 26px 7px 14px",
            cursor: "pointer",
            boxShadow: "0 1px 4px #0002",
            display: "flex",
            alignItems: "center",
            gap: 7,
          }}
        >
          <span style={{ fontSize: 23, marginRight: 3 }}>☰</span> Danh mục
        </button>

        {/* Mega menu chỉ hiển thị khi showMegaMenu = true */}
        {showMegaMenu && (
          <div style={{ position: "absolute", top: "100%", left: 0 }}>
            <CategoryMegaMenu visible={true} />
          </div>
        )}
      </div>

      {/* Vị trí, search, cart, quyền */}
      <div
        style={{
          marginLeft: 15,
          display: "flex",
          alignItems: "center",
          gap: 20,
          flex: 1,
        }}
      >
        <button
          style={{
            background: "#fff1",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: 500,
            fontSize: 17,
            padding: "7px 19px 7px 12px",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: 20, marginRight: 4 }}>📍</span> Bình Dương
        </button>
        <input
          placeholder="Bạn muốn mua gì hôm nay?"
          style={{
            flex: 1,
            minWidth: 220,
            marginLeft: 18,
            padding: "9px 18px",
            borderRadius: 19,
            border: "none",
            fontSize: 16,
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          marginLeft: 14,
          fontSize: 18,
        }}
         // Đóng mega menu khi click vào các mục này
      >
        <span style={{ cursor: "pointer" }}>
          Giỏ hàng{" "}
          <span
            style={{ fontSize: 21, marginLeft: 2 }}
            onClick={() => navigate("/card")}
          >
            🛒
          </span>
        </span>
        <span
          style={{
            background: "rgba(255,255,255,0.17)",
            padding: "7px 19px",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 600,
          }}
          onClick={() => loginPage()}
        >
          Login
        </span>
        <span
          style={{
            background: "rgba(255,255,255,0.17)",
            padding: "7px 19px",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 600,
          }}
          onClick={() => logoutPage()}
        >
          Logout
        </span>
      </div>
    </div>
  );
}

export default Header1