<script setup>
import BreadCrumb from '@/components/Widgets/BreadCrumb.vue';

const leaderboard = [
  { rank: 1, name: "Alex Gamer", played: 20, wins: 18, winRate: "90%" },
  { rank: 2, name: "Ludo King", played: 22, wins: 19, winRate: "86%" },
  { rank: 3, name: "Queen Dice", played: 18, wins: 15, winRate: "83%" },
  { rank: 4, name: "Mr Six Rolls", played: 25, wins: 19, winRate: "76%" },
  { rank: 5, name: "Dice Ninja", played: 15, wins: 10, winRate: "67%" },
];
</script>

<template>
  <BreadCrumb/>
  <section class="leaderboard">

    <div class="container">
      <div class="table">
      <div class="table-header">
        <div class="sl">Rank</div>
        <div>Name</div>
        <div>Played</div>
        <div>Wins</div>
        <div>Win Rate</div>
      </div>
      <div v-for="(data, i) in leaderboard" :key="i" class="table-row">
        <div class="sl">
          <div class="medium-none">Rank</div>
          {{data.rank}}
          <!-- {{ data.id }} -->
        </div>
        <div>
          <div class="medium-none">Name</div>
         {{data.name}}
        </div>
        <div>
          <div class="medium-none">Played</div>
          {{data.played}}
        </div>
        <div>
          <div class="medium-none">Wins</div>
          {{data.wins}}
        </div>
        <div>
          <div class="medium-none">Win Rate</div>
         {{data.winRate}}
        </div>
      </div>

    </div>
    </div>

  </section>
</template>

<style scoped>
.leaderboard {
  padding: 3.5rem 0;
  background: url('/background.svg') center / cover no-repeat fixed;
}
</style>
