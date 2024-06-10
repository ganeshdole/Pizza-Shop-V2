import axios from 'axios';
import { createError, createUrl,  } from './utils';

async function getAllpizza(){
    try{
        const pizza = await axios(createUrl('pizza'));
        return pizza.data;
    }catch(error)
    {
        console.log('fail to get Pizza', error);
        throw(createError(error));
    }
}

export default getAllpizza;