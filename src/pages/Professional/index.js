import {Header} from "../../components/Header"
import {Footer} from "../../components/Footer"
import Img from "../../image/profissional1.svg"
import { Container,Content,ContainerImg} from "./styled"

export function Professional(){

    return(
        <>
        <Header/>
        <Container>
                 <Content>
                    <h1>Profissional</h1>
                    <h2>Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+</h2>
                 </Content>
            <ContainerImg>
                    <img src={Img} alt="grupo de médicos se olhando"/>
            </ContainerImg>
        
         </Container>
        <Footer/>
        </>
    )
}