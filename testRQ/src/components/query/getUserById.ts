import { useQuery } from "react-query";
import { useGetUsersUserId } from "../../api";

interface User {
    id: string;
    createdAt: string; 
    updatedAt: string; 
    name: string;
    email: string;
    microsoftUserId: string | null; 
}
export default function getUserById(userId:string){
  
    const { data } = useQuery<{ data: User }>(useGetUsersUserId(userId)
    );
    const userData = data?.data;
    return userData
    
}