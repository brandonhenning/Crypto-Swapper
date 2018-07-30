<template>
    <div class='Welcome'>
        <div class='logo-about'>
            <div class='landing'>
                <img src="../assets/swapt logo.png" alt="swapt logo" width="800px">
                <p class='About'>Do you have what it takes to become the next crypto millionaire?</p>
            </div>
        </div>
        <div class='play'>
            <router-link class='play-button' to="/login">PLAY!</router-link>
        </div>
    </div>
</template>


<script>
export default {
  name: 'Welcome'
}   
</script>


<style>
p {
    color: #28ABE3;
    font-size: 25px;
}

.play-button {
    color: #C43E97;
    font-size: 35px;
    border-radius: 15px;
}

.play {
    padding-top: 30px;
}

</style>
