import { useQuery } from "react-query";
import { useGetUsers } from "../../api";




export default function getUsers(){
    const { data } = useQuery(useGetUsers(), 
);
    const users = data?.data?.results || []
    return users
}