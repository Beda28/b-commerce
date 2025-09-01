import styled from "styled-components";
import theme from "../theme";

export const LoginButton = styled.button`
    width: 90%;
    height: 50px;

    font-size: 16px;
    font-weight: 500;

    margin: 20px;

    outline: none;
    border: 1px solid ${theme.background.radius};
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.background.box3};
    color: ${theme.text.main};

    &:hover{
        cursor: pointer;
        background-color: ${theme.button.main};
    }
`