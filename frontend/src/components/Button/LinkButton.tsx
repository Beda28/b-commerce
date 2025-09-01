import styled from "styled-components";
import theme from "../theme";

export const LinkButtonA = styled.button`
    padding: 10px 15px;
    margin: 20px 10px 10px 0;
    font-size: 18px;
    font-weight: 500;
    
    background-color: ${theme.button.main};
    color: ${theme.button.text};

    outline: none;
    border: none;
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: ${theme.button.hover};
    }
`

export const LinkButtonB = styled.button`
    padding: 10px 15px;
    margin: 20px 10px 10px 0;
    font-size: 18px;
    font-weight: 500;
    
    background-color: ${theme.button_alt.main};
    color: ${theme.button_alt.text};

    outline: none;
    border: none;
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: ${theme.button_alt.hover};
    }
`