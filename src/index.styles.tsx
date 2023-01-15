import { createGlobalStyle } from "styled-components/macro";
import background from "./assets/app-background.jpg";
import { SIZES } from "./constants";

export default createGlobalStyle`

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
  font-size: ${SIZES.regularFix};
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
`;
