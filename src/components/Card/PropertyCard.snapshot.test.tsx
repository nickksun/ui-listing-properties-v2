import React from "react";
import PropertyCard from "./";
import renderer from "react-test-renderer";
import CARD_STATUS from "../../constants/cardStatusConstants";

const mockProperty = {
  price: "$526,500",
  agency: {
    brandingColors: {
      primary: "#000000",
    },
    logo:
      "https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif",
  },
  id: "4",
  mainImage:
    "https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg",
};

describe("Property Card render", () => {
  it("renders ADD Card correctly", () => {
    const cb = jest.fn();
    const tree = renderer
      .create(
        <PropertyCard
          isSaved={false}
          buttonText={CARD_STATUS.ADD_PROPERTY}
          key={mockProperty.id}
          id={mockProperty.id}
          price={mockProperty.price}
          mainImage={mockProperty.mainImage}
          agency={mockProperty.agency}
          onChange={cb}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("renders SAVED Card correctly", () => {
    const cb = jest.fn();
    const tree = renderer
      .create(
        <PropertyCard
          isSaved={true}
          buttonText={CARD_STATUS.SAVED_PROPERTY}
          key={mockProperty.id}
          id={mockProperty.id}
          price={mockProperty.price}
          mainImage={mockProperty.mainImage}
          agency={mockProperty.agency}
          onChange={cb}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders REMOVE Card correctly", () => {
    const cb = jest.fn();
    const tree = renderer
      .create(
        <PropertyCard
          buttonText={CARD_STATUS.REMOVE_PROPERTY}
          key={mockProperty.id}
          id={mockProperty.id}
          price={mockProperty.price}
          mainImage={mockProperty.mainImage}
          agency={mockProperty.agency}
          onChange={cb}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
