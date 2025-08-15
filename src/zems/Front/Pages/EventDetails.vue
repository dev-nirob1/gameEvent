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
<BreadCrumb/>
<section class="event-details">
 <div class="container">
   <div>
    <BaseTitle>About Event</BaseTitle>
    <BaseParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis nihil sint! Modi ex doloribus earum consectetur id possimus repellendus incidunt culpa magni doloremque sint et, delectus, dignissimos dicta deleniti asperiores sed commodi mollitia sunt tempore ad ut maiores? Sed enim et velit ullam quaerat veritatis itaque, facilis pariatur necessitatibus.</BaseParagraph>
    <div class="statistics">
      statistics
    </div>
  </div>
 </div>
</section>
</template>


<style scoped>
.event-details{
  padding: 3.75rem 0;
}
</style>
