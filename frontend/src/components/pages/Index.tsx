import { IndexBackground } from "../Box/Background"
import { IndexHeader } from "../middlecomponent/Header"
import { IndexSectionA, IndexSectionB } from "../middlecomponent/IndexSection"

export const Index = () => {

    return <>
        <IndexBackground>
            <IndexHeader></IndexHeader>
            <IndexSectionA></IndexSectionA>
            <IndexSectionB></IndexSectionB>
        </IndexBackground>
    </>
}