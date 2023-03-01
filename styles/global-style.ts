import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        /* overflow-x: hidden; */
    }
    html,body{
        overflow: overlay;
    }
    ::-webkit-scrollbar {
    width: 11px;
    height: 11px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(150, 150, 150, .8);
    border: 2px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:active {
    background-color: rgba(120, 120, 120, .8);
  }
  ::-webkit-scrollbar-track {
    /* background: #f0f0f0; */
    background: rgba(0, 0, 0, 0.2);
  }


`;
export default GlobalStyle;
