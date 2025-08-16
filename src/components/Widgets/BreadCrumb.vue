<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
// const router = useRouter()

</script>

<template>
  <section>
    <div class="container">
      <ul class="mobile-breadcrumb">
        <ListItem>
          <BaseButton><i class="fa-solid fa-angle-left"></i></BaseButton>
        </ListItem>
        <ListItem>{{ route.name }}</ListItem>
      </ul>
      <!-- Desktop Breadcrumb -->
      <div class="breadcrumb">
        <ul class="container">
          <ListItem>
            <RouterLink to="/">Home</RouterLink>
          </ListItem>
          <ListItem>{{ route.name }}</ListItem>
          <ListItem v-if="route.params.slug">{{ route.params.slug }}</ListItem>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.breadcrumb {
  display: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.mobile-breadcrumb {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mobile-breadcrumb .btn {
  color: var(--white-color);
  padding: .25rem;
  border: none;
  margin: 0;
}

@media (min-width: 768px) {
  .mobile-breadcrumb {
    display: none;
  }

  .breadcrumb {
    display: block;
    padding: 8rem 0 2rem 0;
  }

  .breadcrumb ul {
    font-size: 1.25rem;
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
}
</style>
