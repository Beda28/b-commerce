import { useState } from "react"
import { LoginBackground } from "../Box/Background"
import { ChangeTypeBox, LoginBox, LoginTypeBox } from "../Box/LoginBox"
import { LoginTitle } from "../Text/LoginText"
import { LoginInput } from "../Input/LoginInput"
import { LoginButton } from "../Button/LoginButton"

export const Login = () => {
    const [active, setactive] = useState<boolean>(true);

    const chanegeactive = (state: boolean) => {
        setactive(state)
    }

    return <>
        <LoginBackground>
            <LoginBox>
                <LoginTitle>B.C.</LoginTitle>
                <ChangeTypeBox>
                    <LoginTypeBox $active={active} onClick={() => chanegeactive(true)}>로그인</LoginTypeBox>
                    <LoginTypeBox $active={!active} onClick={() => chanegeactive(false)}>회원가입</LoginTypeBox>
                </ChangeTypeBox>
                <LoginInput placeholder="아이디를 입력해주세요."></LoginInput>
                <LoginInput placeholder="비밀번호를 입력해주세요." type="password"></LoginInput>
                <LoginButton>{active ? "로그인" : "회원가입"}</LoginButton>
            </LoginBox>
        </LoginBackground>
    </>
}