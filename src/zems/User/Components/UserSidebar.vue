<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <aside class="sidebar bg-light">
    <RouterLink to="/" class="logo">
      <BaseImage image="/logo.png" alt="logo" />
    </RouterLink>
    <nav class="sidebar-nav">
      <RouterLink to="/user/deposit" class="nav-link">
        <i class="fa-solid fa-circle-dollar-to-slot"></i> Deposit
      </RouterLink>
      <RouterLink to="/user/deposit-history" class="nav-link">
        <i class="fa-solid fa-clock-rotate-left"></i> Deposit History
      </RouterLink>
       <RouterLink to="/user/events" class="nav-link">
        <i class="fa-solid fa-calendar-alt "></i>Events
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  display: none;
}

@media (min-width: 768px) {
  .sidebar {
    display: block;
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
}
</style>
