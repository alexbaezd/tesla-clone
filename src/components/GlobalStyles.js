import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Rubik', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #393c41;
  }

  html{ scroll-behavior: smooth;}
  body {
    width: 100%;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  @keyframes animateDown {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }

      40% {
        transform: translateY(5px);
      }

      60% {
        transform: translateY(3px);
      }
    }
`;
