import LoginContext from '../../../util/LoginContext';
import { useContext,useState } from 'react';
import Product from '../../../components/Product'
//Css
import {StyledMain} from './styles'
export default function Main(){
    const { login } = useContext(LoginContext);
    console.log(login);
    return (
        <StyledMain>
            <div className="container-product">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            </div>
        </StyledMain>
    )
}