<script setup>
import { ref } from 'vue';
const steps = ref([
  {
    id: 1,
    title: "Register & Join",
    description: "Sign up for the Ludo event online and secure your spot.",
    icon: "/verify.png"
  },
  {
    id: 2,
    title: "Get Your Code",
    description: "Receive your unique player code and room link via email.",
    icon: "/one-time-password.png"
  },
  {
    id: 3,
    title: "Join the Room",
    description: "Log in and join the Ludo match room at the scheduled time.",
    icon: "/team.png"
  },

])
</script>

<template>
  <section class="how-to-play bg-light">
    <div class="container">
      <BaseTitle class="text-center mb-5">How To Play</BaseTitle>
      <div class="medium-3 gap-2 relative">
        <div v-for="(step, i) in steps" :key="step.id" class="timeline-card">
          <span class="number">{{ i + 1 }}</span>
          <BaseImage :image="step.icon" />
          <SubTitle class="mt-1">{{ step.title }}</SubTitle>
          <BaseParagraph>{{ step.description }}</BaseParagraph>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.how-to-play {
  padding: 3.75rem 0;
}

.how-to-play .medium-3 {
  padding-left: 2rem;
}

.how-to-play .timeline-card {
  position: relative;
  padding: 2rem;
  text-align: center;
  border-radius: .75rem;
  background: rgb(from var(--secondary-color)r g b / 15%);
}

.how-to-play .timeline-card::before {
  content: '';
  position: absolute;
  left: -1.5rem;
  top: 0;
  height: 100%;
  width: 3px;
  background: var(--secondary-color);
  z-index: 1;
}

.how-to-play .timeline-card:not(:last-child)::before {
  height: calc(100% + 2rem);
}

.how-to-play .number {
  position: absolute;
  top: 50%;
  left: -1.5rem;
  transform: translate(-50%);
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background: var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  font-size: 1.5rem;
  font-weight: 800;
}

.how-to-play .timeline-card img {
  width: 80px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .how-to-play .medium-3 {
    padding-left: 0;
  }

  .how-to-play .timeline-card::before {
    top: -2rem;
    left: 0;
    height: 3px;
    width: 100%;
  }

  .how-to-play .timeline-card:not(:last-child)::before {
    width: calc(100% + 2rem);
    height: 3px;
  }

  .how-to-play .number {
    top: -3.25rem;
    left: 50%;
  }
}
</style>
