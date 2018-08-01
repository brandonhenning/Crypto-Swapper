<template>
<div>
    <div class='dashboard'> 
        <h1>Your Dashboard</h1>
        <h5>Current Coin</h5>
        <h4>{{ user.coin }}</h4>
        <h5>Current Coin Amount</h5>
        <h4>{{ user.coinamount }}</h4>
        <h5>Current Dollar Balance</h5>
        <h4>{{ user.dollarbalance }}</h4>
    </div>
    <div class='trade'>
        <div class='buttons'>
            <button @click="sendCoin('BTC')"> TRADE for BTC </button>
            <button @click="sendCoin('ETH')"> TRADE for ETH </button>
            <button @click="sendCoin('EOS')"> TRADE for EOS </button>
            <button @click="sendCoin('DASH')"> TRADE for DASH </button>
            <button @click="sendCoin('XRP')"> TRADE for XRP </button>
        </div>
    </div>
</div>
</template>


<script>
export default {
    name: 'Dashboard',
    props: ['user'],
    data() {
      return {
          newCoin: ''
      }
    },
    methods: {
        sendCoin(coin) {
            this.newCoin = coin
            console.log(this.newCoin)
        }
    }
}
</script>


<style>
h1 {
    color: #C43E97;
    margin-bottom: 40px;
}
h5 {
    color: #28ABE3;
    margin-bottom: 15px;
    font-size: 27px;
}
h4 {
    margin-bottom: 30px;
    font-size: 29px;
}

button {
    margin: 15px;
}


</style>
