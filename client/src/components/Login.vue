<template>
    <div class='sign-in'>
        <h1 class='signup-header'>Sign In</h1>
        <form class='sign-up-form' action=''>
            <label for="userEmail">Email Address</label>
            <input v-model='email' type="email">
            <label for="password">Password</label>
            <input v-model='password' type="password">
            <button type="submit" class="btn btn-primary" @click="getUser(email, password)">Log In</button>
        </form>
        <p class='signup-explanation'>* If you do not have a user account- one will be generated for you when you enter your email and password.</p>
    </div>
</template>


<script>
export default {
  name: 'Login',
  props: ['getUser'],
  data() {
      return {
          email: '',
          password: ''
      }
  }
}
</script>


<style>
.password-label {
    padding-left: 30px;
}
label {
    margin-left: 30px;
    font-size: 20px;
    color: #28ABE3;
}
input {
    margin-left: 10px;
}
.btn.btn-primary {
    background-color: #28ABE3;
    margin-left: 15px;
    font-size: 20px;
}
.signup-header {
    margin-bottom: 40px;
    color: #C43E97;
}
.signup-explanation {
    font-size: 13px;
    color: grey;
    margin-top: 40px;
}

</style>
