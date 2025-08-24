<script setup>
import { ref } from 'vue'
import axios from 'axios'
import BaseTextArea from '@/components/Elements/BaseTextArea.vue'

//------------------


// const update = ref({})
// const categories = ref()
// const route = useRoute()
// const api_url = import.meta.env.VITE_API_URL
// const id = route.params.id

// get current data
// const getCurrentEvents = async()=> {
//   const res = await axios.get(`${api_url}/event/${id}`)
//   update.value == res.data
// }
// console.log(update.value);
// getCurrentEvents()
//Updae events datea
// const handleUpdateEvent = async () => {
//   try {
//     const res = await axios.post(`${api_url}/event/update`, update.value, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     })
//     if (res.status == 200) {
//       alert('Event Updated Successfully!')
//     }
//   } catch (error) {
//     console.log('update event error', error);
//   }
// }




// -------------------------
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
const getCategories = async()=> {
  const res = await axios.get(`${api_url}/event/create`);
  categories.value = res.data
}
getCategories()


</script>
<template>
  <section class="create-event bg-light">
    <div class="container">
      <div>
        <label for="">Title</label>
        <InputField type="text" v-model="eventData.title" placeholder="Title" />
      </div>
      <div>
        <label for="">Image</label>
        <InputField type="text" v-model="eventData.image" placeholder="Image" />
      </div>
      <div>
        <label for="">Amount</label>
        <InputField type="text" v-model="eventData.amount" placeholder="Amount" />
      </div>
      <div>
        <label for="">Amount</label>
        <InputField type="text" v-model="eventData.winning_amount" placeholder="Amount" />
      </div>

      <div>
        <label for="">Started Time</label>
        <InputField type="date" v-model="eventData.started_time" />
      </div>

      <div>
        <label for="">Category</label>
        <!-- {{ categories }} -->
        <select v-model="eventData.cat_id">
          <option value="" disabled>-- Select a category --</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.cat_name }}</option>
        </select>
      </div>

      <div>
        <label for="">Description</label>
        <BaseTextArea v-model="eventData.description" placeholder="Description" />
      </div>

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
