<template>
  <div class="">
    <div class="homepage mx-auto text-center">

      <div class=" text-center mb-4">
        <img src="../assets/pizza.png" class="w-4/12 mx-auto mt-6" alt="" />
        <h1 class="inline-block p-5 text-white">
          <svg class="w-6 h-6 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
          <a href="tel:0401234567" class="font-bold">04 01 23 45 67</a> <br />
          <a href="tel:+32401234567" class="font-bold">+32 401 23 45 67</a>
          <div class=" bg-green-700 dark:bg-sunset-700 pt-px pb-1 px-2 rounded-lg mt-2 border-4 border-green-300 dark:border-sunset-300 shadow-lg">
            <span v-if="shop.status" class="font-bold text-white text-lg"
              >Ouvert</span
            >
            <span v-else class="font-bold text-red-400 text-lg">Fermé</span>
            <span v-if="shop.status" class="text-green-400 font-bold text-2xl">
              <svg class="w-6 h-6 inline mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-white text-xl font-semibold"
                >ferme à 22:00</span
              ></span
            >
            <span v-else class="text-red-400 font-bold text-2xl">
              <svg class="w-6 h-6 inline mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
              <span class="text-white text-xl font-semibold"
                >ouvre <span v-if="shop.closed_day">{{ shop.open }}</span> à 17:00</span
              ></span
            >
          </div>

        </h1>
      </div>
      <div data-aos="flip-up" data-aos-duration="1000" class="block md:grid grid-cols-3 container max-w-6xl mx-auto gap-0 md:gap-8">
        <div  class="mx-20 md:mx-0 mb-2 cursor-pointer bg-white dark:bg-sunset-600 p-6 rounded-lg shadow-lg uber border-8">
          <img src="../assets/uber.png" class="w-auto md:w-40 mx-auto" alt="" />
        </div>
        <div class="mx-20 md:mx-0 mb-2 cursor-pointer bg-white dark:bg-sunset-600 p-6 rounded-lg shadow-lg border-8 border-yellow-300 hover:border-yellow-600">
          <img src="../assets/takeaway.svg" class="w-1/2 md:w-20 mx-auto" alt="" />
          <h1 class="text-center text-xl mt-3 font-bold">TakeAway</h1>
        </div>
        <div class="mx-20 md:mx-0 mb-2 cursor-pointer bg-white dark:bg-sunset-600 p-6 rounded-lg shadow-lg border-8 border-green-300 hover:border-green-600">
          <img src="../assets/deliveroo.png" class="w-1/2 md:w-20 mx-auto" alt="" />
          <h1 class="text-center text-xl mt-3 font-bold">Deliveroo</h1>
        </div>
      </div>
      <div id="menu" class=" mt-3 md:mt-16 min-h-screen">
        <div class="container max-w-6xl mx-auto pt-24">
          <h1 class="text-lg md:text-4xl bg-red-600 dark:bg-sunset-600 text-white inline px-4 py-2 font-bold font-serif uppercase">
            🍕🍅🌿🧅"à table !"🧅🌿🍅🍕
          </h1>
          <br />
        </div>
        <!-- <div class="mx-auto mt-6 px-4 md:px-0">
          <div :data-aos-delay="index*200" data-aos="flip-up" data-aos-duration="1000" v-for="(pizza, index) in menu" v-bind:key="index" class=" mb-6">
            <div class="bg-white w-full pb-5 md:pb-0 h-full md:h-48 text-left shadow-lg relative">
              <img
                v-if="isOdd(index)"
                class="w-full h-auto md:w-auto md:h-48 float-none md:float-right brightness-125"
                :src="pizza.img"
                alt=""
              />
              <img
                v-if="!isOdd(index)"
                class="w-full h-auto md:w-auto md:h-48 float-none md:float-left brightness-125"
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
              <p v-if="isOdd(index)" class="absolute top-0 md:top-auto md:bottom-0 right-0 text-2xl font-bold px-2 py-1 bg-green-600 text-white m-3 font-mono border-4 border-green-300">{{ pizza.price }}</p>
              <p v-if="!isOdd(index)" class="absolute top-0 md:top-auto md:bottom-0 left-0 text-2xl font-bold px-2 py-1 bg-green-600 text-white m-3 font-mono border-4 border-green-300">{{ pizza.price }}</p>
            </div>
          </div>
        </div> -->
        <div class="mx-auto mt-12 px-4 md:px-0">
          <div v-for="(pizza, index) in menu" v-bind:key="index" class=" mb-16">
            <div class="bg-white w-full pb-16 md:pb-0 h-full md:h-48 text-left shadow-lg relative rounded-lg">
              <img
                v-if="isOdd(index)"
                class="transform translate-x-0 md:-translate-y-1.5 md:translate-x-1 w-full shadow-lg h-auto md:w-auto md:h-52 float-none md:float-right brightness-125 rounded-lg"
                :src="pizza.img"
                alt=""
              />
              <img
                v-if="!isOdd(index)"
                class="transform translate-x-0 md:-translate-y-1.5 md:-translate-x-1 w-full shadow-lg h-auto md:w-auto md:h-52 float-none md:float-left brightness-125 rounded-lg"
                :src="pizza.img"
                alt=""
              />
              <p
                v-if="isOdd(index)"
                class="pt-3 text-3xl text-green-900 font-semibold border-green-600 border-b-2 border-dashed pb-3 text-left px-3 petpet"
              >
                {{ pizza.name }}
              </p>
              <p
                v-if="!isOdd(index)"
                class="pt-3 text-3xl text-green-900 font-semibold border-green-600 border-b-2 border-dashed pb-1 text-right px-3 petpet"
              >
                {{ pizza.name }}
              </p>
              <p class="flex flex-wrap mt-2">
                <span v-for="(item, index) in pizza.items" v-bind:key="index" class="bg-green-200 text-green-900 text-sm px-2 py-1 m-1 rounded-lg font-semibold font-serif float-none md:float-left">{{ item }}</span>
              </p>
              <p v-if="isOdd(index)" class="absolute bottom-0 left-0 text-2xl font-bold px-2 py-1 text-green-900 m-2 border-2 border-dashed border-green-400 rounded-lg">{{ pizza.price }}</p>
              <p v-if="!isOdd(index)" class="absolute bottom-0 right-0 text-2xl font-bold px-2 py-1 text-green-900 m-2 border-2 border-dashed border-green-400 rounded-lg">{{ pizza.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="infos" class="bg-red-600 dark:bg-sunset-600 mt-16 pb-8 text-white rounded-none md:rounded-lg shadow-lg">
        <div class="container max-w-6xl mx-auto">
          <h1 class="text-xl md:text-4xl text-white pt-8 font-bold font-serif uppercase">
            "à propos de nous !"
          </h1>
          <br />
          <p class="font-serif px-5 text-justify">
            Situé à Bruxelles, <a class="font-bold hover:opacity-75" href="#">BIGA.KITCHEN</a>
            est une <span class="font-bold">"ghost kitchen"</span> qui a pour
            projet de livrer des pizzas traditionnelles faites avec un savoir à
            l'italienne. La spécialité de nos pizzas est le <span class="font-bold">biga</span>,
            une technique de préparation qui ajoute de la complexité au goût
            avec une texture légère et aérée.
          </p>
          <div data-aos="fade-up" class="grid grid-cols-2 justify-center justify-items-center w-64 mx-auto mt-5">
            <!-- <font-awesome-icon class="fill-current text-white hover:text-red-300 cursor-pointer" size="3x" :icon="['fab', 'facebook']" /> -->
            <font-awesome-icon @click='link("")' class="fill-current text-white hover:text-red-300 cursor-pointer" size="3x" :icon="['fab', 'twitter']" />
            <font-awesome-icon @click='link("https://www.instagram.com/biga.kitchen_")' class="fill-current text-white hover:text-red-300 cursor-pointer" size="3x" :icon="['fab', 'instagram']" />

          </div>
          <br>
          <h1 class="text-xl pt-8 font-bold mb-6">
            Restez informés & recevez des codes PROMO !
          </h1>
          <form
              v-if="form.status"
              class="mb-2"
              name="contact-speaker"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              @submit.prevent="handleSubmit"
            >
            <input
              class="mx-2 px-3 py-1 bg-red-900 dark:bg-sunset-900 outline-none text-base md:text-xl font-bold rounded-lg focus:outline-none focus:ring focus:ring-red-400 dark:focus:ring-sunset-400"
              type="text"
              name="email"
              v-model="form.email"
              required
              placeholder="example@mail.com"
            />
            <button
              class="px-3 py-1 bg-red-900 dark:bg-sunset-900 outline-none text-base md:text-xl font-bold cursor-pointer hover:opacity-75 rounded-lg"
              type="submit"
              name="button"
            >
              ENVOYER
            </button>
          </form>
          <h1 v-else class="text-lg font-bold mb-2 bg-red-900 dark:bg-sunset-900 inline px-3 py-1 rounded-lg">
            Merci ! Nous vous gardons informés !
          </h1>
          <h1 class="text-xl pt-8 font-bold mb-2">
            Horaires d'ouveture
          </h1>
          <!-- <p class="font-serif px-5 text-center">Nous sommes ouvert les</p> -->
          <!-- <p class="flex flex-wrap  text-white justify-center">
            <span class="border-4 border-red-200 bg-red-600 text-gray-200 px-2 py-1 m-2 rounded-lg font-semibold">Lundi <br> Fermé </span>
            <span class="border-4 border-green-200 bg-green-600 px-2 py-1 m-2 rounded-lg font-semibold">Mardi <br> 17:00 - 22:00 </span>
            <span class="border-4 border-green-200 bg-green-600 px-2 py-1 m-2 rounded-lg font-semibold">Mercredi <br> 17:00 - 22:00 </span>
            <span class="border-4 border-green-200 bg-green-600 px-2 py-1 m-2 rounded-lg font-semibold">Jeudi <br> 17:00 - 22:00 </span>
            <span class="border-4 border-green-200 bg-green-600 px-2 py-1 m-2 rounded-lg font-semibold">Vendredi <br> 17:00 - 22:00 </span>
            <span class="border-4 border-green-200 bg-green-600 px-2 py-1 m-2 rounded-lg font-semibold">Samedi <br> 17:00 - 22:00 </span>
            <span class="border-4 border-red-200 bg-red-600 text-gray-200 px-2 py-1 m-2 rounded-lg font-semibold">Dimanche <br> Fermé </span>
          </p> -->
          <div class="grid grid-cols-2 max-w-sm mx-auto justify-items-center">
            <span>Lundi</span> <span class="font-bold">Fermé</span>
            <span>Mardi</span> <span class="font-bold">17:00 - 22:00</span>
            <span>Mercredi</span> <span class="font-bold">17:00 - 22:00</span>
            <span>Jeudi</span> <span class="font-bold">17:00 - 22:00</span>
            <span>Vendredi</span> <span class="font-bold">17:00 - 22:00</span>
            <span>Samedi</span> <span class="font-bold">17:00 - 22:00</span>
            <span>Dimanche</span> <span class="font-bold">Fermé</span>
          </div>
          <!-- <p class="text-white text-center">
            <span class="font-semibold">Lundi: Fermé </span><br>
            <span class="font-semibold">Mardi: 17:00 - 22:00 </span><br>
            <span class="font-semibold">Mercredi: 17:00 - 22:00 </span><br>
            <span class="font-semibold">Jeudi: 17:00 - 22:00 </span><br>
            <span class="font-semibold">Vendredi: 17:00 - 22:00 </span><br>
            <span class="font-semibold">Samedi: 17:00 - 22:00 </span><br>
            <span class="font-semibold">Dimanche: Fermé </span><br>
          </p> -->
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
      theme: "",
      form: {
        email: "",
        status: true
      },
      shop: {
        status: false,
        time_start: 15,
        time_stop: 20,
        day_start: 2,
        day_stop: 6,
        closed_day: false,
        open:""
      },
      menu : [
        {
          name: "Marinara",
          items: [
            "Tomate",
            "Ail",
            "Basilic"
          ],
          price : "7,00 €",
          img: marinara
        },
        {
          name: "Margherita",
          items: [
            "Tomate",
            "Mozzarella",
            "Basilic"
          ],
          price : "8,00 €",
          img: margherita
        },
        {
          name: "Capricciosa",
          items: [
            "Tomate",
            "Mozzarella",
            "Jambon",
            "Champignons",
            "Artichauts",
            "Olives"

          ],
          price: "10,00 €",
          img: marinara
        }
      ]
    };
  },
  methods: {
    link(data) {
      window.open(data, "_blank");
    },
    themeLight() {
      document.documentElement.classList.remove("dark");
      this.theme = "light";
    },
    themeDark() {
      document.documentElement.classList.add("dark");
      this.theme = "dark";
    },
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
      this.form.email = "";
      this.form.status = false
    }
    // getImageUrl(name) {
    //   return new URL(`../assets/${name}.png`, import.meta.url).href
    // }
  },
  mounted() {
    var time = new Date();
    var hour = time.getUTCHours();
    var day = time.getDay();
    if (hour >= this.shop.time_start && hour <= this.shop.time_stop && day >= this.shop.day_start && day <= this.shop.day_stop) {
      this.shop.status = true;
      this.theme = "light"
    } else {
      console.log(day)
      if( day === 1 || day === 0){
        this.shop.open = "mardi"
        this.shop.closed_day = true
      }
      this.shop.status = false;
      this.theme = "dark"
    }

    if (this.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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
  border-color: #5FB70AD9;
}
</style>
