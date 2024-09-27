import { useQuery } from "react-query";
import { useGetUsersUserIdTodoLists } from "../../api";



export default function getUserTodoLists(userId:string){
    const { data } = useQuery(useGetUsersUserIdTodoLists(userId ), 
);
    const userTodoLists = data?.data?.results || []
    return userTodoLists
}