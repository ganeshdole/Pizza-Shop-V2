import { Navigate, Outlet } from "react-router-dom";



const PrivateRoutes = () => {
    const signinStatus = true;

    return signinStatus ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;