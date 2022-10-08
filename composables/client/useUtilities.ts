import { ResposnivesType } from "../../models/Board";
import { UnitType } from "../../models/Unit";

export const fillUnits = (units: ResposnivesType) => {
    const devices = ['desktop', 'tablet', 'mobile']
    devices.map((device => {
        units[device] = fillRest(units[device] || [], device)
    }))
    return units;
}

const fillRest = (units: UnitType[], device: string) => {
    let size = 0;
    units.forEach((unit: UnitType) => {
        size += unit.colSpan * unit.rowSpan;    
    })
    return [
        ...units,
        ...[...Array((device == 'desktop' ? 28 : (device == 'tablet' ? 24 : 8)) - size)].map((_, index) => { return { id: index, colSpan: 1, rowSpan: 1 } }) 
    ]
}
