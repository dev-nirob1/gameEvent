<script setup>
import { ref } from 'vue';

const isVideoPlaying = ref(false)
const playVideo = () => {
  isVideoPlaying.value = true;
}
</script>

<template>
  <section class="video-info bg-light">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="video relative order-2 medium-order-1">
          <div v-if="!isVideoPlaying" class="image">
            <BaseImage image="https://cdn.pixabay.com/photo/2023/09/18/10/02/dice-8260043_960_720.jpg" alt="image" />
            <BaseButton @click="playVideo" class="play-icon">
              <i class="fa-solid fa-circle-play fa-5x"></i>
            </BaseButton>
          </div>
          <div class="height-full width-full" v-else>
            <iframe class="height-full width-full"
              src="https://www.youtube.com/embed/fFTB7MP6Ba8?si=KqPheV1Ab721Umix&autoplay=1&mute=1"
              title="YouTube video player" frameborder="3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div class="content order-1 medium-order-2">
          <BaseTitle>Battle for Glory!</BaseTitle>
          <BaseTitle>Ludo Championship 2025</BaseTitle>
          <BaseParagraph>
            The ultimate Ludo battle is here! Compete against the best players worldwide, win exciting prizes, and prove
            your strategy skills.
          </BaseParagraph>

          <ul>
            <li>
              <i class="fa-solid fa-trophy"></i> $5000 Prize Pool
            </li>
            <li>
              <i class="fa-solid fa-video"></i> Live Match Streaming
            </li>
            <li>
              <i class="fa-solid fa-globe"></i> Global Participation
            </li>
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
  border: 3px solid var(--secondary-color);
}

.image img {
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content ul {
  list-style: none;
  padding-left: .25rem;
  margin: 0;
}

.content ul li {
  margin: .5rem 0;
}

.content ul li i {
  color: var(--secondary-color);
  margin-right: .25rem;
}
.content .btn {
  width: fit-content;
}

</style>
