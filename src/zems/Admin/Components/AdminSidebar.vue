<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h2>Admin Panel</h2>
    </div>
    <nav class="sidebar-nav">
      <RouterLink to="/admin/events/all" class="nav-link">📅 All Events</RouterLink>
      <RouterLink to="/admin/event/create" class="nav-link">➕ Create Event</RouterLink>
      <RouterLink to="/admin/withdrawal" class="nav-link">💳 Withdrawals</RouterLink>
    </nav>
  </aside>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.sidebar {
  width: 240px;
  height: 100vh;
  background: linear-gradient(180deg, #1e293b, #0f172a);
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
}

.sidebar-header {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-link {
  padding: 10px 15px;
  border-radius: 8px;
  color: #cbd5e1;
  text-decoration: none;
  transition: 0.3s;
  font-weight: 500;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.router-link-active {
  background: #2563eb;
  color: white !important;
}
</style>
