<script setup>
import { onMounted, ref } from 'vue';
import BaseButton from '../Elements/BaseButton.vue';
import BaseParagraph from '../Elements/BaseParagraph.vue';
import BaseTitle from '../Elements/BaseTitle.vue';
import ListItem from '../Elements/ListItem.vue';

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolling');
    } else {
      navbar.classList.remove('scrolling');
    }
  });
  // console.log(navbar.childNodes);
  navLinks.childNodes.forEach(element => {
    element.addEventListener('click', () => {
      isMenuOpen.value = false
    })
  });
})
</script>

<template>
  <!-- ======== Navbar section ======== -->
  <header class="navbar">
    <nav class="flex justify-between align-center gap-1 container">
      <!-- Mobile Menu Toggle Button -->

      <!-- Logo -->
      <a href="#" class="logo">
        <!-- <img class="height-full" src="/logo.png" alt="logo" /> -->
        <div>
          <BaseTitle>RannaBari</BaseTitle>
          <BaseParagraph>Every bite tells a story.</BaseParagraph>
        </div>
      </a>
      <BaseButton class="hamburger" @click="toggleMenu">
        <i :class="isMenuOpen ? 'fas fa-xmark' : 'fas fa-bars'" class="fa-2xl"></i>
      </BaseButton>
      <!-- Navigation Links -->
      <ul class="nav-links" :class="{ 'active': isMenuOpen }">
        <ListItem>
          <a href="#">Home</a>
        </ListItem>
        <ListItem>
          <a href="#menu">Menu</a>
        </ListItem>
        <ListItem>
          <a href="#our-story">Our Story</a>
        </ListItem>
        <ListItem>
          <a href="#reservation">Reservation</a>
        </ListItem>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* background-color change on animation  */
.navbar.scrolling {
  background: var(--primary-color);
  transition: background-color 0.3s ease;
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
  width: 60px;;
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

.navbar ul {
  position: absolute;
  left: -100%;
  top: 0;
  list-style: none;
  padding: 2rem;
  margin: 0;
  background-color: var(--primary-color);
  height: 100vh;
  width: 60%;
  transition: all .5s;
}

.navbar .active {
  left: 0;
}

.navbar a {
  text-decoration: none;
}

.navbar ul li a {
  position: relative;
  display: inline-block;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  padding: 0.5rem 0;
}

/* Mobile menu toggle */
.hamburger {
  display: block;
  color: var(--white-color) !important;
  border: none;
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 992px) {
  .navbar ul {
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

  /* expand navlinks on desktop  */
  .hamburger {
    display: none;
  }
}
</style>
