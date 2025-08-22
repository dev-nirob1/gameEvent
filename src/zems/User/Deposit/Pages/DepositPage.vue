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
        <BaseParagraph>Amount</BaseParagraph>
        <InputField type="number" v-model="create.amount" placeholder="Enter Amount" />
      </div>

      <div>
        <BaseParagraph>Payment Method </BaseParagraph>
        <label class="flex align-center justify-between">
          <div class="flex align-center">
            <BaseImage image="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" alt="nogod-logo" />
            <span>Nogod</span>
          </div>
          <InputField type="radio" v-model="create.payment_method" value="Nogod" />
        </label>

        <label class="flex align-center justify-between">
          <div class="flex align-center">
            <BaseImage image="https://www.logo.wine/a/logo/BKash/BKash-Icon2-Logo.wine.svg" alt="bkash-logo" />
            <span>Bkash</span>
          </div>
          <InputField type="radio" v-model="create.payment_method" value="Bkash" />
        </label>

      </div>

      <div class="flex gap-1">
        <BaseButton>Cancel</BaseButton>
        <BaseButton @click="insert">Submit</BaseButton>
      </div>
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

.deposit-form input[type="radio"] {
  width: fit-content;
}
.deposit-form input[type="number"] {
  margin:0 0 .25rem 0;
}

.deposit-form label {
  padding: .25rem .5rem;
  border: 2px solid var(--white-color);
  margin-bottom: 1rem;
  border-radius: .5rem;
}

.deposit-form p {
  margin: .75rem 0;
}

.deposit-form img {
  height: 3rem;
  width: 4rem;
}
</style>
