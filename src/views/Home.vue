<template>
  <div class="">
    <div class="homepage mx-auto text-center">
      <div class="pt-4"></div>

      <div class=" text-center mb-4">
        <img src="../assets/pizza.png" class="w-4/12 mx-auto mt-6" alt="" />
        <h1 class="inline-block border-b-4 border-black p-5">
          <span class="font-bold">+32(0) 401 23 45</span> <br />
          <span v-if="shop.status" class="font-bold text-white text-lg"
            >Ouvert</span
          >
          <span v-else class="font-bold text-black text-lg">Fermé</span>
          <span v-if="shop.status" class="text-green-500 font-bold text-xl">
            ●
            <span class="text-white text-xl font-semibold"
              >Ferme à 22:00</span
            ></span
          >
          <span v-else class="text-red-500 font-bold text-2xl">
            ●
            <span class="text-white text-xl font-semibold"
              >Ouvre à 17:00</span
            ></span
          >
        </h1>
      </div>
      <div class="block md:grid grid-cols-3 container max-w-6xl mx-auto gap-0 md:gap-8">
        <div data-aos="fade-up" data-aos-duration="1000"  class="mx-20 md:mx-0 mb-2 cursor-pointer bg-white p-6 rounded-lg shadow-lg uber border-8">
          <img src="../assets/uber.png" class="w-auto md:w-40 mx-auto" alt="" />
        </div>
        <div data-aos="fade-down" data-aos-duration="1000" class="mx-20 md:mx-0 mb-2 cursor-pointer bg-white p-6 rounded-lg shadow-lg border-8 border-yellow-300 hover:border-yellow-400">
          <img src="../assets/takeaway.svg" class="w-1/2 md:w-20 mx-auto" alt="" />
          <h1 class="text-center text-xl mt-3 font-bold">TakeAway</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" class="mx-20 md:mx-0 mb-2 cursor-pointer bg-white p-6 rounded-lg shadow-lg border-8 border-green-300 hover:border-green-400">
          <img src="../assets/deliveroo.png" class="w-1/2 md:w-20 mx-auto" alt="" />
          <h1 class="text-center text-xl mt-3 font-bold">Deliveroo</h1>
        </div>
      </div>

      <div id="menu" class=" mt-3 md:mt-16 min-h-screen">
        <div class="container max-w-6xl mx-auto">
          <h1 class="text-lg md:text-4xl text-white pt-24 font-bold font-serif uppercase">
            🍕🍅🌿🧅"à table !"🧅🌿🍅🍕
          </h1>
          <br />
        </div>
        <div class="mx-auto mt-6 px-4 md:px-0">
          <div :data-aos-delay="index*300" data-aos="flip-up" data-aos-duration="1000" v-for="(pizza, index) in menu" v-bind:key="index" class=" mb-6">
            <div class="bg-white w-full pb-5 md:pb-0 h-full md:h-48 text-left shadow-lg relative">
              <img
                v-if="isOdd(index)"
                class="w-full h-auto md:w-auto md:h-48 float-none md:float-right"
                :src="pizza.img"
                alt=""
              />
              <img
                v-if="!isOdd(index)"
                class="w-full h-auto md:w-auto md:h-48 float-none md:float-left"
                :src="pizza.img"
                alt=""
              />
              <p
                class="pt-3 text-3xl text-green-600 font-semibold border-green-600 border-b-2 border-dashed pb-3 text-center petpet"
              >
                {{ pizza.name }}
              </p>
              <br />
              <p class="flex flex-wrap">
                <span v-for="(item, index) in pizza.items" v-bind:key="index" class="bg-green-200 px-2 py-1 m-2 rounded-lg font-semibold font-serif float-none md:float-left">{{ item }}</span>
              </p>
              <p v-if="isOdd(index)" class="absolute top-0 md:top-auto md:bottom-0 right-0 text-2xl font-bold px-2 py-1 bg-green-600 text-white m-3 font-mono border-4 border-white">{{ pizza.price }}</p>
              <p v-if="!isOdd(index)" class="absolute top-0 md:top-auto md:bottom-0 left-0 text-2xl font-bold px-2 py-1 bg-green-600 text-white m-3 font-mono border-4 border-white">{{ pizza.price }}</p>
            </div>
          </div>
        </div>
      </div>

      <div id="infos" class="bg-red-800 mt-16 pb-5 text-white rounded-none md:rounded-lg shadow-lg">
        <div class="container max-w-6xl mx-auto">
          <h1 class="text-xl md:text-4xl text-white pt-8 font-bold font-serif uppercase">
            "à propos de nous !"
          </h1>
          <br />
          <p class="font-serif px-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div data-aos="fade-up" class="grid grid-cols-3 justify-center justify-items-center w-64 mx-auto mt-5">
            <font-awesome-icon class="fill-current text-white hover:text-red-300 cursor-pointer" size="3x" :icon="['fab', 'facebook']" />
            <font-awesome-icon class="fill-current text-white hover:text-red-300 cursor-pointer" size="3x" :icon="['fab', 'twitter']" />
            <font-awesome-icon class="fill-current text-white hover:text-red-300 cursor-pointer" size="3x" :icon="['fab', 'instagram']" />

          </div>
          <br>
          <h1 class="text-xl pt-8 font-bold mb-6">
            Restez informés & recevez des codes PROMO
          </h1>
          <form
              name="contact-speaker"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              @submit.prevent="handleSubmit"
            >
            <input
              class="px-3 py-1 bg-red-900 outline-none text-base md:text-xl font-bold"
              type="text"
              name="email"
              v-model="form.email"
              required
              placeholder="example@mail.com"
            />
            <button
              class="border-l-4 border-white px-3 py-1 bg-red-900 outline-none text-base md:text-xl font-bold cursor-pointer hover:opacity-75"
              type="submit"
              name="button"
            >
              ENVOYER
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import marinara from '../assets/marinara.png'
import margherita from '../assets/margheritta.png'

export default {
  name: "homepage",
  data() {
    return {
      form: {
        email: ""
      },
      shop: {
        status: false,
        time_start: 15,
        time_stop: 20,
        day_start: 1,
        day_stop: 5
      },
      menu : [
        {
          name: "Marinara",
          items: [
            "Tomate",
            "Ail",
            "Basilic"
          ],
          price : "7.00 EUR",
          img: marinara
        },
        {
          name: "Margherita",
          items: [
            "Tomate",
            "Mozzarella",
            "Basilic"
          ],
          price : "8.00 EUR",
          img: margherita
        },
        {
          name: "Capricciosa",
          items: [
            "Tomate",
            "Mozzarella",
            "Jambon",
            "Champignons",
            "Artichauds",
            "Olives"

          ],
          price: "10.00 EUR",
          img: marinara
        }
      ]
    };
  },
  methods: {
    isOdd(num) {
      return num % 2;
    },
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "newsletter",
          ...this.form
        }),
        axiosConfig
      );
    }
    // getImageUrl(name) {
    //   return new URL(`../assets/${name}.png`, import.meta.url).href
    // }
  },
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
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Noto+Serif&display=swap');

.petpet {
  font-family: 'Noto Serif', serif;
}

.uber {
  border-color: #5FB70A91;
}
.uber:hover {
  border-color: #5FB70AB0;
}
</style>
