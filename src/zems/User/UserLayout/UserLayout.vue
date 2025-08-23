<script setup>
import { RouterView } from 'vue-router';
import UserMobileMenu from '../Components/UserMobileMenu.vue';
import UserSidebar from '../Components/UserSidebar.vue';

</script>

<template>
  <div class="user-routes">
    <div>
      <UserMobileMenu />
      <UserSidebar />
    </div>
    <div class="router-view">
      <RouterView />
    </div>
  </div>
</template>
<style scoped>
.router-view {
  padding: 1rem 0 5rem 0;
}

@media (min-width: 768px) {
  .router-view {
    padding: 0;
  }

  .user-routes {
    display: flex;
    gap: 1rem;
  }

  .router-view {
    flex: 1;
  }
}
</style>
