import styled from "styled-components";
import theme from "../theme";

export const UserContentText = styled.p`
    font-size: 16px;
    font-weight: 500;
    
    padding: 5px 10px;
    margin: 0 5px;

    background: none;
    color: ${theme.text.main};
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: ${theme.button.main};
    }
`

export const ContentTitle = styled.p`
    font-size: 32px;
    font-weight: 900;

    color: ${theme.text.main};
    background: none;
`

export const ContentSubTitle = styled.p`
    font-size: 20px;
    font-weight: 500;

    background: none;
    color: ${theme.text.sub};
`