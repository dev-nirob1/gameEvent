<template>
  <section class="profile container">
    <div class="cover bg-light">
      <BaseImage image="https://cdn.pixabay.com/photo/2016/10/16/18/30/not-ludo-1745964_960_720.jpg" alt="image" />
    </div>
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
  width: 100%;
}

.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  position: absolute;
  left: 2rem;
  bottom: -70px;
  display: flex;
  align-items: end;
  gap: 1rem;
}

.profile-info p {
  margin: .25rem 0;
}

.profile-image {
  height: 120px;
  width: 120px;
}

.profile-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
