import React, { useState } from "react";
import CategoryMegaMenu from "./CategoryMegaMenu";
import banner1 from "../assets/banner2.jpg";
import { useNavigate } from "react-router-dom";
import banner2 from "../assets/h1.jfif";
import banner3 from "../assets/h.jfif";
import banner4 from "../assets/h2.jfif";
import banner5 from "../assets/h3.jfif";
import ListProducts from "./ListProducts";
import Footer from "./Footer";
import slide1 from "../assets/slide12.jpg";
import slide2 from "../assets/slide11.jpg";



// Dữ liệu menu bên trái
const leftMenu = [
  {icon: "📱", label: "Điện thoại, Tablet"},
  {icon: "💻", label: "Laptop"},
  {icon: "🎧", label: "Âm thanh, Mic thu âm"},
  {icon: "⌚", label: "Đồng hồ, Camera"},
  {icon: "🏠", label: "Đồ gia dụng"},
  {icon: "🔌", label: "Phụ kiện"},
  {icon: "🖥️", label: "PC, Màn hình, Máy in"},
  {icon: "📺", label: "Tivi"},
  {icon: "🔄", label: "Thu cũ đổi mới"},
  {icon: "📦", label: "Hàng cũ"},
  {icon: "💡", label: "Khuyến mãi"},
  {icon: "📰", label: "Tin công nghệ"},
];



// Ảnh demo bạn thay đổi nếu muốn
const bannerUrl = "https://cdn.cellphones.com.vn/media/resized//homepage/moi-iphone-16-pro-max-2640x800_1_1.webp";
const bannerRight1 = "https://cdn.cellphones.com.vn/media/wysiwyg/Mobile/slider/slider-right-1.jpg";
const bannerRight2 = "https://cdn.cellphones.com.vn/media/wysiwyg/Mobile/slider/slider-right-2.jpg";
const bannerRight3 = "https://cdn.cellphones.com.vn/media/wysiwyg/Mobile/slider/slider-right-3.jpg";

export default function HomePage() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const banners = [slide1,banner1,slide2];

  const navigate = useNavigate();

  function loginPage(){
    navigate("/LoginForm");
  }

  function logoutPage(){
    localStorage.removeItem("userId");
    alert("Đăng xuất thành công!");
  }

  function prevBanner() {
    setCarouselIndex((prev) => (prev - 1 + banners.length) % banners.length);
  }
  function nextBanner() {
    setCarouselIndex((prev) => (prev + 1) % banners.length);
  }

  return (
    <div style={{background:"#f6f6f6", minHeight:"100vh"}}>
      {/* Header */}

      {/* Main content */}
      <div style={{display:"flex",gap:18,margin:"18px auto 0 auto",maxWidth:1240}}>
        {/* Thanh menu dọc trái */}
        <div style={{
          width:210,background:"#fff",borderRadius:15,
          boxShadow:"0 2px 12px #0001",padding:"8px 0",marginTop:10
        }}>
          {leftMenu.map((m,i)=>
            <div key={m.label} style={{
              padding:"10px 20px",display:"flex",alignItems:"center",gap:13,
              fontWeight:500,fontSize:16,cursor:"pointer",
              color:"#222",borderRadius:9,transition:"background 0.14s"
            }}
              onMouseEnter={i===0?()=>setShowMegaMenu(true):undefined}
              onMouseLeave={i===0?()=>setShowMegaMenu(false):undefined}
            >
              <span style={{fontSize:21}}>{m.icon}</span>
              <span>{m.label}</span>
              {i===0 &&
                <span style={{marginLeft:"auto",fontSize:15,color:"#aaa"}}>▶</span>
              }
            </div>
          )}
        </div>
        {/* Banner chính */}
        <div style={{
          flex:1,display:"flex",flexDirection:"column",gap:12,minWidth:500
        }}>
          <div style={{
            background: "#fff",
            borderRadius: 13,
            boxShadow: "0 2px 10px #0001",
            padding: 0,
            overflow: "hidden",
            height: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img
              src={banner1}
              alt=""
              style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}}
              onError={e => { e.target.onerror=null; e.target.src=bannerUrl; }}
            />
            <div style={{
              display:"flex",justifyContent:"space-around",fontWeight:600,fontSize:15,padding:"14px 10px 5px"
            }}>
              {/* <span style={{color:"#d00"}}>GALAXY Z7 SERIES</span>
              <span>OPPO RENO14</span>
              <span style={{color:"#222",borderBottom:"2.5px solid #d00",paddingBottom:2}}>IPHONE 16 PRO MAX</span>
              <span>REDMI PAD 2</span>
              <span>MUA ĐIỆN THOẠI</span> */}
            </div>
          </div>
          <div style={{display:"flex",gap:12}}>
            <img src={banner3} style={{width:190,height:80,objectFit:"cover",borderRadius:8}} alt="" />
            <img src={banner4} style={{width:190,height:80,objectFit:"cover",borderRadius:8}} alt="" />
            <img src={banner2} style={{width:190,height:80,objectFit:"cover",borderRadius:8}} alt="" />
          </div>
          <div style={{position: "relative", width: "100%", height: 280, borderRadius: 10, overflow: "hidden", background: "#fff", boxShadow: "0 2px 10px #0001"}}>
            <img src={banners[carouselIndex]} alt="banner" style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}} />
            <button onClick={prevBanner} style={{position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", background: "#fff8", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", fontSize: 22, fontWeight: 700, zIndex: 2}}>&lt;</button>
            <button onClick={nextBanner} style={{position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "#fff8", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", fontSize: 22, fontWeight: 700, zIndex: 2}}>&gt;</button>
            <div style={{position: "absolute", bottom: 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 8}}>
              {banners.map((_, idx) => (
                <span key={idx} style={{width: 10, height: 10, borderRadius: "50%", background: idx === carouselIndex ? "#1976d2" : "#ccc", display: "inline-block"}}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Banner dưới */}
      <div style={{
        background:"#fff",margin:"16px auto 0 auto",maxWidth:1220,
        borderRadius:13,boxShadow:"0 2px 10px #0001",padding:"12px 16px",
        display:"flex",gap:15,alignItems:"center"
      }}>
        <img src="https://cdn.cellphones.com.vn/media/wysiwyg/banner-camp/new.png" style={{height:44}} alt="" />
        <div style={{fontWeight:700,fontSize:20,color:"#d00"}}>Đổi Điểm Lên Deal Máy Mới Lên Đời</div>
        <div style={{marginLeft:"auto",display:"flex",gap:18}}>
          <span style={{background:"#e7002a",color:"#fff",borderRadius:9,padding:"6px 21px",fontWeight:600}}>Quà Tặng Đặc Quyền</span>
          <span style={{background:"#e7002a",color:"#fff",borderRadius:9,padding:"6px 21px",fontWeight:600}}>Giảm đến 10%</span>
          <span style={{background:"#e7002a",color:"#fff",borderRadius:9,padding:"6px 21px",fontWeight:600}}>16.7 - 31.10 ĐỔI ĐIỂM NGAY</span>
        </div>
      </div>
      <ListProducts />
      <Footer />
    </div>
  );
}