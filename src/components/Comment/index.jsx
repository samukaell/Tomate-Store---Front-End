import { useState,useLayoutEffect } from 'react';
import api from '../../services/api';
import {StyledComment} from './styles'

export default function Comment(props){
    const {commit,userId} = props;
    //Carregar as info do user
    const [user,setUser] = useState("");
    
    async function carregarInfo(){
        const retornoUser = await api.getUserById(userId);
        setUser(retornoUser);
    }

    useLayoutEffect(() => {
        carregarInfo();
    },[]);
    return(
        <StyledComment>
            {user!== "" ?
                <>
                    <div className='container-user-info'>
                        <img className='user-image' src={user.image} alt ='imagem do usuario'/>
                        <p className='user-name'>{user.name}</p>
                    </div>
                    <p className='commit'>{commit}</p>
                </>
                :
                <p>...</p>
            }
        </StyledComment>
    )
}
