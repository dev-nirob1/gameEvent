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
      <BaseParagraph class="price-badge">Fee: ${{ event.fee }}</BaseParagraph>

      <div class="flex justify-between">
        <BaseParagraph><i class="fa-solid fa-calendar-days"></i> {{ event.startDate }} - 6:00pm</BaseParagraph>
        <BaseParagraph><i class="fa-solid fa-trophy"></i> $<strong>{{ event.prize }}</strong></BaseParagraph>
      </div>

      <SubTitle>{{ event.name }}</SubTitle>
      <BaseParagraph>{{ event.description.substring(0, 70) }}...
      </BaseParagraph>

      <div class="flex align-center gap-1">
        <RouterLink class="btn bg-secondary width-full" to="/events-details/hello">Details</RouterLink>
        <BaseButton class="outline width-full">Entry</BaseButton>
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
  padding: .5rem;
}

.event-card .sub-title {
  margin: .25rem 0 .5rem 0;
}

.event-card p {
  margin: 0 0 .5rem 0;
}

.event-card .image {
  position: relative;
  overflow: hidden;
  height: 220px;
  width: 100%;
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
</style>
