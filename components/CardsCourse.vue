<template>
  <div class="flex gap-[25px] flex-wrap lg:flex-nowrap">
    <template v-for="card in cards" :key="card.id">
      <div class="rounded-[14px] overflow-hidden w-[320px] relative shadow-md">
        <img :src="`/img/card${card.id}.png`" alt="card" class="w-[320px]" />
        <div class="pt-10 px-6 h-48">
          <p class="text-[#777795] text-[12px]">1 - 28 July 2022</p>
          <h2 class="text-[#0B7077] font-[800] leading-[23px] text-[15px]">
            {{ card.name }}
          </h2>
          <p class="text-[#4D4D4D] text-[12px]">
            Product Management Masterclass, you will learn with Sarah Johnson -
            Head of Product Customer Platform Gojek Indonesia.
          </p>
        </div>
        <div class="flex justify-between items-center pb-6 px-6">
          <div class="flex gap-2">
            <p class="text-[#FD661F] font-bold">{{ card.price }}</p>
            <p class="tex-[#230F0F] line-through decoration-[#230F0F] opacity-60 font-semibold">$ 500</p>
          </div>
          <div>
            <button class="bg-[#0B7077] text-white px-[20px] py-[10px] rounded">
              Enroll Now
            </button>
          </div>
        </div>
        <div
          class="absolute top-[150px] left-0 right-0 inline-flex justify-center"
        >
          <span
            class="bg-[#FAFAFA] flex items-center px-[10px] py-[5px] rounded-[40px]"
          >
            <img src="/img/Group.png" alt="" />
            <p class=" text-[#263238] font-medium">&nbsp; + {{ card.students }} students</p>
          </span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const cards = [
  {
    id: 1,
    students: 50,
    name: "Product Management Basic - Course",
    price: "$ 380",
  },
  {
    id: 2,
    students: 11,
    name: "BM Data Science Professional Certificate",
    price: "$ 678",
  },
  {
    id: 3,
    students: 234,
    name: "The Science of Well-Being",
    price: "$ 123",
  },
  {
    id: 4,
    students: 342,
    name: "Python for Everybody Specialization",
    price: "$ 567",
  },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
div {
  font-family: "Raleway", sans-serif;
}
</style>