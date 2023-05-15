import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider"

export default function AdminLayout() {
    const {user, token} = useStateContext();

    if (!token || user.roles[0].name !== "admin") {
        return <Navigate to="/home" />
    }

    return (
        <div>
            Admin Layout
        </div>
    )
}