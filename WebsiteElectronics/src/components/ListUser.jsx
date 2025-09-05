import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GetAllUsers } from '../services/ConnectToApi';

const ListUser = () => {

    const [users, setUsers] = useState([]);

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
    <div>
        {/* Search */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <h2>Admin Dashboard</h2>
        {/* Cards */}
        <div className="cards">
          <div className="card">
            <h3>MEMBER PROGRESS</h3>
            <p>$69,1891 (+20% Since Last Month)</p>
          </div>
          <div className="card dark">
            <h3>LATEST PROJECTS</h3>
            <p>$13,891 (+90% Since Last Week)</p>
          </div>
          <div className="card">
            <h3>MONTHLY SALES</h3>
            <p>$15,891 (+40% Since Last Month)</p>
          </div>
        </div>
        <button className="btn btn-primary mb-2" onClick={addUser}>Add Account</button>
        {/* Users Table */}
        <h3 className="text-center">Users Account</h3>
        <div className="container">
          
          <div className="table-responsive" style={{overflowX: 'auto', width: '100%'}}>
            <table className="table table-striped" style={{minWidth: '900px', width: '100%'}}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip Code</th>
                  <th>Country</th>
                  <th>Phone Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map(user =>
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>{user.address}</td>
                      <td>{user.city}</td>
                      <td>{user.state}</td>
                      <td>{user.zip_core}</td>
                      <td>{user.country}</td>
                      <td>{user.phone_number}</td>
                      <td>
                        <button className="btn btn-info" onClick={() => updateUser(user.id)}>Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
        {/* Bar Chart */}
        {/* <div className="chart-container">
          <Bar data={barData} options={barOptions} />
        </div> */}
        <style>{`
          .admin-layout {
            display: flex;
            min-height: 100vh;
            padding: 0;
          }
          .sidebar {
            width: 220px;
            min-width: 180px;
            background: #fff;
            box-shadow: 2px 0 12px #0001;
            border-radius: 0;
            padding: 32px 18px 18px 18px;
            position: sticky;
            left: 0;
            top: 0;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            z-index: 2;
          }
          .main {
            flex: 1;
            padding: 32px 32px 32px 32px;
            background: #f6f7fa;
            min-width: 0;
          }
          .table-responsive {
            margin-top: 16px;
            border-radius: 10px;
            box-shadow: 0 2px 12px #0001;
            background: #fff;
          }
          .table {
            border-collapse: collapse;
            width: 100%;
          }
          .table th, .table td {
            padding: 10px 12px;
            text-align: left;
            border-bottom: 1px solid #eee;
            font-size: 15px;
          }
          .table th {
            background: #f6f7fa;
            font-weight: 600;
          }
          .table-striped tr:nth-child(even) {
            background: #fafbfc;
          }
          @media (max-width: 1200px) {
            .main {
              padding: 24px 8px 24px 8px;
            }
            .sidebar {
              width: 160px;
              min-width: 120px;
              padding: 24px 8px 8px 8px;
            }
          }
          @media (max-width: 900px) {
            .table-responsive {
              overflow-x: auto;
            }
            .table {
              min-width: 700px;
            }
          }
          @media (max-width: 600px) {
            .table {
              min-width: 500px;
            }
            .table th, .table td {
              padding: 7px 6px;
              font-size: 13px;
            }
            .main {
              padding: 8px 2px 8px 2px;
            }
            .sidebar {
              width: 100px;
              min-width: 80px;
              padding: 8px 2px 2px 2px;
            }
          }
        `}</style>
    </div>
  )
}

export default ListUser