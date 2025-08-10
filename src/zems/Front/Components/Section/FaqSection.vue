<script setup>
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import { ref } from 'vue';

const faqs = ref([
  {
    question: 'How do I join a Ludo event?',
    answer: 'Simply register online for your preferred event, receive your player code, and join the match room at the scheduled time.',
    open: false
  },
  {
    question: 'Is there any entry fee?',
    answer: 'Most events are free to join, but special tournaments may have a small entry fee to compete for bigger prizes.',
    open: false
  },
  {
    question: 'Can I play on mobile?',
    answer: 'Yes! You can join and play from your mobile device or desktop without any issues.',
    open: false
  },
  {
    question: 'What if I miss the event time?',
    answer: 'Unfortunately, late joiners may not be allowed once the match starts. Please ensure you join on time.',
    open: false
  },
]);

const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<template>
  <section class="faq-section">
    <div class="container">
      <BaseTitle class="text-center mb-5">Frequently Asked Questions</BaseTitle>

      <div class="faq-list">
        <div v-for="(faq, i) in faqs" :key="i" class="faq-item">
          <button class="faq-question" @click="toggleFAQ(i)">
            {{ faq.question }}
            <span class="icon">{{ faq.open ? '-' : '+' }}</span>
          </button>
          <BaseParagraph v-if="faq.open" class="faq-answer">
            {{ faq.answer }}
          </BaseParagraph>
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
  border-bottom: 1px solid rgba(255,255,255,0.1);
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
