<template>
  <section class="contact">
    <div class="container">
      <div class="medium-2 gap-2">
        <div>
        <BaseTitle class="mb-2">We're here to help</BaseTitle>
      </div>
      <div>
        <form>
          <div>
            <label for="name">Name: </label>
            <InputField id="name" type="text" placeholder="Enter Your Name" />
          </div>
          <div>
            <label for="email">Email: </label>
            <InputField id="email" type="email" placeholder="Enter Your Email" />
          </div>
          <div>
            <label for="phone">Phone: </label>
            <InputField type="tel" id="phone" placeholder="Enter Your Phone Number" />
          </div>
          <div>
            <label for="message">Message: </label>
            <BaseTextArea rows="6" id="message" placeholder="Enter Message..."></BaseTextArea>
          </div>
          <BaseButton class="bg-secondary width-full">Send Message</BaseButton>
        </form>
      </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.contact {
  padding: 3.75rem 0;
  background: url('background.svg') center / cover no-repeat fixed;
}

input,
textarea {
  padding: 1em;
  margin: .25rem 0 .75rem 0;
  border-color: rgb(from var(--secondary-color)r g b / 5%);
  background-color: rgb(from var(--primary-color)r g b / 90%);
  border-radius: .5rem;
  color: var(--white-color);
}


.contact form label {
  margin: .5rem .25rem;
}
</style>
