import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import AdminLayout from "./components/AdminLayout";
import Login from "./views/Login";
import Singup from "./views/Singup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/home" />
            },
            {
                path: '/home',
                element: <Home />
            }
        ]
           
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/singup',
        element: <Singup />
    },
    {
        path: '/dashboard',
        element: <AdminLayout />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;