<template>
    <div class="home">
        <div class="login-img">
            <img src="../assets/logo.png" alt="logo">
            <p class="home-title">MASK PAPK</p>
            <p class="content">秘密约会平台</p>
        </div>
    </div>
</template>

<script>
export default {
    mounted (){
        setTimeout(()=>{this.$router.push('/login')},2000)
    }
}
</script>
 
<style scoped>
    .home{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .home .login-img{
        width: 208px;
        height: 222px;
        margin-top: 260px;
    }
    .home .login-img img{
        width: 100%;
        height: 100%;
    }
    .home p{
        text-align: center;
        margin-top: 10px;
        font-size: 30px;
    }
    .home .home-title{
        color: #DB51BF;
    }
    .home .content{
        font-size: 25px;
    }
</style>
