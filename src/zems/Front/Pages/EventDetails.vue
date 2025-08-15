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
      <div>
        <BaseTitle>About Event</BaseTitle>
        <BaseParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis nihil sint! Modi ex
          doloribus earum consectetur id possimus repellendus incidunt culpa magni doloremque sint et, delectus,
          dignissimos dicta deleniti asperiores sed commodi mollitia sunt tempore ad ut maiores? Sed enim et velit ullam
          quaerat veritatis itaque, facilis pariatur necessitatibus.</BaseParagraph>

        <ul class="small-2 larger-4 gap-2 statistics">
          <!-- individual stats component  -->
          <ListItem>
            <i class="fa-solid fa-tag fa-3x"></i>
            <div>
              <BaseTitle>560+</BaseTitle>
              <BaseParagraph>Entry Fee</BaseParagraph>
            </div>
          </ListItem>
          <ListItem>
            <i class="fa-solid fa-users fa-3x"></i>
            <div>
              <BaseTitle>197K+</BaseTitle>
              <BaseParagraph>Price Pool</BaseParagraph>
            </div>
          </ListItem>
          <ListItem>
            <i class="fa-solid fa-store fa-3x"></i>
            <div>
              <BaseTitle>268+</BaseTitle>
              <BaseParagraph>Partner Stores</BaseParagraph>
            </div>
          </ListItem>
          <ListItem>
            <i class="fa-solid fa-percent fa-3x"></i>
            <div>
              <BaseTitle>340+</BaseTitle>
              <BaseParagraph>Exclusive Deals</BaseParagraph>
            </div>
          </ListItem>
        </ul>

        <div class="rules mt-2">
          <BaseTitle>Rules & Regulations</BaseTitle>
          <ul>
            <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing.</ListItem>
          </ul>
        </div>
        <div class="withdrawal-process mt-2">
          <BaseTitle>Withdrawal Process</BaseTitle>
          <ul>
            <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipisicing.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ListItem>
          </ul>
        </div>
        <div class="fees mt-2">
  <BaseTitle>Fees & Commission</BaseTitle>
  <BaseParagraph>
    Joining Fee:  • Platform Cut: 10%
  </BaseParagraph>
  <BaseParagraph>
    Example: Win $100 → You receive $60
  </BaseParagraph>
</div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.event-details {
  padding: 3.75rem 0;
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
