import styled from "styled-components";

const StyledMain = styled.main`
    background-color: #4a4e69;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .box{
        margin-top: 82px;
        background-color: #FFFFFF;
        border-radius: 10px;
        width: 70vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
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
    .box-info{
        width: 80%;
    }
    .box-button{
        width: 100%;
        background-color: #FFFFFF;
        display: flex;
        justify-content: center;
    }
    button{
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
    .info-page{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        color:#06d6a0;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .comments{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        width: 100%;
        background-color: #FFFFFF;

    }
    input{
        background-color: #e2e2e2;
        width: 60%;
        height: 60px;
        border-radius: 10px;
        border: none;
        margin-bottom: 10px;
    }

`;

export {StyledMain}