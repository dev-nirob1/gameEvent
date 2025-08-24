<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const update = ref({})
const categories = ref()
const route = useRoute()
const api_url = import.meta.env.VITE_API_URL
const id = route.params.id


axios
  .get(`${api_url}/event/${id}`)
  .then((req) => req)
  .then((res) => {
    update.value = res.data
  })

//create event
const handleCreateEvent = async () => {
  try {
    const res = await axios.post(`${api_url}/event/update`, update.value, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (res.status == 200) {
      alert('Event Updated Successfully!')
    }
  } catch (error) {
    console.log('update event error', error);
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
  <section class="update-event bg-light">
    <div class="container">
      <label>Title
        <InputField type="text" v-model="update.title" />
      </label>

      <label>Image
        <InputField type="text" v-model="update.image" />
      </label>

      <label>Amount
        <InputField type="number" v-model="update.amount" />
      </label>

      <label>Winning Amount
        <InputField type="number" v-model="update.winning_amount" />
      </label>

      <label>Started Time
        <InputField type="date" v-model="update.started_time" />
      </label>

      <label>Status
        <InputField type="number" v-model="update.status" />
      </label>

      <label>Category
        <!-- {{ categories }} -->
        <select v-model="update.cat_id">
          <option value="" disabled>-- Select a category --</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.cat_name }}</option>
        </select>
      </label>

      <label>Description
        <BaseTextArea v-model="update.description" />
      </label>
      <BaseButton class="bg-secondary" @click="handleCreateEvent">
        Update
      </BaseButton>
    </div>
  </section>

</template>

<style scoped>
.update-event input,
.update-event textarea {
  background-color: var(--white-color);
  border-radius: .5rem;
  border-color: rgb(from var(--secondary-color) r g b / 50%);
}

.update-event select {
  background: var(--white-color);
  border-radius: .5rem;
  border: 2px solid rgb(from var(--secondary-color) r g b / 50%);
}

@media (min-width: 768px) {
  .update-event {
    padding: 2rem;
  }

}
</style>
