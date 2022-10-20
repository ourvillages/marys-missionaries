<script setup lang="ts">
const props = defineProps({
  center: {
    type: Array,
    required: true,
    default: () => [40, 40],
  },
  coordinate: {
    type: Array,
    required: true,
    default: () => [40, 40],
  },
})

const center = ref(props.center)
const projection = ref('EPSG:4326')
const zoom = ref(8)
const rotation = ref(0)
const radius = ref(10)
const strokeWidth = ref(2)
const strokeColor = ref('#d32')
const fillColor = ref('#d2e232')
const coordinate = ref(props.coordinate)
</script>

<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
  >
    <ol-view
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />
    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector>
        <ol-feature>
          <ol-geom-point :coordinates="coordinate"></ol-geom-point>
          <ol-style>
            <ol-style-circle :radius="radius">
              <ol-style-fill :color="fillColor"></ol-style-fill>
              <ol-style-stroke
                :color="strokeColor"
                :width="strokeWidth"
              ></ol-style-stroke>
            </ol-style-circle>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>
  </ol-map>
</template>

<style scoped>
@import 'vue3-openlayers/dist/vue3-openlayers.css';
</style>
