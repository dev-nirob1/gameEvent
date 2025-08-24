<script setup>
const myEvent = [
  { id: 1, name: "Ludo Battle Royale", date: "25 Aug 2025", time: "6:00 PM", mode: "Online", type: "Solo", status: "Registered", entryFee: "5" },
  { id: 1, name: "Ludo Battle Royale", date: "25 Aug 2025", time: "6:00 PM", mode: "Online", type: "Solo", status: "Registered", entryFee: "5" },
];
</script>

<template>
  <section class="events-joined bg-light">

    <div class="container">
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
    </div>
  </section>
</template>
<style scoped>

@media (min-width: 768px) {
  .events-joined {
    padding: 2rem;
  }
}
</style>
