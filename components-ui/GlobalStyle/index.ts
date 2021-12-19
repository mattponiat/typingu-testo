import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *, *::before, *::after{
        box-sizing: border-box;
        font-family: 'Cascadia Code PL';
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

    @font-face {
        font-family: 'Cascadia Code PL';
        src: url('public\fonts\CascadiaCodePL\CASCADIACODEPL.TTF');
}
`;
