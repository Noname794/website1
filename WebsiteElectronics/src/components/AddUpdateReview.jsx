import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AddNewReview, GetReviewById, UpdateReview } from '../services/ConnectToApi';

const AddUpdateReview = () => {
  const {id} = useParams();

    const [rating, set_rating] = useState("");
    const [comment, set_comment] = useState("");
    const [reviewDate, set_reviewDate] = useState("");
    const [productId, set_productId] = useState("");
    const [customerId, set_customerId] = useState("");
    const [productName, set_productName] = useState("");
    const [customerName, set_customerName] = useState("");


    const [error, setError] = useState({
        rating: "",
        comment: "",
        reviewDate: "",
        productId: "",
        customerId: "",
        productName: "",
        customerName: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            GetReviewById(id).then((res) => {
                const user = res.data;
                set_rating(user.rating);
                set_comment(user.comment);
                set_reviewDate(user.reviewDate);
                set_productId(user.productId);
                set_customerId(user.customerId);
                set_productName(user.productName);
                set_customerName(user.customerName);
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
            rating: "",
            comment: "",
            reviewDate: "",
            productId: "",
            customerId: "",
            productName: "",
            customerName: ""
        };

        if (!rating) {
            newError.rating = "First rating is required";
            isValid = false;
        }
        if (!comment) {
            newError.comment = "Last name is required";
            isValid = false;
        }
        if (!reviewDate) {
            newError.reviewDate = "reviewDate is required";
            isValid = false;
        }
        if (!productId) {
            newError.productId = "Phone number is required";
            isValid = false;
        }
        if (!customerId) {
            newError.customerId = "customerId is required";
            isValid = false;
        }
        if (!productName) {
            newError.productName = "productName is required";
            isValid = false;
        }
        if (!customerName) {
            newError.customerName = "Zip code is required";
            isValid = false;
        }

        setError(newError);
        return isValid;
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (validateForm()) {
            const user = {
                rating,
                comment,
                reviewDate,
                productId,
                customerId,
                productName,
                customerName
            };

            if (id) {
                // Update user logic here
                UpdateReview(id, user).then(() => {
                    alert("Cập nhật sản phẩm thành công");
                    navigate("/");
                }).catch((err) => {
                    console.error("Error updating user:", err);
                    alert("Không thể cập nhật sản phẩm");
                });
            } else {
                // Add user logic here
                AddNewReview(user).then(() => {
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

        <h1 className='text-center'>Manager Reviews</h1>
        <br />
        <div className="row">
            <div className='card col-md-6 offset-md-3'>
                {titlePage()}
                <div className='card-body'>
                    <form action="">
                        <div className='form-group mb-2'>
                            <label htmlFor="rating" className='form-label'>rating</label>
                            <input 
                            type="text"
                            placeholder='Enter rating'
                            name='rating'
                            className= {`form-control ${error.rating ? 'is-invalid' : ''}`} 
                            value={rating} 
                            onChange={(e) => set_rating(e.target.value)} 
                            />
                            {error.rating && <span className='text-danger'>{error.rating}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="comment" className='form-label'>comment</label>
                            <input 
                            type="text"
                            placeholder='Enter comment'
                            name='comment'
                            className= {`form-control ${error.comment ? 'is-invalid' : ''}`} 
                            value={comment} 
                            onChange={(e) => set_comment(e.target.value)} 
                            />
                            {error.comment && <span className='text-danger'>{error.comment}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="reviewDate" className='form-label'>reviewDate</label>
                            <input 
                            type="text"
                            placeholder='Enter reviewDate'
                            name='reviewDate'
                            className= {`form-control ${error.reviewDate ? 'is-invalid' : ''}`} 
                            value={reviewDate} 
                            onChange={(e) => set_reviewDate(e.target.value)} 
                            />
                            {error.reviewDate && <span className='text-danger'>{error.reviewDate}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="productId" className='form-label'>productId</label>
                            <input 
                            type="text"
                            placeholder='Enter productId'
                            name='productId'
                            className= {`form-control ${error.productId ? 'is-invalid' : ''}`} 
                            value={productId} 
                            onChange={(e) => set_productId(e.target.value)} 
                            />
                            {error.productId && <span className='text-danger'>{error.productId}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="customerId" className='form-label'>customerId</label>
                            <input 
                            type="text"
                            placeholder='Enter customerId'
                            name='customerId'
                            className= {`form-control ${error.customerId ? 'is-invalid' : ''}`} 
                            value={customerId} 
                            onChange={(e) => set_customerId(e.target.value)} 
                            />
                            {error.customerId && <span className='text-danger'>{error.customerId}</span>}
                        </div>
                        <div className='form-group mb-2'>
                            <label htmlFor="productName" className='form-label'>productName</label>
                            <input 
                            type="text"
                            placeholder='Enter productName'
                            name='productName'
                            className= {`form-control ${error.productName ? 'is-invalid' : ''}`} 
                            value={productName} 
                            onChange={(e) => set_productName(e.target.value)} 
                            />
                            {error.productName && <span className='text-danger'>{error.productName}</span>}
                        </div>
                        
                        <div className='form-group mb-2'>
                            <label htmlFor="customerName" className='form-label'>customerName</label>
                            <input 
                            type="text"
                            placeholder='Enter customerName'
                            name='customerName'
                            className= {`form-control ${error.customerName ? 'is-invalid' : ''}`} 
                            value={customerName} 
                            onChange={(e) => set_customerName(e.target.value)} 
                            />
                            {error.customerName && <span className='text-danger'>{error.customerName}</span>}
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

export default AddUpdateReview