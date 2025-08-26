import React, { useEffect, useState } from 'react'
import { DeleteProduct, Deletecategorie, GetAllcategories } from '../services/ConnectToApi';
import { useNavigate } from 'react-router-dom';


const ManagerCategory = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
          async function fetchProducts() {
            try {
              const res = await GetAllcategories();
              setProducts(res.data);
            } catch (err) {
              setError("Không thể tải danh mục");
            } finally {
              setLoading(false);
            }
          }
          fetchProducts();
        }, []);

         function deleteProduct(id){
    console.log("Delete Categorie with ID:", id);

    Deletecategorie(id).then(() => {
        console.log("Categories deleted successfully");
        alert("Categories deleted successfully");
    }).catch((error) => {
        console.error("Error deleting Categories:", error);
        alert("Error deleting Categories: " + error.message);
    });
  }

  return (
    <div className='container' style={{flexDirection: 'column', alignItems: 'center'}}>
        <h1 className='text-center'>Manager Categories</h1>
        <br />
        <button className='btn btn-primary mb-3' onClick={() => navigate('/manager/categories/add')}>Thêm danh mục</button>
        {loading && <p>Đang tải danh mục...</p>}
        {error && <p className='text-danger'>{error}</p>}
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Parent Id</th>
                    
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.parent_id}</td>
                        
                        <td>
                            <button className='btn btn-warning' onClick={() => navigate(`/manager/categories/edit/${product.id}`)}>Sửa</button>
                            <button className='btn btn-danger ms-2' onClick={() => deleteProduct(product.id)}>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    
    </div>
  )
}

export default ManagerCategory