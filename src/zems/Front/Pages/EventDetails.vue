<script setup>
import EventBanner from '../Components/Section/EventBanner.vue';

const event = {
  name: 'Ludo Battle Royale',
  image: 'https://cdn.pixabay.com/photo/2018/10/04/07/18/game-3723084_1280.jpg',
  date: '25 August 2025',
  time: '6:00 PM',
  entryFee: '$5',
  prizePool: '$500',
  mode: 'Online',
  type: 'Solo',
  cutPercentage: 10,
  description:
    'Join the ultimate Ludo showdown and compete with players worldwide for exciting prizes and glory!',
  rules: [
    'Use the official Ludo app for gameplay.',
    'Screen recording must be enabled during matches.',
    'Stable internet connection is mandatory; repeated disconnects may cause forfeits.',
    'Usernames must match your registered ID.',
    'Bug exploitation, macro tools, or hacks result in instant disqualification.',
    'Referee decisions are final and binding.',
    'Be ready 10 minutes before match time; late join may be disqualified.'
  ],
  withdrawal: {
    minAmount: '$5',
    processing: '3-5 business days',
    methods: 'Bkash/Nagad/Bank/UPI (verified only)',
    disputeWindow: '24 hours'
  }
};

// 🎯 Derived statistics dynamically
const statistics = [
  { icon: "fa-solid fa-tag", value: event.entryFee, label: "Entry Fee" },
  { icon: "fa-solid fa-trophy", value: event.prizePool, label: "Prize Pool" },
  { icon: "fa-solid fa-percent", value: `${event.cutPercentage}%`, label: "Platform Cut" },
  { icon: "fa-solid fa-calendar-days", value: event.date, label: "Starting Date" }
];
</script>

<template>
  <!-- Banner -->
  <!-- <section class="event-banner" :style="{ backgroundImage: `url(${event.image})` }">
    <div class="overlay"></div>
    <div class="banner-content">
      <h1>{{ event.name }}</h1>
      <p>{{ event.description }}</p>
      <BaseButton color="primary">Register Now</BaseButton>
    </div>
  </section> -->

  <EventBanner :name="event.name" :description="event.description" :image="event.image"/>

  <!-- Event Details -->
  <section class="event-details">
    <div class="container">
      <!-- Statistics -->
      <ul class="small-2 larger-4 gap-2 statistics">
        <ListItem v-for="(item, i) in statistics" :key="i">
          <i :class="[item.icon, 'fa-3x']"></i>
          <div>
            <BaseTitle>{{ item.value }}</BaseTitle>
            <BaseParagraph>{{ item.label }}</BaseParagraph>
          </div>
        </ListItem>
      </ul>

      <!-- Rules -->
      <div class="rules mt-2">
        <SubTitle>Rules & Regulations</SubTitle>
        <ul>
          <ListItem v-for="(rule, i) in event.rules" :key="i">{{ rule }}</ListItem>
        </ul>
      </div>

      <!-- Withdrawal -->
      <div class="withdrawal mt-2">
        <SubTitle>Withdrawal Process</SubTitle>
        <ul>
          <ListItem>Minimum withdrawal: {{ event.withdrawal.minAmount }}</ListItem>
          <ListItem>Processing: {{ event.withdrawal.processing }}</ListItem>
          <ListItem>Methods: {{ event.withdrawal.methods }}</ListItem>
          <ListItem>Dispute window: {{ event.withdrawal.disputeWindow }}</ListItem>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Banner */
/* .event-banner {
  position: relative;
  background-size: cover;
  background-position: center;
  padding: 6rem 2rem;
  color: #fff;
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
}

.event-banner .overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
}

.banner-content {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  z-index: 1;
}

.banner-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
} */

/* Statistics */
.event-details {
  padding: 3.75rem 0;
  background: rgb(from var(--secondary-color) r g b / 5%);
}

.event-details .statistics {
  padding: 0;
  margin-top: 2rem;
}

.event-details .statistics li {
  background: rgb(from var(--secondary-color) r g b / 15%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  border-radius: .75rem;
}

.event-details .statistics li p {
  margin: 0;
}
</style>
