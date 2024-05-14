import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000', // Adjust the baseURL to your backend server
});

export const updateItem = async (id: string, data: { count: number }) => {
  try {
    const response = await api.patch(`/items/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Failed to update item', error);
    throw error;
  }
};

export const getItem = async (id: string) => {
    try{
      const response = await api.get(`/items/${id}`);
      return response.data
    } catch (error) {
      console.error("Failed to get item", error);
      throw error;
    }
}