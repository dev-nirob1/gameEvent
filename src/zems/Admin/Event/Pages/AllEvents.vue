<script setup>
import axios from 'axios'
import { ref } from 'vue'

const events = ref()
const deleted = (id) => {
  console.log(id)
  axios
    .get(`${api_url}/event/${id}/delete`)
    .then((req) => req)
    .then((res) => {
      console.log(res.data)
    })
}

const api_url = import.meta.env.VITE_API_URL

axios
  .get(`${api_url}/event`)
  .then((req) => req)
  .then((res) => {
    console.log(res.data)

    events.value = res.data
  })
</script>

<template>
  <section class="events bg-light">
    <div class="container">
      <div class="table">
        <div class="table-header">
          <div class="sl">SL</div>
          <div>Title</div>
          <!-- <div>Description</div> -->
          <div>Image</div>
          <div>amount</div>
          <div>Winning Amount</div>
          <div>Start Time</div>
          <div>Category</div>
          <div>Status</div>
          <div>Actions</div>
        </div>
        <div v-for="(data, i) in events" :key="i" class="table-row">
          <div class="sl">
            <div class="medium-none">SL</div>
            {{ i + 1 }}
            <!-- {{ data.id }} -->
          </div>
          <div>
            <div class="medium-none">Title</div>
            {{ data.title }}
          </div>
          <!-- <div>
            <div class="medium-none">Description</div>
            {{ data.description }}
          </div> -->
          <div>
            <div class="medium-none">Image</div>
            <BaseImage :image="data.image" alt="image" />
          </div>
          <div>
            <div class="medium-none">Amount</div>
            ${{ data.amount }}
          </div>
          <div>
            <div class="medium-none">Winning Amount</div>
            ${{ data.winning_amount }}
          </div>
          <div>
            <div class="medium-none">Start Time</div>
            {{ new Date (data.started_time).toLocaleString() }}
          </div>
          <div>

            <div class="medium-none">Category</div>
            {{ data.cat_id }}
          </div>
          <div>
            <div class="medium-none">Status</div>
            {{ data.status }}
          </div>
          <div>
            <div class="medium-none">Actions</div>
            <!-- {{ data.status }} -->
            <div class="flex align-center gap-1">
              <BaseButton @click="deleted(data.id)" class="bg-danger"><i class="fa-solid fa-trash"></i></BaseButton>
              <RouterLink class="btn bg-warning" :to="`/admin/event/update/${data.id}`">
                <i class="fa-solid fa-pen-to-square"></i>
              </RouterLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<style scoped>
@media(min-width: 768px){
  .events {
  padding: 2rem;
}
}
</style>
