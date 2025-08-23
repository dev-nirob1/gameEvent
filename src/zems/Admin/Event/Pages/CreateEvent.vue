<script setup>
import { ref } from 'vue'
import axios from 'axios'
import SectionTitle from '@/components/Widgets/SectionTitle.vue'

const create = ref({})
const categories = ref()
const api_url = import.meta.env.VITE_API_URL

const insert = () => {
  console.log(create.value)
  axios
    .post(`${api_url}/event/store`, create.value, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    .then((req) => req)
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => error)
}

axios
  .get(`${api_url}/event/create`)
  .then((req) => req)
  .then((res) => {
    categories.value = res.data
  })
</script>
<template>
  <section class="create-event bg-light">
    <div class="container px-2">
      <SectionTitle class="text-center mb-2">Create Event</SectionTitle>
      <div>
        <label for="">Title</label>
        <InputField type="text" v-model="create.title" placeholder="Title" />
      </div>
      <div>
        <label for="">Description</label>
        <InputField type="text" v-model="create.description" placeholder="Description" />
      </div>
      <div>
        <label for="">Image</label>
        <InputField type="text" v-model="create.image" placeholder="Image" />
      </div>
      <div>
        <label for="">Amount</label>
        <InputField type="text" v-model="create.amount" placeholder="Amount" />
      </div>
      <div>
        <label for="">Winning Amount</label>
        <InputField type="text" v-model="create.winning_amount" placeholder="Winning Amount" />
      </div>

      <div>
        <label for="">Started Time</label>
        <InputField type="date" v-model="create.started_time" />
      </div>

      <div>
        <label for="">Category</label>
        <!-- {{ categories }} -->
        <select v-model="create.cat_id">
          <option value="" disabled>-- Select a category --</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.cat_name }}</option>
        </select>
      </div>
      <BaseButton class="bg-secondary" @click="insert">Submit</BaseButton>
    </div>
  </section>

</template>

<style scoped>
.create-event {
  padding: 3.75rem 0;
}

.create-event input {
  background-color: var(--white-color);
  border-radius: .5rem;
  border-color: rgb(from var(--secondary-color) r g b / 50%);
}

.create-event select {
  background: var(--white-color);
  border-radius: .5rem;
  border: 2px solid rgb(from var(--secondary-color) r g b / 50%);
}
</style>
