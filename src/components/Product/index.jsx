//CSS
import {StyledProduct} from "./styles"

export default function Product(props){
    const {name,image,description,userId,price} = props
    return(
        <StyledProduct>
            <div className="box-name">
                <p className="product-name">{name}</p>
            </div>
            <div className="box-image">
                <img className="product-image" src={image}/>
            </div>
            <div className="box-info">
                <p className="product-description">{description}</p>
                <p className="product-price">R${price}</p>
            </div>
        </StyledProduct>
    )
}