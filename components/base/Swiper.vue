<template>
  <swiper
    class="mySwiper"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :modules="modules"
    :slides-per-view="3"
    :space-between="0"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="item in items">
      <div
        class="px-4 pb-10 w-80 flex justify-center items-center gap-2 flex-col"
      >
        <img src="" class="h-16 w-16 rounded-full border max-w-max" alt="" />
        <h2 class="font-bold text-lg">{{ item.name }}</h2>
        <caption class="font-medium text-sm">
          {{
            item.title
          }}
        </caption>
        <p class="text-xs">
          Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel.
          Minnow snoek icefish velvet-belly shark, California halibut round
          stingray northern sea robin. Southern grayling trout-perchSharksucker
          sea toad candiru rocket danio tilefish stingray deepwater stingray
          Sacramento splittail, Canthigaster rostrata.
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperClass } from 'swiper/types'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const onSwiper = (swiper: SwiperClass) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}

const items = [
  { name: 'Danielle', title: 'Frontend Developer' },
  { name: 'Evelyn', title: 'Project Manager' },
  { name: 'Marrianne', title: "Founder of Mary's Marrianne" },
]
const modules = [Navigation, Pagination, A11y]
</script>

<style>
:root {
  --swiper-pagination-color: rgb(80, 133, 93);
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-pagination .swiper-pagination-bullet {
  width: 16px;
  height: 6px;
  border-radius: 6px;
}
</style>
