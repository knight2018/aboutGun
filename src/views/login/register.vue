<template>
    <div class="register">
        <gun-back :user="user"></gun-back>
        <group>
            <x-input title="+86" 
            placeholder="请输入手机号"
            type="tel"
            keyboard="number">

            </x-input>
        </group>
        <group title="验证码">
        <x-input title="发送验证码">
            <x-button slot="right" type="primary">发送验证码</x-button>
        </x-input>
        </group>
        <group>
            <x-input title="密码" 
            placeholder="请输入密码"
            type="tel"
            keyboard="number">

            </x-input>
        </group>
        <x-button class="btn" @click.native="handleRegister">注册</x-button>
    </div>
</template>

<script>
import gunBack from '../../components/gunBack'
import { XInput,XButton } from 'vux'
export default {
    components:{gunBack,XInput,XButton},
    data (){
        return {
            user: "注册"
        }
    },
    methods :{
        handleRegister (){
            this.$router.push('/sex')
        }
    }
}
</script>

<style scoped>
    .register .btn{
        width: 280px;
        height: 100px;
        margin-top: 60px; 
        background-color: #D354F0;
    }
</style>
