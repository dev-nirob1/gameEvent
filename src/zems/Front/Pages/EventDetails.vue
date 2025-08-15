<script setup>
import BreadCrumb from '@/components/Widgets/BreadCrumb.vue';

const event = {
  name: 'Ludo Battle Royale',
  image: 'https://images.unsplash.com/photo-1520975922284-5f6830b51a3b?q=80&w=1920&auto=format&fit=crop',
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
}
</script>


<template>
  <BreadCrumb />
  <section class="event-details">
    <div class="container">

      <!-- About Event -->
      <BaseTitle>About Event</BaseTitle>
      <BaseParagraph>
        Join the ultimate Ludo showdown and compete with players worldwide for exciting prizes and glory! Show your
        skills, beat the competition, and take home the crown.
      </BaseParagraph>

      <!-- Statistics -->
      <ul class="small-2 larger-4 gap-2 statistics">
        <ListItem>
          <i class="fa-solid fa-tag fa-3x"></i>
          <div>
            <BaseTitle>$5</BaseTitle>
            <BaseParagraph>Entry Fee</BaseParagraph>
          </div>
        </ListItem>
        <ListItem>
          <i class="fa-solid fa-trophy fa-3x"></i>
          <div>
            <BaseTitle>$500</BaseTitle>
            <BaseParagraph>Prize Pool</BaseParagraph>
          </div>
        </ListItem>
        <ListItem>
          <i class="fa-solid fa-percent fa-3x"></i>
          <div>
            <BaseTitle>10%</BaseTitle>
            <BaseParagraph>Platform Cut</BaseParagraph>
          </div>
        </ListItem>
        <ListItem>
          <i class="fa-solid fa-gamepad fa-3x"></i>
          <div>
            <BaseTitle>Online</BaseTitle>
            <BaseParagraph>Mode</BaseParagraph>
          </div>
        </ListItem>
      </ul>

      <!-- Rules -->
      <div class="rules mt-2">
        <BaseTitle>Rules & Regulations</BaseTitle>
        <ul>
          <ListItem>Use the official Ludo app for gameplay.</ListItem>
          <ListItem>Screen recording must be enabled during matches.</ListItem>
          <ListItem>Stable internet connection is mandatory; repeated disconnects may cause forfeits.</ListItem>
          <ListItem>Usernames must match your registered ID.</ListItem>
          <ListItem>Bug exploitation, macro tools, or hacks result in instant disqualification.</ListItem>
          <ListItem>Referee decisions are final and binding.</ListItem>
          <ListItem>Be ready 10 minutes before match time; late join may be disqualified.</ListItem>
        </ul>
      </div>

      <div class="medium-2 gap-2">
        <!-- Event Schedule -->
        <div class="schedule mt-2">
          <BaseTitle>Event Schedule</BaseTitle>
          <ul>
            <ListItem>Registration: Aug 20 – Aug 25</ListItem>
            <ListItem>Preliminary Rounds: Aug 26 – Aug 28</ListItem>
            <ListItem>Final Match: Aug 30, 8 PM</ListItem>
          </ul>
        </div>

        <!-- Eligibility -->
        <div class="eligibility mt-2">
          <BaseTitle>Eligibility</BaseTitle>
          <ul>
            <ListItem>Participants must be 18+ years old.</ListItem>
            <ListItem>Must have a smartphone compatible with the official Ludo app.</ListItem>
            <ListItem>Open worldwide unless restricted by local laws.</ListItem>
          </ul>
        </div>
      </div>

      <div class="medium-2 gap-2">
        <!-- If You Win -->
        <div class="winning-process mt-2">
          <BaseTitle>If You Win</BaseTitle>
          <ul>
            <ListItem>Our team verifies your match and recording.</ListItem>
            <ListItem>You will receive a win confirmation within 24 hours.</ListItem>
            <ListItem>Claim your prize via your player dashboard.</ListItem>
            <ListItem>Payout is made after the platform cut.</ListItem>
          </ul>
        </div>

        <!-- Fees & Commission -->
        <div class="fees mt-2">
          <BaseTitle>Fees & Commission</BaseTitle>
          <BaseParagraph>
            Joining Fee: $5 • Platform Cut: 10%
          </BaseParagraph>
          <BaseParagraph>
            Example: Win $100 → You receive $90
          </BaseParagraph>
        </div>

      </div>
      <div class="medium-2 gap-2">
        <!-- Withdrawal Process -->
        <div class="withdrawal-process mt-2">
          <BaseTitle>Withdrawal Process</BaseTitle>
          <ul>
            <ListItem>Minimum withdrawal amount: $5</ListItem>
            <ListItem>Processing time: 3-5 business days</ListItem>
            <ListItem>Methods: Bkash / Nagad / Bank / UPI (verified accounts only)</ListItem>
            <ListItem>Dispute window: 24 hours after payout</ListItem>
          </ul>
        </div>

        <!-- Contact / Support -->
        <div class="contact-support mt-2">
          <BaseTitle>Contact / Support</BaseTitle>
          <BaseParagraph>Email: support@ludoevent.com</BaseParagraph>
          <BaseParagraph>Live Chat: Available on player dashboard</BaseParagraph>
        </div>
      </div>

    </div>
  </section>
</template>



<style scoped>
.event-details {
  padding: 3.75rem 0;
  background: rgb(from var(--secondary-color) r g b / 5%);
}

.event-details .statistics {
  padding: 0;
  margin-top: 2rem;
}

.event-details .statistics li {
  background: rgb(from var(--secondary-color)r g b / 15%);
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
