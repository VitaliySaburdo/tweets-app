import axios from "axios";

export const ApiService = async ( limit) => {
  const BASE_URL = "https://63ea64d73363c8700368743e.mockapi.io/users";
    const searchParams = new URLSearchParams({
    page: 1,
    limit,
  });
  const url = `${BASE_URL}?${searchParams}`;
  const response = await axios.get(url);
  return response.data;
};
