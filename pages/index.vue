<template>
    <div class="main_container !mt-[4rem] px-[1rem]">
        <h1 class="text-[4rem] font-bold">Courses</h1>
        <div class="  gap-[1rem] flex-wrap justify-center grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
            <div v-for="(course, index) in listOfCoursesAssending" :key="index">
                <nuxt-link :to="course.code.replace(' ', '')">
                    <div
                        class="rounded-lg relative shadow-lg cursor-pointer bg-[#e0b76b] w-full h-full flex flex-col justify-between gap-1  p-[1rem] hover:translate-y-[-5px] duration-300">

                        <h1 class="text-[25px] font-bold">{{ course.title }}</h1>
                        <span class="text-gray-900  bock text-[20px] font-medium mb-2 uppercase">{{
                                course.code.replace('_', " ")
                        }}</span>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script setup>
const listOfCourses = ref([
    {
        title: 'Statistic and Probablity',
        code: 'gec 410'
    },
    {
        title: 'Computer Organization and Architecture',
        code: 'eie 411'
    },
    {
        title: 'Control System',
        code: 'eie 412'
    },
    {
        title: 'Design and Installation of Electrical and ICT Services',
        code: 'eie 414'
    },
    {
        title: 'Data Communication and Computer Networks',
        code: 'eie 418'
    },
    {
        title: 'Research Methodology',
        code: 'eie 510'
    },
    {
        title: 'Applied Electronics',
        code: 'eie 517'
    },
    {
        title: 'Prototyping Techniques',
        code: 'eie 417'
    },
    {
        title: 'Assembly Language Programming',
        code: 'cen 416'
    },
    {
        title: 'Project',
        code: 'eie 519'
    },
    {
        title: 'Entrepreneurial Development Studies VII',
        code: 'eds 411'
    },
    {
        title: 'Entrepreneurial Development Studies IX',
        code: 'eds 511'
    },
    {
        title: 'Total Man Concept VII',
        code: 'tmc 411'
    },
    {
        title: 'Total Man Concept IX',
        code: 'tmc 511'
    },
    {
        title: 'Leadership and Developmental Studies',
        code: 'dld 211'
    },
])

const listOfCoursesAssending = computed(() => {
    return listOfCourses.value.sort((a, b) => a.code.localeCompare(b.code))
})

</script>
