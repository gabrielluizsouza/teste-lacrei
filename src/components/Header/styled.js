import styled from "styled-components";

export const Container = styled.div`

 background-color: var(--bg-header-gray);
 height: 7.8rem;
 padding: 0.8rem 1.6rem;

 @media(min-width:520px) and (max-width:1040px) {
/* tablets */
  height: 6rem;
  padding: 0.8rem 3.2rem;
 
}
@media(min-width : 1041px){
/* pc*/
 
  padding: 0.8rem 6.4rem;
 
}

`

export const HeaderContainer = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;

   img{
    cursor: pointer;
    transition: opacity 0.2s ease 0s;
    &:hover{ opacity: 0.8;}
   }
   nav ul{
    display: flex;
    gap: 1rem;

        li{
          font-size: 1.4rem;
            font-weight: 700;
            list-style: none;
            color: var(--text-gray);
            transition: all 0.2s ease 0s;
            cursor: pointer;
            &:hover{
              opacity: 0.5;
            }
            
        }
        & .ativo{color: var(--green); transition: all 0.2s ease 0s;}
       

       
   }

   @media(min-width : 520px){
   /* tablets */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    nav ul{
        gap: 2rem;
       
        li{
           font-size: 1.6rem;
          }
    }
}
  
`

