import axios from "axios";
import { createUrl, createError } from "./utils";

export async function postOrder({ token, bill, items, addressId = 1 }) {
    try {
        const url = createUrl("order");
        const headers = {
            "token": token
        };
        const body = {
            "addressId": addressId,
            "totalAmount": bill,
            "items": items
        };

        const result = await axios.post(url, body, { headers });
        return result.data;
    } catch (error) {
        console.error("Error posting order:", error);
        throw createError("Failed to post order", error);
    }
}

export async function getOrderList(token)
{

   try{
    const url = createUrl("order")
    const headers ={
        "token" :token,
    }
    const result = await axios.get(url,{ headers})
    
    return result.data
   }catch(error)
   {
    console.log(error)
   }
}


export async function getOrder(id, token)
{
    try{
        const url = createUrl(`order/details/${id}`)
        const headers ={
            "token" :token,
        }
        const result = await axios.get(url,{ headers})
        return result.data
    }catch(error)
    {
        console.log(error)
        throw error
    }
}