import axios from 'axios';

const getData = async (page = 1, limit = 10, filters = {}) => {
  try {
    const query = new URLSearchParams({
      page,
      limit,
      ...filters,
    }).toString();

    const response = await axios.get(`/api/data?${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default getData;
