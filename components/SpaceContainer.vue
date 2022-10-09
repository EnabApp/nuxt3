<template>
    <div h="full" flex="~ col">
        <!-- Space Header : Component -->
        <!-- <SpaceHeader :spaceData="spaceData" :selected="selectedBoardIndex" /> -->

        <!-- Boards Container -->
        <div ref="boardsContainer" h="full" w="full" justify="center" flex="~ grow">
            <!-- Slider : Component -->
            <SpaceSlider v-if="boards.width > 0 && boards.height > 0" :width="boards.width" :height="boards.height" :spaceData="spaceData" :selected="selectedBoardIndex" @selectedIndex="selectedBoardIndex = $event" @sliderInit="sliderObject = $event">
                <div v-for="(b, index) in spaceData?.boards" :key="'board-index-' + index" float="left" width="100%" position="relative" overflow="hidden">
                    <SpaceBoard>
                        <template v-if="mobile">
                            <SpaceBoardUnit v-for="unit in b.units.mobile" :key="unit.id" :unit="unit" />
                        </template>
                        <template v-if="tablet">
                            <SpaceBoardUnit v-for="unit in b.units.tablet" :key="unit.id" :unit="unit" />
                        </template>
                        <template v-if="desktop">
                            <SpaceBoardUnit v-for="unit in b.units.desktop" :key="unit.id" :unit="unit" />
                        </template>
                    </SpaceBoard>
                </div>
            </SpaceSlider>
        </div>

        <!-- Space Footer : Component -->
        <SpaceFooter :selected="selectedBoardIndex" :spaceData="spaceData" :slider="sliderObject" mt="1 md:2" />
    </div>
</template>

<script setup>
// Properties
const props = defineProps(['space'])

// Responsive Composable
const { boardSize, desktop, tablet, mobile } = useResponsive();

// Slider Object
const sliderObject = ref(null)

// Selected Board Index
const selectedBoardIndex = ref(0)

// Boards Container Reference
const boardsContainer = ref(null)
const elementSize = useElementSize(boardsContainer)
const boards = reactive({ width: 0, height: 0 })

// Watch Change in element size
watch(() => elementSize, (size) => {
    const { height, width } = size
    const { columns, rows } = boardSize.value

    // Set Boards Container Size
    boards.height = height.value
    boards.width = (height.value / rows) * columns - 32 * 2
}, { deep: true })


// Fill empty units
const spaceData = computed (() => {
    const space = props.space
    space?.boards?.forEach(b => {
        b.units = fillUnits(b.units)
    })
    return space
})
</script>