import React, { useEffect, useState } from 'react'
import { DeleteProduct, GetAllProducts } from '../services/ConnectToApi';
import { useNavigate } from 'react-router-dom';


const ManagerProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
          async function fetchProducts() {
            try {
              const res = await GetAllProducts();
              setProducts(res.data);
            } catch (err) {
              setError("Không thể tải sản phẩm");
            } finally {
              setLoading(false);
            }
          }
          fetchProducts();
        }, []);

         function deleteProduct(id){
    console.log("Delete Products with ID:", id);

    DeleteProduct(id).then(() => {
        console.log("Products deleted successfully");
        alert("Products deleted successfully");
    }).catch((error) => {
        console.error("Error deleting Products:", error);
        alert("Error deleting Products: " + error.message);
    });
  }

  return (
    <div className='container' style={{flexDirection: 'column', alignItems: 'center'}}>
        <h1 className='text-center'>Manager Products</h1>
        <br />
        <button className='btn btn-primary mb-3' onClick={() => navigate('/manager/products/add')}>Thêm sản phẩm</button>
        {loading && <p>Đang tải sản phẩm...</p>}
        {error && <p className='text-danger'>{error}</p>}
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Mô tả</th>
                    <th>Tên hình ảnh</th>
                    
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.description}</td>
                        <td>{product.image_url}</td>
                        
                        <td>
                            <button className='btn btn-warning' onClick={() => navigate(`/manager/products/edit/${product.id}`)}>Sửa</button>
                            <button className='btn btn-danger ms-2' onClick={() => deleteProduct(product.id)}>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    
    </div>
  )
}

export default ManagerProducts