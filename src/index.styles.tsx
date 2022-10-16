import { createGlobalStyle } from "styled-components";
import background from "./assets/milad-fakurian-medium.jpg";

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
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
}

a {
  text-decoration: none;
  color: #000;
}
`;
