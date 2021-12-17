import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *, *::before, *::after{
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        user-select: none;
    }

    body{
        padding: 0;
        margin: 0;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
