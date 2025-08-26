import React, { useEffect, useState } from 'react'
import { DeleteProduct, DeleteReview, GetAllReviews } from '../services/ConnectToApi';
import { useNavigate } from 'react-router-dom';


const ManagerReview = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
          async function fetchProducts() {
            try {
              const res = await GetAllReviews();
              setProducts(res.data);
            } catch (err) {
              setError("Không thể tải đánh giá");
            } finally {
              setLoading(false);
            }
          }
          fetchProducts();
        }, []);

         function deleteProduct(id){
    console.log("Delete Review with ID:", id);

    DeleteReview(id).then(() => {
        console.log("Reviews deleted successfully");
        alert("Reviews deleted successfully");
    }).catch((error) => {
        console.error("Error deleting Reviews:", error);
        alert("Error deleting Reviews: " + error.message);
    });
  }

  return (
    <div className='container' style={{flexDirection: 'column', alignItems: 'center'}}>
        <h1 className='text-center'>Manager Products</h1>
        <br />
        <button className='btn btn-primary mb-3' onClick={() => navigate('/manager/reviews/add')}>Thêm đánh giá</button>
        {loading && <p>Đang tải đánh giá...</p>}
        {error && <p className='text-danger'>{error}</p>}
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Rating</th>
                    <th>Comment</th>
                    <th>Date</th>
                    <th>Product ID</th>
                    <th>Customer ID</th>
                    <th>Name Product</th>
                    <th>Name Customer</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.rating}</td>
                        <td>{product.comment}</td>
                        <td>{product.reviewDate}</td>
                        <td>{product.productId}</td>
                        <td>{product.customerId}</td>
                        <td>{product.productName}</td>
                        <td>{product.customerName}</td>
                        <td>
                            <button className='btn btn-warning' onClick={() => navigate(`/manager/reviews/edit/${product.id}`)}>Sửa</button>
                            <button className='btn btn-danger ms-2' onClick={() => deleteProduct(product.id)}>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    
    </div>
  )
}

export default ManagerReview