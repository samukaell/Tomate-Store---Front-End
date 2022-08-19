import axios from "axios";

const URL = "http://localhost:5000/";

async function postLogin(body) {
    try {
        const resposta = await axios.post(`${URL}signin`, body);
        const {data} = resposta;
        console.log("Login!");
        return data;
    }
    catch(err) {
        console.log(err.resposta);
        return null;
    }
}

async function getUser(body) {
    try {
        const resposta = await axios.post(`${URL}user`, body);
        const {data} = resposta;
        console.log("Bem vindo user ->!",data);
        return data;
    }
    catch(err) {
        console.log(err.resposta);
        return null;
    }
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

async function getUserById(body) {
    try {
        const resposta = await axios.get(`${URL}user/${body}`);
        const {data} = resposta;
        return data;
    }
    catch(err) {
        console.log(err.resposta);
        return null;
    }
}

async function getProducts(body) {
    try {
        const resposta = await axios.get(`${URL}product`);
        const {data} = resposta;
        return data;
    }
    catch(err) {
        console.log(err.resposta);
        return null;
    }
}

async function getProductsById(body) {
    try {
        const resposta = await axios.get(`${URL}product/${body}`);
        const {data} = resposta;
        return data;
    }
    catch(err) {
        console.log(err.resposta);
        return null;
    }
}
async function postComment(body,token,id) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    try {
        const resposta = await axios.post(`${URL}comment/${id}`,body,config);
        return "ok!";
    }
    catch(err) {
        console.log(err.resposta);
        return null;
    }
}
async function getCommentByProductId(body) {
    try {
        const resposta = await axios.get(`${URL}comment/${body}`);
        const {data} = resposta;
        console.log("Comentarios->",data)
        return data;
    }
    catch(err) {
        console.log(err.resposta);
        return null;
    }
}
async function makeBuy(body,token,id) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    try {
        const resposta = await axios.post(`${URL}buy/${id}`,body,config);
        return "ok!";
    }
    catch(err) {
        console.log(err.resposta);
        return null;
    }
}
const api = {
    postLogin,
    createAddress,
    postSignUp,
    getUser,
    getProducts,
    getUserById,
    getProductsById,
    getCommentByProductId,
    postComment,
    makeBuy
};

export default api;