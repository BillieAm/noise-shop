import { createGlobalStyle } from "styled-components/macro";
import background from "./assets/app-background.jpg";
import { DEVISES, FONT_SIZES } from "./constants";

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
  --clr-peach-pink: 0 100% 76%;
  --clr-blue: 206 96% 72%;
  --clr-purple: 256 93% 79%;
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
  font-size: ${FONT_SIZES.small};
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

@media ${DEVISES.tablet} {
  body {
    font-size: ${FONT_SIZES.regular};
  }
}

@media ${DEVISES.laptop} {
  body {
    font-size: ${FONT_SIZES.large};
  }
}
`;
