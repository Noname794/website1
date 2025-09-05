import React, { useState } from "react";
import { LoginRequest } from "../services/ConnectToApi";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await LoginRequest({ email, password });
      if (res.data && res.data.message) {
        let userId = null;
        if (res.data.message.toLowerCase().includes("successful")) {
          setSuccess("Đăng nhập thành công!");
          
          userId = res.data.id || res.data.customerId || res.data.customer_id;
          localStorage.setItem("userId", userId); // Store user ID in local storage
          alert("Đăng nhập thành công!"+userId);
          navigate("/home"); // Redirect to home page after successful login
        } else {
          setError(res.data.message);
          alert("Đăng nhập thất bại: " + res.data.message);
        }
      }
    } catch (err) {
      setError(
        err?.response?.data?.message || "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#fafafa",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        background: "#fff",
        boxShadow: "0 2px 24px rgba(0,0,0,.06)",
        borderRadius: 12,
        display: "flex",
        width: 1000,
        minHeight: 600,
        overflow: "hidden"
      }}>
        {/* Left */}
        <div style={{ flex: 1.05, background: "#fff", padding: 48, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            <div style={{
              background: "#e60012",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 28,
              padding: "2px 18px",
              borderRadius: 4,
              letterSpacing: 1
            }}>LayerPhone</div>
            <div style={{
              background: "#e60012",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 19,
              padding: "2px 12px",
              borderRadius: 4,
              alignSelf: "flex-end"
            }}>dienthoaivui</div>
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, marginBottom: 8 }}>
            Nhập hội khách hàng thành viên <span style={{ color: "#e60012" }}>SMEMBER</span>
          </div>
          <div style={{ color: "#333", marginBottom: 16, fontSize: 17 }}>
            Để không bỏ lỡ các ưu đãi hấp dẫn từ LayerPhone
          </div>
          <div style={{
            background: "linear-gradient(90deg, #fff 80%, #fafafa)",
            borderRadius: 18,
            border: "1.5px solid #e60012",
            marginBottom: 20,
            padding: "22px 26px 18px 26px",
            boxShadow: "0 2px 12px rgba(230,0,18,0.05)",
            position: "relative"
          }}>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", fontSize: 15 }}>
              <li style={{ marginBottom: 10 }}>
                <span style={{ color: "#e60012", fontSize: 18, marginRight: 6 }}>🎁</span>
                <b>Chiết khấu đến 5%</b> khi mua các sản phẩm mua tại CellphoneS
              </li>
              <li style={{ marginBottom: 10 }}>
                <span style={{ color: "#e60012", fontSize: 18, marginRight: 6 }}>🎁</span>
                <b>Miễn phí giao hàng</b> cho thành viên SMEM, SVIP và cho đơn hàng từ 300.000đ
              </li>
              <li style={{ marginBottom: 10 }}>
                <span style={{ color: "#e60012", fontSize: 18, marginRight: 6 }}>🎁</span>
                <b>Tặng voucher sinh nhật đến 500.000đ</b> cho khách hàng thành viên
              </li>
              <li style={{ marginBottom: 10 }}>
                <span style={{ color: "#e60012", fontSize: 18, marginRight: 6 }}>🎁</span>
                Trợ giá thu cũ lên tới <b>đến 1 triệu</b>
              </li>
              <li style={{ marginBottom: 10 }}>
                <span style={{ color: "#e60012", fontSize: 18, marginRight: 6 }}>🎁</span>
                Thăng hạng nhận voucher <b>đến 300.000đ</b>
              </li>
              <li>
                <span style={{ color: "#e60012", fontSize: 18, marginRight: 6 }}>🎁</span>
                Đặc quyền S-Student/S-Teacher <b>ưu đãi thêm đến 10%</b>
              </li>
            </ul>
            <div style={{
              color: "#e60012",
              fontWeight: 500,
              textAlign: "right",
              marginTop: 6,
              cursor: "pointer",
              fontSize: 14
            }}>
              Xem chi tiết chính sách ưu đãi Smember &gt;
            </div>
          </div>
          <div style={{
            width: "100%",
            textAlign: "center",
            marginTop: 20
          }}>
            <span role="img" aria-label="mascot" style={{ fontSize: 88, display: "inline-block" }}>🎉</span>
            {/* Thay icon này bằng ảnh nếu bạn có hình mascot */}
          </div>
        </div>
        {/* Right */}
        <div style={{ flex: 1, background: "#fafafa", padding: 48, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 380, margin: "auto" }}>
            <div style={{ fontSize: 30, fontWeight: 700, color: "#e60012", marginBottom: 32, textAlign: "center" }}>
              Đăng nhập SMEMBER
            </div>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div style={{ marginBottom: 18 }}>
                <label style={{ fontWeight: 500, display: "block", marginBottom: 6 }}>Email</label>
                <input
                  type="text"
                  placeholder="Nhập Email của bạn"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 10px",
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    fontSize: 15
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: 10 }}>
                <label style={{ fontWeight: 500, display: "block", marginBottom: 6 }}>Mật khẩu</label>
                <input
                  type="password"
                  placeholder="Nhập mật khẩu của bạn"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 10px",
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    fontSize: 15
                  }}
                  required
                />
                <span style={{ position: "absolute", right: 60, marginTop: -34, color: "#aaa", cursor: "pointer", fontSize: 18 }}>👁️</span>
              </div>
              <div style={{
                background: "#f4f8fb",
                color: "#295db6",
                fontSize: 13.5,
                padding: "9px 12px",
                borderRadius: 7,
                marginBottom: 14
              }}>
                Trải nghiệm đăng nhập liên mạch giữa CellphoneS và Điện Thoại Vui, ưu tiên dùng tài khoản CellphoneS (nếu có)
              </div>
              <button type="submit" style={{
                width: "100%",
                background: "#e60012",
                color: "#fff",
                fontWeight: 700,
                border: "none",
                borderRadius: 6,
                padding: "13px 0",
                fontSize: 18,
                marginBottom: 18,
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1
              }} disabled={loading}>
                {loading ? "Đang đăng nhập..." : "Đăng nhập"}
              </button>
              {error && (
                <div style={{ color: "#e60012", textAlign: "center", marginBottom: 10 }}>{error}</div>
              )}
              {success && (
                <div style={{ color: "#2ecc40", textAlign: "center", marginBottom: 10 }}>{success}</div>
              )}
              <div style={{ textAlign: "center", marginBottom: 22 }}>
                <a href="#" style={{ color: "#295db6", textDecoration: "none", fontWeight: 500 }}>Quên mật khẩu?</a>
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                margin: "18px 0"
              }}>
                <div style={{ flex: 1, height: 1, background: "#eaeaea" }}></div>
                <div style={{ margin: "0 18px", color: "#888" }}>Hoặc đăng nhập bằng</div>
                <div style={{ flex: 1, height: 1, background: "#eaeaea" }}></div>
              </div>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 16 }}>
                <button type="button" style={{
                  flex: 1,
                  border: "1px solid #dadada",
                  background: "#fff",
                  borderRadius: 7,
                  padding: "10px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  fontWeight: 500,
                  cursor: "pointer"
                }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" style={{ width: 23, marginRight: 8 }} />
                  Google
                </button>
                <button type="button" style={{
                  flex: 1,
                  border: "1px solid #dadada",
                  background: "#fff",
                  borderRadius: 7,
                  padding: "10px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  fontWeight: 500,
                  cursor: "pointer"
                }}>
                  <img src="https://static.zalo.me/web/zalo-product/zalo_logo.png" alt="" style={{ width: 23, marginRight: 8 }} />
                  Zalo
                </button>
              </div>
              <div style={{ textAlign: "center", marginTop: 10 }}>
                Bạn chưa có tài khoản?{" "}
                <a href="#" style={{ color: "#e60012", fontWeight: 600, textDecoration: "none" }} onClick={() => navigate("/RegisterForm")}>Đăng ký ngay</a>
              </div>
            </form>
            <div style={{ textAlign: "center", marginTop: 32, color: "#333", fontSize: 15 }}>
              Mua sắm, sửa chữa tại <br />
              <span style={{ color: "#e60012" }}>cellphones.com.vn</span> và <span style={{ color: "#e60012" }}>dienthoaivui.com.vn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}