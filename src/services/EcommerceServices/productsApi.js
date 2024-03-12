import axios from 'axios';

export const productsApi = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data; 
  } catch (error) {
    throw new Error('Error al traer los productos');
  }
};
