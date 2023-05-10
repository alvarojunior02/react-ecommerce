import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider"

export default function AdminLayout() {
    const {user, token} = useStateContext();

    if (!token || user.role !== "admin") {
        return <Navigate to="/home" />
    }

    return (
        <div>
            Admin Layout
        </div>
    )
}