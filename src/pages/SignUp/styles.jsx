import styled from "styled-components";

const StyledSignUp = styled.main`
    background-color: #06d6a0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        color: #FFFFFF;
    }
    h1 {
        font-family: 'Passion One', cursive;
        font-weight: 700;
        font-size: 80px;
        color: #FFFFFF;
    }
    .info-add{
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        margin-bottom: 2vh;
    }
    h2 {
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 33px;
        color: #FFFFFF;
    }
    .box-form{
        background-color: #333333;
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input{
        width: 264px;
        height: 40px;
        background: #FFFFFF;
        border: none;
        border-radius: 6px;
        margin-bottom: 10px;
        color:#9F9F9F;
    }

    button{
        color: #06d6a0;
        font-family: 'Oswald', sans-serif;
        width: 264px;
        height: 40px;
        background: #FFFFFF;
        border: none;
        border-radius: 6px;
        margin-bottom: 10px;
    }
    .link{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
    }
    a{
        text-decoration-color:#FFFFFF;
    }
`;

export {StyledSignUp}