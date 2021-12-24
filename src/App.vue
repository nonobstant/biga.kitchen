<template>
  <div class="bg-red-600 min-h-screen pattern">
    <div class="bg-yellow-400 pt-4 pb-3 shadow-lg">
      <div class="container mx-auto max-w-2xl">
        <div class="grid grid-cols-2 md:grid-cols-4 mx-4 md:mx-0">
          <div class="kanit leading-tight font-semibold">
            <div class="inline-block border-4 border-red-600 py-1 px-2 rounded-lg shadow-lg bg-yellow-400">
              <span class="text-4xl">BIGA</span> <br />
              <span class="text-xl text-red-700">KITCHEN</span>
            </div>

          </div>
          <div class="hidden md:block text-center font-bold text-lg text-black inline-block col-span-2 pt-6">
            <a data-aos-easing="ease" class="inline hover:opacity-50" href="#menu">MENU</a> |
            <a class="inline hover:opacity-50" href="#">YOKAI KITCHEN</a> |
            <a class="inline hover:opacity-50" href="#infos">INFOS</a>
          </div>
          <div class="text-right pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 inline text-black fill-current bg-red-600 cursor-pointer rounded-lg p-2 border-4 border-red-300 hover:border-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </div>
        </div>

      </div>

    </div>

    <div class="container mx-auto max-w-2xl ">
      <router-view></router-view>
    </div>
    <div class="w-full bg-red-800 mt-0 md:mt-16">
      <p class="text-lg font-sans text-center py-4">Made with ❤ by <span class="font-bold">BIGA.KITCHEN</span> <span class="text-sm">© 2022</span> </p>
    </div>

  </div>


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Secular+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

.pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23ff1d1d' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.kanit {
  font-family: 'Righteous', cursive;
}
.robot {
  font-family: 'Roboto', sans-serif;
}
.ubuntu {
  font-family: 'Ubuntu', sans-serif;
}
</style>
