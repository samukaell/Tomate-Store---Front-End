import { useState,useLayoutEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../../../util/LoginContext';
import api from '../../../services/api';
import { IoChevronUpOutline,IoChevronDownOutline } from "react-icons/io5";
//Css
import {StyledBuy} from './styles'

export default function Main(){
    //login
    const { login } = useContext(LoginContext);
    //id da pagina
    const {idProduct} = useParams();
    //Conteudo
    const [produto,setProduto] = useState("");
    const [user,setUser] = useState("");

    //Valores 
    const [amount,setAmount] = useState(0);

    const navigate = useNavigate();

    function acrecentar(){
        if(amount < produto.amount){
            setAmount(amount+1);
        }else{
            alert("Não a tantos disponiveis no estoque");
        }
    }
    function decrementar(){
        if(amount > 0){
            setAmount(amount-1);
        }
    }
    async function comprar(){
        if(amount > 0){
            const buy = await api.makeBuy({
                amount:amount
            },login.token,idProduct
            );
            console.log("Compra feita->",buy);
            alert("Compra feita com sucesso!");
            navigate('/');
        }else{
            alert("Compre ao menos 1 produto :(");
        }
    }
    async function carregarInfo(){
        const retorno = await api.getProductsById(idProduct);
        setProduto(retorno);
        const retornoUser = await api.getUserById(retorno.userId);
        setUser(retornoUser);
    }
    useLayoutEffect(() => {
        carregarInfo();
    },[]);


    return(
        <StyledBuy>
                {   
                    <div className='box'>
                        <div className='conatiner-info'>
                            <div className='conatiner-user'>
                                {user!==""?
                                    <>
                                        <img className='user-image' src={user.image} alt="imagem do usuario"/>
                                        <p className='user-name'>{user.name}</p>
                                    </>
                                    :
                                    <p>...</p>
                                }
                            </div>
                            <div className='conatiner-produto'>
                                <div className="box-name">
                                    <p className="product-name">{produto.name}</p>
                                </div>
                                <div className="box-image">
                                    <img className="product-image" src={produto.image}/>
                                </div>
                                <div className="box-info">
                                    <p className="product-description">{produto.description}</p>
                                    <p className="product-price">R${produto.price}</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className='conatiner-buy'>
                            <div className='coonatiner-controller'>
                                <div className='box-amount-price'>
                                    <p className='total-price-info'>Valor total</p>
                                    <p className='total-price-info'>R${amount*produto.price}</p>
                                </div>
                                    
                                <div className='box-button-controller'>
                                    <button className='botton-controller' onClick={()=>{acrecentar()}}>
                                        <IoChevronUpOutline/>
                                    </button>
                                    <p className='amount'>{amount}</p>
                                    <button className='botton-controller' onClick={()=>{decrementar()}}>
                                        <IoChevronDownOutline/>
                                    </button>
                                </div>
                            </div>
                            <div className='box-button'>
                                <button className='button-buy' onClick={()=>{comprar()}}>Comprar</button>
                            </div>
                        </div>
                    </div>
                }
            
        </StyledBuy>
    )
}