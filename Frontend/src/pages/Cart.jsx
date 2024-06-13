import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeFromCart, addQuantity, removeQuantity, clearCart } from "../features/cartSlice";
import { postOrder } from "../services/order";
import { toast } from "react-toastify";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.authentication);
    const navigate = useNavigate();
    const [bill, setBill] = useState(0);

    useEffect(() => {
        let totalAmount = 0;
        for (const item of cart.items) {
            totalAmount += parseFloat(item["price"]) * item["quantity"];
            setBill(totalAmount)
        }
    }, [cart.items]);

    if (!token) {

        return <> <div className="pl-2 pt-2">
            <button
                className="flex items-center"
                onClick={() => {
                    navigate(-1);
                }}
            >
                <IoIosArrowRoundBack />
                Back
            </button>
        </div >
            <div className="container mx-auto p-4">

                <p className="text-center text-red-500">Please sign in to view your Cart.</p>
            </div>

        </>
    }
    const checkOut = async (bill, items) => {
        const result = await postOrder({ bill, items, token })
        if (result.status = "success") {
            dispatch(clearCart());
            toast.success("Order Placed Successfully")
            navigate("/order")
        } else {
            toast.error("Something went wrong! Try Again", result.error);
        }

    }

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
            {!cart.items.length && <div className="flex flex-col justify-center items-center mt-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 animate-bounce">
                    Your Cart is Empty!
                </h2>
                <p className=" text-gray-600 text-lg">
                    Explore our delicious menu and fill up your cart!
                </p>
                <div className="mt-4">
                    <Link
                        to="/menu"
                        className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md text-xl font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                    >
                        View Menu
                    </Link>
                </div>

            </div>
            }

            {
                cart.items.length > 0 && <div className="container mx-auto p-4" >
                    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4 border border-gray-400">Sr:No</th>
                                <th className="py-2 px-4 border border-gray-400">Pizza</th>
                                <th className="py-2 px-4 border border-gray-400">Price</th>
                                <th className="py-2 px-4 border border-gray-400">Quantity</th>
                                <th className="py-2 px-4 border border-gray-400">Total Amount</th>
                                <th className="py-2 px-4 border border-gray-400">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {cart.items.map((item, index) => (
                                < tr
                                    key={index}
                                    className="bg-white hover:bg-gray-100 transition-colors duration-200"
                                >
                                    <td className="py-2 px-4 border border-gray-300">{index + 1}</td>
                                    <td className="py-2 px-4 border border-gray-300">
                                        {item["name"]}
                                    </td>
                                    <td className="py-2 px-4 border border-gray-300">
                                        {item["price"]}
                                    </td>
                                    <td className=" flex justify-evenly py-4 px-4 border border-gray-300 items-center">
                                        <button className="border-2 p-1" onClick={() => dispatch(addQuantity(item))}> + </button>
                                        {item["quantity"]}
                                        <button className="border-2 p-1" onClick={() => dispatch(removeQuantity(item))}> - </button>
                                    </td>
                                    <td className="py-2 px-4 border border-gray-300">
                                        {(
                                            item["quantity"] * parseFloat(item["price"])
                                        ).toFixed(2)}
                                    </td>
                                    <td className="py-2 px-4 border border-gray-300">
                                        <button className="text-blue-700 hover:underline" onClick={() => {
                                            console.log("removeFromCart")
                                            dispatch(removeFromCart(item))
                                        }}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="text-center">
                            <tr
                                className="bg-white hover:bg-gray-100 transition-colors duration-200"
                            >
                                <td className="py-2 px-4 border border-gray-300" colSpan={5}>
                                    Total Bill : {bill}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="flex mt-4 justify-center ">
                        <button type="button" className="bg-green-500 p-2 rounded-lg font-semibold font-sans" onClick={() => {
                            checkOut(bill, cart.items)
                        }}>
                            Check Out
                        </button>
                    </div>
                </div >
            }

        </ >
    );
};

export default Cart;
