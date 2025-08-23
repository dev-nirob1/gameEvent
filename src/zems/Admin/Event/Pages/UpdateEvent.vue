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

const insert = () => {
  console.log(update.value)
  axios
    .post(`${api_url}/event/update`, update.value, {
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
  <section class="update-event bg-light">
    <div class="container">
      <div>
        <label for="">Title</label>
        <InputField type="text" v-model="update.title" />
      </div>
      <div>
        <label for="">Description</label>
        <InputField type="text" v-model="update.description" />
      </div>
      <div>
        <label for="">Image</label>
        <InputField type="text" v-model="update.image" />
      </div>
      <div>
        <label for="">Amount</label>
        <InputField type="number" v-model="update.amount" />
      </div>
      <div>
        <label for="">Winning Amount</label>
        <InputField type="number" v-model="update.winning_amount" />
      </div>
      <div>
        <label for="">Started Time</label>
        <InputField type="date" v-model="update.started_time" />
      </div>
      <div>
        <label for="">Status</label>
        <InputField type="number" v-model="update.status" />
      </div>
      <div>
        <label for="">Category</label>
        <!-- {{ categories }} -->
        <select v-model="update.cat_id">
          <option value="" disabled>-- Select a category --</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.cat_name }}</option>
        </select>
      </div>
      <BaseButton class="bg-secondary" @click="insert">Update</BaseButton>
    </div>
  </section>

</template>

<style scoped>
.update-event input {
  background-color: var(--white-color);
  border-radius: .5rem;
  border-color: rgb(from var(--secondary-color) r g b / 50%);
}

.update-event select {
  background: var(--white-color);
  border-radius: .5rem;
  border: 2px solid rgb(from var(--secondary-color) r g b / 50%);
}
@media (min-width: 768px){
  .update-event {
  padding: 2rem;
}

}
</style>
