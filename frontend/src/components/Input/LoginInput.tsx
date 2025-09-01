import styled from "styled-components";
import theme from "../theme";

export const LoginInput = styled.input`
    width: 90%;
    height: 50px;
    padding: 5px 10px;
    margin: 20px 0 0;

    font-size: 16px;
    font-weight: 500;
    
    outline: none;
    border: 1px solid ${theme.input.radius};
    border-radius: 5px;

    background-color: ${theme.input.main};
    color: ${theme.input.text};
`