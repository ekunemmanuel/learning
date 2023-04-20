<template>
  <div class="max-w-[1200px] mx-auto pb-[3rem] px-[10px]">
    <div class="sticky top-0 py-[1rem] bg-[#cfcfcf] flex flex-wrap gap-[1rem]">
      <NuxtLink
        to="/"
        class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center gap-[.2rem]"
      >
        <Icon name="ri:home-2-line" size="20" /> Home
      </NuxtLink>
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
    </div>

    <main><ContentDoc /></main>
  </div>
</template>
<script setup>
const router = useRouter();
</script>
<style scoped>
/* main :deep(h1) {
  font-size: 48px;
} */
main :deep(h2) {
  font-size: 24px;
}
main :deep(h3) {
  font-size: 18px;
}
:deep(.aside-nav) {
  align-self: flex-start;
  display: block;
  padding-right: 3rem;
  position: sticky;
  top: 70px;
}
:deep(.aside-nav h1) {
  font-size: 16px !important;
  font-weight: 900;
  width: max-content;
  margin-bottom: 30px;
}
:deep(.aside-nav a) {
  font-size: 12px !important;
  width: max-content;
  transition-duration: 300ms;
}
:deep(.aside-nav a):hover {
  color: rgb(47, 146, 123);
}
:deep(.router-link-active ~ .router-link-exact-active) {
  color: rgb(47, 146, 123);
}

@media (max-width: 764px) {
 :deep(.aside-nav) {
    display: none;
  }
}
</style>
