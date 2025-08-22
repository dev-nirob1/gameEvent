<script setup>
// import BreadCrumb from '@/components/Widgets/BreadCrumb.vue';
import SectionTitle from '@/components/Widgets/SectionTitle.vue';

const deposit_history = [
  { id: 1, amount: "50", method: "Bkash", date: "10 Aug 2025", status: "Completed" },
  { id: 2, amount: "20", method: "Nagad", date: "12 Aug 2025", status: "Pending" },
  { id: 3, amount: "100", method: "Bank Transfer", date: "15 Aug 2025", status: "Completed" },
];
</script>


<template>
  <!-- <BreadCrumb /> -->
  <section class="deposit-history bg-light">

    <div class="container">
      <SectionTitle class="text-center mb-2">
        Deposit History
      </SectionTitle>
      <!-- deposit history-->
      <div class="table">
        <div class="table-header">
          <div class="sl">SL</div>
          <div>Amount</div>
          <div>Method</div>
          <div>Date</div>
          <div>Status</div>
        </div>
        <div v-for="(data, i) in deposit_history" :key="i" class="table-row">
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
.deposit-history {
  padding: 4.5rem 0 3.75rem 0;
}

@media (min-width: 768px) {
  .deposit-history {
    padding: 3rem 0 3.75rem 0;
  }
}
</style>
