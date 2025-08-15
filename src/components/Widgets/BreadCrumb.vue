<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <section>
    <!-- Mobile Back Bar -->
    <div class="mobile-backbar">
      <button @click="goBack" aria-label="Go Back">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <span class="page-title">
        {{ route.meta?.title || route.name }}
      </span>
    </div>

    <!-- Desktop Breadcrumb -->
    <div class="breadcrumb">
      <ul class="container">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li>{{ route.name }}</li>
        <li v-if="route.params.slug">{{ route.params.slug }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* ===== Breadcrumb (Desktop) ===== */
.breadcrumb {
  padding: 8rem 0 3rem 0;
}

.breadcrumb ul {
  list-style: none;
  padding: 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.breadcrumb ul li a {
  position: relative;
  color: var(--primary-light-color);
  text-decoration: none;
  padding-bottom: .5rem;
}

.breadcrumb ul li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: var(--secondary-color);
  transition: all .3s ease-in-out;
}

.breadcrumb ul li a:hover::after {
  width: 100%;
}

.breadcrumb ul li:not(:last-child)::after {
  content: ">";
  font-family: monospace;
  padding-left: 1rem;
}

/* ===== Mobile Back Bar ===== */
.mobile-backbar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--primary-color);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.mobile-backbar button {
  background: none;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;
}

.mobile-backbar .page-title {
  font-size: 1.1rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ===== Responsive Switch ===== */
@media (min-width: 768px) {
  .mobile-backbar {
    display: none;
  }
  .breadcrumb {
    display: block;
  }
}

@media (max-width: 767px) {
  .breadcrumb {
    display: none;
  }
  .mobile-backbar {
    display: flex;
  }
}
</style>
