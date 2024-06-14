import { useRoutes } from 'react-router-dom';
import Login from "../../pages/Login";
import PrivateRoutes from './privateRoutes';
import Register from '../../pages/Register';
import Home from "../../pages/Home";
import Order from "../../pages/Order";
import Layout from '../layout/MainLayout';
import Cart from '../../pages/Cart'
import Menu from '../../pages/Menu';
import Error404 from '../../pages/Error404';
import Contact from '../../pages/Contact';
import About from '../../pages/About';

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
                        { path: 'cart', element: <Cart /> },
                        { path: 'menu', element: <Menu /> },
                        { path: 'contact', element: <Contact /> },
                        { path: 'about', element: <About /> },
                        { path: "*", element: <Error404 /> },

                    ]
                }
            ]
        },
        {
            element: <Login />,
            path: "/signin",
        },
        {
            element: <Register />,
            path: "/signup"
        }
    ])
    return routes;
}

export default MainRoutes;