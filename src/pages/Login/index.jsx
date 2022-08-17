import { Link,useNavigate } from 'react-router-dom';
import { useContext,useState } from 'react';
import {ThreeDots} from 'react-loader-spinner'
import LoginContext from '../../util/LoginContext';
import api from "../../services/api";
//Styles
import {StyledSignIn} from "./styles"

export default function Login(){
    //Contexto = token
    const { setLogin } = useContext(LoginContext);

    const [habilitarCad,setHabilitarCad] = useState(false);
    //info do cadastro
    const [email,setEmail] = useState("");
    const [passoword,setPassoword] = useState("");

    async function handleSubmitLogin(e){
        e.preventDefault();
        setHabilitarCad(!habilitarCad);

        const retorno = await api.postLogin({
            email: email,
            passoword: passoword
        });
        console.log("Token->",retorno)
        if(retorno !== null){
            setHabilitarCad(!habilitarCad);
            setLogin(retorno);
            navigate('/');
        }else{
            alert("Por favor preencha os campos novamente.");
            document.location.reload(true);
        }
    }

    const navigate = useNavigate();
    return(
        <StyledSignIn>
            <h1>TomateStore</h1>
            <form onSubmit={handleSubmitLogin}>
                <input className="input-email" type="email"  placeholder="email"  required
                    value={email} onChange={e => setEmail(e.target.value)}
                />
                <input className="input-senha" type="password"  placeholder="senha"  required
                    value={passoword} onChange={e => setPassoword(e.target.value)}
                />

                <button className="botao-input" type='subimit'>
                    {habilitarCad ? 
                        <ThreeDots color="#FFFFFF" height={30} width={30} />
                        : 
                        'Entrar'
                    }
                </button>
            </form>

            <Link to={"/sign-up"}>
            <p className='link'>Primeira vez? Cadastre-se!</p>
            </Link>
        </StyledSignIn>
    )
}