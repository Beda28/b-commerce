import { useNavigate } from "react-router-dom"
import { ContentDiv, HeaderDiv, LogoDiv } from "../Box/Index"
import { UserContentText } from "../Text/IndexText"

export const IndexHeader = () => {
    const navigate = useNavigate()

    return <>
        <HeaderDiv>
            <LogoDiv onClick={() => navigate('/')}>BAB Compony</LogoDiv>
            <ContentDiv>
                <UserContentText>유저마켓</UserContentText>
                <UserContentText>회사마켓</UserContentText>
            </ContentDiv>
            <ContentDiv>
                <UserContentText onClick={() => navigate('/login')}>로그인</UserContentText>
                <UserContentText onClick={() => navigate('/login')}>회원가입</UserContentText>
            </ContentDiv>
        </HeaderDiv>
    </>
}