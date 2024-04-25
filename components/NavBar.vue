<template>
  <nav class="flex justify-between items-center pt-6 relative z-10">
    <div class="flex gap-[15px] items-center">
      <img src="/img/olearn-logo.png" alt="olearn logo" width="50" />
      <img src="/img/olearn.png" alt="olearn" />
    </div>
    <div>
      <ul class="hidden w-[350px] lg:w-[500px] md:flex justify-between">
        <li><NuxtLink to="/" class="text-[#252641]">Home</NuxtLink></li>
        <li><NuxtLink class="text-[#252641] font-medium">Careers</NuxtLink></li>
        <li><NuxtLink class="text-[#252641] font-medium">Blog</NuxtLink></li>
        <li>
          <NuxtLink class="text-[#252641] font-medium">About Us</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="hidden lg:flex gap-[15px]">
      <button
        class="bg-white text-[#0B7077] py-[15px] px-[40px] rounded-[10px]"
      >
        LOG IN
      </button>
      <button
        class="bg-[#0B7077] text-[#ffffff] py-[15px] px-[40px] rounded-[10px]"
      >
        SIGN UP
      </button>
    </div>
    <div @click="handleMenuState" class="md:hidden cursor-pointer">
      <template v-if="!showMenu">
        <span class="material-symbols-outlined"> menu </span>
      </template>
      <template v-else>
        <span class="material-symbols-outlined"> close </span>
      </template>
    </div>
    <div v-show="showMenu" class=" absolute top-16 bg-[#0B7077] p-5 rounded">
      <ul class="w-[350px] flex justify-between flex-col gap-1">
        <li><NuxtLink to="/" class="text-[#252641]">Home</NuxtLink></li>
        <li><NuxtLink class="text-[#252641] font-medium">Careers</NuxtLink></li>
        <li><NuxtLink class="text-[#252641] font-medium">Blog</NuxtLink></li>
        <li>
          <NuxtLink class="text-[#252641] font-medium">About Us</NuxtLink>
        </li>
      </ul>
      <div class="flex gap-[15px]">
      <button
        class="bg-white text-[#0B7077] py-[7px] px-[20px] rounded-[10px]"
      >
        LOG IN
      </button>
      <button
        class="bg-[#0B7077] text-[#ffffff] py-[7px] px-[20px] rounded-[10px]"
      >
        SIGN UP
      </button>
    </div>
    </div>
  </nav>
</template>

<script setup>
const showMenu = ref(false);

function handleMenuState() {
    showMenu.value = !showMenu.value
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
nav {
  font-family: "Raleway", sans-serif;
}
.router-link-active {
  color: #fd661f;
  font-weight: 700;
}
</style>