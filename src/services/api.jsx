import axios from "axios";

const URL = "http://localhost:5000/";

async function postLogin(body) {
    return await axios.post(`${URL}signin`, body);
}

async function createAddress(address){
    try {
        const resposta = await axios.post(`${URL}address`,address);
        const {data} = resposta;
        console.log("Address registered!");
        return data;
    }
    catch(err) {
        console.log(err.resposta);
        return null;
    }
}

async function postSignUp(objeto) {

    try {
        const resposta = await axios.post(`${URL}signup`,objeto);
        const {data} = resposta;
        console.log("registered!");
        return data;
    }
    catch(err) {
        console.log(err.resposta);
        return null;
    }
    
}

const api = {
    postLogin,
    createAddress,
    postSignUp
};

export default api;