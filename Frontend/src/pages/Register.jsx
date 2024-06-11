import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { signUpUser } from '../services/user';
import { toast } from "react-toastify";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function validInput() {
        console.log('Hello')
        if (formData.firstName.length === 0) {
            toast.error("Enter First Name");
        } else if (formData.lastName.length === 0) {
            toast.error("Enter Last Name");
        } else if (formData.email.length === 0) {
            toast.error("Enter Email");
        } else if (formData.password.length === 0) {
            toast.error("Enter Password");
        } else if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
        } else {
            return true;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validInput()) {
            const result = await signUpUser(formData);
            if (result.status === "success") {
                toast.success("Successfully registered");
                navigate("/signin");
            } else {
                toast.error('Email Already Exist!');
            }
        }
    };

    return (
        <>
            <div className='bg-gray-100 p-4'>
                <button className='flex  items-center ' onClick={() => {
                    navigate(-1);
                }}>
                    <IoIosArrowRoundBack />
                    Back
                </button>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className='flex gap-4' >
                            <div>
                                <label className="block text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    onBlur={(e) => {
                                        if (e.target.value.length === 0) {
                                            toast.error('Enter First Name')
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded mt-1"
                                    onBlur={(e) => {
                                        if (e.target.value.length === 0) {
                                            toast.error('Enter Last name')
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                onBlur={(e) => {
                                    if (e.target.value.length === 0) {
                                        toast.error('Enter Email')
                                    }
                                }}
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
                                onBlur={(e) => {
                                    if (e.target.value.length === 0) {
                                        toast.error('Enter Password')
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                onBlur={(e) => {
                                    if (e.target.value.length === 0) {
                                        toast.error('Enter Password')
                                    }
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mt-4"
                        >
                            Register
                        </button>
                    </form>
                    <p className="mt-4 text-center text-gray-600">
                        Already have an account? <Link to="/signin" className="text-red-600 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
