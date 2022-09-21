<template>
  <div :class="theme === 'light' ? 'pattern-liquid' : 'pattern-liquid-dark'" class="bg-red-600 min-h-screen">
    <div class="bg-transparent  pt-4 pb-3 w-full z-50">
      <div class="container mx-auto max-w-2xl">
        <div class=" block md:flex mx-4 md:mx-0 justify-between">
          <div class="kanit leading-tight font-semibold">
            <div class="inline-block border-4 border-red-600 py-1 px-2 rounded-lg shadow-lg bg-yellow-400">
              <span class="text-4xl">BIGA</span> <br />
              <span class="text-xl text-red-700">KITCHEN</span>
            </div>

          </div>
          <div class="hidden md:block text-center font-bold text-lg text-black dark:text-white pt-6">
            <div class="bg-red-500 dark:bg-sunset-700 text-white px-4 py-2 shadow-lg">
              <a data-aos-easing="ease" class="inline no-underline decoration-4 dark:decoration-sunset-300 decoration-red-200 mx-2 hover:underline" href="#menu">MENU</a>
              <a class="inline no-underline decoration-4 dark:decoration-sunset-300 decoration-red-200 mx-2 hover:underline" href="#">YOKAI KITCHEN</a>
              <a class="inline no-underline decoration-4 dark:decoration-sunset-300 decoration-red-200 mx-2 hover:underline" href="#infos">INFOS</a>
            </div>
          </div>
          <!-- <div class="block md:hidden text-right pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 inline text-black fill-current bg-red-600 cursor-pointer rounded-lg p-2 border-4 border-red-300 hover:border-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
          </div> -->
        </div>

      </div>

    </div>

    <div class="container mx-auto max-w-2xl ">
      <div class="mx-auto text-center">

      <div class=" text-center mb-4">
        <img src="@/assets/pizza.png" class="w-4/12 mx-auto mt-6" alt="" />
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
      <div class="block md:grid grid-cols-3 container max-w-6xl mx-auto gap-0 md:gap-8">
        <div  class="mx-20 md:mx-0 mb-2 cursor-pointer bg-white dark:bg-sunset-600 p-6 rounded-lg shadow-lg uber border-8">
          <img src="@/assets/uber.png" class="w-auto md:w-40 mx-auto" alt="" />
        </div>
        <div class="mx-20 md:mx-0 mb-2 cursor-pointer bg-white dark:bg-sunset-600 p-6 rounded-lg shadow-lg border-8 border-yellow-300 hover:border-yellow-600">
          <img src="@/assets/takeaway.svg" class="w-1/2 md:w-20 mx-auto" alt="" />
          <h1 class="text-center text-xl mt-3 font-bold">TakeAway</h1>
        </div>
        <div class="mx-20 md:mx-0 mb-2 cursor-pointer bg-white dark:bg-sunset-600 p-6 rounded-lg shadow-lg border-8 border-green-300 hover:border-green-600">
          <img src="@/assets/deliveroo.png" class="w-1/2 md:w-20 mx-auto" alt="" />
          <h1 class="text-center text-xl mt-3 font-bold">Deliveroo</h1>
        </div>
      </div>
      <Menu></Menu>
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
          <div class="grid grid-cols-2 justify-center justify-items-center w-64 mx-auto mt-5">
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
          <div class="grid grid-cols-2 max-w-sm mx-auto justify-items-center">
            <span>Lundi</span> <span class="font-bold">Fermé</span>
            <span>Mardi</span> <span class="font-bold">17:00 - 22:00</span>
            <span>Mercredi</span> <span class="font-bold">17:00 - 22:00</span>
            <span>Jeudi</span> <span class="font-bold">17:00 - 22:00</span>
            <span>Vendredi</span> <span class="font-bold">17:00 - 22:00</span>
            <span>Samedi</span> <span class="font-bold">17:00 - 22:00</span>
            <span>Dimanche</span> <span class="font-bold">Fermé</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="w-full bg-red-700 dark:bg-sunset-700 mt-0 md:mt-16">
      <p class="text-lg text-white font-sans text-center py-4">Fait avec ❤ par <span class="font-bold">BIGA.KITCHEN</span> <span class="text-sm">© 2022</span> </p>
    </div>

  </div>


</template>
<script>
import axios from "axios";
import config from "@/db/config.json"

import Menu from "@/components/Menu.vue"


export default {
  components : {Menu},
  data() {
    return {
      theme: "",
      form: {
        email: "",
        status: true
      },
      shop: config,
    };
  },
  methods: {
    link(data) {
      window.open(data, "_blank");
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Secular+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Noto+Serif&display=swap');

.petpet {
  font-family: 'Noto Serif', serif;
}

.uber {
  border-color: #5FB70A91;
}
.uber:hover {
  border-color: #438a00e8;
}

.pattern-liquid {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23ff1b00' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23ff3601' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23ff5101' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23ff6c02' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23FF8702' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23ff9b03' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23ffaf05' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23ffc206' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23ffd608' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23FFE909' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
.pattern-liquid-dark {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%238a425e' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23984458' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23a6464f' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23b54c47' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23BE634E' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23ce704e' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23dc8151' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23e99354' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f4a75a' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23FDBB61' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}


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
