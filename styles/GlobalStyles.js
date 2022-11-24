import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
          --backgroundColor-light: #272b33;
          --backgroundColor-dark: #0a0c10;
          --white: #fff;
      }
  
    *,
      *::before,
      *::after {
         box-sizing: border-box;
         padding: 0;
         margin: 0;
      
      }
        body {
          background-color: var(--backgroundColor-light);
    

      }
  `;

export default GlobalStyle;
