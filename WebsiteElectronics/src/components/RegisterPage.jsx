import React, { useState } from "react";
import { RegisterRequest } from "../services/ConnectToApi";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({
      ...f,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (form.password !== form.rePassword) {
      setError("Mật khẩu nhập lại không khớp.");
      return;
    }
    setLoading(true);
    try {
      const res = await RegisterRequest({
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        password: form.password
      });
      if (res.data && res.data.message) {
        if (res.data.message.toLowerCase().includes("success")) {
          setSuccess("Đăng ký thành công!");
          alert("Đăng ký thành công! Vui lòng đăng nhập.");
          navigate("/LoginForm");
        } else {
          setError(res.data.message);
        }
      } else {
        setError("Đăng ký thất bại. Vui lòng thử lại.");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Đăng ký thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="register-mascot" style={{ textAlign: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 90 }}>🐜</span>
        </div>
        <div className="register-social">
          <div>Sign up with social network account</div>
          <div className="social-btn-row">
            <button type="button" className="social-btn google">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" style={{width:22, marginRight:8}}/>
              Google
            </button>
            <span className="social-or">-</span>
            <button type="button" className="social-btn zalo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="" style={{width:24,marginRight:8}}/>
              Zalo
            </button>
          </div>
          <div className="register-or">Or fill in the following information</div>
        </div>
        <div className="reg-section-title">Personal information</div>
        <div className="reg-input-row">
          <div className="reg-input-col">
            <label>First Name</label>
            <input
              name="first_name"
              placeholder="First Name"
              value={form.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="reg-input-col">
            <label>Last Name</label>
            <input
              name="last_name"
              placeholder="Last Name"
              value={form.last_name}
              onChange={handleChange}
              type="text"
              required
            />
          </div>
        </div>
        <div className="reg-input-row">
          <div className="reg-input-col">
            <label>Email <span style={{ color: "#888", fontWeight: 400 }}>(Không bắt buộc)</span></label>
            <input
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              type="email"
            />
            <div className="vat-note">
              <span style={{color:"#1976d2"}}>✔</span> VAT invoice when purchasing will be sent to this email
            </div>
          </div>
        </div>
        <div className="reg-section-title">Create Password</div>
        <div className="reg-input-row">
          <div className="reg-input-col">
            <label>Password</label>
            <div className="input-pass-wrap">
              <input
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                type={showPass ? "text" : "password"}
                required
                minLength={6}
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                title="Ít nhất 6 ký tự, gồm cả chữ và số"
              />
              <button type="button" className="input-eye" onClick={() => setShowPass(s => !s)}>
                {showPass ? "🙈" : "👁️"}
              </button>
            </div>
            <div className="pass-note">Password must be at least 6 characters, with at least 1 letter and 1 number</div>
          </div>
          <div className="reg-input-col">
            <label>Re-enter password</label>
            <div className="input-pass-wrap">
              <input
                name="rePassword"
                placeholder="Re-enter your password"
                value={form.rePassword}
                onChange={handleChange}
                type={showRePass ? "text" : "password"}
                required
                minLength={6}
              />
              <button type="button" className="input-eye" onClick={() => setShowRePass(s => !s)}>
                {showRePass ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
        </div>
        <div className="reg-btn-row">
          <button type="button" className="btn-back" onClick={() => navigate("/LoginForm")}>{"<"} Back to login</button>
          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? "Đang đăng ký..." : "Complete registration"}
          </button>
        </div>
        {error && <div style={{ color: "#d8000c", textAlign: "center", marginTop: 10 }}>{error}</div>}
        {success && <div style={{ color: "#1976d2", textAlign: "center", marginTop: 10 }}>{success}</div>}
      </form>
      <style>
        {`
        body { background: #fff; }
        .register-container {
          min-height: 100vh;
          background: #fff;
          padding-top: 28px;
          font-family: 'Segoe UI', Arial, sans-serif;
        }
        .register-form {
          max-width: 580px;
          margin: 0 auto;
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 16px #0001;
          padding: 32px 28px 20px 28px;
        }
        .register-mascot { margin-bottom: 10px; }
        .register-social { text-align: center; margin-bottom: 13px;}
        .social-btn-row {
          display: flex; align-items: center; justify-content: center; gap: 18px; margin-top: 14px; margin-bottom: 7px;
        }
        .social-btn {
          background: #fff; border: 1px solid #dadcdf; border-radius: 9px;
          padding: 12px 34px; font-size: 17px; font-weight: 500; display: flex; align-items: center; cursor: pointer;
          transition: 0.15s;
        }
        .social-btn:active { background: #f5f6fa; }
        .social-btn.google { color: #222;}
        .social-btn.zalo { color: #1875e8;}
        .social-or { color: #666; font-size: 18px; font-weight: 700;}
        .register-or { margin-top: 8px; margin-bottom: 8px; color: #888; font-size: 15px;}
        .reg-section-title { font-weight: bold; font-size: 17px; margin: 20px 0 6px 0;}
        .reg-input-row {
          display: flex; gap: 20px; margin-bottom: 12px;
        }
        .reg-input-col {
          flex: 1; display: flex; flex-direction: column; gap: 5px;
        }
        .reg-input-col label { font-weight: 500; margin-bottom: 2px;}
        .reg-input-col input {
          border: 1px solid #dadcdf;
          border-radius: 8px;
          padding: 10px 13px;
          font-size: 16px;
          outline: none;
          transition: border 0.15s;
        }
        .reg-input-col input:focus { border: 1.5px solid #1976d2;}
        .vat-note { font-size: 13px; color: #1976d2; margin-top: 2px;}
        .input-pass-wrap { position: relative; display: flex;}
        .input-eye {
          position: absolute; right: 8px; top: 50%; transform: translateY(-50%);
          background: none; border: none; font-size: 19px; cursor: pointer; color: #999;
        }
        .pass-note { font-size: 13px; color: #888; margin-top: 2px;}
        .reg-options { margin: 6px 0 10px 0;}
        .ck-row { font-size: 15px; color: #222; user-select: none;}
        .reg-agree {
          font-size: 14px; color: #222; margin-bottom: 16px;
        }
        .reg-btn-row {
          display: flex; justify-content: space-between; align-items: center;
          gap: 16px; margin-top: 10px; border-top: 1px dashed #ddd; padding-top: 18px;
        }
        .btn-back {
          background: #fff; border: 1.5px solid #dadcdf; border-radius: 9px;
          padding: 13px 34px; font-size: 17px; font-weight: 500; color: #d8000c;
          cursor: pointer;
        }
        .btn-submit {
          background: #d8000c; color: #fff; border: none; border-radius: 9px;
          padding: 13px 34px; font-size: 17px; font-weight: 500; cursor: pointer;
        }
        @media (max-width: 700px) {
          .register-form { padding: 17px 3vw 10px 3vw; }
          .reg-input-row { flex-direction: column; gap: 7px; }
        }
        `}
      </style>
    </div>
  );
}