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
        <h2>{{ route.params.topic.replaceAll('_', " ") }}</h2>

        <div v-for="item in detail" :key="item.id">
            <div v-html="item.definition"></div>
        </div>
    </div>

</template>

<script setup>
import 'katex/dist/katex.css';
import parseMath from 'katex/contrib/auto-render/auto-render.js';
import data from '~/public/data.json'

const route = useRoute()
const router = useRouter()
const detail = ref([
    {
        topic: 'Block diagram ',
        definition: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos, nemo nulla voluptatum nesciunt officiis
        eum illum, aut nihil at ea consequatur qui $$ \\phi = \\frac{N(a \\times d - b \\times c)}{\\sqrt{(a+b)(c+d)(a+c)(b+d)}} $$ incidunt pariatur, soluta ipsa doloribus voluptas? Esse!`
    }
])

console.log(data.destinations);

const p = ref()
const html = ref()
onMounted(() => {
    html.value = '<p>This is some <strong>bold</strong> text.</p>'
    const parser = new DOMParser()
    const doc = parser.parseFromString(html.value, 'text/html')
    p.value = doc.querySelector('p')
    console.log(p.value.innerHTML) // 'This is some <strong>bold</strong> text.'

    parseMath(document.body)

})


</script>

<style>
.katex-display {
    /* overflow-x: scroll; */
    font-size: initial;
}

@media screen and (max-width: 400px) {
    .katex-display {
        font-size: 12px;
    }
}
</style>
