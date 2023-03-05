import {Header} from "../../components/Header"
import {Footer} from "../../components/Footer"
import Img from "../../image/rafiki1.svg"
import { Container,Content,ContainerImg} from "./styled"

export function User(){

    return(
        <>
        <Header typePage={"pessoa-usuaria"}/>
        <Container>
                 <Content>
                    <h1>Pessoa Usuária</h1>
                    <h2>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</h2>
                 </Content>
            <ContainerImg>
                    <img src={Img} alt="grupo de peesoas com celular na mão"/>
            </ContainerImg>
        
         </Container>
        <Footer typePage={"pessoa-usuaria"}/>
        </>
    )
}