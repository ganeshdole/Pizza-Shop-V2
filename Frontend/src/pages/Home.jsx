import { FaPizzaSlice, FaCartPlus, FaTruck } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Welcome to <span className="text-red-600">Pizza Palace</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Authentic Italian pizzas made with the freshest ingredients.
                </p>
                <div className="flex flex-col md:flex-row justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
                    <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md">
                        Order Now
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-md">
                        View Menu
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <FaPizzaSlice className="text-6xl text-red-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
                        <p className="text-gray-600 text-center">
                            We use only the freshest and highest quality ingredients in our pizzas.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <FaCartPlus className="text-6xl text-red-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Easy Ordering</h3>
                        <p className="text-gray-600 text-center">
                            Order your pizza online or through our mobile app for a seamless experience.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <FaTruck className="text-6xl text-red-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                        <p className="text-gray-600 text-center">
                            We deliver your hot and fresh pizza right to your doorstep.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
