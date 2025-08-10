<script setup>
defineProps({
  review: {
    typeof: Object
  }
})
</script>


<template>
  <div class="testimonial-card">
    <i class="bg-graphic fa-solid fa-quote-right fa-10x"></i>

    <div class="flex align-center gap-1">
      <BaseImage class="height-full width-full"
        :image="review.image"
        alt="review.description" />
      <div>
        <SubTitle>{{review.name}}</SubTitle>
        <span>{{review.role}}</span>
      </div>
    </div>
    <div class="flex">
      <BaseParagraph>
       {{review.review}}
      </BaseParagraph>
    </div>
  </div>
</template>

<style>
.testimonial-card {
  margin: 0 auto;
  max-width: 90%;
  border-radius: .75rem;
  position: relative;
  padding: 2rem 1.5rem;
  background: rgb(from var(--secondary-color)r g b / 5%);
  box-shadow: var(--box-shadow);
  scroll-snap-align: start;
}

.testimonial-card img {
  border-radius: .5rem;
  height: 4rem;
  width: 4rem;
  object-fit: cover;
}

.bg-graphic {
  position: absolute;
  right: 1rem;
  top: -4rem;
  color: rgb(from var(--secondary-color) r g b /60%);
}

@media (min-width: 992px) {

  .testimonial-card {
    max-width: 70%;
  }

  .testimonial-card p,
  .testimonial-card span {
    font-size: 1.15rem;
  }

  .bg-graphic {
    right: 2rem;
    bottom: 0;
  }
}
</style>
