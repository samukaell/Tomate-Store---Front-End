import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #06d6a0;
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    .box-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
    }
    .logo{
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 49px;
        color: #FFFFFF;
    }
    .info-user{
        display: flex;
    }
    .search{
        position: absolute;
        right: 0;

        color:#C6C6C6;
        font-size: 20px;
    }
    .box-input{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    input{
        width: 463px;
        height: 35px;
        background: #FFFFFF;
        border-radius: 8px;
        border: none;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
    }
    .info-user{
        display: flex;
        align-items: center;
    }
    .container-user{
        display: flex;
        align-items: center;
    }
    .user-name{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        color: #FFFFFF;
        margin-right: 5px;
    }
    .user-image{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .more{
        color: #FFFFFF;
        font-size: 30px;
        margin-right: 5px;
    }
`;

export {StyledHeader}