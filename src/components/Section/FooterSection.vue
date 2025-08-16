<script setup>
import { RouterLink } from 'vue-router';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container medium-2 large-3 gap-2 py-3">
      <div>
        <RouterLink to="/" class="logo">
          <div>
            <BaseTitle>LudoClash</BaseTitle>
            <BaseParagraph>Roll. Win. Conquer. Repeat.</BaseParagraph>
          </div>
        </RouterLink>
        <BaseParagraph>
          Join the ultimate Ludo gaming event and compete with players worldwide for epic rewards and glory!
        </BaseParagraph>
        <div class="social-links">
          <RouterLink to=""><i class="fab fa-facebook-f"></i></RouterLink>
          <RouterLink to=""><i class="fab fa-twitter"></i></RouterLink>
          <RouterLink to=""><i class="fab fa-instagram"></i></RouterLink>
          <RouterLink to=""><i class="fab fa-youtube"></i></RouterLink>
        </div>
      </div>

      <div>
        <SubTitle>Quick Links</SubTitle>
        <ul class="footer-links">
          <ListItem>
            <RouterLink to="">Schedule</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">How To Play</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Leaderboard</RouterLink>
          </ListItem>
          <ListItem>
            <RouterLink to="">Register</RouterLink>
          </ListItem>
        </ul>
      </div>

      <div>
        <SubTitle>Stay Updated</SubTitle>
        <BaseParagraph>Subscribe to our newsletter for the latest news and event announcements.</BaseParagraph>
        <form class="subscribe-form">
          <InputField type="email" placeholder="Your email address" required />
          <BaseButton class="bg-secondary" type="submit">
            <i class="fas fa-paper-plane text-white"></i>
          </BaseButton>
        </form>
      </div>
    </div>

    <div class="footer-bottom bg-light">
      <BaseParagraph>&copy; {{ currentYear }} LudoX. All rights reserved.</BaseParagraph>
      <div class="flex align-center justify-center gap-1">
        <a href="#">Privacy Policy</a> <a href="#">Terms & Conditions</a>
      </div>
    </div>
  </footer>
</template>


<style scoped>
.footer {
  display: none;
  background-color: var(--primary-color);
  color: var(--white-color);
}

.footer h5 {
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  color: var(--secondary-color)
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.logo p {
  margin-top: -.25rem;
  font-size: 0.9rem;
}

.logo img {
  height: auto;
  width: 60px;

}


.social-links {
  display: flex;
  gap: 1rem;
}

/* Social links with hover effects */
.social-links a {
  display: inline-block;
  text-decoration: none;
  font-size: 1.25rem;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(248, 244, 233, 0.1);
}

.social-links a:hover i {
  transform: scale(1.2);
  transition: all 0.3s ease;
}

.footer h5::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 2px;
  background-color: var(--secondary-color);
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer ul li {
  margin: 0;
  padding: 0;
}

.footer li i {
  color: var(--secondary-color);
  margin-right: .25rem;
}

.footer ul a {
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer ul a:hover {
  color: var(--secondary-color);
  padding-left: 5px;
}

.footer .subscribe-form {
  display: flex;
}

.footer .subscribe-form input {
  flex: 1;
  padding: 0.8rem 1.2rem;
  border: none;
  outline: none;
  border-radius: .5rem 0 0 .5rem;
  font-size: 0.95rem;
  background-color: var(--white-color);
}

.footer .subscribe-form .btn {
  padding: 1rem 3rem;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border: none;
  border-radius: 0 .5rem .5rem 0;
}

/* Footer copyright bar*/
.footer-bottom {
  padding: 1.5rem;
  font-size: 14px;
  text-align: center;
}
@media (min-width: 768px){
  .footer{
    display: block;
  }
}
</style>
