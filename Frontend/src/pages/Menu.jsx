import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import getAllPizza from "../services/pizza";
import PizzaCard from "../components/pizzacard/PizzaCard";

const Menu = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function loadAllPizza() {
        try {
            const pizzas = await getAllPizza();
            setItems(pizzas.data);
            setLoading(false);
        } catch (error) {
            setError("Failed to fetch pizzas. Please try again later.");
            setLoading(false);
        }
    }

    useEffect(() => {
        loadAllPizza();
    }, []);

    return (
        <>
            <div className="pl-2 pt-2">
                <button
                    className="flex items-center"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <IoIosArrowRoundBack />
                    Back
                </button>
            </div>
            <div className="flex  flex-col justify-center items-center">
                <h2 className="text-2xl font-bold">Explore Menu</h2>
                <p className="text-lg">Check out our delicious pizzas!</p>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <p>Loading...</p>
                </div>
            ) : error ? (
                <div className="flex justify-center items-center h-screen">
                    <p>{error}</p>
                </div>
            ) : (
                <>
                    <div className="flex justify-center p-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {items.map((pizza) => (
                                <PizzaCard key={pizza.id} pizza={pizza} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Menu;
