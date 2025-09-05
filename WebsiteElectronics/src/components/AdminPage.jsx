import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./AdminPage.css";
import { useNavigate } from "react-router-dom";
import { DeleteUser, GetAllUsers } from "../services/ConnectToApi";

import ListUser from "./ListUser";
import ListProducts from "./ListProducts";
import ManagerProducts from "./ManagerProducts";
import ManagerReview from "./ManagerReview";
import ManagerCategory from "./ManagerCategory";

// Đăng ký chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



  // ...existing code...
  const AdminPage = () => {

    
  const [users, setUsers] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("profile");
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  // Đổi tên hàm để tránh gọi đệ quy chính nó
  function fetchAllUsers(){
    
      GetAllUsers().then((response) => {
        setUsers(response.data);
      }).catch((error) => {
        console.error("Error fetching users:", error);
      });
    
  }

  function deleteUser(id){
    console.log("Delete user with ID:", id);

    DeleteUser(id).then(() => {
        console.log("User deleted successfully");
        alert("User deleted successfully");
        // Cập nhật lại danh sách người dùng sau khi xóa
        fetchAllUsers();
    }).catch((error) => {
        console.error("Error deleting user:", error);
        alert("Error deleting user: " + error.message);
    });
  }

  function updateUser(id){
    navigate(`/update-user/${id}`);
  }

  function addUser(){
    navigate("/add-user");
  }

  function logout(){
    navigate("/home");
  }

  return (
    <div className="admin-layout" style={{display: 'flex', minHeight: '100vh', padding: 0}}>
      <div className="sidebar" style={{width: '200px', minWidth: '180px', background: '#225dddff', boxShadow: '2px 0 12px #0001', borderRadius: 0, padding: '32px 18px 18px 18px', position: 'sticky', left: 0, top: 0, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', zIndex: 2}}>
        <h2>Code<span style={{color: 'black'}}>Sword</span></h2>
        <a
          href="#"
          style={{ fontWeight: selectedMenu === "profile" ? "bold" : "normal", color: selectedMenu === "profile" ? "#fff" : "#e0e0e0" }}
          onClick={() => setSelectedMenu("profile")}
        >
          Profile Costomer
        </a>
        <a
          href="#"
          style={{ fontWeight: selectedMenu === "products" ? "bold" : "normal", color: selectedMenu === "products" ? "#fff" : "#e0e0e0" }}
          onClick={() => setSelectedMenu("products")}
        >
          Management Products
        </a>
        <a 
          href="#"
          style={{ fontWeight: selectedMenu === "review" ? "bold" : "normal", color: selectedMenu === "review" ? "#fff" : "#e0e0e0" }}
          onClick={() => setSelectedMenu("review")}
        >
          Management Reviews
        </a>
        <a 
          href="#"
          style={{ fontWeight: selectedMenu === "category" ? "bold" : "normal", color: selectedMenu === "category" ? "#fff" : "#e0e0e0" }}
          onClick={() => setSelectedMenu("category")}
        >
          Management Categories
        </a>
        <a href="#">Notification</a>
        <a href="#">Setting</a>
        <a href="#" onClick={logout}>Logout</a>
      </div>
      <div className="main" style={{flex: 1, padding: '32px 32px 32px 32px', background: '#f6f7fa', minWidth: 0}}>
        {selectedMenu === "profile" && (
          <ListUser />
        )}
        {selectedMenu === "products" && (
          <ManagerProducts />
        )}
        {selectedMenu === "review" && (
          <ManagerReview />
        )}
        {selectedMenu === "category" && (
          <ManagerCategory />
        )}
      </div>
    </div>
  );
}
export default AdminPage;