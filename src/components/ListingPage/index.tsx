import React from "react";
import { PropertyList } from "../PropertyList";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const BodyWrapper = styled.div`
  text-align: center;
`;

const ListWrapper = styled.div`
  width: 65%;
  margin: auto;
`;

// eslint-disable-next-line
const ListingPage = () => {
  const { properties, savedProperties } = useSelector((state) => ({
    properties: state.property.results,
    savedProperties: state.property.saved,
  }));

  return (
    <BodyWrapper>
      <h1>Listing properties</h1>
      <span> Jan 2021 | Made by Yiqi(Wendy)</span>
      <Container>
        <Row>
          <Col lg="6">
            <ListWrapper>
              <PropertyList.Result
                resultProperties={properties}
                savedProperties={savedProperties}
              />
            </ListWrapper>
          </Col>
          <Col lg="6">
            <ListWrapper>
              <PropertyList.Saved savedProperties={savedProperties} />
            </ListWrapper>
          </Col>
        </Row>
      </Container>
    </BodyWrapper>
  );
};

export default ListingPage;
