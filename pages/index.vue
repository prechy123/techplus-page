<template>
  <main>
    <section
      id="hero"
      class="bg-[#D2E6E4] h-screen w-full rounded-br-[50px] rounded-bl-[50px] overflow-hidden"
    >
      <div class="container mx-auto px-5">
        <div class="absolute">
          <img src="/img/curly-lines.png" alt="curly lines" />
        </div>
        <NavBar />
        <div class="flex items-center justify-between">
          <div class="flex-[2] flex flex-col gap-3 items-start">
            <div
              class="px-[25px] py-[10px] bg-white inline-block rounded-[10px] text-[#252641] mt-28 md:mt-0"
            >
              <h2>Never Stop Learning</h2>
            </div>
            <div>
              <p
                class="font-bold text-[#0B7077] text-[32px] md:text-[64px] md:leading-[75px]"
              >
                Grow up your
                <span class="relative z-[1]"
                  >skills <span class="white-underlayer"></span
                ></span>
                by <br />on<span class="relative z-[1]"
                  >line co<span class="white-underlayer"></span></span
                >urses with <br />On<span class="relative z-[1]"
                  >learning<span class="white-underlayer"></span
                ></span>
              </p>
            </div>
            <div class="flex gap-4 items-center">
              <button
                class="rounded-[10px] bg-[#FD661F] px-[30px] py-[15px] text-[16px] text-white"
              >
                EXPLORE PATH
              </button>
              <div class="flex gap-2 flex-col md:flex-row">
                <Avaters />
                <div>
                  <img src="/img/stars.png" alt="stars" />
                  <p>( 10k+ Reviews)</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-[1.5] hidden lg:block">
            <img
              src="/img/homehuman.png"
              alt="Homepage human"
              class="h-[550px] object-cover"
            />
          </div>
        </div>
      </div>
      <div
        class="hidden absolute z-10 top-[70%] left-[60%] bg-white md:flex rounded-[10px] p-3 opacity-90 gap-2"
      >
        <img src="/img/calender.png" alt="calender icon" />
        <div>
          <h3 class="font-semibold text-[#595959]">250K</h3>
          <p class="text-[#545567]">Assisted Student</p>
        </div>
      </div>
      <div
        class="hidden md:block absolute z-10 top-[40%] left-[85%] opacity-90"
      >
        <img src="/img/matrics.png" alt="calender icon" />
      </div>
    </section>
    <section id="main-page" class="container mx-auto min-h-screen w-full px-5">
      <div class="flex flex-col items-center gap-10 mt-20">
        <h1 class="text-[#FD661F] text-[35px] font-bold relative inline-block">
          Popular Courses
          <span class="absolute -right-16 -bottom-1"
            ><img src="/img/vector.png" alt="vector"
          /></span>
        </h1>
        <ButtonsCourse class="mb-20" />
      </div>
      <CardsCourse />
      <div class="flex flex-col items-center gap-10 mt-20">
        <h1 class="text-[#0B7077] text-[35px] font-bold relative inline-block">
          Popular Courses
          <span class="absolute -right-16 -bottom-1"
            ><img src="/img/vector2.png" alt="vector2"
          /></span>
        </h1>
        <p class="mb-20 text-[#696984] text-center text-[22px]">
          Onlearing is one powerful online software suite that combines all the
          tools <br />needed to run a successful school or office.
        </p>
      </div>
      <CardsCategory />
      <div class="flex justify-center mt-12">
        <button
          class="mt-6 shadow-md py-2 px-16 rounded-lg text-[#0B7077] font-medium border border-[#0B7077]"
        >
          more
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
main {
  font-family: "Raleway", sans-serif;
}
</style>
