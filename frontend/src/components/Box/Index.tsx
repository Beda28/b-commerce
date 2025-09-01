import styled from "styled-components";
import theme from "../theme";
import { AlCenterDiv, CenterDiv, ColumnDiv, SpaceDiv } from "./Base";

export const HeaderDiv = styled(SpaceDiv)`
    width: 100%;
    
    align-items: center;
    padding: 10px 50px;
    position: fixed;

    border-bottom: 1px solid ${theme.background.radius};
    color: ${theme.text.main};
`

export const LogoDiv = styled(AlCenterDiv)`
    font-size: 20px;
    font-weight: 700;
    
    color: ${theme.text.main};
    background: none;

    padding: 5px 20px;

    &:hover{
        cursor: pointer;
    }
`

export const ContentDiv = styled(CenterDiv)`
    background: none;
`

export const SectionItemDiv = styled(SpaceDiv)`
    background: none;
`

export const SectionContentDiv = styled(ColumnDiv)`
    width: 350px;

    justify-content: center;
    background: none;
    margin: 0 50px;
`

export const PlaceItemDiv = styled(CenterDiv)`
    width: 500px;
    height: 400px;
    border: 1px solid ${theme.background.radius};
    border-radius: 10px;
    background-color: ${theme.background.box1};
`

export const ButtonBox = styled(AlCenterDiv)`
    background: none;
`