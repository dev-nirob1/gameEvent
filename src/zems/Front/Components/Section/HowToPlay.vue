<script setup>
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';
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
  <section class="how-to-play">
    <div class="container">
      <BaseTitle class="text-center mb-5">How To Play</BaseTitle>
      <div class="medium-3 gap-2 relative">

        <div v-for="(step, i) in steps" :key="step.id" class="timeline-card">
          <span class="number">{{ i }}</span>
          <BaseImage :image="step.icon" />
          <SubTitle class="mt-1">{{step.title}}</SubTitle>
          <BaseParagraph>{{ step.description }}</BaseParagraph>
        </div>

      </div>
    </div>
  </section>
</template>
<style scoped>
.how-to-play {
  padding: 3.75rem 0;
  background: url('background.svg') center / cover no-repeat fixed;
}

.how-to-play .timeline-card {
  padding: 2rem;
  text-align: center;
  border-radius: 1rem;
  background: rgb(from var(--secondary-color)r g b / 15%);
  position: relative;
}

.how-to-play .timeline-card::before {
  content: "";
  position: absolute;
  top: -2rem;
  left: 0;
  height: 3px;
  width: 100%;
  background: var(--secondary-color);
  z-index: 1;
}

.how-to-play .timeline-card:not(:last-child)::before {
  width: calc(100% + 2rem);
}

.how-to-play .number {
  position: absolute;
  top: -3.5rem;
  left: 50%;
  transform: translate(-50%);
  height: 3rem;
  width: 3rem;
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
</style>
