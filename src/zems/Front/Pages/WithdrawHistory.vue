<script setup>
import BreadCrumb from '@/components/Widgets/BreadCrumb.vue';

const withdrawalHistory = [
  { id: 1, amount: "50", method: "Bkash", date: "10 Aug 2025", status: "Completed" },
  { id: 2, amount: "20", method: "Nagad", date: "12 Aug 2025", status: "Pending" },
  { id: 3, amount: "100", method: "Bank Transfer", date: "15 Aug 2025", status: "Completed" },
];
</script>


<template>
  <BreadCrumb />
  <section class="withdraw-history bg-light">

    <div class="container">

      <BaseTitle class="mb-2 text-center">Withdraw History</BaseTitle>
      <!-- my withdrawal history-->
      <div class="table">
        <div class="table-header">
          <div class="sl">SL</div>
          <div>Amount</div>
          <div>Method</div>
          <div>Date</div>
          <div>Status</div>
        </div>
        <div v-for="(data, i) in withdrawalHistory" :key="i" class="table-row">
          <div class="sl">
            <div class="medium-none">SL</div>
            {{ i + 1 }}
            <!-- {{ data.id }} -->
          </div>
          <div>
            <div class="medium-none">Amount</div>
            ${{ data.amount }}
          </div>
          <div>
            <div class="medium-none">Method</div>
            {{ data.method }}
          </div>
          <div>
            <div class="medium-none">Date</div>
            {{ data.date }}
          </div>
          <div>
            <div class="medium-none">Status</div>
            {{ data.status }}
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.withdraw-history {
  padding: 3.5rem 0;
}
</style>
