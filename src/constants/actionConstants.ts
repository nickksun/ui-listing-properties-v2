export const SAVE_PROPERTY = "SAVE_PROPERTY";
export const REMOVE_PROPERTY = "REMOVE_PROPERTY";

export interface SavePropertyAction {
    type: typeof SAVE_PROPERTY,
    propertyId: string
}

export interface RemovePropertyAction {
    type: typeof REMOVE_PROPERTY,
    propertyId: string
}

export type PropertyActionTypes = SavePropertyAction | RemovePropertyAction