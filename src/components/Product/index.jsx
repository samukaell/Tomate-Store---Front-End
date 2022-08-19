import { Link,useNavigate } from 'react-router-dom';
//CSS
import {StyledProduct} from "./styles"

export default function Product(props){
    const {name,image,description,userId,productId,price} = props;

    return(
        <StyledProduct>
            <Link to={`/product/${productId}`}>
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
            </Link>
        </StyledProduct>
    )
}