<script setup>
defineProps({
  currentOpenItem: {
    type: null
  },
  accordionData: {
    type: Object
  },
  toggleAccordion: {
    type: Function
  }
})
</script>

<template>
  <div class="accordion">
    <div @click="toggleAccordion(accordionData.id)" class="accordion-title">
      {{ accordionData.question }}
      <i :class="currentOpenItem == accordionData.id ? 'fa-solid fa-minus' : 'fa-solid fa-plus'"></i>
    </div>
    <div class="accordion-body" :class="{ 'active': currentOpenItem == accordionData.id }">
      {{ accordionData.answer }}
    </div>
  </div>
</template>

<style scoped>
.accordion {
  margin-bottom: 1.5rem;
  overflow: hidden;
}
.accordion-title {
  padding: 1rem;
  font-weight: 500;
  color: var(--white-color);
  background-color: rgb(from var(--secondary-color)r g b / 40%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: .5rem;
}
.accordion-body {
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}
.accordion-body.active {
  padding: 1rem;
  max-height: 500px;
}
</style>
