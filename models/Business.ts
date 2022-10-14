import { Space, SpaceType } from "./Space";

export type BusinessType = {
    id?: string,
    name?: string,
    spaces?: SpaceType[],
    category_id: string,
    description: string
}

export class Business {
    id?: string
    name?: string
    spaces?: Space[]
    category_id?: string
    description?: string
    
    // constructor
    constructor(business: BusinessType) {
        this.id = business?.id
        this.name = business?.name
        this.spaces = business?.spaces
        this.category_id = business?.category_id
        this.description = business?.description
    }
}