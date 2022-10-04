import { Wrapper } from "./components/Wrapper/index";
import GlobalStyle from "./theme/globals";
import useMobileDetect from './hooks/useMobileDetect';

import { Card } from "./components/Card/Card";
import imageDesktop from "./images/image-product-desktop.jpg";
import imageMobile from "./images/image-product-mobile.jpg";
import icon from './images/icon-cart.svg'
function App() {
  const { isMobile } = useMobileDetect();

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Card>
          {!isMobile 
          ?<Card.Image src={imageDesktop} alt="parfum" />
          : <Card.Image src={imageMobile} alt="parfum" />
        }
          <Card.Body>
            <Card.Preview>Perfume</Card.Preview>
            <Card.Heading>Gabrielle Essence Eau De Parfum</Card.Heading>
            <Card.Description>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </Card.Description>
            <Card.PriceContainer>
              <Card.ActualPrice>$149.99</Card.ActualPrice>
              <Card.OldPrice>$169.99</Card.OldPrice>
            </Card.PriceContainer>
            <Card.Button>
              <img src={icon} alt="icon" />
              Add to Cart</Card.Button>
          </Card.Body>
        </Card>
      </Wrapper>
    </>
  );
}
export default App;
