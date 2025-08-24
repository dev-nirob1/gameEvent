<script setup>
const modelValue = defineModel()
</script>
<template>
<textarea id="message" rows="5" v-model="modelValue" placeholder="Start Writting Here"></textarea>
</template>
