<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import SubTitle from '@/components/Elements/SubTitle.vue';

defineProps({
  event: {
    type: Object
  }
})
</script>

<template>
  <div class="event-card">
    <div class="image">
      <BaseImage :image="event.image" alt="project image" />
    </div>
    <div class="p-1">
      <SubTitle>{{ event.title }}</SubTitle>
      <BaseParagraph>{{ event.description }}
      </BaseParagraph>
      <div class="flex gap-1">
        <BaseButton class="bg-secondary">Details</BaseButton>
        <BaseButton class="outline">Entry</BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-card {
  border-radius: .75rem;
  background-color: rgb(from var(--secondary-color)r g b / 10%);
  box-shadow: var(--box-shadow);
}
.event-card p {
  margin-top: .5rem;
}
.event-card .image {
  position: relative;
  overflow: hidden;
  height: 220px;
  width: auto;
  border-radius: .75rem .75rem 0 0;
}
.event-card .image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all .5s ease-in-out;
}
.event-card .image:hover img {
  transform: scale(1.1);
}
.event-card .btn {
  width: 100%;
  border-radius: .5rem;
  color: var(--white-color);
  padding: .75rem 1.5rem;
}
.event-card .btn.bg-secondary{
  border-color: var(--secondary-color);
}
.event-card .btn.outline{
  border-color: var(--secondary-color);
}

.event-card .btn.bg-secondary:hover{
  border-color: var(--alternative-color);
  background-color: var(--alternative-color);
}
.event-card .btn.outline:hover{
  background-color: var(--secondary-color);
}
</style>
