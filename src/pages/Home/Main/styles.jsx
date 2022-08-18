import styled from "styled-components";

const StyledMain = styled.main`
    background-color: #4a4e69;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .container-product{
        padding: 5px;
        height: 330px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        width: 80vw;
        overflow-x: scroll;
    }

`;

export {StyledMain}