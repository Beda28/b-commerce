import styled from "styled-components";
import theme from "../theme";
import { CenterDiv, ColumnDiv, SpaceDiv } from "./Base";

export const LoginBox = styled(ColumnDiv)`
    width: 400px;
    align-items: center;

    background-color: ${theme.background.box1};
    border: 1px solid ${theme.background.radius};
    border-radius: 5px;
`

export const ChangeTypeBox = styled(SpaceDiv)`
    width: 90%;
    align-items: center;
    border-radius: 5px;
    border: 1px solid ${theme.background.radius};
    margin: 0 0 20px;

    background-color: ${theme.background.box2};
`

export const LoginTypeBox = styled(CenterDiv)<{$active: boolean}>`
    width: 50%;

    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;

    background-color: ${props=>props.$active ? theme.background.box3 : theme.background.box2};
    color: ${props=>props.$active ? theme.text.main : theme.text.sub};

    &:hover{
        cursor: pointer;
    }
`