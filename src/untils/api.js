import axios from './request'
//获取当前城市
export const guessCity=()=>{
    return axios.get('v1/cities',{
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
export const accountLogin=(data)=>{
    return axios.post('v2/login',data
)
}
//修改密码
export const changePwd=(data)=>{
    return axios.post('v2/changepassword',data)
}
//获取城市地址
export const getCity=(cityId)=>{
    return axios.get('v1/cities/'+cityId)
}
//搜索地址
export const searchAddress=(cityId,word,type)=>{
    return axios.get('v1/pois',{
        params:{
            city_id:cityId,
            keyword:word,
            type
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
export const getShoppingList=(latitude,longitude,offset,limit,restaurant_category_id,order_by,delivery_mode,support_ids,restaurant_category_ids)=>{
    return axios.get('shopping/restaurants',{
        params:{
        latitude,
        longitude,
        offset,//跳过多少条数据
        limit,//请求数据的数量
        restaurant_category_id,//餐馆的id
        order_by,//排序方式id
        delivery_mode,//配送方式id
        support_ids,//餐馆支持特权的id
        restaurant_category_ids//餐馆的分类id
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
//商铺分类列表
export const getCategory=(latitude,longitude)=>{
    return axios.get('shopping/v2/restaurant/category',{
       params:{
        latitude,
        longitude
       }
    })
}
//获取用户信息
export const getUserInfo=()=>{
    return axios.get('v1/user')
}
//退出登录
export const signOut=()=>{
    return axios.get('v2/signout')
}
//红包兑换
export const changehongbao=(data)=>{
    return axios.post('/v1/users/:user_id/hongbao/exchange',data)
}
//服务中心 
export const  getexplain=()=>{
    return axios.get('v3/profile/explain')
}
//获取红包
export const getgongbao=(user_id,limit,offset)=>{
    return axios.get('promotion/v2/users/'+user_id+'/hongbaos',{
        params:{
            limit,
            offset
        }
    })
}
//过期红包
export const getexpirdhongbao=(user_id,limit,offset)=>{
    return axios.get('/promotion/v2/users/'+user_id+'/expired_hongbaos',{
        params:{
            limit,
            offset
        }
    })
}
//兑换红包
export const exchangehongbao=(data)=>{
    return axios.post('v1/users/:user_id/hongbao/exchange',data)
}
//提交照片
export const putUserImg=(data)=>{
   return axios.post('/v1/addimg/avatar',data)
}
//餐馆详情
export const getShopping=(id)=>{
    return axios.get('/shopping/restaurant/'+id)
}
//店铺食品种类
export const getshopfoodlist=(id)=>{
    return axios.get('/shopping/getcategory/'+id)
}   