import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }
    label, input, p, h1, h2, h3, a, button {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 1px;
        color: #000;
        text-decoration: none;
        text-rendering: optimizeLegibility !important;
    }

`;
