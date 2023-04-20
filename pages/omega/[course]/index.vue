<template>
  <div class="max-w-[1200px] mx-auto px-[10px]">
    <div class="sticky top-0 py-[1rem] bg-[#cfcfcf] flex gap-[1rem]">
      <button
        @click="router.back"
        type="button"
        class="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex items-center gap-[.2rem]"
      >
        <Icon name="ri:arrow-go-back-line" size="20" /> Back
      </button>
      <NuxtLink
        to="/omega"
        class="px-6 py-2.5 !bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center gap-[.2rem]"
      >
        <Icon name="ri:home-2-line" size="20" /> Omega
      </NuxtLink>
      <NuxtLink
        to="/"
        class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center gap-[.2rem]"
      >
        <Icon name="ri:home-2-line" size="20" /> Home
      </NuxtLink>
    </div>

    <h1 class="text-[48px] text-center mb-[40px]">{{ courseTitle }}</h1>
    <main><ContentDoc /></main>
  </div>
</template>
<script setup>
const route = useRoute();
const router = useRouter();
function capitalize(str) {
  return str
    .replace(/\b(?!(the\b))\w/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.slice(1);
    })
    .replaceAll("-", " ");
}
const courseTitle = capitalize(route.params.course);
</script>

<style scoped>
:deep(.topic){
  display: block;
  margin-bottom: 20px;
  transition-duration: 300ms;
}
:deep(.topic):hover{
 color: rgb(47, 146, 123);
}
</style>
