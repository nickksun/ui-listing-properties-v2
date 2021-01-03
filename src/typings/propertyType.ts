export interface AgencyBrandColor {
    primary: string
}

export interface PropertyAgency {
    brandingColors: AgencyBrandColor,
    logo: string
} 

export interface PropertyDetails {
    price?: string,
    agency?: PropertyAgency,
    id: string,
    mainImage?: string 
}

export interface PropertyState {
    results: Array<PropertyDetails>,
    saved: Array<PropertyDetails>
}