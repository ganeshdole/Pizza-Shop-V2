import { Outlet } from "react-router-dom"
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = () => {
    return (
        <>
            <header >
                <Navbar />
            </header>
            <main className="h-[100vh]">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout;