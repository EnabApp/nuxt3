import { isNumber } from "@vueuse/core";
import { acceptHMRUpdate, defineStore } from "pinia";

export const useGenerator = defineStore("generator-store", {
  state: () => ({
    space: new Space({
        name: "test",
        boards: [
            new Board({
                name: "test",
                units: {
                    desktop: []
                }
            })
        ]
    }),
    units: [],
    unitData: {}
  }),

  getters: {
    getSpace: (state) => state.space,
    getCode: (state) => JSON.stringify(state.space.boards[0].units.desktop.map((unit) => {
        return {
            colSpan: unit.colSpan,
            rowSpan: unit.rowSpan,
            componentName: unit.componentData?.name,
            componentData: {},
            order: unit.order
        }
    }), null, 2),
  },

  actions: {
    addUnit(){
        const check = this.checkValidInsert()
        if (isNumber(check)) {
            alert(`Please remove ${check} units from the board`)
            return false
        }
        const unit = new Unit({
            id: RandomHexString(10),
            componentName: 'GeneratorUnit',
            componentData: {},
            order: this.space.boards[0].units.desktop.length,
            ...this.unitData
        })
        this.units = [...this.units, unit]
        this.space.boards[0].units.desktop = this.units
        console.log('called')
    },

    checkValidInsert() {
        // Desktop units are 28
        // Tablet units are 24
        // Mobile units are 8
        let totalSpans = 0
        // Calculate units colSpan * rowSpan
        this.space.boards[0].units.desktop.forEach((unit: Unit) => {
            const { colSpan, rowSpan } = unit
            totalSpans += colSpan * rowSpan
        })
        // Add the unit wants to be added
        const { colSpan, rowSpan } = this.unitData
        totalSpans += colSpan * rowSpan
        if (totalSpans > 28) return totalSpans - 28
        return true
    },

    removeUnit(id){
        this.units = this.units.filter((unit: Unit) => unit.id != id)
        this.space.boards[0].units.desktop = this.units
    },

    moveX(id, direction){
        direction = direction == 'left' ? -1 : 1
        const unitIndex = this.units.findIndex((unit: Unit) => unit.id == id)
        const unit = this.units[unitIndex]
        const nextUnit = this.units.find((u: Unit) => u.order == unit.order + (direction * -1))

        unit.order = unit.order + (direction * -1)
        if (nextUnit.order) nextUnit.order = nextUnit.order + direction
        this.space.boards[0].units.desktop = this.units
    },

  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGenerator, import.meta.hot));
}
