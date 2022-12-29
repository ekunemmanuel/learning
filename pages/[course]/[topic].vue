<template>
    <div class="main_container px-[1rem]">
        <div class="my-[2rem] sticky top-0 py-[1rem] bg-white flex gap-[1rem]">
            <button @click=router.back type="button"
                class="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex items-center gap-[.2rem]">
                <Icon name="ri:arrow-go-back-line" size="20" /> Back
            </button>
            <NuxtLink to="/"
                class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center gap-[.2rem]">
                <Icon name="ri:arrow-go-back-line" size="20" /> Home
            </NuxtLink>
        </div>
        <h2>{{ topics }}</h2>
        {{ learn.details }}
    </div>

</template>

<script setup>
import eie414 from '~/src/eie414.json'
import gec410 from '~/src/gec410.json'
import eie418 from '~/src/eie418.json'
import cen416 from '~/src/cen416.json'
import 'katex/dist/katex.css';
import parseMath from 'katex/contrib/auto-render/auto-render.js';
const route = useRoute()
const router = useRouter()
const subject = route.params.course
const topics = route.params.topic.replaceAll('_', " ")
const learn = ref({})
// const detail = ref([
//     {
//         topic: 'Block diagram ',
//         definition: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos, nemo nulla voluptatum nesciunt officiis
//         eum illum, aut nihil at ea consequatur qui $$ \\phi = \\frac{N(a \\times d - b \\times c)}{\\sqrt{(a+b)(c+d)(a+c)(b+d)}} $$ incidunt pariatur, soluta ipsa doloribus voluptas? Esse!`
//     }
// ])
if (subject == cen416.code) {
    learn.value = cen416.topics.find(topic => topic.topic == topics)
}
onMounted(() => {
    parseMath(document.body)

})


</script>

<style>
.katex-display {
    font-size: initial;
}

@media screen and (max-width: 400px) {
    .katex-display {
        font-size: 12px;
    }
}
</style>
