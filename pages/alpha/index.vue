<script setup>
const listOfCourses = ref([
  {
    title: "Statistic and Probablity",
    code: "gec 410",
  },
  {
    title: "Computer Organization and Architecture",
    code: "eie 411",
  },
  {
    title: "Control System",
    code: "eie 412",
  },
  {
    title: "Design and Installation of Electrical and ICT Services",
    code: "eie 414",
  },
  {
    title: "Data Communication and Computer Networks",
    code: "eie 418",
  },
  {
    title: "Research Methodology",
    code: "eie 510",
  },
  {
    title: "Applied Electronics",
    code: "eie 517",
  },
  {
    title: "Prototyping Techniques",
    code: "eie 417",
  },
  {
    title: "Assembly Language Programming",
    code: "cen 416",
  },
  {
    title: "Project",
    code: "eie 519",
  },
  {
    title: "Entrepreneurial Development Studies VII",
    code: "eds 411",
  },
  {
    title: "Entrepreneurial Development Studies IX",
    code: "eds 511",
  },
  {
    title: "Total Man Concept VII",
    code: "tmc 411",
  },
  {
    title: "Total Man Concept IX",
    code: "tmc 511",
  },
  {
    title: "Leadership and Developmental Studies",
    code: "dld 211",
  },
]);

const listOfCoursesAssending = computed(() => {
  return listOfCourses.value.sort((a, b) => a.code.localeCompare(b.code));
});


const router = useRouter()
</script>
<template>
  <div class="main_container !pt-[1rem] px-[1rem]">
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
    <h1 class="text-[4rem] font-bold">Courses</h1>
    <div
      class="gap-[1rem] justify-center grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
    >
      <div v-for="(course, index) in listOfCoursesAssending" :key="index">
        <nuxt-link :to="`alpha/${course.code.replace(' ', '-')}`">
          <div
            class="rounded-lg relative shadow-lg cursor-pointer min-h-[150px] bg-[#e0b76b] h-full flex flex-col justify-between gap-1 p-[1rem] hover:translate-y-[-5px] duration-300"
          >
            <h1 class="text-[22px] font-bold">{{ course.title }}</h1>
            <span class="text-gray-900 bock text-[18px] font-medium mb-2 uppercase">{{
              course.code
            }}</span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
