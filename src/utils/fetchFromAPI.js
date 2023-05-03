import axios from 'axios';

const baseUrl = "https://weatherbit-v1-mashape.p.rapidapi.com/"

export const fetchFromAPI = async (url, lat, lon) => {
  const { data } = await axios.get(`${baseUrl}${url}`, {
    params: {
      lat,
      lon
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_HOST_KEY
    }
  });

  return data;
};
