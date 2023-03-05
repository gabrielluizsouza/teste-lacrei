import React from "react"
import { useNavigate} from "react-router-dom";
import { Container, Text } from "./styled"

export function Button ({goPage, goTo}){
    const navigate = useNavigate()

    return(
        <>
         
         <Container type={goPage} onClick={()=> goTo(navigate)}>
            <Text type={goPage}> {goPage}</Text>
         </Container>

        </>
    )
}