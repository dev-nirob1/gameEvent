<script setup>
import BaseTitle from '@/components/Elements/BaseTitle.vue';
import TestimonialCard from '../Widgets/TestimonialCard.vue';
import BaseButton from '@/components/Elements/BaseButton.vue';

</script>

<template>
  <section class="testimonials">
    <div class="container relative">
      <BaseTitle class="text-center mb-3">Gamers Feedback</BaseTitle>
      <div>
        <TestimonialCard />
      </div>
        <BaseButton class="btn-prev">
          <i class="fa-solid fa-arrow-left"></i>
        </BaseButton>
        <BaseButton class="btn-next">
          <i class="fa-solid fa-arrow-right"></i>
        </BaseButton>
    </div>
  </section>
</template>
<style scoped>
.testimonials {
  padding: 3.75rem 0;
}
.testimonials .btn{
  position: absolute;
  color: var(--white-color);
  top: 50%;
  transform: translateY(-50%);
}
.testimonials .btn-prev{
  left: 0;
}
.testimonials .btn-next{
  right: 0;
}
</style>
