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
      <RouterLink to="/contact-us">
        <i class="fa-solid fa-envelope"></i>
        <span>Contact</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/leaderboard">
        <i class="fa-solid fa-trophy"></i>
        <span>Leaderboard</span>
      </RouterLink>
    </li>
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
  justify-content: space-around;
  align-items: center;
  background: #1e3a8a; /* Replace with your primary color */
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;
}

.mobile-nav-links li {
  /* flex: 1; */
  text-align: center;
}

.mobile-nav-links a {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
  color: white;
  font-size: 14px;
  text-decoration: none;
}

.mobile-nav-links a:hover {
  background: rgba(255, 255, 255, 0.1);
}

.mobile-nav-links i {
  font-size: 18px;
  margin-bottom: 4px;
}

/* Hide on desktop */
@media (min-width: 768px) {
  .mobile-nav-links {
    display: none;
  }
}
</style>
