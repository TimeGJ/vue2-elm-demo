import Axios from 'axios'
 const axios=Axios.create({
    baseURL:'https://elm.cangdu.org',
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
    console.log(response)
    return response.data
},function(error){
    return Promise.reject('服务器请求错误'+error)
})
export default axios
