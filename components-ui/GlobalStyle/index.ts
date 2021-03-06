import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *, *::before, *::after{
        box-sizing: border-box;
        font-family: 'Cascadia Code PL', monospace;
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
        /* background-color: hsl(190, 10%, 90%); */
    }

    @font-face {
        font-family: 'Cascadia Code PL';
        src: url('/fonts/CascadiaCodePL/CASCADIACODEPL.TTF');
        font-display: swap;
}
`;
