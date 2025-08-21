<script setup>
import { ref } from 'vue';
import TimelineCard from '../Widgets/TimelineCard.vue';
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
      <BaseTitle class="text-center mb-2 medium-mb-5">How To Play</BaseTitle>
      <div class="medium-3 gap-2 relative">
        <TimelineCard v-for="(step, i) in steps" :key="step.id" :step="step" :i="i" />
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

@media (min-width: 768px) {
  .how-to-play .medium-3 {
    padding-left: 0;
  }

}
</style>
