export const ADD_PROPERTY = "ADD_PROPERTY";
export const REMOVE_PROPERTY = "REMOVE_PROPERTY";

export interface SavePropertyAction {
    type: typeof ADD_PROPERTY,
    propertyId: string
}

export interface RemovePropertyAction {
    type: typeof REMOVE_PROPERTY,
    propertyId: string
}

export type PropertyActionTypes = SavePropertyAction | RemovePropertyAction