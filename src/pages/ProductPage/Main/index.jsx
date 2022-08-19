import { useState,useLayoutEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginContext from '../../../util/LoginContext';
import api from '../../../services/api';

//Component
import Comment from '../../../components/Comment';
//Css
import {StyledMain} from './styles'

export default function Main(){
    //login
    const { login } = useContext(LoginContext);
    //id da pagina
    const {idProduct} = useParams();
    //Conteudo
    const [produto,setProduto] = useState("");
    const [user,setUser] = useState("");
    const [comment,setComment] = useState([]);
    //Navegação
    const navigate = useNavigate();
    //Estado de controle
    const [atualizar,setAtualizar]= useState(false);
    const[habilitarComment,setHabilitarComment] = useState(false);
    const[comentario,setComentario] = useState("");
    async function carregarInfo(){
        const retorno = await api.getProductsById(idProduct);
        setProduto(retorno);
        const retornoUser = await api.getUserById(retorno.userId);
        setUser(retornoUser);
        const retornoComment = await api.getCommentByProductId(idProduct);
        setComment(retornoComment);
    }
    useLayoutEffect(() => {
        carregarInfo();
    },[atualizar]);

    //funcoes secundarias
    //Comprar
    function comprar(){
        //Esta logado
        if(login.token !== null){
            navigate(`/buy/${idProduct}`);
        }//Ou se não estiver logado
        else{
            alert("Você ainda não fez o login, para continuar a comprar realize o login");
            navigate('/sign-in');
        }
    }
    function habilitarComentario(){
        if(login.token !== null){
            setHabilitarComment(!habilitarComment);
        }else{
            alert("Voceê precisa estar logado para poder fazer o seu comentario");
            navigate('/sign-in');
        }
    }
    async function addComentario(){
        const retorno = await api.postComment({
            commit:comentario
        },
        login.token,
        idProduct
        );
        console.log("Comnetario feito ->",retorno);
        setHabilitarComment(!comment);
        setAtualizar(!atualizar);
    }

    return(
        <StyledMain>
                {   
                    <div className='box'>
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
                                <p className="product-price">R${produto.price}</p>
                            </div>
                            
                        </div>
                        <div className='box-button'>
                            <button onClick={()=>{comprar()}}>Comprar</button>
                        </div>
                    <div className='comments'>
                        <div className='box-info'>
                            <p className='info-page'>Comentarios</p>
                        </div>
                        {
                            comment.map((commit,index)=>{
                                return(
                                    <Comment
                                        commit={commit.commit}
                                        userId={commit.userId}
                                        key={index}
                                    />
                                )
                                })
                        } 
                        {
                            habilitarComment === true ?
                            <>
                                <input className="input" type="text"  placeholder="Eu recebi só uma foto"  required
                                    value={comentario} onChange={e => setComentario(e.target.value)}
                                />
                                <button onClick={()=>{addComentario()}}>Adicionar Comentario</button>
                            </>
                            :
                            <button onClick={()=>{habilitarComentario()}}>Adicionar Comentario</button>
                        }
                    </div>
                    </div>
                }
        </StyledMain>   
    )
}
