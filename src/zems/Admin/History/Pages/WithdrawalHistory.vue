<script setup>
import SectionTitle from '@/components/Widgets/SectionTitle.vue'
import axios from 'axios'
import { ref } from 'vue'

const withdrawals = ref()
// const deleted = (id) => {
//   console.log(id)
//   axios
//     .get(`${api_url}/event/${id}/delete`)
//     .then((req) => req)
//     .then((res) => {
//       console.log(res.data)
//     })
// }

const api_url = import.meta.env.VITE_API_URL

axios
  .get(`${api_url}/withdrawal_request`)
  .then((req) => req)
  .then((res) => {
    console.log(res.data)

    withdrawals.value = res.data
  })
</script>
<template>
  <section class="withdrawal bg-light">
    <div class="container">
      <SectionTitle class="text-center mb-2">
        Withdraw History
      </SectionTitle>

      <!-- deposit history -->
      <div class="table">
        <div class="table-header">
          <div>ID</div>
          <div>Amount</div>
          <div>Payer Account</div>
          <div>Payment Method</div>
          <div>trxID</div>
          <div>Payment ID</div>
          <div>Status</div>
          <div>Type</div>
          <div>Company ID</div>
          <div>User ID</div>
          <div>Created At</div>
          <div>Time</div>
        </div>

        <div v-for="withdrawal in withdrawals" :key="withdrawal.id" class="table-row">
          <div class="sl">
            <div class="medium-none">Id</div>
            {{ withdrawal.id }}
          </div>

          <div>
            <div class="medium-none">Amount</div>
            ${{ withdrawal.amount }}
          </div>

          <div>
            <div class="medium-none">Payer Account</div>
            {{ withdrawal.payerAccount }}
          </div>

          <div>
            <div class="medium-none">Method</div>
            {{ withdrawal.payment_method }}
          </div>

          <div>
            <div class="medium-none">trxID</div>
            {{ withdrawal.trxID }}
          </div>

          <div>
            <div class="medium-none">Payment ID</div>
            {{ withdrawal.paymentID }}
          </div>

          <div>
            <div class="medium-none">Status</div>
            {{ withdrawal.transactionStatus }}
          </div>

          <div>
            <div class="medium-none">Type</div>
            {{ withdrawal.type }}
          </div>

          <div>
            <div class="medium-none">Company ID</div>
            {{ withdrawal.company_id }}
          </div>

          <div>
            <div class="medium-none">User ID</div>
            {{ withdrawal.user_id }}
          </div>

          <div>
            <div class="medium-none">Created At</div>
            {{ withdrawal.created_at }}
          </div>

          <div>
            <div class="medium-none">Time</div>
            {{ withdrawal.paymentExecuteTime }}
          </div>
        </div>

      </div>
    </div>

  </section>
</template>
<style scoped>
.withdrawal{
  padding: 3.75rem 0;
}
</style>
