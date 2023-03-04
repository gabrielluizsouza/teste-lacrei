import { Footer } from "../../components/Footer"
import {Header} from "../../components/Header"
import Img from "../../image/rafiki2.svg"
import { Container,Content,ContainerImg} from "./styled"

export function Home(){

    return(
        <>
        <Header/>
        <Container>
         <Content>
            <h1>Boas vindas a Lacrei Saúde</h1>
            <h2>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</h2>
         </Content>
         <ContainerImg>
         <img src={Img} alt="médica negra com um prontuario na mão"/>
         </ContainerImg>
        
        </Container>
        <Footer/>
       
        </>
    )
}