<script setup>
defineProps({
  step: {
    type: Object
  },
  i: {
    type: Number
  }
})
</script>

<template>
  <div class="timeline-card">
    <span class="number">{{ i + 1 }}</span>
    <BaseImage :image="step.icon" />
    <SubTitle class="mt-1">{{ step.title }}</SubTitle>
    <BaseParagraph>{{ step.description }}</BaseParagraph>
  </div>
</template>
<style scoped>

.how-to-play .timeline-card {
  position: relative;
  padding: 2rem;
  text-align: center;
  border-radius: .75rem;
  background: rgb(from var(--secondary-color)r g b / 15%);
}

.timeline-card p {
  margin-top: .5rem;
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
