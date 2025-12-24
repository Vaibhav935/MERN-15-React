import { axiosInstance } from "../config/axiosInstance";

export const fetchProds = async () => {
  console.log("rendering for products");
  try {
    const data = await axiosInstance.get("/products");
    if (data) {
      return data.data;
    }
  } catch (error) {
    console.log("error in prod api", error);
  }
};
