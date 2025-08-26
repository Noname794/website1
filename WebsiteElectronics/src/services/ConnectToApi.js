import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const API_URL_AUTH = 'http://localhost:8080/api/auth';

export const LoginRequest = (data) => axios.post(`${API_URL_AUTH}/login`, data);

export const RegisterRequest = (data) => axios.post(`${API_URL_AUTH}/register`, data);


export const GetAllProducts = () => axios.get(`${API_URL}/electronics`);

export const GetAllUsers = () => axios.get(`${API_URL}/customers`);

export const DeleteUser = (id) => axios.delete(`${API_URL}/customers/${id}`);

export const GetUserById = (id) => axios.get(`${API_URL}/customers/${id}`);

export const AddNewUser = (data) => axios.post(`${API_URL}/customers`, data);

export const UpdateUser = (id, data) => axios.put(`${API_URL}/customers/${id}`, data);



export const GetProductById = (id) => axios.get(`${API_URL}/electronics/${id}`);

export const AddNewProduct = (data) => axios.post(`${API_URL}/electronics`, data);

export const UpdateProduct = (id, data) => axios.put(`${API_URL}/electronics/${id}`, data);

export const DeleteProduct = (id) => axios.delete(`${API_URL}/electronics/${id}`);

export const GetAllShoppingCarts = () => axios.get(`${API_URL}/shoppingCart`);

export const GetShoppingCartByUserId = (userId) => axios.get(`${API_URL}/shoppingCart/customer/${userId}`);


export const GetAllReviews = () => axios.get(`${API_URL}/reviews`);

export const DeleteReview = (id) => axios.delete(`${API_URL}/reviews/${id}`);

export const GetReviewById = (id) => axios.get(`${API_URL}/reviews/${id}`);

export const AddNewReview = (data) => axios.post(`${API_URL}/reviews`, data);

export const UpdateReview = (id, data) => axios.put(`${API_URL}/reviews/${id}`, data);



export const GetAllcategories = () => axios.get(`${API_URL}/categories`);

export const Deletecategorie = (id) => axios.delete(`${API_URL}/categories/${id}`);

export const GetcategorieById = (id) => axios.get(`${API_URL}/categories/${id}`);

export const AddNewcategorie = (data) => axios.post(`${API_URL}/categories`, data);

export const Updatecategorie = (id, data) => axios.put(`${API_URL}/categories/${id}`, data);



export const GetAllorders = () => axios.get(`${API_URL}/orders`);

export const Deleteorder = (id) => axios.delete(`${API_URL}/orders/${id}`);

export const GetorderById = (id) => axios.get(`${API_URL}/orders/${id}`);

export const AddNeworder = (data) => axios.post(`${API_URL}/orders`, data);

export const Updateorder = (id, data) => axios.put(`${API_URL}/orders/${id}`, data);