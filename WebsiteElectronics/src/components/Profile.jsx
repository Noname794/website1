// import React, { useState } from "react";

// const user = {
//   name: "Nguyễn Hữu Quyền",
//   phone: "034******09",
//   type1: "S-NULL",
//   type2: "S-Student",
//   update: "01/01/2026",
//   orders: 2,
//   total: "754.000đ",
//   accumulated: "2.246.000",
//   channel: "CellphoneS",
//   channelUrl: "cellphones.com.vn",
// };

// const orders = [
//   {
//     id: "WN0303048761",
//     date: "20/07/2025",
//     product: "BÀN PHÍM CƠ E-DRA KHÔNG DÂY EK368L ALPHA YELLOW SWITCH",
//     price: "404.000đ",
//     oldPrice: "549.000đ",
//     status: "Đã nhận hàng",
//     vat: true,
//     detail: "#",
//   },
//   {
//     id: "WN0301601085",
//     date: "19/01/2024",
//     product: "TAI NGHE BLUETOOTH CHỤP TAI HAVIT I62 ĐEN",
//     price: "350.000đ",
//     oldPrice: "590.000đ",
//     status: "Đã nhận hàng",
//     vat: true,
//     detail: "#",
//   },
// ];

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <div className="sidebar-section active">Tổng quan</div>
//       <div className="sidebar-section">Lịch sử mua hàng</div>
//       <div className="sidebar-section">Tra cứu bảo hành</div>
//       <div className="sidebar-section">Hạng thành viên và ưu đãi</div>
//       <div className="sidebar-section">Ưu đãi S-Student và S-Teacher</div>
//       <div className="sidebar-section">Thông tin tài khoản</div>
//       <div className="sidebar-section">Tìm kiếm cửa hàng</div>
//       <div className="sidebar-section">Chính sách bảo hành</div>
//       <div className="sidebar-section">Góp ý - Phản hồi - Hỗ trợ</div>
//       <div className="sidebar-section">Điều khoản sử dụng</div>
//       <div className="sidebar-section">Đăng xuất</div>
//     </div>
//   );
// }

// const [form, setForm] = useState({
//   first_name: "",
//   last_name: "",
//   email: "",
//   password: "",
//   rePassword: "",
//   address: "",
//   phone: "",
//   city: "",
//   country: "",
//   postal_code: "",
//   state: ""
// });

// function UserCard() {
//   return (
//     <div className="user-card">
//       <div className="user-info">
//         <div className="user-avatar">🐜</div>
//         <div>
//           <div className="user-name">{user.name}</div>
//           <div className="user-phone">{user.phone}</div>
//           <div>
//             <span className="badge gray">{user.type1}</span>
//             <span className="badge green">{user.type2}</span>
//           </div>
//           <div className="user-update">
//             Cập nhật lại sau {user.update}
//           </div>
//         </div>
//       </div>
//       <div className="user-stat">
//         <div>
//           <div className="stat-num">{user.orders}</div>
//           <div className="stat-label">Tổng số đơn hàng đã mua</div>
//         </div>
//         <div>
//           <div className="stat-num">{user.total}</div>
//           <div className="stat-label">Tổng tiền tích lũy</div>
//         </div>
//       </div>
//       <div className="user-channel">
//         <div>
//           <div className="channel-label">Bạn đang ở kênh thành viên</div>
//           <select>
//             <option>{user.channel}</option>
//           </select>
//         </div>
//         <div className="channel-logo">🅂</div>
//         <div className="channel-url">{user.channelUrl}</div>
//       </div>
//     </div>
//   );
// }

// function QuickNav() {
//   return (
//     <div className="quick-nav">
//       <div>Hạng thành viên</div>
//       <div>Mã giảm giá</div>
//       <div>Lịch sử mua hàng</div>
//       <div>Địa chỉ</div>
//       <div>S-Edu</div>
//       <div>Liên kết tài khoản</div>
//     </div>
//   );
// }

// function RecentOrders() {
//   return (
//     <div className="recent-orders">
//       <div className="section-title">Đơn hàng gần đây</div>
//       {orders.map((o) => (
//         <div className="order-card" key={o.id}>
//           <div>
//             <b>Đơn hàng:</b> #{o.id} &nbsp;|&nbsp; 
//             <b>Ngày đặt hàng:</b> {o.date}
//             <span className="order-status">{o.status}</span>
//           </div>
//           <div className="order-product">{o.product}</div>
//           <div>
//             <span className="order-price">{o.price}</span>
//             <span className="order-oldprice">{o.oldPrice}</span>
//           </div>
//           <div>
//             {o.vat && <span className="order-vat">Đã xuất VAT</span>}
//             <span style={{ float: "right" }}>
//               <b>Tổng thanh toán:</b> <span className="order-price">{o.price}</span> &nbsp;
//               <a href={o.detail}>Xem chi tiết &gt;</a>
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Offers() {
//   return (
//     <div className="offers">
//       <div className="section-title">Ưu đãi của bạn</div>
//       <div style={{ textAlign: "center" }}>
//         <div style={{ fontSize: 48 }}>🐜</div>
//         <div>Bạn chưa có ưu đãi nào. <a href="#">Xem sản phẩm</a></div>
//       </div>
//     </div>
//   );
// }

// function FavoriteProducts() {
//   return (
//     <div className="favorite-products">
//       <div className="section-title">Sản phẩm yêu thích</div>
//       <div style={{ textAlign: "center", color: "#aaa" }}>
//         <div style={{ fontSize: 48 }}>🐜</div>
//         <div>Bạn chưa yêu thích sản phẩm nào.</div>
//       </div>
//     </div>
//   );
// }

function Profile() {
  // return (
  //   <div className="dashboard">
  //     <Sidebar />
  //     <div className="main">
  //       <UserCard />
  //       <QuickNav />
  //       <div className="top-actions">
  //         <button className="action-btn">Đăng ký ngay</button>
  //         <button className="action-btn">Thêm địa chỉ</button>
  //       </div>
  //       <div className="main-content">
  //         <div style={{ flex: 2 }}>
  //           <RecentOrders />
  //           <FavoriteProducts />
  //         </div>
  //         <div style={{ flex: 1 }}>
  //           <Offers />
  //         </div>
  //       </div>
  //     </div>
  //     <style>
  //       {`
  //       body { background: #f5f6fa; }
  //       .dashboard {
  //         display: flex;
  //         font-family: 'Segoe UI', Arial, sans-serif;
  //         background: #f5f6fa;
  //         min-height: 100vh;
  //       }
  //       .sidebar {
  //         width: 220px;
  //         background: #fff;
  //         border-radius: 12px;
  //         margin: 20px 16px 20px 20px;
  //         padding: 12px 0;
  //         box-shadow: 0 2px 8px #0001;
  //         display: flex;
  //         flex-direction: column;
  //         gap: 4px;
  //       }
  //       .sidebar-section {
  //         padding: 10px 24px;
  //         cursor: pointer;
  //         color: #333;
  //         border-left: 4px solid transparent;
  //       }
  //       .sidebar-section.active, .sidebar-section:hover {
  //         background: #fbeaea;
  //         border-left: 4px solid #f55353;
  //         font-weight: 600;
  //       }
  //       .main {
  //         flex: 1;
  //         margin: 20px 20px 20px 0;
  //         display: flex;
  //         flex-direction: column;
  //       }
  //       .user-card {
  //         display: flex;
  //         gap: 18px;
  //         background: #fff;
  //         border-radius: 12px;
  //         padding: 24px;
  //         box-shadow: 0 2px 8px #0001;
  //         margin-bottom: 12px;
  //         align-items: flex-start;
  //       }
  //       .user-info {
  //         display: flex;
  //         gap: 14px;
  //         align-items: center;
  //       }
  //       .user-avatar {
  //         width: 60px;
  //         height: 60px;
  //         background: #eee;
  //         border-radius: 50%;
  //         font-size: 48px;
  //         display: flex;
  //         align-items: center;
  //         justify-content: center;
  //       }
  //       .user-name { font-size: 18px; font-weight: 600; }
  //       .user-phone { color: #888; font-size: 13px; }
  //       .badge {
  //         display: inline-block;
  //         padding: 2px 8px;
  //         margin: 2px 2px 2px 0;
  //         border-radius: 8px;
  //         font-size: 12px;
  //       }
  //       .badge.gray { background: #eee; color: #444; }
  //       .badge.green { background: #e8f8e4; color: #2dba4e; }
  //       .user-update { color: #888; font-size: 12px; }
  //       .user-stat {
  //         flex: 1;
  //         display: flex;
  //         justify-content: space-around;
  //         align-items: center;
  //         border-left: 1px solid #eee;
  //         border-right: 1px solid #eee;
  //       }
  //       .stat-num { font-size: 24px; color: #f55353; font-weight: 700; }
  //       .stat-label { color: #888; font-size: 13px; }
  //       .user-channel {
  //         min-width: 160px;
  //         text-align: right;
  //       }
  //       .channel-label { font-size: 13px; color: #888; }
  //       .channel-logo { font-size: 36px; }
  //       .channel-url { font-size: 13px; color: #f55353; }
  //       .quick-nav {
  //         display: flex;
  //         gap: 32px;
  //         background: #fff;
  //         border-radius: 12px;
  //         padding: 18px 32px;
  //         margin-bottom: 12px;
  //         box-shadow: 0 2px 8px #0001;
  //         font-size: 16px;
  //       }
  //       .top-actions {
  //         display: flex;
  //         gap: 12px;
  //         margin-bottom: 12px;
  //       }
  //       .action-btn {
  //         background: #f5fafe;
  //         border: 1px solid #eee;
  //         border-radius: 8px;
  //         padding: 12px 18px;
  //         color: #007aff;
  //         font-weight: 500;
  //         cursor: pointer;
  //         width: 100%;
  //       }
  //       .main-content {
  //         display: flex;
  //         gap: 16px;
  //       }
  //       .recent-orders, .offers, .favorite-products {
  //         background: #fff;
  //         border-radius: 12px;
  //         box-shadow: 0 2px 8px #0001;
  //         margin-bottom: 12px;
  //         padding: 18px;
  //       }
  //       .recent-orders .order-card {
  //         background: #f5f6fa;
  //         border-radius: 8px;
  //         padding: 12px 14px;
  //         margin: 12px 0;
  //       }
  //       .order-status {
  //         background: #e8f8e4;
  //         color: #2dba4e;
  //         font-size: 12px;
  //         padding: 2px 10px;
  //         border-radius: 8px;
  //         margin-left: 8px;
  //       }
  //       .order-product {
  //         font-weight: 600;
  //         margin: 6px 0;
  //       }
  //       .order-price {
  //         color: #f55353;
  //         font-weight: 600;
  //         margin-right: 8px;
  //       }
  //       .order-oldprice {
  //         color: #888;
  //         text-decoration: line-through;
  //         font-size: 13px;
  //       }
  //       .order-vat {
  //         background: #e8f8e4;
  //         color: #2dba4e;
  //         font-size: 11px;
  //         padding: 2px 8px;
  //         border-radius: 8px;
  //         margin-right: 10px;
  //       }
  //       .section-title {
  //         font-weight: 600;
  //         margin-bottom: 10px;
  //       }
  //       @media (max-width: 900px) {
  //         .dashboard { flex-direction: column; }
  //         .sidebar { width: 100%; margin: 12px 0; flex-direction: row; flex-wrap: wrap; }
  //         .main-content { flex-direction: column; }
  //       }
  //       `}
  //     </style>
  //   </div>
  // );
}

export default Profile;