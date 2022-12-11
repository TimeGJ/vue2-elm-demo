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