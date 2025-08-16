<script setup>
import EventCard from '../Widgets/EventCard.vue';

const events = [
  {
    id: 1,
    image: 'https://cdn.pixabay.com/photo/2018/10/03/08/54/man-3720745_960_720.jpg',
    name: 'Ludo Battle Royale',
    description: 'Compete with top players in a fierce showdown. Test your strategy, speed, and luck in multiple rounds of intense Ludo battles. The last player standing takes home amazing prizes and the ultimate bragging rights.'
  },
  {
    id: 2,
    image: 'https://cdn.pixabay.com/photo/2016/10/16/18/30/not-ludo-1745964_960_720.jpg',
    name: 'Team Ludo Challenge',
    description: 'Form teams and fight for victory in thrilling matches. Coordinate with your teammates, plan your moves carefully, and outsmart the opposition to climb the leaderboard and earn rewards for your team.'
  },
  {
    id: 3,
    image: 'https://cdn.pixabay.com/photo/2018/10/04/07/18/game-3723084_1280.jpg',
    name: 'Speed Ludo Sprint',
    description: 'Fast-paced rounds with exciting rewards. Every second counts in this rapid-fire version of Ludo. Quick thinking and fast moves will determine the winner in this adrenaline-pumping event.'
  },
  {
    id: 4,
    image: 'https://cdn.pixabay.com/photo/2018/10/03/08/26/ludo-3720696_960_720.jpg',
    name: 'Ludo Legends Cup',
    description: 'Battle for the crown and eternal glory. Only the most skilled and experienced players will make it to the finals. Compete against legends and prove your mastery in this prestigious Ludo tournament.'
  },
  {
    id: 5,
    image: 'https://cdn.pixabay.com/photo/2022/01/24/14/24/dice-6963525_960_720.jpg',
    name: 'Classic Ludo Open',
    description: 'Open for all skill levels and ages. Enjoy a friendly but competitive environment where beginners and veterans alike can play, learn strategies, and win exciting prizes.'
  },
  {
    id: 6,
    image: 'https://cdn.pixabay.com/photo/2023/01/15/19/03/gesellschaftsspiel-7720875_1280.jpg',
    name: 'Ludo Pro Series',
    description: 'For pros only — showcase your skills. This event is designed for professional players looking to test their abilities against top-level opponents in a high-stakes Ludo competition.'
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
}
</style>
