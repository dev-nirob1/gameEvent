<template>
  <ul class="mobile-nav-links">
    <li>
      <RouterLink to="/">
        <i class="fa-solid fa-home"></i>
        <span>Home</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/events">
        <i class="fa-solid fa-calendar"></i>
        <span>Events</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/login">
        <i class="fa-solid fa-login"></i>
        <span>Login</span>
      </RouterLink>
    </li>
    <!-- <li>
      <RouterLink to="/withdraw-history">
        <i class="fa-solid fa-envelope"></i>
        <span>History</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/my-event">
        <i class="fa-solid fa-trophy"></i>
        <span>Event</span>
      </RouterLink>
    </li> -->
  </ul>
</template>

<style scoped>
.mobile-nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: var(--alternative-color);
  color: var(--white-color);
  z-index: 999;
}

.mobile-nav-links li {
  flex: 1;
  text-align: center;
}

.mobile-nav-links a {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: var(--white-color);
  font-size: 14px;
  text-decoration: none;
}

.mobile-nav-links .router-link-exact-active{
  color: var(--secondary-color) !important;
}

/* Hide on desktop */
@media (min-width: 768px) {
  .mobile-nav-links {
    display: none;
  }
}
</style>
