<template>
  <section class="hero">
    <div class="content container">
      <HeroTitle>Ludo Legends <span class="highlight">CHAMPIONSHIP</span> 2025</HeroTitle>
      <BaseParagraph>
        Roll the dice, challenge skilled players, and rise to the top in the biggest Ludo battle of the year! Win
        amazing rewards, earn bragging rights, and become a true Ludo Legend.
      </BaseParagraph>
      <div class="flex justify-center gap-1">
        <BaseButton class="bg-secondary">Join the Battle</BaseButton>
        <BaseButton class="outline">View Leaderboard</BaseButton>
      </div>
    </div>
  </section>
</template>
<style scoped>
.hero {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(to bottom, rgb(from var(--primary-color) r g b / 70%), rgb(from var(--primary-color) r g b / 70%)), url('https://cdn.pixabay.com/photo/2018/10/03/08/55/man-3720750_1280.jpg') center / cover no-repeat;
}

.hero .highlight {
  color: var(--secondary-color)
}

/* buttons styles  */
.hero .btn {
  color: var(--white-color);
  border-radius: .5rem;
  padding: .75rem 1rem;
}

.hero .btn.outline {
  border-color: var(--secondary-color);
  color: var(--white-color);
}

.hero .btn.outline:hover {
  background: rgb(from var(--primary-color) r g b / 30%);
  transform: translateY(-.25rem);
  border-color: var(--secondary-color);
  color: var(--secondary-color);
}

.hero .btn.bg-secondary {
  border-color: var(--secondary-color);
}

.hero .btn.btn.bg-secondary:hover {
  transform: translateY(-.25rem);
  border-color: var(--alternative-color);
  background-color: var(--alternative-color);
}

@media (min-width: 768px) {
  .hero {
  min-height: 100vh;
  }
  .hero .content {
    max-width: 80%;
  }

  .hero p {
    font-size: 1.25rem;
  }

  .hero .btn {
    padding: 1rem 2rem;
  }
}

@media (min-width: 992px) {
  .hero .content {
    max-width: 60%;
  }

  .hero .hero-title {
    font-size: 3.5rem;
  }
}
</style>
