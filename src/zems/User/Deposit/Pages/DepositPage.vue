<script setup>
import { ref } from 'vue'
import axios from 'axios'

const create = ref({})

const api_url = import.meta.env.VITE_API_URL

const insert = () => {
  console.log(create.value)
  axios
    .post(`${api_url}/deposit_history/store`, create.value, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    .then((req) => req)
    .then((res) => {
      window.location = res.data.pay_url
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>
<template>
  <section class="deposit">
    <div class="deposit-form">
      <BaseTitle class="mb-1">Deposit</BaseTitle>

      <div>
        <label for="">Amount</label>
        <InputField type="number" v-model="create.amount" placeholder="Enter Amount" />
      </div>

      <div>
        <BaseParagraph>Payment Method </BaseParagraph>
        <div class="radio-option" @click="create.payment_method = 'Nogod'">
          <div class="flex align-center">
            <BaseImage image="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" alt="nogod-logo" />
            <label>Nogod</label>
          </div>
          <InputField type="radio" v-model="create.payment_method" value="Nogod" />
        </div>

        <div class="radio-option" @click="create.payment_method = 'Bkash'">
          <div class="flex align-center">
            <BaseImage image="https://www.logo.wine/a/logo/BKash/BKash-Icon2-Logo.wine.svg" alt="bkash-logo" />
            <label>Bkash</label>
          </div>
          <InputField type="radio" v-model="create.payment_method" value="Bkash" />
        </div>
      </div>

      <BaseButton class="width-full" @click="insert">Submit</BaseButton>
    </div>
  </section>
</template>
<style scoped>
.deposit {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.deposit-form {
  max-width: 450px;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(to right, rgb(from var(--secondary-color)r g b / 70%), rgb(from var(--secondary-color)r g b /90%));
  border-radius: .75rem;
}

.deposit-form input {
  border-radius: .5rem;
  background: var(--white-color);
  border-color: rgb(from var(--secondary-color) r g b / 50%);
  outline: none;
}

.deposit-form .radio-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .25rem .5rem;
  margin-bottom: 1rem;
  border: 2px solid var(--white-color);
  border-radius: .5rem;
}

.radio-option img {
  height: 3rem;
  width: 4rem;
}

.deposit-form .radio-option input {
  width: fit-content;
}
</style>
