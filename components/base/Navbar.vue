<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div
      class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4"
    >
      <div
        class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8"
      >
        <div class="w-full flex flex-row items-center justify-between py-6">
          <NuxtLink to="/">
            <img
              src="/img/logo/nefa.svg"
              class="w-24 xl:w-28"
              alt="Nefa Logo"
            />
          </NuxtLink>
          <button
            class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
            @click="open = !open"
          >
            <Icon name="mdi:segment" v-if="!open" size="24" />
            <Icon name="mdi:close" v-else size="24" />
          </button>
        </div>
        <ul
          :class="[open ? 'flex' : 'hidden lg:flex']"
          class="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0"
        >
          <BaseNavLink name="Villages" url="/info-village" />
          <BaseNavLink name="Connect" url="/blog" />
          <BaseNavLink name="About" url="/about" />
          <BaseNavLink name="Donate" url="#testimony" />
        </ul>
      </div>
      <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
        <NuxtLink to="/login">
          <base-button
            class="px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#396242]"
          >
            Login
          </base-button>
        </NuxtLink>
        <base-button
          class="px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#50855D] to-[#396242] text-white"
        >
          Sign Up
        </base-button>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
const open = ref(false)
</script>
