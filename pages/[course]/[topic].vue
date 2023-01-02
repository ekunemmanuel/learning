<template>
    <div class="main_container px-[1rem]">
        <div class="my-[2rem] sticky top-0 py-[1rem] bg-white flex gap-[1rem]">
            <button @click="router.back" type="button"
                class="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex items-center gap-[.2rem]">
                <Icon name="ri:arrow-go-back-line" size="20" /> Back
            </button>
            <NuxtLink to="/"
                class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center gap-[.2rem]">
                <Icon name="ri:home-2-line" size="20" /> Home
            </NuxtLink>
        </div>
        <h2 class="text-center text-[30px] mb-[1rem]">{{ topics }}</h2>
        <div class="" v-html="learn.details"></div>



    </div>
</template>

<script setup>
import { eie414 } from "~~/src/eie414";
import { gec410 } from "~~/src/gec410";
import { eie418 } from "~~/src/eie418";
import { cen416 } from "~~/src/cen416";
import eie from "~/src/eie414.json";
import "katex/dist/katex.css";
import parseMath from "katex/contrib/auto-render/auto-render.js";
const route = useRoute();
const router = useRouter();
const subject = route.params.course;
const topics = route.params.topic.replaceAll("_", " ");
const learn = ref({});
// console.log(eie.topics);
switch (subject) {
    case cen416.code:
        learn.value = cen416.topics.find((topic) => topic.topic == topics);
        break;
    case eie414.code:
        learn.value = eie414.topics.find((topic) => topic.topic == topics);
        break;

    case gec410.code:
        learn.value = gec410.topics.find((topic) => topic.topic == topics);
        break;

    case eie418.code:
        learn.value = eie418.topics.find((topic) => topic.topic == topics);
        break;
    default:
        break;
}

onMounted(() => {
    parseMath(document.body);

    // [R = \frac{r}{A} \sqrt{\frac{P}{A}}]

    var headers = document.getElementsByClassName("accordion-header");

    for (var i = 0; i < headers.length; i++) {
        headers[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});
</script>

<style>
.katex-display {
    font-size: initial;
}

p {
    font-size: 16px;
}

.segueing {
    margin: 1rem 0 0;
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline;
}

.subtopic {
    text-align: center;
    font-size: 28px;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

.highlight {
    font-weight: 600;
    font-size: 18px;
}

li {
    list-style: square;
    margin: 0.25rem 0;
}

.img {
    max-width: 500px;
    max-height: 500px;
    object-fit: contain;
    margin: auto;
    width: 100%;
}

.accordion {
    margin: 10px auto;
}

.accordion-header {
    cursor: pointer;
    background-color: #eee;
    padding: 10px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
}

.accordion-header:hover {
    background-color: #ddd;
}

.accordion-content {
    margin-top: 10px;
    padding: 0 18px;
    display: none;
    background-color: #eee;
}

@media screen and (max-width: 400px) {
    .katex-display {
        font-size: 12px;
    }
}
</style>
