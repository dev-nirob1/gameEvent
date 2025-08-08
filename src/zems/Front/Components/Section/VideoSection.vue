<script setup>
import BaseButton from '@/components/Elements/BaseButton.vue';
import BaseImage from '@/components/Elements/BaseImage.vue';
import BaseParagraph from '@/components/Elements/BaseParagraph.vue';
import BaseTitle from '@/components/Elements/BaseTitle.vue';


</script>

<template>
  <section class="video-info">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="video relative">
          <div class="image">
            <BaseImage image="https://cdn.pixabay.com/photo/2023/09/18/10/02/dice-8260043_960_720.jpg" alt="image" />
            <BaseButton class="play-icon">
              <i class="fa-solid fa-play fa-3x"></i>
            </BaseButton>
          </div>
        </div>
        <div class="content">
          <BaseTitle>About Ludo Championship 2025</BaseTitle>
          <BaseParagraph>
            The ultimate Ludo battle is here! Compete against the best players
            worldwide, win exciting prizes, and prove your strategy skills.
          </BaseParagraph>
          <ul>
            <li> $5000 Prize Pool</li>
            <li> Live Match Streaming</li>
            <li> Global Participation</li>
          </ul>
          <BaseButton class="bg-secondary">Register Now</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-info {
  padding: 3.75rem 0;
}

.image {
  width: 100%;
  height: auto;
}

.image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--white-color);
  background: rgb(from var(--secondary-color)r g b / 70%);
  border-color: rgb(from var(--secondary-color)r g b / 45%);
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
