import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AddNewProduct, GetProductById, UpdateProduct } from '../services/ConnectToApi';

const AddUpdateProduct = () => {
  const {id} = useParams();

    const [name, set_name] = useState("");
    const [description, set_description] = useState("");
    const [price, set_price] = useState("");
    const [quantity, set_quantity] = useState("");
    const [image_url, set_image_url] = useState("");
    const [category, set_category] = useState("");
    const [supplier, set_supplier] = useState("");


    const [error, setError] = useState({
        name: "",
        description: "",
        price: "",
        quantity: "",
        image_url: "",
        category: "",
        supplier: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            GetProductById(id).then((res) => {
                const user = res.data;
                set_name(user.name);
                set_description(user.description);
                set_price(user.price);
                set_quantity(user.quantity);
                set_image_url(user.image_url);
                set_category(user.category);
                set_supplier(user.supplier);
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
            price: "",
            quantity: "",
            image_url: "",
            category: "",
            supplier: ""
        };

        if (!name) {
            newError.name = "First name is required";
            isValid = false;
        }
        if (!description) {
            newError.description = "Last name is required";
            isValid = false;
        }
        if (!price) {
            newError.price = "price is required";
            isValid = false;
        }
        if (!quantity) {
            newError.quantity = "Phone number is required";
            isValid = false;
        }
        if (!image_url) {
            newError.image_url = "image_url is required";
            isValid = false;
        }
        if (!category) {
            newError.category = "category is required";
            isValid = false;
        }
        if (!supplier) {
            newError.supplier = "Zip code is required";
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
                price,
                quantity,
                image_url,
                category,
                supplier
            };

            if (id) {
                // Update user logic here
                UpdateProduct(id, user).then(() => {
                    alert("Cập nhật sản phẩm thành công");
                    navigate("/");
                }).catch((err) => {
                    console.error("Error updating user:", err);
                    alert("Không thể cập nhật sản phẩm");
                });
            } else {
                // Add user logic here
                AddNewProduct(user).then(() => {
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

        <h1 className='text-center'>Manager Products</h1>
        <br />
        <div className="row">
            <div className='card col-md-6 offset-md-3'>
                {titlePage()}
                <div className='card-body'>
                    <form action="">
                        <div className='form-group mb-2'>
                            <label htmlFor="name" className='form-label'>Name</label>
                            <input 
                            type="text"
                            placeholder='Enter Name'
                            name='name'
                            className= {`form-control ${error.name ? 'is-invalid' : ''}`} 
                            value={name} 
                            onChange={(e) => set_name(e.target.value)} 
                            />
                            {error.name && <span className='text-danger'>{error.name}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="description" className='form-label'>Description</label>
                            <input 
                            type="text"
                            placeholder='Enter Description'
                            name='description'
                            className= {`form-control ${error.description ? 'is-invalid' : ''}`} 
                            value={description} 
                            onChange={(e) => set_description(e.target.value)} 
                            />
                            {error.description && <span className='text-danger'>{error.description}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="price" className='form-label'>Price</label>
                            <input 
                            type="text"
                            placeholder='Enter price'
                            name='price'
                            className= {`form-control ${error.price ? 'is-invalid' : ''}`} 
                            value={price} 
                            onChange={(e) => set_price(e.target.value)} 
                            />
                            {error.price && <span className='text-danger'>{error.price}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="quantity" className='form-label'>Quantity</label>
                            <input 
                            type="text"
                            placeholder='Enter Quantity'
                            name='quantity'
                            className= {`form-control ${error.quantity ? 'is-invalid' : ''}`} 
                            value={quantity} 
                            onChange={(e) => set_quantity(e.target.value)} 
                            />
                            {error.quantity && <span className='text-danger'>{error.quantity}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="image_url" className='form-label'>Image_url</label>
                            <input 
                            type="text"
                            placeholder='Enter image_url'
                            name='image_url'
                            className= {`form-control ${error.image_url ? 'is-invalid' : ''}`} 
                            value={image_url} 
                            onChange={(e) => set_image_url(e.target.value)} 
                            />
                            {error.image_url && <span className='text-danger'>{error.image_url}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="category" className='form-label'>Category</label>
                            <input 
                            type="text"
                            placeholder='Enter category'
                            name='category'
                            className= {`form-control ${error.category ? 'is-invalid' : ''}`} 
                            value={category} 
                            onChange={(e) => set_category(e.target.value)} 
                            />
                            {error.category && <span className='text-danger'>{error.category}</span>}
                        </div>
                        
                        <div className='form-group mb-2'>
                            <label htmlFor="supplier" className='form-label'>Supplier</label>
                            <input 
                            type="text"
                            placeholder='Enter Supplier'
                            name='supplier'
                            className= {`form-control ${error.supplier ? 'is-invalid' : ''}`} 
                            value={supplier} 
                            onChange={(e) => set_supplier(e.target.value)} 
                            />
                            {error.supplier && <span className='text-danger'>{error.supplier}</span>}
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

export default AddUpdateProduct