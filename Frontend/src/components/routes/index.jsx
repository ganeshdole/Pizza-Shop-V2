import { useRoutes } from 'react-router-dom';
import Login from "../../pages/Login";
import PrivateRoutes from './privateRoutes';
import Register from '../../pages/Register';
import Home from "../../pages/Home";
import Order from "../../pages/Order";

const MainRoutes = () => {
    const routes = useRoutes([
        {
            element: <PrivateRoutes />,
            children: [
                {
                    path: '/',
                    element: <Home />

                }, {
                    path: '/cart',
                    element: <cart />
                },
                {
                    element: <Order />,
                    path: "/order"
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