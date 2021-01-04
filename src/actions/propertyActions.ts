import { ADD_PROPERTY, REMOVE_PROPERTY, PropertyActionTypes  } from "../constants/actionConstants";

export const savePropery = (propertyId: string):PropertyActionTypes  => ({
    type: ADD_PROPERTY,
    propertyId
});


export const removeProperty = (propertyId: string):PropertyActionTypes => ({
    type: REMOVE_PROPERTY,
    propertyId
});
