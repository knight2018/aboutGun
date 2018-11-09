import axios from 'axios'
import Vue from 'vue'
import Qs from 'qs'
import store from '../store/index'
import router from '../router/index'
//判断生产测试上线环境设置不同url
if (process.env.NODE_EVN == 'development'){
    axios.defaults.baseURL = 'https://www.happy.com';
}else if (process.env.NODE_EVN == 'debug') {
    axios.defaults.baseURL = 'https://www.debug.com';
}else if(process.env.NODE_EVN == 'production'){
    axios.defaults.baseURL = 'https://www.production.com';
}
axios.defaults.timeout = 100000; //超时请求10秒
//post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//请求拦截器（注意登陆注册不需要拦截,当然拦截情况下，后台可以选择拒绝接收）
axios.interceptors.request.use(
    config =>{
        const token = store.state.token;
        token && (config.headers.token = token);//将服务器返回的token存在store中，无论cookies or localStorage
        return config
    },
    error => Promise.reject(error)   
)
//响应拦截器
axios.interceptors.response.use(
    response =>{
        //如果返回200，说明请求成功
        if(response.status === 200){
            return Promise.resolve(response);
        }else{
            return Promise.reject(response);
        }
    },
    error =>{
        let off = false;
        if(error.response.status){
            switch (error.response.status){
                case 401:
                    router.replace({
                        path: '/',
                        query: {
                            redirect : router.currentRoute.fullPath //记录下跳转页面，登陆后通过router.push({path:decodeURIComponent(url)})跳转回来
                        }
                    });
                    break;

                    case 403:
                        off = true;
                        Vue.$vux.toast.show({
                            type: warn,
                            text: "登陆过期"
                        });
                        //清除token
                        localStorage.removeItem('token'); //这里用的localStorage用cookies需要更改
                        store.commit('loginSuccess',null);
                        setTimeout(()=>{
                            router.replace({
                                path: '/',
                                query:{
                                    redirect: router.currentRoute.fullPath
                                }
                            });
                        },2000);
                        break;

                    case 404:
                    Vue.$vux.toast.show({
                            type: warn,
                            text: "网络请求不存在"
                        });
                        break;

                    default:
                    Vue.$vux.toast.show({
                            type: warn,
                            text: error.response.data.message
                        });
            }
            return Promise.reject(error.response);
        }
        
    }
)
//get封装
export function get(url,params){
    return new Promise ((resolve,reject)=>{
        axios.get(url,{
            params:params
        })
        .then((res) => {
            resolve(res.data);    
        }).catch((err) => {
            reject(err.data)
        });
    });
}
//post封装
export function post(url,params){
    return new Promise((resolve,reject)=>{
        axios.post(url,Qs.stringify(params))
        .then(res=>{
            resolve(res.data);
        })
        .catch(err=>{
            reject(err.data)
        });
    });
}