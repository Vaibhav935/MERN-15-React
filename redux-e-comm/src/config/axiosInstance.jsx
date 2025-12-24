import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosInstance.interceptors.response.use(
  (response) => {
    alert("Fetched...")
    return response
  },
  (error) => {
    if(error.response.status === 404){
      alert("404 Request not found")
    }
    else{
      alert("some error")
    }
  }
)