<template>
  <div class="">
    <div class="homepage mx-auto text-center">
      <div class="pt-4"></div>
      <div class="text-center font-bold text-xl text-white">
        <a class="inline hover:opacity-50" href="#menu">MENU</a> |
        <a class="inline hover:opacity-50" href="#">YOKAI KITCHEN</a> |
        <a class="inline hover:opacity-50" href="#infos">INFOS</a>
      </div>
      <div class="pt-4 text-center mb-4">
        <img src="../assets/pizza.png" class="w-1/6 mx-auto" alt="" />
        <h1 class="inline-block border-b-4 border-black p-5">
          <span class="text-6xl font-bold">BIGA</span> <br />
          <span class="text-4xl text-white font-bold">KITCHEN</span> <br />
          <br />
          <span class="font-bold">+32(0) 401 23 45</span> <br />
          <span v-if="shop.status" class="font-bold text-white text-lg"
            >Ouvert</span
          >
          <span v-else class="font-bold text-black text-lg">Fermé</span>
          <span v-if="shop.status" class="text-green-500 font-bold text-xl">
            ●
            <span class="text-white text-lg font-semibold"
              >Ferme à 22:00</span
            ></span
          >
          <span v-else class="text-red-500 font-bold text-xl">
            ●
            <span class="text-white text-lg font-semibold"
              >Ouvre à 17:00</span
            ></span
          >
        </h1>
      </div>
      <div class="grid grid-cols-3 container max-w-6xl mx-auto gap-5">
        <div
          class="cursor-pointer bg-yellow-600 p-6 hover:opacity-75 shadow-lg"
        >
          <img src="../assets/takeaway.svg" class="w-20 mx-auto" alt="" />
          <h1 class="text-center text-3xl mt-3 font-bold">TakeAway</h1>
        </div>
        <div class="cursor-pointer uber p-6 hover:opacity-75 shadow-lg">
          <img src="../assets/uber.png" class="w-40 mx-auto" alt="" />
        </div>
        <div class="cursor-pointer bg-green-600 p-6 hover:opacity-75 shadow-lg">
          <img src="../assets/deliveroo.png" class="w-20 mx-auto" alt="" />
          <h1 class="text-center text-3xl mt-3 font-bold">Deliveroo</h1>
        </div>
      </div>

      <div id="menu" class="bg-red-600 mt-16 min-h-screen">
        <div class="container max-w-6xl mx-auto">
          <h1 class="text-4xl text-white pt-24 font-bold font-serif uppercase">
            🍕🍅🌿🧅"à table !"🧅🌿🍅🍕
          </h1>
          <br />
        </div>
        <div class="container max-w-6xl mx-auto mt-6">
          <div class="">
            <div class="bg-white w-full h-48 text-left shadow-lg">
              <img
                class="h-64 float-left mr-5 border-red-600 border-8"
                src="../assets/pizza.jpg"
                alt=""
              />
              <p
                class="pt-3 text-4xl font-bold text-green-800 border-black border-b-2 border-dashed pb-3"
              >
                Pizza Fraiche
              </p>
              <br />
              <p class="text-lg text-gray-900 font-serif">
                Tomate | Mozzarella | Basilic | Origan | Huile d'Olive
              </p>
              <p class="text-right text-3xl font-bold p-5 font-mono">8.50 €</p>
            </div>
            <div class="bg-white w-full h-48 text-right shadow-lg mt-20">
              <img
                class="h-64 float-right ml-5 border-red-600 border-8 transform -translate-y-16"
                src="../assets/pizza.jpg"
                alt=""
              />
              <p
                class="pt-3 text-4xl font-bold text-green-800 border-black border-b-2 border-dashed pb-3"
              >
                Pizza ricardo
              </p>
              <br />
              <p class="text-lg text-gray-900 font-serif">
                Tomate | Mozzarella | Basilic | Origan | Huile d'Olive
              </p>
              <p class="text-left text-3xl font-bold p-5 font-mono">11.00 €</p>
            </div>
            <div class="bg-white w-full h-48 text-left shadow-lg mt-10">
              <img
                class="h-64 float-left mr-5 border-red-600 border-8"
                src="../assets/pizza.jpg"
                alt=""
              />
              <p
                class="pt-3 text-4xl font-bold text-green-800 border-black border-b-2 border-dashed pb-3"
              >
                Pizza au potiron
              </p>
              <br />
              <p class="text-lg text-gray-900 font-serif">
                Tomate | Mozzarella | Basilic | Origan | Huile d'Olive
              </p>
              <p class="text-right text-3xl font-bold p-5 font-mono">13.50 €</p>
            </div>
            <div class="bg-white w-full h-48 text-right shadow-lg mt-20">
              <img
                class="h-64 float-right ml-5 border-red-600 border-8 transform -translate-y-16"
                src="../assets/pizza.jpg"
                alt=""
              />
              <p
                class="pt-3 text-4xl font-bold text-green-800 border-black border-b-2 border-dashed pb-3"
              >
                Pizza très bonne
              </p>
              <br />
              <p class="text-lg text-gray-900 font-serif">
                Tomate | Mozzarella | Basilic | Origan | Huile d'Olive
              </p>
              <p class="text-left text-3xl font-bold p-5 font-mono">14.00 €</p>
            </div>
            <!-- <div class="bg-yellow-500 w-full h-64"></div>
            <div class="bg-yellow-500 w-full h-64"></div>
            <div class="bg-yellow-500 w-full h-64"></div> -->
          </div>
        </div>
      </div>

      <div id="infos" class="bg-red-800 mt-16 min-h-screen text-white">
        <div class="container max-w-6xl mx-auto">
          <h1 class="text-4xl text-white pt-8 font-bold font-serif uppercase">
            "à propos de nous !"
          </h1>
          <br />
          <div
            class="px-1 py-2 text-center inline-block border-4 border-red-900 rounded-lg my-6"
          >
            <img
              class="w-10 inline mx-3 hover:opacity-75 cursor-pointer"
              src="../assets/insta.png"
              alt=""
            />
            <img
              class="w-10 inline mx-3 hover:opacity-75 cursor-pointer"
              src="../assets/twitter.png"
              alt=""
            />
            <img
              class="w-10 inline mx-3 hover:opacity-75 cursor-pointer"
              src="../assets/facebook.svg"
              alt=""
            />
          </div>
          <p class="text-justify text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p class="text-justify text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p class="text-justify text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <br />
          <h1 class="text-xl pt-8 font-bold mb-6">
            Restez informés & recevez des codes PROMO
          </h1>
          <input
            class="px-3 py-1 bg-red-900 outline-none text-xl font-bold"
            type="text"
            name=""
            value=""
            placeholder="example@mail.com"
          />
          <button
            class="border-l-4 border-white px-3 py-1 bg-red-900 outline-none text-xl font-bold cursor-pointer hover:opacity-75"
            type="button"
            name="button"
          >
            ENVOYER
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homepage",
  data() {
    return {
      shop: {
        status: false,
        time_start: 15,
        time_stop: 20,
        day_start: 1,
        day_stop: 5
      }
    };
  },
  methods: {},
  mounted() {
    var time = new Date();
    var hour = time.getUTCHours();

    if (hour >= this.shop.time_start && hour <= this.shop.time_stop) {
      this.shop.status = true;
    } else {
      this.shop.status = false;
    }
  }
};
</script>

<style lang="css" scoped>
.uber {
  background-color: #4c9109;
}
</style>
