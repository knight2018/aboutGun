<template>
    <div class="islogin">
        <gun-back :user="user"></gun-back>
        <group>
            <x-input class="inp" 
            v-model="username" 
            :required="true" 
            title="登陆账号：" 
            type="text" 
            :min="6" 
            :attr="{ autocomplete:'new-password' }"></x-input>
        </group>
        <group>
            <x-input class="inp" 
            v-model="password" 
            :required="true" 
            title="登陆密码：" 
            type="password" 
            :min="6" 
            :attr="{ autocomplete:'new-password' }"></x-input>
        </group>
        <div>
            <x-button class="btn" @click.native="handleIslogin">登陆</x-button>
        </div>
    </div>
</template>

<script>
import gunBack from '../../components/gunBack'
import { XInput,XButton } from 'vux'
export default {
    components:{gunBack,XInput,XButton},
    data (){
        return {
            user: "登陆",
            username: "",
            password: ""
            
        }
    },
    methods:{
        handleIslogin (){
            this.$router.push('/sex')
        }
    }
}
</script>

<style>

    .islogin .inp{
       height: 40px;
    }
    .islogin .btn{
        width: 280px;
        height: 100px;
        margin-top: 60px; 
        background-color: #D354F0;
    }
</style>
