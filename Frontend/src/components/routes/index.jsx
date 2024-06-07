import { useRoutes } from 'react-router-dom';
import Login from "../../pages/Login";
import PrivateRoutes from './privateRoutes';
import Register from '../../pages/Register';
import Home from "../../pages/Home";
import Order from "../../pages/Order";
import Layout from '../layout/MainLayout';
import Cart from '../../pages/Cart'

const MainRoutes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <PrivateRoutes />,
            children: [
                {
                    path: '/',
                    element: <Layout />,
                    children: [
                        { path: '/', element: <Home /> },
                        { path: 'order', element: <Order /> },
                        { path: 'cart', element: <Cart /> }
                    ]
                }
            ]
        },
        {
            element: <Login />,
            path: "/login",
        },
        {
            element: <Register />,
            path: "/signup"
        }
    ])
    return routes;
}

export default MainRoutes;