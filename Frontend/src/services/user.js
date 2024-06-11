import axios from "axios";
import { createUrl, createError } from "./utils";

export async function signUpUser(data){
    try{
        const body= data;
        const url = createUrl("user/signup");
        const result = await axios.post(url, body);
        return result.data;
    }catch(error){
        console.log(error);
        throw(createError(error));
    }
}


export async function singInUser(data)
{
    try{

        const body= data;
        const url = createUrl("user/signin");
        const result = await axios.post(url, body);
        return result.data
    }catch(error){
        console.log(error);
        throw(createError(error));
    }
}