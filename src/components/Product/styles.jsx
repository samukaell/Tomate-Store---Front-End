import styled from "styled-components";

const StyledProduct = styled.div`
    background-color: #FFFFFF;
    width: 260px;
    height: 300px;
    border-radius: 10px;
    margin-right: 15px;
    min-width: 250px;
    
    .box-name{
        width: 100%;
        height: 10px;
        padding: 10px;
    }
    .product-name{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        color:#4a4e69;
    }
    .box-image{
        display: flex;
        justify-content: center;
    }
    .product-image{
        width: 200px;
    }
    .box-info{
        width: 100%;
        height: 25px;
        padding: 5px;
    }
    .product-description{
        margin-bottom: 5px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        color:#4a4e69;
    }
    .product-price{
        margin-bottom: 5px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        color:#06d6a0;
        margin-bottom: 5px;
    }
`;

export {StyledProduct}