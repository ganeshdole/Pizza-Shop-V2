const cryptoJs = require('crypto-js');


function encrypt(password)
{
    return String(cryptoJs.SHA256(password))
}

function createError(error){
    return {
        "status": 'error',
        "error" : error,
    }
}

function createSuccess(data){
    return {
        'status' : 'success',
        'data' : data
    }
}


function createResult(data, error){
    if(error){
        return createError(error);
    }else{
        return createSuccess(data);
    }
}


module.exports ={createError , createSuccess , createResult, encrypt}