<template>
<div class="header">
    <XHeader @on-click-back="handleBack" class="hearder-title">{{userName}}</XHeader>
</div>    
</template>

<script>
import {XHeader} from 'vux'
export default {
    name: 'gunBack',
    components: {
        XHeader,
    },
    props: {
        user:{
            type: String,
            default: ""
        }
    },
    data (){
        return {
            userName: this.user //vue不允许声明变量与props变量名字相同
        }
    },
    methods:{
        handleBack (){
            this.$router.go(-1);
        }
    }
}
</script>

<style>
    .header{
        width: 100%;
    }
   .header .hearder-title{
       width: 100%;
       height: 60px;
   }
</style>
