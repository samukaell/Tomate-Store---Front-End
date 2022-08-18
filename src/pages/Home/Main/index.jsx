import api from '../../../services/api';
import { useState,useLayoutEffect } from 'react';
import Product from '../../../components/Product'
//Css
import {StyledMain} from './styles'
export default function Main(){

    const [produtos,setProdutos] = useState([{name:null,image:null,description:null,userId:null,price:null}]);
    const [atualizar,setAtualizar] = useState(true);

    async function carregarProdutos(){
        const retorno = await api.getProducts();
        setProdutos(retorno);
    }

    useLayoutEffect(() => {
        carregarProdutos();
    },[atualizar]);

    return (
        <StyledMain>
            <div className="container-product">
            {produtos.map((produto,index)=>{
                return(
                    <Product
                        name={produto.name}
                        image={produto.image}
                        description={produto.description}
                        userId={produto.userId}
                        price={produto.price}
                        key={index}
                    />
                )
            })

            }
            </div>
        </StyledMain>
    )
}