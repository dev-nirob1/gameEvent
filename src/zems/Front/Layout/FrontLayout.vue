<script setup>
import FooterSection from '@/components/Section/FooterSection.vue';
import NavbarSection from '@/components/Section/NavbarSection.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <NavbarSection />
  <RouterView />
  <FooterSection />
</template>
