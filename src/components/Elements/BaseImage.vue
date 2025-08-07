<script setup>
defineProps({
  image: {
    type: [String, Object],
  }
})
</script>
<template>
    <img :src="image" alt="image">
</template>

<style scoped>

</style>
