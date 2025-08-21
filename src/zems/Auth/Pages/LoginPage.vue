<template>
  <div class="login-container">

    <!-- Login Form -->
    <form class="login-form">
          <!-- Logo -->
    <div class="logo">
      <img src="/logo.png" alt="Logo" />
    </div>
      <h2>Login</h2>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />
      </div>

      <button type="submit" class="login-btn">Login</button>

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

.login-container {
  min-height: 100vh;
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.logo {
  text-align: center;
  margin-bottom: 1.5rem;
}

.logo img {
  width: 80px;
  height: auto;
}

.login-form {
  background: var(--white-color); /* White card */
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  color: var(--primary-color); /* Text dark for contrast */
}

.login-form h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  color: var(--primary-color);
}

.form-group input {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  background: #fff;
  color: var(--primary-color);
  font-size: 1rem;
}

.form-group input:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 5px var(--secondary-color);
}

.login-btn {
  width: 100%;
  padding: 0.8rem;
  margin-top: 0.5rem;
  background: var(--secondary-color);
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease;
}

.login-btn:hover {
  background: #2563eb;
}

.links {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: var(--primary-color);
}

.links a {
  color: var(--secondary-color);
  text-decoration: none;
  transition: 0.3s;
}

.links a:hover {
  text-decoration: underline;
}
</style>
