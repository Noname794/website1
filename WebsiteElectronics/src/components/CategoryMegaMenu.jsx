import React from "react";

// Dữ liệu mô phỏng menu phụ
const megaMenuData = [
  {
    title: "Hãng điện thoại",
    items: [
      "iPhone", "Samsung", "Xiaomi", "OPPO", "realme", "TECNO", "vivo", "Infinix", "Nokia", "Nubia", 
      <>Nothing Phone <span style={{background:'#e53935',color:'#fff',borderRadius:3,padding:'1px 5px',fontSize:11,marginLeft:5}}>MỚI</span></>,
      "Masstel", "Sony", "Itel", "Điện thoại phổ thông"
    ]
  },
  {
    title: "Mức giá điện thoại",
    items: [
      "Dưới 2 triệu","Từ 2 - 4 triệu","Từ 4 - 7 triệu","Từ 7 - 13 triệu","Từ 13 - 20 triệu","Trên 20 triệu"
    ]
  },
  {
    title: "Điện thoại HOT ⚡",
    items: [
      "iPhone 16",<>iPhone 15 Pro Max <span style={{background:'#e53935',color:'#fff',borderRadius:3,padding:'1px 5px',fontSize:11,marginLeft:5}}>MỚI</span></>,
      <>Galaxy Z Flip7 <span style={{background:'#e53935',color:'#fff',borderRadius:3,padding:'1px 5px',fontSize:11,marginLeft:5}}>MỚI</span></>,
      <>Galaxy Z Fold7 <span style={{background:'#e53935',color:'#fff',borderRadius:3,padding:'1px 5px',fontSize:11,marginLeft:5}}>MỚI</span></>,
      "S25 Ultra","OPPO Find N5","Xiaomi 15","Samsung Galaxy A56","Redmi Note 14","Samsung Galaxy A36","OPPO Reno14","Nothing Phone 3A","Tecno Camon 30S","Xiaomi POCO C71"
    ]
  },
  {
    title: "Hãng máy tính bảng",
    items: [
      "iPad","Samsung","Xiaomi","Huawei","Lenovo","Nokia","Teclast","Máy đọc sách","Kindle","Boox","Xem thêm tất cả Tablet"
    ]
  },
  {
    title: "Máy tính bảng HOT ⚡",
    items: [
      <>iPad Air M3 <span style={{background:'#e53935',color:'#fff',borderRadius:3,padding:'1px 5px',fontSize:11,marginLeft:5}}>HOT</span></>,
      <>iPad A16 <span style={{background:'#e53935',color:'#fff',borderRadius:3,padding:'1px 5px',fontSize:11,marginLeft:5}}>HOT</span></>,
      <>iPad Air 2024</>,
      <>iPad Pro 2024</>,
      <>iPad mini 7</>,
      <>Galaxy Tab S10 Series</>,
      <>Galaxy Tab S9 FE 5G</>,
      <>Xiaomi Pad 7 Pro <span style={{background:'#e53935',color:'#fff',borderRadius:3,padding:'1px 5px',fontSize:11,marginLeft:5}}>MỚI</span></>,
      <>Xiaomi Pad 7</>,
      <>Huawei Matepad 11.5"S</>,
      <>Xiaomi Pad SE</>,
      <>Teclast M50</>
    ]
  }
];

export default function CategoryMegaMenu({visible, onMouseEnter, onMouseLeave}) {
  if (!visible) return null;
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1002,
        background: "#fff",
        boxShadow: "0 4px 32px #0002",
        borderRadius: 12,
        padding: "22px 28px 18px 28px",
        display: "flex",
        gap: 42,
        minWidth: 780,
        maxWidth: 1100,
        minHeight: 360,
        maxHeight: "75vh",
        fontFamily: "Arial,sans-serif",
        color: "#222",
        fontSize: 15
      }}
    >
      {megaMenuData.map((col, i) =>
        <div key={col.title} style={{minWidth:170}}>
          <div style={{fontWeight:700,marginBottom:8,fontSize:16}}>{col.title}</div>
          {col.items.map((item,j)=>
            <div key={j} style={{marginBottom:7,display:"flex",alignItems:"center",gap:4}}>
              {item}
            </div>
          )}
        </div>
      )}
    </div>
  );
}