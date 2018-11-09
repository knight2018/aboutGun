<template>
    <div class="databank">
        <gun-back :user="user"></gun-back>
        <div>
            <div class="head-portrait" @click="handleHead">
                <span>上传头像</span>
            </div>
        </div>
        <div class="form">
            <group class="name inp">
                <x-input class="ipu-vux" title="昵称"></x-input>
            </group>
            <group class="about-gun inp">
                <x-input class="ipu-vux" title="约会范围" placeholder="（可以多选）"></x-input>
            </group>
            <popup v-bind="params"></popup>
            <popup v-bind="params2"></popup>
            <group class="status inp">
                <x-input class="ipu-vux" title="身份"></x-input>
            </group>
        </div>
    </div>
</template>

<script>
import { XInput,XButton,PopupRadio  } from 'vux'
export default {
    components:{XInput,XButton,PopupRadio },
    data (){
        return {
            user: "完善资料",

            params:{
                option: '18岁',
                options: this.handleAge(),
                title: "请选择年龄",
                lf: "年龄"
            },
            params2:{
                option: '18岁',
                options: this.handleAge(),
                title: "请选择年龄",
                lf: "年龄"
            }
        }
    },
    methods: {
        handleHead (){
            console.log(this.params.option);
            console.log(this.params2.option)
        },
        handleAge (){
            let age = [];
            let y
            for(var i=15;i<=45;i++){
                y =`${i}岁`
                age.push(y);
            }
            return age;
        }
    },
    created (){
        
    }
}
</script>

<style scoped>
    .databank{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .form {
        width: 100%;
        text-align: center
    }
    .head-portrait{
        width: 200px;
        height: 200px;
        margin-top: 16px;
        margin-bottom: 16px;
        border-radius: 50%;
        background-color: white;
        line-height: 200px;
        text-align: center;
    }
    .databank .inp {
        width: 100%;
        
    }
    .databank .inp .ipu-vux{
        height: 60px;
        background-color: #F2B6B6;
        text-align: left;
    }
    .weui-cells_radio{
        height: 560px;
    }
</style>
