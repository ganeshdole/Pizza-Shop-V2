import React, { useEffect, useState } from "react";
import { getOrder } from "../../services/order";
import { useSelector } from "react-redux";
import { SERVER_URL } from "../../services/utils";

const OrderCard = (props) => {
    const [order, setOrder] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { token } = useSelector(state => state.authentication);

    useEffect(() => {
        const getOrderDetails = async () => {
            try {
                const result = await getOrder(props.order.id, token);
                if (result.status === "success") {
                    setOrder(result.data);
                } else {
                    throw new Error("Failed to fetch order details");
                }
            } catch (error) {
                console.error("Error fetching order details:", error);
                setOrder([]);
            } finally {
                setIsLoading(false);
            }
        };

        getOrderDetails();
    }, [props.order.id, token]);

    if (isLoading) {
        return (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
                </div>
                <p className="text-gray-600 mt-4">Loading order details...</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            {order && order.length > 0 ? (
                <div>
                    <div className="grid grid-cols-1 gap-4 mb-4 text-gray-600 font-semibold">
                        <div className="grid grid-cols-4 gap-4">
                            <div>Name</div>
                            <div>Image</div>
                            <div>Total Amount</div>
                            <div>Quantity</div>
                        </div>
                    </div>
                    {order.map(detail => (
                        <div
                            key={detail.pizzaId}
                            className="grid grid-cols-4 gap-4 items-center mb-2"
                        >
                            <div>{detail.pizza.name}</div>
                            <div>
                                <img
                                    src={`${SERVER_URL}/${detail.pizza.image}`}
                                    alt={`${detail.pizza.name} pizza`}
                                    className="w-16 h-16 rounded-lg"
                                />
                            </div>
                            <div>RS {detail.totalAmount}</div>
                            <div>{detail.quantity}</div>
                        </div>
                    ))}
                    <div>
                        <button className="font-light text-gray-500">
                            Cancel Order
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-600">
                    {isLoading ? "Loading..." : "No order details found."}
                </p>
            )}
        </div>
    );
};

export default OrderCard;
