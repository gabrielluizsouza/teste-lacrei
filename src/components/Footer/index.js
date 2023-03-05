import React from "react";
import FaceIcon from "../../image/FacebookLogo.svg"
import instaIcon from "../../image/InstagramLogo.svg"
import LinkeIcon from "../../image/LinkedinLogo.svg"
import { Container, NavIcon, NavContent } from "./styled"
import { useNavigate } from "react-router-dom";
import { goToHome, goToUserPage,goToProfessionalPage } from "../../routes/coordinator";

export function Footer ({typePage}){

    const navigate = useNavigate()
    return(
        <Container>
        <NavContent>
            <ul>
                <li onClick={()=> goToHome(navigate)}  className={typePage === "home" ? "ativo" : ""}>Home</li>
                <li onClick={()=> goToUserPage(navigate)}  className={typePage === "pessoa-usuaria" ? "ativo" : ""}>Pessoa Usuária</li>
                <li onClick={()=> goToProfessionalPage(navigate)}  className={typePage === "profissional" ? "ativo" : ""}>Profissional</li>
            </ul>
        </NavContent>
        <NavIcon>
            <ul>
                <li><a href="https://www.instagram.com/lacrei.saude/" target="_blank"><img src={instaIcon} alt="instagram logo"/></a></li>
                <li><a href="https://www.facebook.com/lacrei.saude" target="_blank"><img src={FaceIcon} alt="facebook logo"/></a></li>
                <li><a href="https://www.linkedin.com/company/lacrei" target="_blank"><img src={LinkeIcon} alt="linkedin logo"/></a></li>
                
               
            </ul>
        </NavIcon>
        <p>Desafio Front-End Lacrei</p>
        </Container>
        
    )
}