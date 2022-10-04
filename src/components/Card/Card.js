import React from "react";
import {
  Container,
  Body,
  Image,
  Preview,
  Heading,
  Description,
  PriceContainer,
  ActualPrice,
  OldPrice,
  Button,
  Icon,
} from "./Card.styled";

export const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

Card.Body = function CardBody({ children }) {
  return <Body>{children}</Body>;
};

Card.Heading = function CardHeading({ children }) {
  return <Heading>{children}</Heading>;
};

Card.Image = function CardImage({ children, src, alt }) {
  return (
    <Image src={src} alt={alt}>
      {children}
    </Image>
  );
};

Card.Preview = function CardPreview({ children }) {
  return <Preview>{children}</Preview>;
};

Card.Description = function CardDescription({ children }) {
  return <Description>{children}</Description>;
};

Card.PriceContainer = function CardPriceContainer({ children }) {
  return <PriceContainer>{children}</PriceContainer>;
};

Card.ActualPrice = function CardActualPrice({ children }) {
  return <ActualPrice>{children}</ActualPrice>;
};

Card.OldPrice = function CardOldPrice({ children }) {
  return <OldPrice>{children}</OldPrice>;
};

Card.Icon = function CardIcon({ children }) {
  return <Icon>{children}</Icon>;
};

Card.Button = function CardButton({ alt, src, children }) {
  return (
    <Button>
      {src && <Icon src={src} alt={alt} />}
      {children}
    </Button>
  );
};
