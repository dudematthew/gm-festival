<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import posterImg from '@/assets/images/common/poster.jpg';

// Define props
const props = defineProps({
  modalOpen: Boolean,
})

const modalOpen = ref(props.modalOpen)
const modalContainer = ref<HTMLElement | null>(null)

const setModalOpen = (value: boolean): void => {
  modalOpen.value = value
}

const handleClickOutside = (event: MouseEvent): void => {
  if (
    modalContainer.value && !modalContainer.value.contains(event.target as Node)
  ) {
    setModalOpen(false)
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="container mx-auto py-20">
    <button
      ref="trigger"
      @click="setModalOpen(true)"
      class="rounded-full bg-primary px-6 py-3 text-base font-medium text-white"
    >
      Open Modal
    </button>
    <div
      class="fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5"
      :class="{ block: modalOpen, hidden: !modalOpen }"
    >
      <div
        ref="modalContainer"
        class="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
      >
        <h3 class="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
          Pierwszy sezon Game Master Festival rozpoczęty!
        </h3>
        <span class="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary"></span>

        <img :src="posterImg" alt="Game Master Festival Poster" class="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
        
        <div class="-mx-3 flex flex-wrap">
          <div class="w-1/2 px-3">
            <button
              @click="setModalOpen(false)"
              ref="trigger"
              class="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-gray-700 hover:bg-gray-700 hover:text-white dark:text-white"
            >
              Zamknij
            </button>
          </div>
          <div class="w-1/2 px-3">
            <button
              class="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-primary-dark"
            >
              <router-link to="/">Zobacz Szczegóły</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
