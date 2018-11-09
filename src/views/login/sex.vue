<template>
    <div class="sex">
        <gun-back :user="user"></gun-back>
        <div>
            <span @click="handleBoy">男</span>
            <span @click="handleGril">女</span>
            <p v-if="sex">视频真人审核，女神等你来约</p>
            <p v-else>这里长得漂亮可以当饭吃</p>
        </div>
        <x-button class="btn" @click.native="handlelogin">确定</x-button>
    </div>
</template>

<script>
import gunBack from '../../components/gunBack'
import { XButton } from 'vux'
export default {
    components:{gunBack,XButton},
    data (){
        return {
            user: "你是..",
            sex: false,
        }
    },
    methods: {
        handleBoy (){
            this.sex= true;
        },
        handleGril (){
            this.sex = false
        },
        handlelogin(){
            this.$router.push('/databank')
        }
    }
}
</script>

<style scoped>
    .sex .btn {
         width: 280px;
        height: 100px;
        margin-top: 60px; 
        background-color: #D354F0;
    }
</style>
