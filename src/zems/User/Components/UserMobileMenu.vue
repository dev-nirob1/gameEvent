<template>
  <ul class="admin-mobile-menu">
    <li>
      <RouterLink to="/user/deposit" class="nav-link">
        <i class="fa-solid fa-circle-dollar-to-slot"></i> Deposit
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/user/deposit-history" class="nav-link">
        <i class="fa-solid fa-clock-rotate-left"></i> Deposit History
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/user/events" class="nav-link">
        <i class="fa-solid fa-calendar-alt "></i>Events
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.admin-mobile-menu {
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

.admin-mobile-menu li {
  flex: 1;
  text-align: center;
}

.admin-mobile-menu a {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: var(--white-color);
  font-size: 14px;
  text-decoration: none;
}

.admin-mobile-menu .router-link-exact-active {
  color: var(--secondary-color) !important;
}

/* Hide on desktop */
@media (min-width: 768px) {
  .admin-mobile-menu {
    display: none;
  }
}
</style>
