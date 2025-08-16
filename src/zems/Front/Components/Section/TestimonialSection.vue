<script setup>
import { computed, ref } from 'vue';
import TestimonialCard from '../Widgets/TestimonialCard.vue';

const testimonials = ref([
  {
    id: 1,
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "John Carter",
    role: "Champion 2024",
    review: "The Ludo Battle Royale was thrilling! The competition was intense, and I loved the fair play and organization. Can't wait for next year!"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Emily Watson",
    role: "Event Participant",
    review: "Amazing experience participating in the Ludo event. The rules were clear, the matches exciting, and the support team was very helpful."
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Michael Brown",
    role: "Event Organizer",
    review: "Organizing the Ludo Battle Royale was a fantastic journey. Seeing participants enjoy and compete fairly made all the effort worthwhile."
  }
])


const currentReviewId = ref(1)

const handlePrevReview = () => {
  if (currentReviewId.value > 1) {
    currentReviewId.value--
  }
}

const handleNextReview = () => {
  if (currentReviewId.value < testimonials.value.length) {
    currentReviewId.value++
  }
}

const activeReview = computed(() => {
  return testimonials.value.find(t => t.id == currentReviewId.value)
})
</script>

<template>
  <section class="testimonials bg-light">
    <div class="container relative">
      <BaseTitle class="text-center mb-3">Gamers Feedback</BaseTitle>

      <div>
        <TestimonialCard v-if="activeReview" :review="activeReview" />
      </div>

      <BaseButton @click="handlePrevReview" class="btn-prev">
        <i class="fa-solid fa-arrow-left"></i>
      </BaseButton>
      <BaseButton @click="handleNextReview" class="btn-next">
        <i class="fa-solid fa-arrow-right"></i>
      </BaseButton>
    </div>
  </section>
</template>
<style scoped>
.testimonials {
  padding: 3.75rem 0;
}

.testimonials .btn {
  position: absolute;
  color: var(--white-color);
  top: 50%;
  transform: translateY(-50%);
}

.testimonials .btn-prev {
  left: -1rem;
}

.testimonials .btn-next {
  right: -1rem;
}

@media (min-width: 768px){
  .testimonials .btn-prev {
  left: 0;
}

.testimonials .btn-next {
  right: 0;
}
}
</style>
