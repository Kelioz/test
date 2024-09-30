import { hashQueryKey, useQuery } from "react-query";
import { useGetUsersUserIdTodosTodoId } from "../../api";




export default function getTodo(userId:string, todoId:string){
    const { data } = useQuery(useGetUsersUserIdTodosTodoId(userId, todoId), 
);
    const todo = data?.data || []
    return todo
}