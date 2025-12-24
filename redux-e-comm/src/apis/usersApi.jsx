import { axiosInstance } from "../config/axiosInstance"

export const fetchUsers = async ()=>{
        console.log("rendering for users")
        try {
            const data = await axiosInstance.get("users")
            if(data){
                return data.data
            }
        } catch (error) {
            console.log("error in user api ",error)            
        }
    }