<script setup>
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import EventCard from '../Widgets/EventCard.vue';

const events = [
  {
    id: 1,
    image: 'https://cdn.pixabay.com/photo/2018/10/03/08/54/man-3720745_960_720.jpg',
    name: 'Ludo Battle Royale',
    description: 'Compete with top players in a fierce showdown.',
  },
  {
    id: 2,
    image: 'https://cdn.pixabay.com/photo/2016/10/16/18/30/not-ludo-1745964_960_720.jpg',
    name: 'Team Ludo Challenge',
    description: 'Form teams and fight for victory in thrilling matches.',
  },
  {
    id: 3,
    image: 'https://cdn.pixabay.com/photo/2018/10/04/07/18/game-3723084_1280.jpg',
    name: 'Speed Ludo Sprint',
    description: 'Fast-paced rounds with exciting rewards.',
  },
  {
    id: 4,
    image: 'https://cdn.pixabay.com/photo/2018/10/03/08/26/ludo-3720696_960_720.jpg',
    name: 'Ludo Legends Cup',
    description: 'Battle for the crown and eternal glory.',
  },
  {
    id: 5,
    image: 'https://cdn.pixabay.com/photo/2022/01/24/14/24/dice-6963525_960_720.jpg',
    name: 'Classic Ludo Open',
    description: 'Open for all skill levels and ages.',
  },
  {
    id: 6,
    image: 'https://cdn.pixabay.com/photo/2023/01/15/19/03/gesellschaftsspiel-7720875_1280.jpg',
    name: 'Ludo Pro Series',
    description: 'For pros only — showcase your skills.',
  },
];
</script>

<template>
  <section class="events-section">
    <div class="container">
      <BaseTitle class="text-center mb-2">Upcoming Events</BaseTitle>
      <div class="medium-2 large-3 gap-2">
        <EventCard v-for="event in events" :key="event.id" :event="event"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
.events-section {
  padding: 3.75rem 0;
  color: var(--white-color);
  background-color: var(--primary-color);
}
</style>
