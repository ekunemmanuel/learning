<template>
    <div class="main_container px-[1rem] !mb-[2rem]">
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
        <h2 class="text-center text-[25px] sm:text-[30px] mb-[1rem]">{{ topics }}</h2>
        <div class="" v-html="learn.details"></div>
        <div>

            <div id="steps-for-a-wiring-diagram">
                <h1 class="subtopic">Steps for a wiring diagram</h1>
                <ul>
                    <li>
                        <p>Draw a floor plan showing the location of walls, doors, windows, plumbing pipes, and heating
                            and
                            cooling
                            ducts.</p>
                        <NuxtImg class="img" src="/floor.png" />
                    </li>

                    <li>
                        <div>
                            <p>Determine the floor area and mark it on the diagram.</p>
                            <NuxtImg class="img" src="/length.png" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Mark the location of switches, luminaires, and permanent appliances with standard
                                electrical
                                symbols.</p>
                            <NuxtImg class="img" src="/lighting.png" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Draw the cable runs between wiring devices, indicating the type, wire gauge, and
                                insulation
                                of the
                                approved
                                cables.</p>

                            <NuxtImg class="img" src="/power.png" />

                        </div>
                    </li>
                    <li>

                        <div>
                            <p>Identify the wattages of luminaires, permanent appliances, and building service
                                equipment, as
                                well
                                as the
                                size and type
                                of each electrical box.</p>

                            <NuxtImg class="img" src="/combined.png" />

                        </div>
                    </li>
                </ul>
            </div>

            <div id="lighting-design">
                <h1 class="subtopic">Lighting design</h1>
                <ul>
                    <li><span class="segueing">Utilization factor:</span> ratio of total lumens received on the working
                        plane to total lumens emitted
                        by the light source.
                        Value varies based on type of light, light fitting, color of surface, mounting height, and area
                        to be illuminated. Direct fittings varies between 0.4 and 0.6, Indirect fittings varies between
                        0.1 to 0.35

                        $$ L_{r} =Lumens \quad received \quad on \quad the \quad working \quad
                        plane$$

                        $$ L_{e} =Lumens \quad
                        emitted \quad by \quad the \quad lamp $$

                        $$ Utilization \quad factor = \frac{L_{r}}{L_{e}}$$

                    </li>
                    <li><span class="segueing">Depreciation or maintenance factor:</span> ratio of illumination under
                        normal working conditions to
                        illumination when
                        everything is clean or new. Values of good = 0.79, medium = 0.65, or poor = 0.55 are often used
                        for convenience
                        <br>
                        $$ I_{w} = Illumination \quad under \quad normal \quad working \quad conditions $$
                        $$ I_{e} = Illumination \quad when \quad everything \quad is \quad clean $$
                        $$ D.F = \frac{I_{w}}{I_{e}} $$
                    </li>
                    <li><span class="segueing">Waste light factor:</span> amount of light wasted due to overlapping of
                        light waves. Value is between
                        1.2 and 1.5</li>
                    <li><span class="segueing">Reflection factor:</span> ratio of luminous flux leaving a surface to
                        luminous flux incident on it.
                        Value is always less than 1</li>
                    <li><span class="segueing">Absorption factor:</span> ratio of net lumens available on the working
                        plane after absorption to total
                        lumens emitted by the
                        lamp. Value varies from 0.5 to 1</li>
                    <li><span class="segueing">Luminous efficiency or specific output:</span> ratio of number of lumens
                        emitted to electric power
                        intake of a source. unit is
                        lumen/watt (lm/W)
                    </li>
                    <li><span class="segueing">Spacing to mounting height ratio (SHR):</span> spacing between luminaires
                        divided by their height above
                        the horizontal
                        reference plane</li>
                    <li><span class="segueing">Room index:</span> ratio of the room's height to its length and width;
                        calculated using the formula
                        $$ \frac{L \times W}{H_{m} \times ({L + W})} $$
                        Where L is the length of the room, W is its width, and Hm is the mounting height above the work
                        plane
                    </li>
                </ul>
            </div>

            <div>
            <h2 class="subtopic">LUMEN METHOD STEPS:</h2>
            <ul>
            
            1. Find required lux level
            2. Select luminaire
            
            
            
            
            3. Determine room index

            </ul>
            
            
            </div>


        </div>
    </div>
</template>

<script setup>
import { eie414 } from "~~/src/eie414";
import { gec410 } from "~~/src/gec410";
import { eie418 } from "~~/src/eie418";
import { cen416 } from "~~/src/cen416";
// import eie414 from "~/src/eie414.json";
import "katex/dist/katex.css";
import parseMath from "katex/contrib/auto-render/auto-render.js";
const route = useRoute();
const router = useRouter();
const subject = route.params.course;
const topics = route.params.topic.replaceAll("-", " ");
const learn = ref({});
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

table {
    width: 100%;
}

table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
}

.segueing {
    margin: 1rem 0 0;
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline;
}

.subtopic {
    text-align: center;
    font-size: 23px;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

.highlight {
    font-weight: 600;
    font-size: 18px;
}

li {
    list-style: square;
    margin: 1rem 0;
}

.img {
    max-width: 500px;
    max-height: 500px;
    object-fit: contain;
    margin: auto;
    width: 100%;
    margin-bottom: 2rem;
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
        overflow-x: scroll;
    }
    .katex .base{
        padding: .5rem 0;
    }
}
</style>
