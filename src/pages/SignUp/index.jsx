import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { StyledSignUp } from './styles'
import {ThreeDots} from 'react-loader-spinner'
import api from "../../services/api";

export default function SignUp(){
    const [habilitarCad,setHabilitarCad] = useState(false);
    const [name,setName] = useState("");
    const [image,setImage] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    //endereço
    const [street,setStreet] = useState("");
    const [district,setDistrict] = useState("");
    const [city,setCity] = useState("");
    const [number,setNumber] = useState(0);

    const navigate = useNavigate();

    async function handleSubmitSignUp(e){
        e.preventDefault();
        setHabilitarCad(!habilitarCad);
        //Cadastrar o endereço
        const endereco = await api.createAddress({
            street,
            district,
            city,
            number:parseInt(number)
        });
        if(endereco !== null && endereco !== undefined){
            const promise = await api.postSignUp({ 
                email:email,
                password: password,
                name:name,
                image:image
    
            });
            if(promise !== null){
                setHabilitarCad(!habilitarCad);
                navigate('/sign-in');
            }else{
                alert("Por favor, tente novamente");
            }
        }else{
            alert("ocorreu um erro, a equipe de tomate devs esta cuidando disso");
        }
        
    }

    return(
        <StyledSignUp>
                <h1>TomateStore</h1>
                <form onSubmit={handleSubmitSignUp}>
                    <input className="input-name" type="text"  placeholder="Nome"  required
                        value={name} onChange={e => setName(e.target.value)}
                    />
                    <input className="input-image" type='url'  placeholder="imagem do perfil" required
                        value={image} onChange={e => setImage(e.target.value)}
                    />
                    <input className="input-email" type="email"  placeholder="email"  required
                        value={email} onChange={e => setEmail(e.target.value)}
                    />
                    <input className="input-senha" type="password"  placeholder="senha"  required
                        value={password} onChange={e => setPassword(e.target.value)}
                    />
                    <p className='info-add'>Endereço</p>
                    <input className="input-city" type="text"  placeholder="Nome da Cidade"  required
                        value={city} onChange={e => setCity(e.target.value)}
                    />

                    <input className="input-district" type="text"  placeholder="Nome do bairro"  required
                        value={district} onChange={e => setDistrict(e.target.value)}
                    />

                    <input className="input-street" type="text"  placeholder="Nome da rua"  required
                        value={street} onChange={e => setStreet(e.target.value)}
                    />

                    <input className="input-number" type='number'  placeholder="Numero da Casa"  required
                        value={number} onChange={e => setNumber(e.target.value)}
                    />

                    <button className="botao-input" type='subimit'>
                        {habilitarCad ? 
                            <ThreeDots color="#FFFFFF" height={30} width={30} />
                            : 
                            'Cadastrar'
                        }
                    </button>
                </form>

                <Link to={"/sign-in"}>
                    <p className='link'>Já possui cadastro? Vá para a tela de login!</p>
                </Link>
        </StyledSignUp>
    )
}