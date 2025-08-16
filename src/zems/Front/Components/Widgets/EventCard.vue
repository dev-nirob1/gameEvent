<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import { RouterLink } from 'vue-router';

defineProps({
  event: {
    type: Object
  }
})
</script>

<template>
  <div class="event-card">
    <div class="image">
      <BaseImage :image="event.image" alt="project image" />
    </div>
    <div class="p-1">
      <BaseParagraph class="price-badge">Fee: 5$</BaseParagraph>

      <div class="flex justify-between">
        <BaseParagraph>Starts: 15-aug 2025</BaseParagraph>
        <BaseParagraph>Prize: <strong>60</strong>$</BaseParagraph>
      </div>

      <SubTitle>{{ event.name }}</SubTitle>
      <BaseParagraph>{{ event.description.substring(0, 70) }}...
      </BaseParagraph>
      <div class="flex gap-1">
        <BaseButton class="bg-secondary">
          <RouterLink to="/events-details/hello">Details</RouterLink>
        </BaseButton>
        <BaseButton class="outline">Entry</BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  border-radius: .75rem;
  background-color: rgb(from var(--secondary-color)r g b / 10%);
  box-shadow: var(--box-shadow);
  position: relative;
}

.price-badge {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 !important;
  padding: .5rem 1rem;
  background: rgb(from var(--secondary-color)r g b / 90%);
  border-top-left-radius: .75rem;
  font-weight: 600;
}

.event-card a {
  text-decoration: none;
}

.event-card .sub-title {
  margin: .5rem 0;
}

.event-card p {
  margin: 0 0 .5rem 0;
}

.event-card .image {
  position: relative;
  overflow: hidden;
  height: 220px;
  width: auto;
  border-radius: .75rem .75rem 0 0;
}

.event-card .image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all .5s ease-in-out;
}

.event-card .image:hover img {
  transform: scale(1.1);
}

.event-card .btn {
  width: 100%;
  border-radius: .5rem;
  color: var(--white-color);
  padding: .75rem 1.5rem;
}

.event-card .btn.bg-secondary {
  border-color: var(--secondary-color);
}

.event-card .btn.outline {
  border-color: var(--secondary-color);
}

.event-card .btn.bg-secondary:hover {
  border-color: rgb(from var(--secondary-color)r g b / 80%);
  background-color: rgb(from var(--secondary-color)r g b / 80%);
}

.event-card .btn.outline:hover {
  background-color: var(--secondary-color);
}
</style>
