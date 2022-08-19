import styled from "styled-components";

const StyledBuy = styled.main`
    background-color: #4a4e69;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .conatiner-info{
        width: 50%;
    }
    .box{
        margin-top: 82px;
        background-color: #FFFFFF;
        border-radius: 10px;
        width: 70vw;
        height: 100vh;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .conatiner-user{
        display: flex;
        align-items: center;
        width: 70%;
        margin-top: 10px;
    }
    .user-image{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .user-name{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
    }
    .conatiner-produto{
        margin-top: 20px;
        width: 70%;
    }
    .product-name{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color:#06d6a0;
        margin-bottom: 10px;
    }
    .product-image{
        width: 300px;
        margin-bottom: 10px;
        border-radius: 10px;
    }
    .product-description{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        color:#4b4b4b;
        margin-bottom: 10px;
    }
    .product-price{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;

    }
    .button-buy{
        color: #FFFFFF;
        font-family: 'Oswald', sans-serif;
        font-size: 19px;
        width: 264px;
        height: 40px;
        background: #06d6a0;
        border: none;
        border-radius: 6px;
        margin-bottom: 10px;
    }
    .conatiner-buy{
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .coonatiner-controller{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 20px;
        width: 90%;
        
    }
    .box-amount-price{
        display: flex;
    }
    .total-price-info{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        margin-right: 15px;
    }
    .box-button-controller{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .botton-controller{
        align-items: center;
        color: #FFFFFF;
        background: #06d6a0;
        border-radius: 50%;
        border: none;
        height: 40px;
        width: 40px;
    }
    .amount{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

export {StyledBuy}