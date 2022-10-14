import { ResposnivesType } from "../../models/Board";
import { UnitType } from "../../models/Unit";

const { isPortrait } = useResponsive()

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
        ...[...Array((device == 'desktop' ? 32 : (device == 'tablet' ? 24 : 8)) - size)].map((_, index) => { return { id: index, colSpan: 1, rowSpan: 1 } }) 
    ]
}


export const RandomHexString = (L) => {
    let hexstring = '';
    for(let i=0; i<L; i++) {
        hexstring+=(Math.floor(Math.random() * 16)).toString(16);
    }
    return(hexstring);
}
