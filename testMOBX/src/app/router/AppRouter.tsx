import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import UsersPage from "../../page/usersPage/ui/UsersPage"


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
        </Routes>
        
    )
}