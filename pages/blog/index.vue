<script setup lang="ts">
import { BlogItem } from '~~/directus'
import { format } from 'date-fns'

const { getItems } = useDirectusItems()
let posts: BlogItem[] = []
try {
  posts = await getItems<BlogItem[]>({ collection: 'blog' })
} catch (e) {
  console.error(e)
  posts = []
}
</script>

<template>
  <div class="h-screen">
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="max-w-screen-sm sm:text-center sm:mx-auto">
        <h2
          class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
        >
          My Directus Blog
        </h2>
        <p class="text-base text-gray-700 md:text-lg sm:px-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
        <hr class="w-full my-8 border-gray-300" />
      </div>
      <div
        class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
        v-for="post in posts"
      >
        <div
          class="overflow-hidden transition-shadow duration-300 bg-blue-100 px-4 rounded-lg"
        >
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600">
              {{ format(new Date(post.date_created), 'P') }}
            </p>
            <NuxtLink
              :to="`/blog/${post.id}`"
              class="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p class="text-2xl font-bold leading-5 text-blue-800">
                {{ post.title }}
              </p>
            </NuxtLink>
            <p class="mb-4 text-gray-700">{{ post.short_content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
