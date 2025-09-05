import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AddNewcategorie, GetReviewById, Updatecategorie } from '../services/ConnectToApi';

const AddUpdateCategory = () => {
  const {id} = useParams();

    const [name, set_name] = useState("");
    const [description, set_description] = useState("");
    const [parent_id, set_parent_id] = useState("");
    


    const [error, setError] = useState({
        name: "",
        description: "",
        parent_id: ""
        
    });

    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            GetReviewById(id).then((res) => {
                const user = res.data;
                set_name(user.name);
                set_description(user.description);
                set_parent_id(user.parent_id);
            }).catch((err) => {
                console.error("Error fetching product data:", err);
                alert("Không thể sửa thông tin sp");
            });
        }
    }, [id]);

    function titlePage() {
        if (id) { 
            return <h2 className='text-center'>Update Product</h2>
        }else {
            return <h2 className='text-center'>Add Product</h2>
        }
    }

    function validateForm() {
        let isValid = true;
        const newError = {
            name: "",
            description: "",
            parent_id: ""
        };

        if (!name) {
            newError.name = "First name is required";
            isValid = false;
        }
        if (!description) {
            newError.description = "Last name is required";
            isValid = false;
        }
        if (!parent_id) {
            newError.parent_id = "parent_id is required";
            isValid = false;
        }
       

        setError(newError);
        return isValid;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validateForm()) {
            const user = {
                name,
                description,
                parent_id
            };

            if (id) {
                // Update user logic here
                Updatecategorie(id, user).then(() => {
                    alert("Cập nhật sản phẩm thành công");
                    navigate("/");
                }).catch((err) => {
                    console.error("Error updating user:", err);
                    alert("Không thể cập nhật sản phẩm");
                });
            } else {
                // Add user logic here
                AddNewcategorie(user).then(() => {
                    alert("Thêm sản phẩm thành công");
                    navigate("/");
                }).catch((err) => {
                    console.error("Error adding user:", err);
                    alert("Không thể thêm sản phẩm");
                });
            }
        }
    }

  return (
    <div className=''>

        <h1 className='text-center'>Manager Categories</h1>
        <br />
        <div className="row">
            <div className='card col-md-6 offset-md-3'>
                {titlePage()}
                <div className='card-body'>
                    <form action="">
                        <div className='form-group mb-2'>
                            <label htmlFor="name" className='form-label'>name</label>
                            <input 
                            type="text"
                            placeholder='Enter name'
                            name='name'
                            className= {`form-control ${error.name ? 'is-invalid' : ''}`} 
                            value={name} 
                            onChange={(e) => set_name(e.target.value)} 
                            />
                            {error.name && <span className='text-danger'>{error.name}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="description" className='form-label'>description</label>
                            <input 
                            type="text"
                            placeholder='Enter description'
                            name='description'
                            className= {`form-control ${error.description ? 'is-invalid' : ''}`} 
                            value={description} 
                            onChange={(e) => set_description(e.target.value)} 
                            />
                            {error.description && <span className='text-danger'>{error.description}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="parent_id" className='form-label'>parent_id</label>
                            <input 
                            type="text"
                            placeholder='Enter parent_id'
                            name='parent_id'
                            className= {`form-control ${error.parent_id ? 'is-invalid' : ''}`} 
                            value={parent_id} 
                            onChange={(e) => set_parent_id(e.target.value)} 
                            />
                            {error.parent_id && <span className='text-danger'>{error.parent_id}</span>}
                        </div>
                        
                        
                        <button className='btn btn-success' onClick={handleSubmit}>
                            {id ? "Update Product" : "Add Product"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )             
}

export default AddUpdateCategory