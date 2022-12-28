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
            username:phoneNum,
            password:password,
            captcha_code:codeNumber
    })
}
//获取城市地址
export const getCity=(cityId)=>{
    return axios.get('v1/cities/'+cityId)
}
//搜索地址
export const searchAddress=(cityId,word)=>{
    return axios.get('v1/pois',{
        params:{
            city_id:cityId,
            keyword:word,
        } 
    })
}
//食品分类列表
export const getFoodList=()=>{
    return axios.get('v2/index_entry')
}
//经纬度提供具体地址
export const detailedAddress=(address)=>{
    return axios.get('v2/pois/'+address)
}
//商铺列表
export const getShoppingList=(latitude,longitude)=>{
    return axios.get('shopping/restaurants',{
        params:{
        latitude,
        longitude
        }
    })
}
//搜索商铺
export const searchRest=(geohash,keyword)=>{
    return axios.get('v4/restaurants',{
        params:{
            geohash,
            keyword
        }
    })
}