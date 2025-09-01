import { SectionBackground } from "../Box/Background"
import { ButtonBox, PlaceItemDiv, SectionContentDiv, SectionItemDiv } from "../Box/Index"
import { LinkButtonA, LinkButtonB } from "../Button/LinkButton"
import { ContentSubTitle, ContentTitle } from "../Text/IndexText"

export const IndexSectionA = () => {
    return <>
        <SectionBackground>
            <SectionItemDiv>
                <SectionContentDiv>
                    <ContentTitle>유저 거래소</ContentTitle>
                    <ContentSubTitle>다른사람들과 기술을 공유해보세요!</ContentSubTitle>
                    <ButtonBox>
                        <LinkButtonA>거래소 보러가기</LinkButtonA>
                        <LinkButtonB>나의 기술 공유하기</LinkButtonB>
                    </ButtonBox>
                </SectionContentDiv>
                <PlaceItemDiv></PlaceItemDiv>
            </SectionItemDiv>
        </SectionBackground>
    </>
}

export const IndexSectionB = () => {
    return <>
        <SectionBackground>
            <SectionItemDiv>
                <PlaceItemDiv></PlaceItemDiv>
                <SectionContentDiv>
                    <ContentTitle>BAB Compony</ContentTitle>
                    <ContentSubTitle>저희 기술도 구경해보세요!</ContentSubTitle>
                    <ButtonBox>
                        <LinkButtonA>제품 보러가기</LinkButtonA>
                        <LinkButtonB>문의하기</LinkButtonB>
                    </ButtonBox>
                </SectionContentDiv>
            </SectionItemDiv>
        </SectionBackground>
    </>
}