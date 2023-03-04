import styled from "styled-components";


export const Container = styled.main`
  padding: 1.6rem 1.6rem 0rem 1.6rem;
  background-color: var(--bg-main-gray);
  
 

  @media(min-width : 520px) and (max-width : 1040px){
    padding: 3.2rem 3.2rem 0rem 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
 }
 
  @media(min-width : 1041px){
    padding: 6.4rem 6.4rem 0rem 6.4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

`
export const Content = styled.div`
  max-width: 55.5rem;
 h1{
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--primary-black);
    transition: all 0.2s ease 0s;
  }
  h2{
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--secondary-gray);
    margin-top: 1.4rem;
    transition: all 0.2s ease 0s;
    border-left: 5px solid var(--green);
    padding-left: 2.4rem;
  }
  @media(min-width : 520px) and (max-width : 1040px){

    h1{
        font-size: 3.2rem;
    }
    h2{
        font-size: 1.6rem;
        margin-top: 1.6rem
    }
  }
  @media(min-width : 1041px){
    
    
        h1{
        font-size: 4.8rem;
    }
        h2{
        font-size: 2.4rem;
        margin-top: 3.2rem
    }
    
  }
`
export const ContainerImg = styled.div`
    max-width: 55.5rem;
    
    img{
          width: 100%;
        }
`