<script setup>
import EventBanner from '../Components/Section/EventBanner.vue';

const event = {
  name: 'Ludo Battle Royale',
  image: 'https://cdn.pixabay.com/photo/2018/10/04/07/18/game-3723084_1280.jpg',
  date: '25 Aug 2025',
  time: '6:00 PM',
  entryFee: '5',
  prizePool: '500',
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

const handleGoBack = () => {
  window.history.back()
}

</script>

<template>
  <EventBanner :handleGoBack="handleGoBack" :name="event.name" :description="event.description" :image="event.image" />

  <!-- Event Details -->
  <section class="event-details">
    <div class="container">
      <!-- Statistics -->
      <ul class="small-2 larger-4 gap-2 statistics">
        <ListItem>
          <i class="fa-solid fa-tag fa-3x"></i>
          <div>
            <SubTitle>${{ event.entryFee }}</SubTitle>
            <BaseParagraph>Entry Fee</BaseParagraph>
          </div>
        </ListItem>
        <ListItem>
          <i class="fa-solid fa-trophy fa-3x"></i>
          <div>
            <SubTitle>${{ event.prizePool }}</SubTitle>
            <BaseParagraph>Prize Pool</BaseParagraph>
          </div>
        </ListItem>
        <ListItem>
          <i class="fa-solid fa-percent fa-3x"></i>
          <div>
            <SubTitle>{{ event.cutPercentage }}%</SubTitle>
            <BaseParagraph>Platform Cut</BaseParagraph>
          </div>
        </ListItem>
        <ListItem>
          <i class="fa-solid fa-calendar-days fa-3x"></i>
          <div>
            <SubTitle>{{ event.date }} - {{ event.time }}</SubTitle>
            <BaseParagraph>Starting</BaseParagraph>
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
/* Statistics */
.event-details {
  padding: 3.75rem 0;
  background: rgb(from var(--secondary-color) r g b / 5%);
}

.event-details .statistics {
  padding: 0;
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

.event-details ul {
  padding-left: 1.5rem;
}
</style>
