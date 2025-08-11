<script setup>
import { ref } from 'vue';
import AccordionFaq from '../Widgets/AccordionFaq.vue';

const faqs = ref([
  {
    id: 1,
    question: 'How do I join a Ludo event?',
    answer: 'Simply register online for your preferred event, receive your player code, and join the match room at the scheduled time.',
    open: false
  },
  {
    id: 2,
    question: 'Is there any entry fee?',
    answer: 'Most events are free to join, but special tournaments may have a small entry fee to compete for bigger prizes.',
    open: false
  },
  {
    id: 3,
    question: 'Can I play on mobile?',
    answer: 'Yes! You can join and play from your mobile device or desktop without any issues.',
    open: false
  },
  {
    id: 4,
    question: 'What if I miss the event time?',
    answer: 'Unfortunately, late joiners may not be allowed once the match starts. Please ensure you join on time.',
    open: false
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
  background: var(--primary-color);
  color: var(--white-color);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 0;
}

.faq-question {
  width: 100%;
  background: none;
  border: none;
  color: inherit;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.faq-question .icon {
  font-size: 1.5rem;
  font-weight: bold;
}

.faq-answer {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
