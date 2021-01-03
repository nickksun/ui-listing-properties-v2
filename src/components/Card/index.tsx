import React from "react";
import styled from "styled-components";
import { PropertyDetails } from "../../typings/propertyType";
import { Card, Button } from "react-bootstrap";
import GS from "../../styles/GlobalStyle";

const StyledButton = styled(Button)`
  visibility: hidden;
`;

const StyledCard = styled(Card)`
  margin-top: 10px;
  overflow: hidden;
  text-align: left;
  border-radius: ${GS.styles.borderRadius1};
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);
  margin: 20px 0;

  &:hover {
    ${StyledButton} {
      visibility: visible;
      transition: 0.2 ease-in-out;
    }
  }
`;

const StyledCardHeader = styled(Card.Header)`
  background-color: ${(props) => props.color};
`;

const StyledCardBody = styled(Card.Body)`
  display: flex;
  justify-content: space-between;
`;

interface Props extends PropertyDetails {
  isSaved?: boolean;
  buttonText: string;
  onChange?: () => void;
}

const PropertyCard: React.FC<Props> = (props: Props) => {
  const { price, agency, id, mainImage, isSaved, buttonText, onChange } = props;

  return (
    <StyledCard key={id}>
      <StyledCardHeader color={agency?.brandingColors.primary}>
        <img alt="agency logo" src={agency?.logo} />
      </StyledCardHeader>
      <Card.Img variant="top" alt="property image" src={mainImage} />
      <StyledCardBody>
        <div>{price}</div>
        <StyledButton
          disabled={isSaved}
          onClick={onChange}
          variant={isSaved ? "secondary" : "success"}
        >
          {buttonText}
        </StyledButton>
      </StyledCardBody>
    </StyledCard>
  );
};

export default PropertyCard;
