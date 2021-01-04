/* Saved List: showing all avaiable properties */
import React from "react";
import { useDispatch } from "react-redux";
import { PropertyDetails } from "../../typings/propertyType";
import PropertyCard from "../Card";
import { removeProperty } from "../../actions/propertyActions";
import  CARD_STATUS  from "../../constants/cardStatusConstants";

interface Props {
  savedProperties: Array<PropertyDetails>;
}

const SavedList: React.FC<Props> = (props: Props) => {
  const { savedProperties } = props;
  const dispatch = useDispatch();
  const hasSavedProperties = savedProperties.length > 0;

  if (hasSavedProperties) {
    return (
      <>
        <h4>Saved Properties</h4>
        {savedProperties.map((p) => (
          <PropertyCard
            key={p.id}
            price={p.price}
            id={p.id}
            agency={p.agency}
            mainImage={p.mainImage}
            buttonText={CARD_STATUS.REMOVE_PROPERTY}
            onChange={() => dispatch(removeProperty(p.id))}
          />
        ))}
        <div>You have {savedProperties.length} saved properties</div>
      </>
    );
  }

  return (
    <>
      <h4>Saved Properties</h4>
      <div> You have no saved properties! </div>
    </>
  );
};

export default SavedList;
