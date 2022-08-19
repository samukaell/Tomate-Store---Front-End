import LoginContext from '../../util/LoginContext';
import { useContext } from 'react';

import Header from "../../components/Header"
import Main from "./Main"

export default function ProductPage(){
    const { login } = useContext(LoginContext);
    return(
        <>
            <Header
                name={login.name}
                image={login.image}
            />
            <Main/>
        </>
    )
}