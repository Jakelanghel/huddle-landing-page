import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }

  h1,
  h2,
  p {
    margin: 0;
    padding: 0;
  }
  
  h1, h2 {
    color: ${({ theme }) => theme.colors.footer}
  } 

  h1 {
    font-size: 1.45rem;
  }


  h2 {
    font-size: 1.25rem;
  }

  p {
    font-size: 18px;
    line-height: 1.55rem;
  }

  img {
    max-width: 100%;
}

 @media (min-width: ${({ theme }) => theme.desktop}) {
   
  h1 {
     font-size: 2rem;
   }

   h2 {
     font-size: 1.75rem
   }

 }
`;

export default GlobalStyles;
