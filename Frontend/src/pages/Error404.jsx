import { FaHome } from 'react-icons/fa';

const Error404 = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                <p className="text-lg text-gray-600 mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <a
                    href="/"
                    className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
                >
                    <FaHome className="mr-2" /> Go to Homepage
                </a>
            </div>
        </div>
    );
};

export default Error404;
