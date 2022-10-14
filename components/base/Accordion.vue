<template>
  <li class="relative border-b-2 border-gray-200">
    <button type="button" class="w-full py-4 text-left" @click="selected = !selected">
      <div class="flex items-center justify-between">
        <span class="font-medium">{{ accordion.title }}</span>
        <Icon name="mdi:chevron-up" v-if="selected" size="20" />
        <Icon name="mdi:chevron-down" v-else size="20" />
      </div>
    </button>

    <transition name="slide">
      <div v-if="selected" class="relative overflow-hidden transition-all duration-700" style="">
        <div class="py-2">
          <p class="text-sm text-gray-700 tracking-wide leading-relaxed">
            {{ accordion.description }}
          </p>
        </div>
      </div>
    </transition>
  </li>
</template>

<script setup lang="ts">
const { accordion } = defineProps({
  accordion: {
    type: Object,
    required: true,
  },
})

const selected = ref(false)
</script>
