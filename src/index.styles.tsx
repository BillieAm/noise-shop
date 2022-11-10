import { createGlobalStyle } from "styled-components/macro";
import background from "./assets/app-background.jpg";
import { device } from "./device";

export default createGlobalStyle`

/* ------------------- */
/* Custom properties   */
/* ------------------- */

:root {
  /* colors */
  --clr-dark: 230 35% 7%;
  --clr-light: 231 77% 90%;
  --clr-white: 0 0% 100%;
  --clr-light-yellow: 60 100% 50%;
  --clr-yellow: 45 100% 61%;
  --clr-blue: 206 96% 72%;
  --clr-turquoise: 162 71% 64%;
  --clr-purple: 256 93% 79%;

  /* font-sizes */
  --fs-700: 1.75rem;
  --fs-600: 1.5rem;
  --fs-500: 1.25rem;
  --fs-400: 1rem;
  --fs-300: .75rem;
}

@media ${device.tablet} {
  :root {
    /* font-sizes */
    --fs-700: 2.25rem;
    --fs-600: 2rem;
    --fs-500: 1.75rem;
    --fs-400: 1.5rem;
    --fs-300: 1rem;
  }
}

@media ${device.laptopM} {
  :root {
    /* font-sizes */
    --fs-700: 6.25rem;
    --fs-600: 3.5rem;
    --fs-500: 2rem;
    --fs-400: 1.70rem;
    --fs-300: 1.5rem;
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body{
  margin: 0;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  font-size: var(--fs-400);
}

img {
  width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
