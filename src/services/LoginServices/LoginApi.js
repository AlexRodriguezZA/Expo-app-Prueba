//Esta funcion implementada con axios nos permite hacer un POST a la API de login
//para poder iniciar sesion, de dicha API obtendremos los datos del usuario y el token y , además,
//obtendremos los modelos para realizar el menú.

import axios from 'axios';
import { API_BASE_URL } from '../../consts/consts';


export const loginApi = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error('Credenciales inválidas');
  }
};

