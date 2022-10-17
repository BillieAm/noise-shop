import { createGlobalStyle } from "styled-components";
import background from "./assets/app-background.jpg";

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
  font-size: 1.2rem;
}

@media (min-width: 450px) {
    body {
      font-size: 1.7rem;
    }
  }

a {
  text-decoration: none;
  color: #000;
}
`;
