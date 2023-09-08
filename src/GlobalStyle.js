import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

img {
    display: block;
    max-width: 100%;
    object-fit: cover;
}
`;