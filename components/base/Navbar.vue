<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
type DirectusCustomUser = {
  first_name: string
  last_name: string
  email: string
  avatar?: string
}
const user = useDirectusUser() as unknown as DirectusCustomUser

const { logout } = useDirectusAuth()
const { getThumbnail: img } = useDirectusFiles()

const open = ref(false)
const dropdownAvatar = ref(false)
</script>

<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div
      class="flex gap-4 flex-row items-center max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4"
    >
      <div
        class="flex w-full lg:w-1/2 flex-col lg:flex-row items-center space-x-4 xl:space-x-8"
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
          class="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-40 height:40,xl:space-x-2 space-y-3 lg:space-y-0"
        >
          <BaseNavLink name="Villages" url="/info-village" />
          <BaseNavLink name="Connect" url="/blog" />
          <BaseNavLink name="About" url="/about" />
          <BaseNavLink name="Donate" url="#testimony" />
        </ul>
      </div>
      <template v-if="!user">
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
      </template>

      <template v-else>
        <Menu as="div" class="relative inline-block text-left self-start py-6">
          <MenuButton>
            <img
              class="h-full w-full rounded object-cover object-center hover:opacity-80"
              :src="
                user.avatar
                  ? img(user.avatar, {
                      width: 40,
                      height: 40,
                      format: 'webp',
                    })
                  : 'https://source.boringavatars.com/beam/3?square'
              "
            />
          </MenuButton>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute overflow-hidden right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm"
            >
              <div class="py-3 px-4 text-sm text-gray-900">
                <div>
                  {{ user.first_name }}
                  {{ user.last_name }}
                </div>
                <div class="font-medium truncate">
                  {{ user.email }}
                </div>
              </div>
              <MenuItem class="block py-2 px-4 hover:bg-gray-100">
                <NuxtLink to="/main-village">Dashboard</NuxtLink>
              </MenuItem>
              <MenuItem class="block py-2 px-4 hover:bg-gray-100">
                <a
                  href="#"
                  @click="logout"
                  class="block py-2 px-4 text-red-700 hover:bg-gray-100"
                  >Sign out</a
                >
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>

        <!-- Dropdown menu -->
        <div
          id="dropdownAvatar"
          :class="[dropdownAvatar ? 'flex' : 'hidden']"
          class="absolute flex flex-col top-full right-0 z-10 w-56 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div>
              {{ user.first_name }}
              {{ user.last_name }}
            </div>
            <div class="font-medium truncate">
              {{ user.email }}
            </div>
          </div>
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <NuxtLink to="/main-village">
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Dashboard</a
                >
              </NuxtLink>
            </li>
          </ul>
          <div class="py-1">
            <a
              href="#"
              @click="logout"
              class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >Sign out</a
            >
          </div>
        </div>
      </template>
    </div>
  </nav>
</template>
