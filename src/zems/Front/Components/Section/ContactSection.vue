<script setup>
import BaseTitle from '@/components/Elements/BaseTitle.vue';

const contactInfo = [
  { icon: 'fa-solid fa-phone', title: 'Phone', value: '+880 1234 567 890' },
  { icon: 'fa-solid fa-envelope', title: 'Email', value: 'support@ludogame.com' },
  { icon: 'fa-solid fa-location-dot', title: 'Address', value: '123 Ludo Street, Dhaka, Bangladesh' }
];
</script>
<template>
  <section class="contact-section">
    <div class="container">
      <BaseTitle class="text-center mb-4">Contact Us</BaseTitle>

      <div class="contact-wrapper">
        <!-- Contact Info -->
        <div class="contact-info">
          <h2>Get In Touch</h2>
          <p>We’d love to hear from you! Whether it’s a question about events, registration, or anything else — we’re here to help.</p>
          <ul>
            <li v-for="(info, index) in contactInfo" :key="index">
              <i :class="info.icon"></i>
              <div>
                <strong>{{ info.title }}</strong>
                <p>{{ info.value }}</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <form >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.contact-section {
  padding: 3rem 0;
  color: var(--white-color);
  background-color: var(--primary-color);
}

.contact-wrapper {
  display: block;
}

.contact-info h2 {
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.contact-info p {
  margin-bottom: 1rem;
  opacity: 0.8;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.contact-info i {
  font-size: 1.5rem;
  color: var(--secondary-color);
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: var(--white-color);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.contact-form button {
  background: var(--secondary-color);
  color: var(--white-color);
  border: none;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.contact-form button:hover {
  background: var(--alternative-color);
}

/* Desktop / larger screens */
@media (min-width: 768px) {
  .contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}
</style>
