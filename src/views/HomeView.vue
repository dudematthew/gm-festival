<script setup lang="ts">
  import {
    ref
  } from 'vue';

  import router from '@/router';

  import commentatorImg from '@/assets/images/banners/commentator.jpg';
  import gameMasterImg from '@/assets/images/banners/game-master.jpg';

  const blogItems = ref([{
      image: commentatorImg,
      title: 'Komentator',
      details: 'Komentator to osoba, która komentuje zmagania Mistrzów Gry na żywo.',
      buttonText: 'Jestem Komentatorem',
      buttonLink: '#',
    },
    {
      image: gameMasterImg,
      title: 'Mistrz Gry',
      details: 'Mistrz Gry to osoba, która prowadzi rozgrywkę. Nasi zawodnicy to najlepsi z najlepszych!',
      buttonText: 'Jestem Mistrzem Gry',
      buttonLink: '#',
    },
  ]);
</script>

<template>
  <!-- ====== Blog Section Start -->
  <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-white dark:bg-dark">
    <div class="container mx-auto">

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <span class="block mb-2 text-lg font-semibold text-white"> JEDYNY TAKI </span>
            <h2 class="mb-6 text-3xl font-bold sm:text-4xl whitespace-nowrap font-wonderbar text-yellow-500">
              ⭐ GAME MASTER FESTIVAL
            </h2>
            <p class="text-medium text-body-color dark:text-dark-6">
              Największe wydarzenie dla Mistrzów Gry w świecie wyobraźni! Oglądaj na żywo, tylko na kanale <b>WH Isekai
                TV</b>!
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap -mx-4">
        <template v-for="(item, index) in blogItems" :key="index">
          <div class="w-full px-4 md:w-1/2 lg:w-1/2 cursor-pointer" @click="router.push(item.buttonLink)">
            <div class="w-full mb-10 transition-shadow duration-150 hover:shadow-primary-light shadow-5 p-5 rounded-md">
              <div class="mb-8 overflow-hidden rounded">
                <img :src="item.image" alt="image" class="w-full" />
              </div>
              <div>
                <h3 class="inline-block mb-4 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {{ item.title }}
                </h3>
              <p class="text-base text-body-color dark:text-dark-6 mb-6 ">
                {{ item.details }}
              </p>
              <span @click="router.push(item.buttonLink)"
                class="inline-block px-4 py-1 text-base font-semibold leading-loose text-center text-white rounded bg-primary cursor-pointer">
                {{ item.buttonText }}
              </span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!-- ====== Blog Section End -->
</template>