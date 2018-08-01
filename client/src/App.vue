<template>
  <div id="app">
    <router-view :user='user' :coin='coin' :coinAmount='coinAmount' :getUser='getUser' :placeTrade='placeTrade'/>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: [],
  data() {
    return {
      user: '',
      email: '',
      coin: '',
      coinAmount: '',
    }
  },
  methods: {
    setUser(userObject) {
      this.user = userObject.user[0]
      this.coin = this.user.coin
      this.coinAmount = this.user.coinmount
    },
    getUser(email, password) {
      const API_URL = `https://swapt-crypto.herokuapp.com/${email}/${password}`
      fetch(API_URL)
        .then(response => response.json())
        .then(result => {
          this.setUser(result)
          this.$router.push('dashboard')
        })
    },
    placeTrade(email, password, coin) {
      const TRADE_URL = `https://swapt-crypto.herokuapp.com/${email}/${password}/${coin}`
      fetch(TRADE_URL)
        .then(response => response.json())
    }
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
