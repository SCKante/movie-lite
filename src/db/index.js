import axios from "axios";

export const API_KEY = "1502c54678db0024dba873b46216e5a0";
export const API_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const resp = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  return resp.data.results;
};
