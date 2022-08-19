import api from '../../../services/api';
import { useState,useLayoutEffect } from 'react';
import Product from '../../../components/Product'
//Css
import {StyledMain} from './styles'
export default function Main(){

    const [produtos,setProdutos] = useState([]);
    //const [atualizar,setAtualizar] = useState(true);

    async function carregarProdutos(){
        const retorno = await api.getProducts();
        setProdutos(retorno);
    }

    useLayoutEffect(() => {
        carregarProdutos();
    },[]);

    return (
        <StyledMain>
            <div className="container-product">
            {
                produtos.length === 0 ?
                <p>Sem produtos disponiveis</p>
                :
                produtos.map((produto,index)=>{
                    return(
                        <Product
                            name={produto.name}
                            image={produto.image}
                            description={produto.description}
                            userId={produto.userId}
                            price={produto.price}
                            productId={produto.id}
                            key={index}
                        />
                    )
                    })
            }
            </div>
        </StyledMain>
    )
}