<template>
    <footer
      class="w-full h-[400px] bg-no-repeat bg-cover mt-52"
      style="background-image: url('/img/backcurve.png');"
    >
      <div
        class="footer-wrapper flex flex-wrap justify-between items-center pt-24 container mx-auto px-5 text-[#0B7077]"
      >
        <table style="border-collapse: separate; border-spacing: 0 10px">
          <tr>
            <th>
              <div class="flex gap-[15px] items-center">
                <img src="/img/olearn-logo.png" alt="olearn logo" width="50" />
                <img src="/img/olearn.png" alt="olearn" />
              </div>
            </th>
          </tr>
          <tr>
            <td>
              <div class="flex gap-3">
                <img src="/img/Location.png" alt="location" />
                <p class="font-bold">Address:</p>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </td>
          </tr>
          <tr>
            <td>
              <div class="flex gap-4">
                <img src="/img/Call.png" alt="call" />
                <p>Tel :+9229341037</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="flex gap-4">
                <img src="/img/timecircle.png" alt="timecircle" />
                <p>Response hours: 8 to 20</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="flex gap-4">
                <img src="/img/thegroup.png" alt="thegroup" />
                <p>Email: info@onlearn.com</p>
              </div>
            </td>
          </tr>
        </table>
        <div class="footer-min-wrapper hidden lg:flex gap-20 items-start">
          <table style="border-collapse: separate; border-spacing: 0 10px">
            <tr>
              <th>
                <p class="text-[#0A033C] text-left">Categories</p>
              </th>
            </tr>
            <tr>
              <td>
                <p>Counseling</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Health and fitness</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Individual development</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>more</p>
              </td>
            </tr>
          </table>
          <table style="border-collapse: separate; border-spacing: 0 10px">
            <tr>
              <th>
                <p class="text-[#0A033C] text-left">Links</p>
              </th>
            </tr>
            <tr>
              <td>
                <p>About us</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>blogs</p>
              </td>
            </tr>
          </table>
        </div>
        <div class="newletter flex flex-col items-center gap-[20px]">
          <h2 class="text-[#0A033C] text-[15px] hidden xl:block">
            Stay up to date with the latest courses
          </h2>
          <div
            class="bg-white rounded-[15px] py-[7px] sm:py-[15px] sm:px-[17px] px-[15px] flex items-center justify-between w-[300px] sm:w-[400px] text-[#0B7077] opacity-60"
          >
            <input type="text" placeholder="Email" class=" w-full outline-none">
            <button
              class="py-[10px] px-[25px] bg-[#0B7077] text-white rounded-2xl"
            >
              send
            </button>
          </div>
        </div>
      </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
footer {
  font-family: "Raleway", sans-serif;
}
</style>