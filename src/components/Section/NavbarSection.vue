<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
onMounted(() => {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolling');
    } else {
      navbar.classList.remove('scrolling');
    }
  });
});

const route = useRoute()
const routeName = ref(route.name)

watchEffect(() => {
  routeName.value = route.name
})

</script>

<template>
  <!-- ======== Navbar section ======== -->
  <header class="navbar" :class="{ 'mobile-home': routeName === 'home' }">
    <nav class="flex justify-between align-center gap-1 container">
      <!-- Logo -->
      <RouterLink to="/" class="logo">
        <!-- <img class="height-full" src="/logo.png" alt="logo" /> -->
        <div>
          <BaseTitle>LudoClash</BaseTitle>
          <BaseParagraph>Roll the dice. Rule the board.</BaseParagraph>
        </div>
      </RouterLink>
      <div class="profile">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile">
      </div>
      <!-- Navigation Links -->
      <ul class="nav-links">
        <ListItem>
          <RouterLink to="/">Home</RouterLink>
        </ListItem>
        <ListItem>
          <RouterLink to="/events">Events</RouterLink>
        </ListItem>
        <ListItem>
          <RouterLink to="/contact-us">Contact Us</RouterLink>
        </ListItem>
        <ListItem>
          <RouterLink to="/leaderboard">Leaderboard</RouterLink>
        </ListItem>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
/* background-color change on animation  */
.navbar.scrolling {
  background: rgb(from var(--secondary-color)r g b / 40%);
  transition: background-color 0.3s ease;
}

.navbar.mobile-home {
  display: block;
}

.navbar {
  backdrop-filter: blur(50px);
  color: var(--white-color);
  box-shadow: var(--box-shadow);
  position: fixed;
  top: 0;
  left: 0;
  padding: .5rem 0;
  width: 100%;
  z-index: 999;
}

.navbar .profile {
  width: 3rem;
  height: 3rem;
}

.navbar .profile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* Logo Styles */
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  text-decoration: none;
}

.logo p {
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
}

.logo img {
  height: auto;
  width: 60px;
}

.navbar a {
  text-decoration: none;
}

.navbar ul {
  display: none;
}

.navbar ul li a {
  position: relative;
  display: inline-block;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  padding: 0.5rem 0;
}

@media (min-width: 768px) {
  .navbar .profile {
    display: none;
  }

  .navbar ul {
    list-style: none;
    position: inherit;
    display: flex;
    align-items: center;
    width: auto;
    height: auto;
    gap: 2rem;
    background: transparent;
    padding: 0;
  }

  /* Desktop menu hover effects */
  .navbar ul li a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--secondary-color);
    transition: width 0.3s ease;
  }

  .navbar ul li a:hover::after {
    width: 100%;
  }
}
</style>
