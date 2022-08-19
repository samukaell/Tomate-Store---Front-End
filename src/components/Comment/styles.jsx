import styled from "styled-components";

const StyledComment = styled.div`
    background-color: #06d6a0;
    width: 80%;
    border-radius: 10px;
    margin-bottom: 10px;
    .container-user-info{
        display: flex;
        align-items: center;
        padding: 5px;
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
    .commit{
        margin-left: 5vw;
        margin-bottom: 5px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        color: #FFFFFF;
        margin-right: 5px;
    }
`;

export {StyledComment}