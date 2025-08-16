<script setup>
import BreadCrumb from '@/components/Widgets/BreadCrumb.vue';

const myEvent = [
  { id: 1, name: "Ludo Battle Royale", date: "25 Aug 2025", time: "6:00 PM", mode: "Online", type: "Solo", status: "Registered", entryFee: "5" },
];

const withdrawalHistory = [
  { id: 1, amount: "50", method: "Bkash", date: "10 Aug 2025", status: "Completed" },
  { id: 2, amount: "20", method: "Nagad", date: "12 Aug 2025", status: "Pending" },
  { id: 3, amount: "100", method: "Bank Transfer", date: "15 Aug 2025", status: "Completed" },
];
</script>


<template>
  <BreadCrumb />
  <section class="activity bg-light">

    <div class="container">
      <SubTitle>My Events</SubTitle>
      <!-- my events  -->
      <div class="table">
        <div class="table-header">
          <div class="sl">SL</div>
          <div>Name</div>
          <div>Entry Fee</div>
          <div>Date</div>
          <div>Time</div>
          <div>Status</div>
        </div>
        <div v-for="(data, i) in myEvent" :key="i" class="table-row">
          <div class="sl">
            <div class="medium-none">SL</div>
            {{ i + 1 }}
            <!-- {{ data.id }} -->
          </div>
          <div>
            <div class="medium-none">Name</div>
            {{ data.name }}
          </div>
          <div>
            <div class="medium-none">Entry Fee</div>
            ${{ data.entryFee }}
          </div>
          <div>
            <div class="medium-none">Date</div>
            {{ data.date }}
          </div>
          <div>
            <div class="medium-none">Time</div>
            {{ data.time }}
          </div>
          <div>
            <div class="medium-none">Status</div>
            {{ data.status }}
          </div>
        </div>

      </div>

      <SubTitle>Withdrawal History</SubTitle>
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
.activity {
  padding: 2rem 0 3.5rem 0;
}
.activity .sub-title {
  margin: 2rem 0 1rem 0;
  text-align: center;
}
</style>
