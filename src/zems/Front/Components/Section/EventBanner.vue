<script setup>
defineProps({
  name: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  }
})
</script>

<template>
  <section class="event-banner">
    <div class="banner-img">
      <BaseImage :image="image" alt="banner" />
    </div>
    <div class="overlay">
      <div class="content px-1">
        <BaseTitle>{{ name }}</BaseTitle>
        <p>{{ description }}</p>
        <div class="flex gap-1 justify-center">
          <BaseButton class="outline"> <i class="fa-solid fa-arrow-left"></i> Go Back</BaseButton>
          <BaseButton class="bg-secondary text-white">Register Now</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.event-banner {
  position: relative;
  text-align: center;
}

.banner-img {
  width: 100%;
  height: 400px;
}

.banner-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(from var(--primary-color)r g b / 60%),
      rgb(from var(--primary-color)r g b / 60%));
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay .btn.bg-secondary {
  border-color: var(--secondary-color);
}

.overlay .btn.outline {
  color: var(--secondary-color);
}

@media (min-width: 768px) {
  .overlay .content {
    max-width: 70%;
  }
}
</style>
