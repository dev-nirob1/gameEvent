<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
// const router = useRouter()

</script>

<template>
  <section>
    <!-- Desktop Breadcrumb -->
    <div class="breadcrumb">
      <ul class="container">
        <ListItem><RouterLink to="/">Home</RouterLink></ListItem>
        <ListItem>{{ route.name }}</ListItem>
        <ListItem v-if="route.params.slug">{{ route.params.slug }}</ListItem>
      </ul>
    </div>
  </section>
</template>

<style scoped>


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

</style>
