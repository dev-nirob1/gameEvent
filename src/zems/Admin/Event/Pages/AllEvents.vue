<script setup>
import SectionTitle from '@/components/Widgets/SectionTitle.vue'
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
  <div class="container px-2">
      <SectionTitle class="text-center mb-2">
        All Events
      </SectionTitle>
      <!-- my events  -->
      <div class="table">
        <div class="table-header">
          <div class="sl">SL</div>
          <div>Title</div>
          <div>Description</div>
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
          <div>
            <div class="medium-none">Description</div>
            ${{ data.description }}
          </div>
          <div>
            <div class="medium-none">Image</div>
            {{ data.image }}
          </div>
          <div>
            <div class="medium-none">Amount</div>
            {{ data.amount }}
          </div>
          <div>
            <div class="medium-none">Winning Amount</div>
            {{ data.winning_amount }}
          </div>
          <div>
            <div class="medium-none">Start Time</div>
            {{ data.started_time }}
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
              <div class="flex gap-1">
                <BaseButton @click="deleted">Delete</BaseButton>
              <RouterLink class="btn" :to="`/event/update/${data.id}`" >Edit</RouterLink>
              </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- <div v-for="event in events" :key="event.id">
    <div>{{ event.id }}</div>
    <div>{{ event.title }}</div>
    <div>{{ event.description }}</div>
    <div>{{ event.image }}</div>
    <div>{{ event.amount }}</div>
    <div>{{ event.winning_amount }}</div>
    <div>{{ event.started_time }}</div>
    <div>{{ event.status }}</div>
    <div>{{ event.cat_id }}</div>

    <div>
      <button @click="deleted(event.id)">Delete</button>
    </div>
  </div> -->
</template>
<style scoped>
.events {
  padding: 3.75rem 0;
}
</style>
