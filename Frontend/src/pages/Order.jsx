import { useSelector } from "react-redux";
import { getOrderList } from "../services/order";
import { useEffect, useState } from "react";
import OrderCard from "../components/ordercard/orderCard";

const Order = () => {
    const { token } = useSelector(state => state.authentication);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getAllOrders = async () => {
        setIsLoading(true);
        setError(null);
        try {
            if (token) {
                const result = await getOrderList(token);
                if (result.status === "success") {
                    setOrders(result.data);
                } else {
                    throw new Error("Failed to fetch orders");
                }
            }
        } catch (error) {
            console.error("Failed to fetch orders:", error);
            setError("Failed to fetch orders. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAllOrders();
    }, [token]);

    return (
        <div className="container mx-auto p-4">
            {token ? (
                isLoading ? (
                    <p className="text-center text-gray-500">Loading orders...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : orders.length > 0 ? (
                    <div className="grid gap-4">
                        <h2 className="text-2xl font-semibold mb-4">Order</h2>
                        {orders.map(order => (
                            <div key={order.id} className="mb-4">
                                <OrderCard order={order} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No orders found.</p>
                )
            ) : (
                <p className="text-center text-red-500">Please sign in to view your orders.</p>
            )}
        </div>
    );
};

export default Order;
