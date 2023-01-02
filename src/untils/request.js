import Axios from 'axios'
 const axios=Axios.create({
   baseURL:'/api',
    timeout:3000,
})
//请求拦截器
axios.interceptors.request.use(function(config){
    return config
},function(error){
    return Promise.reject(error)
})

//请求响应
axios.interceptors.response.use(function(response){
    if(response.status===200){
        console.log(response)
        return response.data
    }
    else{
        console.log(response+'出错啦')
        return 
    } 
},function(error){
    return Promise.reject('服务器请求错误'+error)
})
export default axios
