import dotenv from "dotenv";
import axios from "axios";

dotenv.config({ path: ".env.local" });
dotenv.config();

const httpClient = axios.create({
  withCredentials: true,
});

httpClient.interceptors.request.use((config) => {
  if (process.env.REACT_APP_AUTH0) {
    const accessToken = localStorage.getItem(process.env.REACT_APP_AUTH0_TOKEN_NAME!);
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

export { httpClient };
