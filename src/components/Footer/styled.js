
import styled from "styled-components";

export const Container = styled.div`
background-color: var(--bg-main-gray);
  padding: 1.6rem 0 0.8rem;
  margin: 0 1.6rem;
  display: flex;
  flex-direction: column;
  height: 16rem;
  justify-content: space-between;
  
  @media(min-width : 520px) and (max-width : 1040px){
    padding: 3.2rem 0 0.8rem;
    margin: 0 3.2rem;   
  }
  @media(min-width : 1041px){
    padding: 3.2rem 0 0.8rem;
    margin: 0 6.4rem;   
  }

`
export const NavContent = styled.nav`
    
    ul {
     
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 6.6rem;
         li{
            font-size: 1.4rem;
            font-weight: 400;
            list-style: none;
            color: var(--text-gray);
            transition: all 0.2s ease 0s;
           }
    }

    @media (min-width : 520px){
        ul{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: 2.2rem;
            justify-content: flex-start;
            gap: 2.5rem;
            li{
                font-size: 1.6rem;
            }
        }

    }
`
export const NavIcon = styled.nav`

     ul{
        display: flex;
        gap: 2rem;
        li{
            list-style: none;
        }
     }
     
`