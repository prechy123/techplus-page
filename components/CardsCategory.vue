<template>
  <div class="flex gap-[25px] flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between">
    <template v-for="card in cards" :key="card.id">
      <div
        :class="{ 'shadow-md': card.id === 3 }"
        class="flex flex-col items-center p-4"
      >
        <div class="rounded-[14px] flex flex-col items-center">
          <img
            :src="`/img/${card.name}.png`"
            alt="image"
            width="73"
            height="73"
          />
          <h2 class="capitalize text-[#0B7077] font-semibold text-[20px] pb-4">
            {{ card.name }}
          </h2>
          <p class="text-center">
            One powerful online software <br />suite that combines
          </p>
        </div>
        <div v-if="card.id === 3">
          <button class=" mt-6 shadow-md py-2 px-16 rounded-lg bg-[#FD661F] text-white font-medium">Explore courses</button>
        </div>
        <div v-else>
          <button class=" mt-6 shadow-md py-2 px-16 rounded-lg text-[#0B7077] font-medium">more</button>
        </div>
      </div>
    </template>
  </div>
</template>
  
  <script setup>
const cards = [
  {
    id: 1,
    name: "beauty",
  },
  {
    id: 2,
    name: "medical",
  },
  {
    id: 3,
    name: "sports",
  },
  {
    id: 4,
    name: "nutrition",
  },
];
</script>
  
  <style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
div {
  font-family: "Raleway", sans-serif;
}
</style>