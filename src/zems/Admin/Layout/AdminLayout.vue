<script setup>
import { RouterView } from 'vue-router';
import AdminSidebar from '../Components/AdminSidebar.vue';

</script>

<template>

    <div class=" medium-5">
      <div class="medium-span-1">
        <AdminSidebar/>
      </div>
      <div class="medium-span-4">
        <RouterView/>
      </div>
    </div>
</template>
