import { useNavigate } from 'react-router-dom';
import {StyledHeader} from './styles'
import { IoSearchOutline,IoPersonCircle} from "react-icons/io5";

export default function Header(props){
    //`Search for people ${<IoSearchOutline/>}`
    const navigate = useNavigate();
    function logar(){
        navigate('/sign-in');
    }
    function irParaHome(){
        navigate('/');
    }
    const {name,image} = props
    return(
        <StyledHeader>
            <div className='box-header'>
                <p className='logo' onClick={()=>{irParaHome()}}>TomateStore</p>
                
                
                <div className='box-input'>
                    <input type="search" placeholder={'Buscar produtos'}/>
                    <IoSearchOutline className='search'/>
                </div>

                <div className='info-user'>
                    {name!== null ?
                        <div className='container-user'>
                            <p className='user-name'>{name}</p>
                            <img className='user-image' src={image} alt="Imagem do usuario"/>
                        </div>
                        :
                        <IoPersonCircle className='more' onClick={()=>{logar()}}/>
                    }
                </div>
            </div>
            
        </StyledHeader>
    )
}