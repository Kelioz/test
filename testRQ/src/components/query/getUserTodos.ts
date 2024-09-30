import { useQuery } from "react-query";
import {useGetUsersUserIdTodos } from "../../api";



export default  function getUserTodos(userId:string){
    const { data } = useQuery(useGetUsersUserIdTodos(userId ), 
);
    const userTodos = data?.data?.results || []
    return userTodos
}