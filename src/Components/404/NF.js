import * as n from './NotFoundElemnts';
import nf_img from './../../images/404/_404.png'

const NF = () => {
    return (
        <n.NotFoundContaner>
            {/* <n.NotFoundImageContainer>

                <n.NotFoundImg src={nf_img} />
            </n.NotFoundImageContainer> */}
            <n.NotFoundHeaderContainer>

                <n.NotFoundHeader>404</n.NotFoundHeader>
                <n.NotFoundText>
                    Not Found
                </n.NotFoundText>
                <n.NotFoundSubText>
                    The resource requested cannot be found on this server!
                </n.NotFoundSubText>
            <n.GoBack to="/">Back</n.GoBack>
            </n.NotFoundHeaderContainer>
        </n.NotFoundContaner>
    )
}
 
export default NF;