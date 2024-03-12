import axios from "axios";
import { formatSearchQuery } from "../../utils/formatSearchQuery";
const API_BASE_URL = "https://api.myintelli.net/v1/devices";

export const fetchDevices = async ({
  limit = 5,
  pageParam = 0,
  search = "",
  tokenUser,
}) => {

  const formattedSearch = formatSearchQuery(search);

  const url = `${API_BASE_URL}?limit=${limit}&offset=${pageParam}&search=${formattedSearch}`;


  if (tokenUser) {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${tokenUser}`, 
        },
      });

      return response.data.data; 
    } catch (error) {
      throw new Error("Error al obtener los dispositivos");
    }
  } else {
    console.log("No hay token");
  }
};
