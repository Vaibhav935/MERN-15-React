import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../apis/usersApi"

export const useUserApiHook = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        staleTime: Infinity,
    })
}