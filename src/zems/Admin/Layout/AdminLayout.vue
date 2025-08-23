<script setup>
import { RouterView } from 'vue-router';
import AdminSidebar from '../Components/AdminSidebar.vue';

</script>

<template>
    <div class="admin-routes">
      <div>
        <AdminSidebar/>
      </div>
      <div class="router-view">
        <RouterView/>
      </div>
    </div>
</template>

<style scoped>

@media (min-width: 768px){
  .admin-routes {
  display: flex;
  gap: 1rem;
}
.router-view {
  flex: 1;
}
}
</style>
