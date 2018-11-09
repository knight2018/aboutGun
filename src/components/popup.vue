<template>
    <div class="popup">
        <!-- 显示层 -->
        <div class="popup-inp" @click="handlePopup">
            <span>{{popupLf}}</span>
            <span>{{option1}}</span>
        </div>
        <!-- 弹出框 -->
        <div class="popup-bottom" 
             ref="wrapper"
             v-show="off">
            <ul>
                <li>{{popuoTitle}}</li>
                <li v-for="(item,index) in popupOptions" 
                :key='index' 
                @click="handleChoose(item)">{{item}}</li>
            </ul>
        </div>
        <!-- 蒙版 -->
        <div v-show="off" 
        class="masking" 
        ref="mask" 
        @click="handleClose"></div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import tween from '../libs/animation.js'
//组件依赖的库分别是，黄轶的better-scroll，动画tween（个人封装）
import { setTimeout } from 'timers';
export default {
    props: {
        // 组件接收4个参数，分别是option选中项默认值
        // options 数组类型的下拉框值
        // title 下拉框抬头
        //lf 选中项标题
        option: {
            type: String,
            default: ""
        },
        options:{
            type: Array,
            default: ()=>[]
        },
        title: {
            type: String,
            default: ""
        },
        lf: {
            type: String,
            default: ""
        }
    },
    data (){
        return {
            off: false,//通过off来决定是否显示弹出框
            option1: this.option,
            popupOptions: this.options,
            popuoTitle: this.title,
            popupLf: this.lf
        }
    },
    methods: {
        handlePopup (){
            //点击组件时，显示弹出框
            this.off = true;
            tween(this.$refs.wrapper,{date:{bottom: 0}},500);
        },
        handleChoose (item){
            //选中弹出框某一项时，获得该项数据并将弹出框隐藏，注意tween为必须值，哪怕你不需要关闭动画
            this.option1 = item;
            
            tween(this.$refs.wrapper,{date:{bottom: -400}},200);
            setTimeout(()=>this.off = false,200) 
            
        },
        handleClose (){
            //点击蒙版时，关闭弹出框，注意tween为必须值，哪怕你不需要关闭动画
            tween(this.$refs.wrapper,{date:{bottom: -400}},200);
            setTimeout(()=>this.off = false,200) 
        } 
    },
    watch: {
        //监听off变化，以设置对应BScroll，设置蒙版宽高，值基于app.vue获得手机屏幕宽高
        off (val){
            if(val){
                this.$nextTick(() => {
                    this.scroll = new BScroll(this.$refs.wrapper, {})
                })
                this.$refs.mask.style.height = this.$store.state.login.maskingHeight+"px";
                this.$refs.mask.style.width = this.$store.state.login.maskingWidth+"px";
            }
            
        }
    },
    mounted (){

    }
}
</script>

<style>
.popup{
    background-color: white;
}
    .popup-bottom{
        position: fixed;
        z-index: 999;
        width: 100%;
        background-color: white;
        height: 400px;
        bottom: -400px;
        overflow: hidden;
        
    }
    .popup-bottom li{
        text-align: center;
    }
    .masking{
       position: fixed;
       z-index: 1;
       bottom: 0;
       background-color: black;
       opacity: 0.3;
    }
</style>
