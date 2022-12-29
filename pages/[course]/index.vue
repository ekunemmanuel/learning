<template>
    <div class="main_container px-[2rem]">
        <div class="my-[2rem] sticky top-0 py-[1rem] bg-white">
            <button @click=router.back type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                class="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex items-center gap-[.2rem]">
                <Icon name="ri:arrow-go-back-line" size="20" /> Back
            </button>

        </div>



        <div v-for="(course, index) in courses" :key="index">

            <div v-if="subject == course.code">
                <h2 class="text-[40px] uppercase">{{ course.code.replace(/(?<=\D)(?=\d)/g, ' ' ) }}</h2>
                <div v-for="item in course.topics" :key="item.id">
                    <li>
                        <LazyNuxtLink :to="`${subject}/${item.topic.replaceAll(' ', '_')}`">{{ item.topic }}</LazyNuxtLink>
                    </li>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const subject = route.params.course
const courses = ref([
    {
        code: 'cen416',
        topics: [
            {
                topic: `INTRODUCTION TO ASSEMBLY LANGUAGE & BASIC CONCEPTS`
            },
            {
                topic: `X86 PROCESSOR ARCHITECTURE`
            },
            {
                topic: `ASSEMBLY LANGUAGE FUNDAMENTALS A`
            },
            {
                topic: `ASSEMBLY LANGUAGE FUNDAMENTALS B`
            },
            {
                topic: `INTRODUCTION TO ASSEMBLY LANGUAGE & BASIC CONCEPTS`
            },
        ]
    },
    {
        code: 'eie412',
        topics: [
            {
                topic: `INTRODUCTION TO ASSEMBLY LANGUAGE & BASIC CONCEPTS`
            },
            {
                topic: `X86 PROCESSOR ARCHITECTURE`
            },
            {
                topic: `ASSEMBLY LANGUAGE FUNDAMENTALS A`
            },
            {
                topic: `ASSEMBLY LANGUAGE FUNDAMENTALS B`
            },
            {
                topic: `INTRODUCTION TO ASSEMBLY LANGUAGE & BASIC CONCEPTS`
            },
        ]
    },
    {
        code: 'eie517',
        topics: [
            {
                topic: `INTRODUCTION TO ASSEMBLY LANGUAGE & BASIC CONCEPTS`
            },
            {
                topic: `X86 PROCESSOR ARCHITECTURE`
            },
            {
                topic: `ASSEMBLY LANGUAGE FUNDAMENTALS A`
            },
            {
                topic: `ASSEMBLY LANGUAGE FUNDAMENTALS B`
            },
            {
                topic: `INTRODUCTION TO ASSEMBLY LANGUAGE & BASIC CONCEPTS`
            },
        ]
    },
])

</script>
