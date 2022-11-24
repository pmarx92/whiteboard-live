import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
          --text-primary: #011F26;
          --text-on-color: #FFFFFF;
          --backgroundColor-green: #4B7322;
          --backgroundColor-dark: #011F26;
          --white: #fff;
      }
  
    *,
      *::before,
      *::after {
        font-family: 'Inter', sans-serif;
         box-sizing: border-box;
         padding: 0;
         margin: 0;
      }
        body {
          color: var(--text-primary);
          margin-bottom: 10rem;
      }
  `;

export default GlobalStyle;
