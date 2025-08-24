<template>
  <section class="profile container">
    <div class="cover bg-light"></div>
    <div class="profile-info">
      <div class="profile-image">
        <img :src="user.avatarUrl" alt="Avatar" class="profile__avatar" />
      </div>
      <div>
        <SubTitle>{{ user.username }}</SubTitle>
        <BaseParagraph>Joined: {{ new Date(user.joinedAt).toLocaleString() }}</BaseParagraph>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const user = ref({
  uid: 'LD-10923',
  username: 'KnightRider',
  avatarUrl: 'https://i.pravatar.cc/160?img=12',
  coverUrl: '',
  joinedAt: '2024-02-12T10:00:00Z',
  verified: true,
  // Wallet
  wallet: {
    balance: 1520,
    coins: 4200,
  },
})
</script>

<style scoped>
.profile {
  position: relative;
}

.cover {
  height: 200px;
}

.profile-info {
  position: absolute;
  left: 2rem;
  bottom: -60px;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-image {
  height: 120px;
  width: 120px;
}
.profile-image img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
