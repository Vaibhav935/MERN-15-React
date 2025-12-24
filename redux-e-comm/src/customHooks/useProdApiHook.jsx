import { useQuery } from "@tanstack/react-query"
import { fetchProds } from "../apis/productApi"

export const getProdApiHook = ()=>{
    return useQuery({
        queryKey: ["products"],
        queryFn: fetchProds,
        staleTime: Infinity,
    })
}