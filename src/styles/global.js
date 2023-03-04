import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     
     * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
 
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  :root{
    font-size: 62.5%;
    --bg-main-gray: rgba(255, 255, 255, 1);
    --bg-header-gray: rgba(238, 238, 238, 1);
    --primary-black: rgba(31, 31, 31, 1);
    --secondary-gray: rgba(81, 81, 81, 1);
    --green: rgba(1, 135, 98, 1);
    --text-gray: rgba(31, 31, 31, 1)
    font-family: 'Nunito', sans-serif;


    

}
 
     
`