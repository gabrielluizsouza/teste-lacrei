import FaceIcon from "../../image/FacebookLogo.svg"
import instaIcon from "../../image/InstagramLogo.svg"
import LinkeIcon from "../../image/LinkedinLogo.svg"
import { Container, NavIcon, NavContent } from "./styled"

export function Footer (){

    return(
        <Container>
        <NavContent>
            <ul>
                <li>Home</li>
                <li>Pessoa Usuária</li>
                <li>Profissional</li>
            </ul>
        </NavContent>
        <NavIcon>
            <ul>
                <li><img src={instaIcon} alt="instagram logo"/></li>
                <li><img src={FaceIcon} alt="facebook logo"/></li>
                <li><img src={LinkeIcon} alt="linkedin logo"/></li>
               
            </ul>
        </NavIcon>
        <p>Desafio Front-End Lacrei</p>
        </Container>
        
    )
}