import Axios from 'axios'
 const axios=Axios.create({
    baseURL:'https://elm.cangdu.org',
    timeout:3000,
})
//请求拦截器
axios.interceptors.request.use(function(config){
    console.log('1')
    return config
},function(error){
    return Promise.reject(error)
})

//请求响应
axios.interceptors.response.use(function(response){
    console.log(response.data)
    return response.data
},function(error){
    return Promise.reject(error)
})
export default axios
