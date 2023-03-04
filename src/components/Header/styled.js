import styled from "styled-components";

export const Container = styled.div`

 background-color: var(--bg-header-gray);
 height: 7.8rem;
 padding: 0.8rem 1.6rem;

 @media screen and (min-device-width : 520px) and (max-device-width : 800px) {
/* tablets */
  height: 6rem;
  padding: 0.8rem 3.2rem;
 
}

`

export const HeaderContainer = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;

   nav ul{
    display: flex;
    gap: 1rem;

        li{
            font-size: 1.4rem;
            font-weight: 700;
            list-style: none;
            color: var(--text-gray);
            transition: all 0.2s ease 0s;
        }
   }

   @media screen and (min-device-width : 520px) and (max-device-width : 800px) {
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
