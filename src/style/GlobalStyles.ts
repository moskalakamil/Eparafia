import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
    *{
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
    html,body{
        margin: 0;
        padding: 0;
        max-width: 2500px;
        margin: 0 auto;
    }
`
export default GlobalStyle;

