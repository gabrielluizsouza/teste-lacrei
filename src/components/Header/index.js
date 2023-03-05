import React from "react";
import { Container,HeaderContainer } from "./styled"
import Logo from "../../image/Lacrei-logo.svg"
import { useNavigate} from "react-router-dom";
import { goToHome, goToUserPage,goToProfessionalPage } from "../../routes/coordinator";


export function Header ({typePage}) {

    const navigate = useNavigate()
     
    
    return(
        <Container>
            <HeaderContainer>
                <div>
                    <img src={Logo} alt="logo Lacrei" onClick={()=> goToHome(navigate)}/>
                </div>
                <nav>

                    <ul>
                        <li onClick={()=> goToHome(navigate) } className={typePage === "home" ? "ativo" : ""}>Home</li>
                        <li onClick={()=> goToUserPage(navigate)} className={typePage === "pessoa-usuaria" ? "ativo" : ""} >Pessoa Usuária</li>
                        <li onClick={()=> goToProfessionalPage(navigate)} className={typePage === "profissional" ? "ativo" : ""} >Profissional</li>
                    </ul>
                   
                </nav>
            </HeaderContainer>
        </Container>
    )
}