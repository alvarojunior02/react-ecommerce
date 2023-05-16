import { Navigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider"
import "./adminLayout.css";

export default function AdminLayout() {
    const {user, token} = useStateContext();

    if (!token || user.roles[0].name !== "admin") {
        return <Navigate to="/home" />
    }

    return (
        <div className="container-admin">
            <div className="sidebar">
                <p>Dashboard</p>
                <div className="sidebar-list">
                    <a href="/dashboard/categories" className="sidebar-list-link" >Categorias</a>
                    <a href="/dashboard/products" className="sidebar-list-link" >Produtos</a>
                </div>
            </div>
        </div>
    )
}