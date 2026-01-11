import axios from "axios";

const Tmdbapi = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY, // 👈 ONE TIME
  },
});

export default Tmdbapi;
