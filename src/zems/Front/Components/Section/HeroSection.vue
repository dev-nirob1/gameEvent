<template>
  <section class="hero">
    <!-- Background Image Overlay -->
    <div class="background-image"></div>

    <!-- Animated SVG icons -->
    <div class="svg-icons">
      <svg class="dice" viewBox="0 0 64 64">
        <rect width="64" height="64" rx="12" fill="var(--secondary-color)" />
        <circle cx="32" cy="32" r="5" fill="var(--white-color)" />
      </svg>
      <svg class="star" viewBox="0 0 24 24">
        <path
          d="M12 2l2.9 6h6.3l-5 4.9L17.8 20 12 16.5 6.2 20l1.6-7.1-5-4.9h6.3L12 2z"
          fill="var(--alternative-color)"
        />
      </svg>
    </div>

    <!-- Hero Content -->
    <div class="hero-content">
      <h1>Ludo Clash Championship 2025</h1>
      <p>The ultimate online Ludo battle. Compete with real players and become a legend!</p>
      <button class="play-btn">Play Now</button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  background-color: var(--primary-color);
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  overflow: hidden;
}

/* Background Ludo Image */
.background-image {
  position: absolute;
  inset: 0;
  background-image: url('https://cdn.pixabay.com/photo/2018/10/03/08/55/man-3720750_1280.jpg'); /* replace with your own */
  background-size: cover;
  background-position: center;
  opacity: 0.15;
  z-index: 1;
  filter: brightness(1.2) blur(2px);
}

/* Hero Text */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.hero-content h1 {
  font-size: 3rem;
  color: var(--secondary-color);
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
}

.hero-content p {
  margin: 1rem 0 2rem;
  font-size: 1.25rem;
  color: var(--white-color);
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

/* Play Now Button */
.play-btn {
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--alternative-color);
  color: var(--white-color);
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
}

.play-btn:hover {
  background-color: var(--secondary-color);
}

/* Animated SVG Icons */
.svg-icons {
  position: absolute;
  z-index: 1;
}

.dice {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 60px;
  height: 60px;
  animation: float 5s ease-in-out infinite;
}

.star {
  position: absolute;
  bottom: 10%;
  right: 7%;
  width: 40px;
  height: 40px;
  animation: spin 8s linear infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(10deg);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(360deg) scale(1.1);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .play-btn {
    padding: 0.6rem 1.5rem;
  }

  .dice {
    width: 45px;
    height: 45px;
    left: 3%;
    top: 15%;
  }

  .star {
    width: 30px;
    height: 30px;
    right: 5%;
    bottom: 15%;
  }
}
</style>
