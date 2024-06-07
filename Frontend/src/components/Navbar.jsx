import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../features/MenuSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector((state) => state.menu);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-gray-800 font-bold text-xl">
                            HUNGRY CRUST
                        </NavLink>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink
                                to="/cart"
                                className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Cart
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Sign Up
                            </NavLink>
                            <NavLink
                                to="/signin"
                                className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Sign In
                            </NavLink>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => dispatch(toggleMenu())}
                            className="outline-none mobile-menu-button transition-all duration-300 ease-in-out hover:text-green-500"
                            aria-expanded={isOpen ? "true" : "false"}
                            aria-controls="mobile-menu"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className={`w-6 h-6 text-gray-500 ${isOpen ? "hidden" : ""}`}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            <svg
                                className={`w-6 h-6 text-gray-500 ${isOpen ? "" : "hidden"}`}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <div
                            id="mobile-menu"
                            className={`
                                ${isOpen ? "block" : "hidden"}
                                fixed top-0 left-0 h-screen w-full bg-gray-800 bg-opacity-75 z-10 transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
                            `}
                        >
                            <div className="pb-2 space-y-1 sm:px-3 h-full overflow-y-auto bg-white ">
                                <div className="flex justify-between items-center py-4 px-4 border-b border-gray-200">
                                    <h1 className="text-xl font-bold text-gray-800">
                                        HUNGRY CRUST
                                    </h1>
                                    <button
                                        onClick={() => dispatch(toggleMenu())}
                                        className="outline-none mobile-menu-button transition-all duration-300 ease-in-out hover:text-green-500"
                                    >
                                        <svg
                                            className="w-6 h-6 text-gray-500"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                                <NavLink
                                    to="/cart"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 ease-in-out"
                                    onClick={() => dispatch(toggleMenu())}
                                >
                                    Cart
                                </NavLink>
                                <NavLink
                                    to="/signup"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 ease-in-out"
                                    onClick={() => dispatch(toggleMenu())}
                                >
                                    Sign Up
                                </NavLink>
                                <NavLink
                                    to="/signin"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 ease-in-out"
                                    onClick={() => dispatch(toggleMenu())}
                                >
                                    Sign In
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
