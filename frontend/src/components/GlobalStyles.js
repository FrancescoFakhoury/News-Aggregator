import { createGlobalStyle } from "styled-components";

export const breakpoints = { tablet: "600px" };

export default createGlobalStyle`
:root {
    --emerald: #62c370;
    --teagreen: #c2f9bb; 
    --powderblue: #9ad1d4;
    --rose: #cc3363;
    --header-font: "Orbitron", "sans-serif";
    
}

html, body {
    margin: 0;
    height: 100vh;
}
`;
