import React from "react";
import { useDispatch } from "react-redux";
import { PropertyDetails } from "../../typings/propertyType";
import { savePropery } from "../../actions/propertyActions";
import { CARD_STATUS } from "../../constants/cardStatusConstants";
import PropertyCard from "../Card";

interface Props {
  resultProperties: Array<PropertyDetails>;
  savedProperties: Array<PropertyDetails>;
}

const ResultList: React.FC<Props> = (props: Props) => {
  const { resultProperties, savedProperties } = props;
  const savedIds = savedProperties.map((property) => property.id);
  const dispatch = useDispatch();
  const isSaved = (propertyId) => savedIds.includes(propertyId);

  return (
    <>
      <h4>Results</h4>
      {resultProperties?.length &&
        resultProperties.map((p) => (
          <PropertyCard
            key={p.id}
            price={p.price}
            id={p.id}
            agency={p.agency}
            mainImage={p.mainImage}
            buttonText={
              isSaved(p.id)
                ? CARD_STATUS.SAVED_PROPERTY
                : CARD_STATUS.SAVE_PROPERTY
            }
            isSaved={isSaved(p.id)}
            onChange={() => dispatch(savePropery(p.id))}
          />
        ))}
    </>
  );
};

export default ResultList;
