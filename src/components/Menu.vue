<template>
    <div id="menu" class=" mt-3 md:mt-16 min-h-screen">
        <div class="container max-w-6xl mx-auto pt-24">
          <h1 class="text-lg md:text-4xl bg-red-600 dark:bg-sunset-600 text-white inline px-4 py-2 font-bold font-serif uppercase">
            🍕🍅🌿🧅"à table !"🧅🌿🍅🍕
          </h1>
          <br />
        </div>
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
</template>
<script>

import dataJSON from "@/db/menu.json"
import marinaraIMG from "@/assets/marinara.png"
import margheritaIMG from "@/assets/margherita.png"

export default {
    name: "menu",
    data(){
        return {
            menu : dataJSON.menu
        }
    },
    methods: {
        isOdd(num) {
            return num % 2;
        }
    }
    
}
</script>