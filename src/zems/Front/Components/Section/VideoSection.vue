<template>
  <section class="video-info-section">
    <div class="container">
      <div class="content">

        <!-- Left: Image with Play Button / YouTube Embed -->
        <div class="video-column">
          <div v-if="!isPlaying" class="image-wrapper">
            <img
              src="https://cdn.pixabay.com/photo/2023/09/18/10/02/dice-8260043_960_720.jpg"
              alt="Ludo Event"
              class="preview-image"
            />
            <button class="play-btn" @click="playVideo">
              ▶
            </button>
          </div>

          <div v-else class="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              :src="youtubeEmbedUrl"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Right: Text Info -->
        <div class="info-column">
          <h2>About Ludo Championship 2025</h2>
          <p>
            The ultimate Ludo battle is here! Compete against the best players
            worldwide, win exciting prizes, and prove your strategy skills.
          </p>
          <ul>
            <li>🏆 $5000 Prize Pool</li>
            <li>🎮 Live Match Streaming</li>
            <li>🌍 Global Participation</li>
          </ul>
          <button class="btn-primary">Register Now</button>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      youtubeEmbedUrl: "https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
      // Replace VIDEO_ID with your YouTube video ID
    };
  },
  methods: {
    playVideo() {
      this.isPlaying = true;
    }
  }
};
</script>

<style scoped>
.video-info-section {
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #0d1117, #1e2a3a);
  color: #fff;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.video-column {
  position: relative;
  flex: 1;
}

.image-wrapper {
  position: relative;
}

.preview-image {
  width: 100%;
  border-radius: 12px;
}

.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;
}

.play-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 ratio */
  height: 0;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.info-column {
  flex: 1;
}

.info-column h2 {
  color: #4f9cff;
  margin-bottom: 1rem;
}

.info-column ul {
  margin: 1rem 0;
  list-style: none;
  padding: 0;
}

.info-column ul li {
  margin-bottom: 0.5rem;
}

.btn-primary {
  background: #4f9cff;
  padding: 0.75rem 1.5rem;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

/* Responsive */
@media (min-width: 768px) {
  .content {
    flex-direction: row;
    align-items: center;
  }
}
</style>
