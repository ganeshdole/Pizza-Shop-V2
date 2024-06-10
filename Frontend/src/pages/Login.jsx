import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', formData);
    };

    return (
        <>
            <div className='bg-gray-100 p-4 '>
                <button className='flex  items-center' onClick={() => {
                    navigate(-1);

                }}>
                    <IoIosArrowRoundBack />
                    Back
                </button>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mt-4"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-center text-gray-600">
                        Don't have an account? <Link to="/signup" className="text-red-600 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
