import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import UsersPage from "../../page/usersPage/ui/UsersPage"
import AddUserPage from "../../page/addUserPage/ui/AddUserPage"
import EditUserPage from "../../page/EditUserPage/ui/EditUserPage"
import TodoLIstPage from "../../page/todoListPage/ui/TodoLIstPage"


export const AppRouter= () => {
    return(
    <Routes>
             <Route
                path='/'
                element={
                    <Suspense>
                        <UsersPage />
                    </Suspense>
                }
                
            />
            <Route
                path='/create-user'
                element={
                    <Suspense>
                        <AddUserPage />
                    </Suspense>
                }
            />
            <Route
                path='/change-user/:userid'
                element={
                    <Suspense>
                        <EditUserPage />
                    </Suspense>
                }
            />
            <Route
                path='/todolist/:userid'
                element={
                    <Suspense>
                        <TodoLIstPage />
                    </Suspense>
                }
            />
            
        </Routes>
        
        
    )
}