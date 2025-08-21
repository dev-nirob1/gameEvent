<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const loginInfo = ref({
  email: '',
  password: '',
})

const handleLogin = () => {
  console.log(loginInfo);
}

</script>

<template>
  <div class="login">
    <form @submit.prevent="handleLogin" class="form">
      <!-- Logo -->
      <RouterLink to="/" class="logo">
        <BaseImage image="/logo.png" alt="Logo" />
      </RouterLink>
      <h4 class="my-1">Login</h4>

      <div>
        <InputField v-model="loginInfo.email" type="email" id="email" placeholder="Enter your email" required />
      </div>
      <div>
        <InputField v-model="loginInfo.password" type="password" id="password" placeholder="Create a password"
          required />
      </div>

      <BaseButton type="submit" class="width-full bg-secondary">Login</BaseButton>

      <div class="links">
        <RouterLink to="">Forgot Password?</RouterLink>
        <p>
          Don’t have an account?
          <RouterLink to="/register">Register</RouterLink>
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped>
.login {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: var(--primary-color);
  text-align: center;
}

.logo img {
  height: 80px;
  width: auto;
}

.form {
  background: var(--white-color);
  padding: 2rem;
  border-radius: .75rem;
  width: 100%;
  max-width: 450px;
}

.form input {
  border: 1px solid rgb(from var(--primary-color)r g b / 10%);
  border-radius: 0.5rem;
  background: #fff;
}

.form input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.login .btn {
  border-radius: .5rem;
  border: none;
}

.links {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

.links a {
  color: var(--secondary-color);
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}
</style>
