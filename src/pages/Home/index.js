import { Footer } from "../../components/Footer"
import {Header} from "../../components/Header"
import {Button} from "../../components/Button"
import Img from "../../image/rafiki2.svg"
import { Container,Content,ContainerImg, ContainerButton} from "./styled"
import { goToUserPage, goToProfessionalPage } from "../../routes/coordinator"

export function Home(){

    return(
        <>
        <Header typePage={"home"}/>
        <Container>
         <Content>
            <h1>Boas vindas a Lacrei Saúde</h1>
            <h2>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</h2>
            <ContainerButton>
                <Button goPage={"Pessoa Usuária"} goTo={goToUserPage}/>
                <Button goPage={"Profissional"} goTo={goToProfessionalPage}/>
            </ContainerButton>
         </Content>
         <ContainerImg>
         <img src={Img} alt="médica negra com um prontuario na mão"/>
         </ContainerImg>
        
        
        </Container>
        <Footer typePage={"home"}/>
       
        </>
    )
}