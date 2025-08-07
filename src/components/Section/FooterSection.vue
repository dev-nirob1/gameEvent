<script setup>
import ListItem from '../Elements/ListItem.vue';
import BaseParagraph from '../Elements/BaseParagraph.vue';
import SubTitle from '../Elements/SubTitle.vue';
import BaseTitle from '../Elements/BaseTitle.vue';

const currentYear = new Date().getFullYear();

</script>
<template>
  <footer class="footer">
    <div class="container medium-2 large-3 gap-2 py-3">
      <div>
        <a href="/" class="logo">
          <div>
            <BaseTitle>Ranna Bari</BaseTitle>
            <BaseParagraph>Every bite tells a story.</BaseParagraph>
          </div>
        </a>
        <BaseParagraph>Savor authentic flavors and memorable dining experiences</BaseParagraph>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-pinterest-p"></i></a>
        </div>
      </div>
      <div>
        <SubTitle>Quick Links</SubTitle>
        <ul class="footer-links">
          <ListItem>
            <a href="#">Home</a>
          </ListItem>
          <ListItem>
            <a href="#">Seasonal Menu</a>
          </ListItem>
          <ListItem>
            <a href="#">Our Chefs</a>
          </ListItem>
          <ListItem>
            <a href="#">Food Gallery</a>
          </ListItem>
          <ListItem>
            <a href="#">Contact</a>
          </ListItem>
        </ul>
      </div>

      <div>
        <SubTitle>Visit Us</SubTitle>
        <ul class="footer-links">
          <ListItem>
            <i class="fas fa-map-marker-alt"></i> 123 Gourmet Avenue, Foodie City
          </ListItem>
          <ListItem>
            <i class="fas fa-phone"></i> +1 (555) 123-4567
          </ListItem>
          <ListItem>
            <i class="fas fa-envelope"></i> reservations@rannabari.com
          </ListItem>
          <ListItem>
            <i class="fas fa-clock"></i> Tue-Sun: 5:30 PM - 11:00 PM
          </ListItem>
        </ul>
      </div>

    </div>

    <!-- Copyright & Bottom Bar -->
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Ranna Bari. All rights reserved.</p>
      <div class="flex align-center justify-center gap-1">
        <a href="#">Privacy Policy</a> <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
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
  width: 60px;;
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

/* Footer copyright bar*/
.footer-bottom {
  padding: 1.5rem;
  font-size: 14px;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
}
</style>
