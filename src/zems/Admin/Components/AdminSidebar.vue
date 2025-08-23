<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <aside class="sidebar bg-light">
    <RouterLink to="/" class="logo">
      <BaseImage image="/logo.png" alt="logo" />
    </RouterLink>
    <nav class="sidebar-nav">
      <RouterLink to="/admin/events/all" class="nav-link">
        <i class="fa-solid fa-calendar-alt "></i> All Events
      </RouterLink>
      <RouterLink to="/admin/event/create" class="nav-link">
        <i class="fa-solid fa-plus"></i> Create Event
      </RouterLink>
      <RouterLink to="/admin/withdrawal" class="nav-link">
        <i class="fas fa-credit-card"></i> Withdrawals
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  max-width: 350px;
  height: 100vh;
  padding: 1.5rem;
  position: sticky;
  left: 0;
  top: 0;
}

.logo {
  display: block;
  margin: 1rem 0;
  text-align: center;
}

.logo img {
  height: 60px;
  width: auto;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.nav-link {
  padding: .75rem 1rem;
  border-radius: .5rem;
  color: var(--white-color);
  text-decoration: none;
  transition: 0.3s;
  font-weight: 500;
}

.router-link-active {
  background: var(--secondary-color);
  color: var(--white-color) !important;
}
</style>
