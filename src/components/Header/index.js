import { Container,HeaderContainer } from "./styled"
import Logo from "../../image/Lacrei-logo.svg"

export function Header () {
    return(
        <Container>
            <HeaderContainer>
                <div>
                    <img src={Logo} alt="logo Lacrei"/>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Pessoa Usuária</li>
                        <li>Professional</li>
                    </ul>
                </nav>
            </HeaderContainer>
        </Container>
    )
}