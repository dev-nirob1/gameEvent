<script setup>
import { ref } from 'vue'
import axios from 'axios'
import BaseTextArea from '@/components/Elements/BaseTextArea.vue'

const eventData = ref({})
const categories = ref()
const api_url = import.meta.env.VITE_API_URL

//create event
const handleCreateEvent = async () => {
  try {
    const res = await axios.post(`${api_url}/event/store`, eventData.value, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    if (res.status == 200) {
      alert('Event created successfully!')
    } else {
      alert('Something Went Wrong!')
    }
    // console.log(res)
  } catch (error) {
    console.log(error);
    alert('Please try again.');
  }
}

//get categories
const getCategories = async () => {
  const res = await axios.get(`${api_url}/event/create`);
  categories.value = res.data
}
getCategories()


</script>
<template>
  <section class="create-event bg-light">
    <div class="container">
      <label>Title
        <InputField type="text" v-model="eventData.title" placeholder="Title" />
      </label>
      <label>Image
        <InputField type="text" v-model="eventData.image" placeholder="Image" />
      </label>
      <label>Amount
        <InputField type="text" v-model="eventData.amount" placeholder="Amount" />
      </label>
      <label>Winning Amount
        <InputField type="text" v-model="eventData.winning_amount" placeholder="Amount" />
      </label>

      <label>Started Time
        <InputField type="date" v-model="eventData.started_time" />
      </label>
      <label>Category
        <!-- {{ categories }} -->
        <select v-model="eventData.cat_id">
          <option value="" disabled>-- Select a category --</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.cat_name }}</option>
        </select>
      </label>

      <label>Description
        <BaseTextArea v-model="eventData.description" placeholder="Description" />
      </label>
      <BaseButton class="bg-secondary" @click="handleCreateEvent">Submit</BaseButton>
    </div>
  </section>

</template>

<style scoped>
.create-event input,
.create-event textarea {
  background-color: var(--white-color);
  border-radius: .5rem;
  border-color: rgb(from var(--secondary-color) r g b / 50%);
}

.create-event select {
  background: var(--white-color);
  border-radius: .5rem;
  border: 2px solid rgb(from var(--secondary-color) r g b / 50%);
}

@media (min-width: 768px) {
  .create-event {
    padding: 2rem;
  }
}
</style>
