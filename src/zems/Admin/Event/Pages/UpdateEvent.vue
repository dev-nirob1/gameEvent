<template>
  Update

  <div>
    <input type="hidden" v-model="update.id" id="" />
    <label for="">Title</label>
    <input type="text" v-model="update.title" />
  </div>
  <div>
    <label for="">Description</label>
    <input type="text" v-model="update.description" />
  </div>
  <div>
    <label for="">Image</label>
    <input type="text" v-model="update.image" />
  </div>
  <div>
    <label for="">Amount</label>
    <input type="text" v-model="update.amount" />
  </div>
  <div>
    <label for="">Winning Amount</label>
    <input type="text" v-model="update.winning_amount" />
  </div>

  <div>
    <label for="">Started Time</label>
    <input type="date" v-model="update.started_time" />
  </div>
  <div>
    <label for="">Status </label>
    <input type="text" v-model="update.status" />
  </div>

  <div>
    <label for="">Category</label>
    <!-- {{ categories }} -->
    <select v-model="update.cat_id">
      <option value="">Select</option>
      <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.cat_name }}</option>
    </select>
  </div>

  <button @click="insert">Submit</button>
</template>

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
