<script setup>
import axios from 'axios'
import { ref } from 'vue'

const withdrawals = ref()
const api_url = import.meta.env.VITE_API_URL

const getWithdrawalRequest = async () => {
  const res = await axios.get(`${api_url}/withdrawal_request`);
  withdrawals.value = res.data
}
getWithdrawalRequest()

</script>
<template>
  <section class="withdrawal bg-light">
    <div class="container">
      <!-- withdraw history -->
      <div class="table">
        <div class="table-header">
          <div>Amount</div>
          <div>Payer Account</div>
          <div>Payment Method</div>
          <div>trxID</div>
          <div>Status</div>
          <div>Type</div>
          <div>Actions</div>
        </div>

        <div v-for="withdrawal in withdrawals" :key="withdrawal.id" class="table-row">
          <div>
            <div class="medium-none">Amount</div>
            ${{ withdrawal.amount }}
          </div>

          <div>
            <div class="medium-none">Payer Account</div>
            {{ withdrawal.payerAccount }}
          </div>

          <div>
            <div class="medium-none">Payment Method</div>
            {{ withdrawal.payment_method }}
          </div>

          <div>
            <div class="medium-none">trxID</div>
            {{ withdrawal.trxID }}
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
            <div class="medium-none">Actions</div>
            <!-- {{ data.status }} -->
            <div class="flex align-center gap-1">
              <BaseButton @click="deleted(withdrawal.id)" class="bg-danger"><i class="fa-solid fa-trash"></i>
              </BaseButton>
              <RouterLink class="btn bg-warning" to="/admin/withdrawal">
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
@media (min-width: 768px) {
  .withdrawal {
    padding: 2rem;
  }
}
</style>
