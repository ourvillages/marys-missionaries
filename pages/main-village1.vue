<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})

const { getSingletonItem } = useDirectusItems()

interface Village {
  id?: string | number
  info?: string
  name: string
  location: {
    type: string
    coordinates: [number, number]
  }
  date_created: string
  date_updated: string
}

const post = await getSingletonItem<Village>({
  collection: 'villages',
})

const mainVillage = {
  main: {
    title: post.name,
    paragraph: post.info,
  },
  why: {
    title: 'Why you help this village ?',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
}

const feeds = Array.from({ length: 5 })
</script>

<template>
  <div>
    <div class="bg-[url('/img/main2.png')] px-4 py-20 mb-10">
      <div
        class="bg-black/50 text-white text-left container mx-auto p-8 max-w-lg rounded-xl"
      >
        <h1 class="text-xl font-medium mb-4">{{ mainVillage.main.title }}</h1>
        <p class="text-left text-md">{{ mainVillage.main.paragraph }}</p>
      </div>
    </div>

    <div class="bg-[url('/img/main1.png')] px-4 py-20 rounded-xl w-3/4 m-auto">
      <div
        class="bg-black/50 text-white text-left container mx-auto p-8 max-w-xl rounded-xl"
      >
        <h1 class="text-xl font-medium mb-4">{{ mainVillage.why.title }}</h1>
        <p class="text-left text-xs">{{ mainVillage.why.paragraph }}</p>
      </div>
    </div>
    <div class="container mx-auto max-w-2xl flex flex-col gap-5">
      <ClientOnly v-if="!!post">
        <BaseMap
          :center="post.location.coordinates"
          :coordinate="post.location.coordinates"
        />
        <template #fallback>
          <div class="h-[400px] flex justify-center items-center">
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading Map...
          </div>
        </template>
      </ClientOnly>
    </div>

    <div class="container mx-auto max-w-2xl flex flex-col gap-4 p-4">
      <article
        v-for="(_, index) in feeds"
        :key="index"
        class="rounded-xl border-2 border-gray-100 bg-white"
      >
        <div class="flex items-start p-6">
          <a href="#" class="block shrink-0">
            <img
              alt="Speaker"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              class="h-14 w-14 rounded-lg object-cover"
            />
          </a>

          <div class="ml-4">
            <h3 class="font-medium sm:text-lg">
              <a href="#" class="hover:underline">
                Question about Livewire Rendering and Alpine JS
              </a>
            </h3>

            <p class="text-sm text-gray-700 line-clamp-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, accusantium temporibus iure delectus ut totam natus
              nesciunt ex? Ducimus, enim.
            </p>

            <div class="mt-2 sm:flex sm:items-center sm:gap-2">
              <div class="flex items-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <p class="ml-1 text-xs">14 comments</p>
              </div>

              <span class="hidden sm:block" aria-hidden="true">&middot;</span>

              <p class="hidden sm:block sm:text-xs sm:text-gray-500">
                Posted by
                <a href="#" class="font-medium underline hover:text-gray-700">
                  John
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-end">
          <strong
            class="-mr-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>

            <span class="text-[10px] font-medium sm:text-xs">Solved!</span>
          </strong>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped></style>
