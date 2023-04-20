<template>
  <div class="max-w-[1200px] px-[10px] mx-auto">
    <div class="sticky top-0 py-[1rem] bg-[#cfcfcf] flex gap-[1rem]">
      <button
        @click="router.back"
        type="button"
        class="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex items-center gap-[.2rem]"
      >
        <Icon name="ri:arrow-go-back-line" size="20" /> Back
      </button>
      <NuxtLink
        to="/"
        class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center gap-[.2rem]"
      >
        <Icon name="ri:home-2-line" size="20" /> Home
      </NuxtLink>
    </div>
    <main>
      <ContentDoc />
      <div>
        <!-- List for my courses this semseter -->
        <h2 class="my-[20px] text-[36px]">Courses we are going to be exploring</h2>
        <div
          class="gap-[1rem] justify-center grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
        >
          <div v-for="(course, index) in listOfCoursesAssending" :key="index">
            <nuxt-link :to="`omega/${course.title.replaceAll(' ', '-').toLowerCase()}`">
              <div
                class="rounded-lg relative shadow-lg cursor-pointer min-h-[150px] bg-[#e0b76b] h-full flex flex-col justify-between gap-1 p-[1rem] hover:translate-y-[-5px] duration-300"
              >
                <h2 class="text-[22px] font-bold">{{ course.title }}</h2>
                <span class="text-gray-900 bock text-[18px] font-medium mb-2 uppercase">{{
                  course.code
                }}</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
const listOfCourses = ref([
  {
    title: "Microprocessor Systems and Interfacing",
    code: "cen522",
  },
  {
    title: "Leadership Dynamics",
    code: "dld221",
  },
  {
    title: "Entrepreneurial Development Studies X",
    code: "eds521",
  },
  {
    title: "Digital Control Systems",
    code: "eie528",
  },
  {
    title: "Total Man Concept X",
    code: "tmc521",
  },
]);

const listOfCoursesAssending = computed(() => {
  return listOfCourses.value.sort((a, b) => a.code.localeCompare(b.code));
});

const router = useRouter()
</script>

<style scoped>
main :deep(h1) {
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 30px;
}

main :deep(p) {
  font-size: 14px;
}
</style>
