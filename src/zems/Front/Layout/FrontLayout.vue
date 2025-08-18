<script setup>
import FooterSection from '@/components/Section/FooterSection.vue';
import MobileMenu from '@/components/Section/MobileMenu.vue';
import NavbarSection from '@/components/Section/NavbarSection.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <NavbarSection />
  <MobileMenu />
  <main>
    <RouterView />
  </main>
  <FooterSection />
</template>
<style scoped>
main {
  padding-bottom: 3rem;
}
</style>
