<template>
  <section class="contact bg-light">
    <div class="container">
      <div class="medium-2 gap-2">
        <div class="contact-info">
          <BaseTitle class="">We're here to help</BaseTitle>
          <BaseParagraph>Got a question about our tournaments or games? We're here to help you roll your way to victory!
          </BaseParagraph>
          <ul>
            <ListItem><i class="fa-solid fa-phone"></i> +880 1234 567 890</ListItem>
            <ListItem><i class="fa-solid fa-envelope"></i> support@ludogame.com</ListItem>
            <ListItem><i class="fa-brands fa-discord"></i> Join our Discord</ListItem>
          </ul>
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
}

.contact .contact-info ul {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
}

.contact .contact-info ul li {
  margin-top: .5rem;
}

.contact .contact-info ul li i{
  color: var(--secondary-color);
}

input,
textarea {
  padding: 1em;
  margin: .25rem 0 .75rem 0;
  border-color: rgb(from var(--secondary-color)r g b / 10%);
  background-color: rgb(from var(--primary-color)r g b / 90%);
  border-radius: .5rem;
  color: var(--white-color);
}

.contact form label {
  margin: .5rem .25rem;
}

.contact .btn {
  border-color: var(--secondary-color);
  color: var(--white-color);
}
</style>
