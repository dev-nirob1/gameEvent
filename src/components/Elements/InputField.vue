<script setup>
const modelValue = defineModel()

</script>
<template>
        <input v-bind="$attrs" v-model="modelValue">
</template>
