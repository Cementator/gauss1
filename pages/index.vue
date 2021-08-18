<template>
  <div>
    <h2>JavaScript Validation</h2>
    <form
      id="app"
      action="http://localhost:3000/movies"
      method="post"
      @submit="checkForm"
    >
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error.id">{{ error }}</li>
          </ul>
        </p>
      <p>
        <label for="username">Username</label>
        <input
          id="username"
          v-model="username"
          type="text"
          name="username"
        >
      </p>
      <p>
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="text"
          name="password"
        >
      </p>
      <p>
        <input
          type="submit"
          value="Submit"
        >
      </p>

    </form>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      errors: [],
      username: null,
      password: null,
  }
  },
  methods:{
      checkForm (e) {
        console.log(this.$cookies.get("username"))
        if (this.username && this.password) {
          this.$cookies.set("username", this.username)
          return true;
        }
        this.errors = [];
        if (!this.username) {
          this.errors.push('username required.');
        }
        if (!this.password) {
          this.errors.push('password required.');
        }
        e.preventDefault();
      }
  }
}
</script>
