import {StyledHeader} from './styles'
import { IoSearchOutline,IoPersonCircle} from "react-icons/io5";

export default function Header(props){
    //`Search for people ${<IoSearchOutline/>}`
    const {name,image} = props
    return(
        <StyledHeader>
            <div className='box-header'>
                <p className='logo'>TomateStore</p>
                
                
                <div className='box-input'>
                    <input type="search" placeholder={'Buscar produtos'}/>
                    <IoSearchOutline className='search'/>
                </div>

                <div className='info-user'>
                    <IoPersonCircle className='more'/>
                </div>
            </div>
            
        </StyledHeader>
    )
}