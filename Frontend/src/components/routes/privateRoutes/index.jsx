import { Navigate, Outlet } from "react-router-dom";



const PrivateRoutes = () => {
    const signinStatus = true;

    return signinStatus ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoutes;