import { createGlobalStyle } from "styled-components/macro";
import background from "./assets/app-background.jpg";
import { DEVISES, SIZES } from "./constants";

export default createGlobalStyle`

/* ------------------- */
/* Reset               */
/* ------------------- */

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
  font-family: 'Poppins', sans-serif;
  font-size: ${SIZES.smallFix};
}

h1, h2, h3, h4, h5, p {
  margin: 0;
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
    font-size: ${SIZES.regularFix};
  }
}

@media ${DEVISES.laptop} {
  body {
    font-size: ${SIZES.mediumFix};
  }
}
`;
