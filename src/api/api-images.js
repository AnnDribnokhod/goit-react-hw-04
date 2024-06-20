import axios from 'axios';

const API_KEY = 'DjZHDuTSGDqEk0QSHS6qMdiRkXsfBloGTqq9bt1PVGg';
const BASE_URL = 'https://api.unsplash.com/';
const SECRET_KEY = "H71knDPRzO8xUc1yS4FFVYi18rK-WJTAVyJQEa9bzTE"
const ID = 614450
export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}search/photos`, {
      params: {
        query,
        page,
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
