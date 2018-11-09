<template>
    <div class="login">
        <div class="login-img">
            <img src="../../assets/logo.png" alt="logp">
            <p>面具公园</p>
        </div>
        <div class="content">
            <XButton class="btn" @click.native="handleIslogin">登陆</XButton>
            <XButton class="btn" @click.native="handleRegister">手机号码注册</XButton>
        </div>
        <div class="login-bottom">
            <hr />
            <p>其他登陆方式</p>
            <div class="icon">
                <span>wx</span>
                <span>qq</span>
                <span>weibo</span>
            </div>
        </div>
    </div>
</template>

<script>
import { XButton } from 'vux'

export default {
    components:{XButton},
    methods:{
        handleIslogin (){
            this.$router.push('/islogin');
        },
        handleRegister (){
            this.$router.push('/register')
        }
    }
}
</script>

<style scoped>
    .login{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .login .login-img{
        width: 208px;
        height: 222px;
        margin-top: 260px;
    }
    .login .login-img img{
        width: 100%;
        height: 1005;
    }
    .login .login-img p{
        text-align: center;
        font-size: 40px;/*px*/
        color: #DB51BF;
    }
    .login .content .btn{
        width: 280px;
        height: 100px;
        background-color: #D354F0;
    }
    .login-bottom{
        position: relative;
        width: 100%;
        text-align: center;
    }
    .login-bottom hr{
        width: 80%;
        height: 1px; /*px*/
        margin-top: 12px;
        margin-left: 10%;
        margin-bottom: 20px;
    }
    .login-bottom p{
        position: absolute;
        width: 160px;
        height: 30px;
        left: 50%;
        text-align: center;
        margin-left: -72px;
        top: -3%;
        background-color: #ECC8F7
    }
    
</style>
