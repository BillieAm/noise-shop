import Button from "../button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import { FooterContainer, SocialMedia, Newsletter } from "./footer.styles";

function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <SocialMedia>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
      </SocialMedia>
      <Newsletter>
        <p>Subscribe to our newsletter</p>
        <Button>sign up</Button>
      </Newsletter>
    </FooterContainer>
  );
}

export default Footer;
