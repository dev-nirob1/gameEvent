<script setup>
import { ref } from 'vue';
import AccordionFaq from '../Widgets/AccordionFaq.vue';

const faqs = ref([
  {
    id: 1,
    question: 'How do I join a Ludo event?',
    answer: 'Simply register online for your preferred event, receive your player code, and join the match room at the scheduled time.'
  },
  {
    id: 2,
    question: 'Is there any entry fee?',
    answer: 'Most events are free to join, but special tournaments may have a small entry fee to compete for bigger prizes.'
  },
  {
    id: 3,
    question: 'Can I play on mobile?',
    answer: 'Yes! You can join and play from your mobile device or desktop without any issues.',
  },
  {
    id: 4,
    question: 'What if I miss the event time?',
    answer: 'Unfortunately, late joiners may not be allowed once the match starts. Please ensure you join on time.'
  },
]);

const currentOpenItem = ref();
const toggleAccordion = (id) => {
  if (currentOpenItem.value == id) {
    currentOpenItem.value = null;
  } else {
    currentOpenItem.value = id;
  }
};
</script>

<template>
  <section class="faq-section">
    <div class="container">
      <div class="medium-2 gap-2">
        <div>
          <BaseTitle>Got Questions?</BaseTitle>
          <BaseTitle>We Have Answers!</BaseTitle>
          <BaseParagraph>
            Everything you need to know about the upcoming Ludo championship!
            Learn about tournament rules, registration deadlines, prize pool
            distribution, team requirements, and competition format. Let the
            dice roll and may the best strategist win!
          </BaseParagraph>
        </div>
        <div>
          <AccordionFaq v-for="(faq, i) in faqs" :key="i" :currentOpenItem="currentOpenItem" :accordionData="faq"
            :toggleAccordion="toggleAccordion" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  padding: 3.75rem 0;
}

</style>
