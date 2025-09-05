import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AddNewUser, GetUserById, UpdateUser } from '../services/ConnectToApi';

const AddUpdateUser = () => {

    const {id} = useParams();

    const [first_name, set_first_name] = useState("");
    const [last_name, set_last_name] = useState("");
    const [email, set_email] = useState("");
    const [phone_number, set_phone_number] = useState("");
    const [address, set_address] = useState("");
    const [city, set_city] = useState("");
    const [state, set_state] = useState("");
    const [zip_core, set_zip_core] = useState("");
    const [country, set_country] = useState("");
    const [password, set_password] = useState("");

    const [error, setError] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        address: "",
        city: "",
        state: "",
        zip_core: "",
        country: "",
        password: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            GetUserById(id).then((res) => {
                const user = res.data;
                set_first_name(user.first_name);
                set_last_name(user.last_name);
                set_email(user.email);
                set_phone_number(user.phone_number);
                set_address(user.address);
                set_city(user.city);
                set_state(user.state);
                set_zip_core(user.zip_core);
                set_country(user.country);
                set_password(user.password);
            }).catch((err) => {
                console.error("Error fetching user data:", err);
                alert("Không thể sửa thông tin người dùng");
            });
        }
    }, [id]);

    function titlePage() {
        if (id) { 
            return <h2 className='text-center'>Update User</h2>
        }else {
            return <h2 className='text-center'>Add User</h2>
        }
    }

    function validateForm() {
        let isValid = true;
        const newError = {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            address: "",
            city: "",
            state: "",
            zip_core: "",
            country: "",
            password: ""
        };

        if (!first_name) {
            newError.first_name = "First name is required";
            isValid = false;
        }
        if (!last_name) {
            newError.last_name = "Last name is required";
            isValid = false;
        }
        if (!email) {
            newError.email = "Email is required";
            isValid = false;
        }
        if (!phone_number) {
            newError.phone_number = "Phone number is required";
            isValid = false;
        }
        if (!address) {
            newError.address = "Address is required";
            isValid = false;
        }
        if (!city) {
            newError.city = "City is required";
            isValid = false;
        }
        if (!state) {
            newError.state = "State is required";
            isValid = false;
        }
        if (!zip_core) {
            newError.zip_core = "Zip code is required";
            isValid = false;
        }
        if (!country) {
            newError.country = "Country is required";
            isValid = false;
        }
        if (!password) {
            newError.password = "Password is required";
            isValid = false;
        }

        setError(newError);
        return isValid;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validateForm()) {
            const user = {
                first_name,
                last_name,
                email,
                phone_number,
                address,
                city,
                state,
                zip_core,
                country,
                password
            };

            if (id) {
                // Update user logic here
                UpdateUser(id, user).then(() => {
                    alert("Cập nhật người dùng thành công");
                    navigate("/");
                }).catch((err) => {
                    console.error("Error updating user:", err);
                    alert("Không thể cập nhật người dùng");
                });
            } else {
                // Add user logic here
                AddNewUser(user).then(() => {
                    alert("Thêm người dùng thành công");
                    navigate("/");
                }).catch((err) => {
                    console.error("Error adding user:", err);
                    alert("Không thể thêm người dùng");
                });
            }
        }
    }

  return (
    <div className='container'>
        <br />
        <br />
        <h1 className='text-center'>Manager Users</h1>
        <div className="row">
            <div className='card col-md-6 offset-md-3'>
                {titlePage()}
                <div className='card-body'>
                    <form action="">
                        <div className='form-group mb-2'>
                            <label htmlFor="first_name" className='form-label'>First Name</label>
                            <input 
                            type="text"
                            placeholder='Enter first name'
                            name='first_name'
                            className= {`form-control ${error.first_name ? 'is-invalid' : ''}`} 
                            value={first_name} 
                            onChange={(e) => set_first_name(e.target.value)} 
                            />
                            {error.first_name && <span className='text-danger'>{error.first_name}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="last_name" className='form-label'>Last Name</label>
                            <input 
                            type="text"
                            placeholder='Enter last name'
                            name='last_name'
                            className= {`form-control ${error.last_name ? 'is-invalid' : ''}`} 
                            value={last_name} 
                            onChange={(e) => set_last_name(e.target.value)} 
                            />
                            {error.last_name && <span className='text-danger'>{error.last_name}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input 
                            type="email"
                            placeholder='Enter email'
                            name='email'
                            className= {`form-control ${error.email ? 'is-invalid' : ''}`} 
                            value={email} 
                            onChange={(e) => set_email(e.target.value)} 
                            />
                            {error.email && <span className='text-danger'>{error.email}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="phone_number" className='form-label'>Phone Number</label>
                            <input 
                            type="text"
                            placeholder='Enter phone number'
                            name='phone_number'
                            className= {`form-control ${error.phone_number ? 'is-invalid' : ''}`} 
                            value={phone_number} 
                            onChange={(e) => set_phone_number(e.target.value)} 
                            />
                            {error.phone_number && <span className='text-danger'>{error.phone_number}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="address" className='form-label'>Address</label>
                            <input 
                            type="text"
                            placeholder='Enter address'
                            name='address'
                            className= {`form-control ${error.address ? 'is-invalid' : ''}`} 
                            value={address} 
                            onChange={(e) => set_address(e.target.value)} 
                            />
                            {error.address && <span className='text-danger'>{error.address}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="city" className='form-label'>City</label>
                            <input 
                            type="text"
                            placeholder='Enter city'
                            name='city'
                            className= {`form-control ${error.city ? 'is-invalid' : ''}`} 
                            value={city} 
                            onChange={(e) => set_city(e.target.value)} 
                            />
                            {error.city && <span className='text-danger'>{error.city}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="state" className='form-label'>State</label>
                            <input 
                            type="text"
                            placeholder='Enter state'
                            name='state'
                            className= {`form-control ${error.state ? 'is-invalid' : ''}`} 
                            value={state} 
                            onChange={(e) => set_state(e.target.value)} 
                            />
                            {error.state && <span className='text-danger'>{error.state}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="zip_core" className='form-label'>Zip Code</label>
                            <input 
                            type="text"
                            placeholder='Enter zip code'
                            name='zip_core'
                            className= {`form-control ${error.zip_core ? 'is-invalid' : ''}`} 
                            value={zip_core} 
                            onChange={(e) => set_zip_core(e.target.value)} 
                            />
                            {error.zip_core && <span className='text-danger'>{error.zip_core}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="country" className='form-label'>Country</label>
                            <input 
                            type="text"
                            placeholder='Enter country'
                            name='country'
                            className= {`form-control ${error.country ? 'is-invalid' : ''}`} 
                            value={country} 
                            onChange={(e) => set_country(e.target.value)} 
                            />
                            {error.country && <span className='text-danger'>{error.country}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="password" className='form-label'>Password</label>
                            <input 
                            type="password"
                            placeholder='Enter password'
                            name='password'
                            className= {`form-control ${error.password ? 'is-invalid' : ''}`} 
                            value={password} 
                            onChange={(e) => set_password(e.target.value)} 
                            />
                            {error.password && <span className='text-danger'>{error.password}</span>}
                        </div>
                        <button className='btn btn-success' onClick={handleSubmit}>
                            {id ? "Update User" : "Add User"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUpdateUser