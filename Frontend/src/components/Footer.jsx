import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-auto">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-400">
                        123 HUNGRY CRUST.<br />
                        Food City, FC 12345<br />
                        Phone: (123) 456-7890<br />
                        Email: info@hungrycrust.com
                    </p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FaInstagram className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4">
                <p className="text-center text-gray-400">
                    &copy; 2024 Ganesh Dole. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
