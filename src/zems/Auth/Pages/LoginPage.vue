<template>
  <div class="login">
    <form class="form">
      <!-- Logo -->
      <div class="logo">
        <BaseImage image="/logo.png" alt="Logo" />
      </div>
      <h4 class="my-1">Login</h4>



      <div>
        <InputField type="email" id="email" placeholder="Enter your email" required />
      </div>
      <div>
        <InputField type="password" id="password" placeholder="Create a password" required />
      </div>

      <BaseButton type="submit" class="width-full bg-secondary">Login</BaseButton>

      <div class="links">
        <a href="/forgot-password">Forgot Password?</a>
        <p>
          Don’t have an account?
          <a href="/register">Register</a>
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
