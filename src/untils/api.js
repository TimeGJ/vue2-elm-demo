import axios from './request'
//获取当前城市
export const guessCity=()=>{
    return axios.get('/v1/cities',{
        params:{
            type:'guess'
        }
    })
}
// 获取热门城市
export const hotCities=()=>{
    return axios.get('/v1/cities',{
        params:{
            type:'hot'
        }
    })
}
//获取所有城市
export const cities=()=>{
    return axios.get('/v1/cities',{
        params:{
            type:'group'
        }
    })
}
//验证码图片
export const  captCodeImg=()=>{
    return axios.post('/v1/captchas')
}
//用户信息登录
export const accountLogin=(phoneNum,password,codeNumber)=>{
    return axios.post('/v2/login',{
        data:{
            username:phoneNum,
            password:password,
            captcha_code:codeNumber
        }
    })
}
