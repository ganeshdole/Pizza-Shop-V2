import { FaPizzaSlice, FaCartPlus, FaTruck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    const testimonials = [
        { name: "John Doe", content: "I've been ordering from HUNGRY CRUST for years, and their pizzas never disappoint. Fresh ingredients, delicious taste, and friendly service every time!" },
        { name: "Jane Smith", content: "HUNGRY CRUST is my go-to place for authentic Italian pizzas. Their crust is always perfect, toppings are generous, and delivery is super fast!" },
        { name: "David Johnson", content: "I recently tried HUNGRY CRUST for the first time, and I was blown away by the quality of their pizzas. The flavors were amazing, and the delivery was right on time. Highly recommended!" },
    ];

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Welcome to <span className="text-red-600">HUNGRY CRUST</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Authentic Italian pizzas made with the freshest ingredients.
                </p>
                <div className="flex flex-col md:flex-row justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
                    <Link to="menu" className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md text-xl font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        View Menu
                    </Link>
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
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-800 font-semibold mb-2">{testimonial.name}</p>
                                <p className="text-gray-600">{testimonial.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
