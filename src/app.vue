<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import NavbarVue from '@/components/navigation/navbar.vue';
import FlyerVue from '@/components/modals/flyer.vue';

// Set title to the document
document.title = 'Game Master Festival';
</script>

<template>
  <FlyerVue :modalOpen="true" />

  <RouterView />
</template>