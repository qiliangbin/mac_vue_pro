import axios from 'axios'
import qs from 'qs'
import { Loading } from 'element-ui';
const service = axios.create({
  timeout: 30000,
  withCredentials: true, //允许携带cookie
}) 
// let loadingInstance = Loading.service(options);
//请求拦截器
service.interceptors.request.use((config) => {
  // loadingInstance
  //添加统一请求头
  config.headers.token = 'xxx'
  return config
},(err) => {
  return Promise.resolve(err)
})
// 添加响应拦截器
service.interceptors.response.use(
  response => {
    if(+response.status === 200) {
      // loadingInstance.close()
      return Promise.resolve(response.data)
    } else {
      // loadingInstance.close()
      return Promise.reject(response.data)
    }
  },
  err => {
    console.log(err)
    // loadingInstance.close()
    return Promise.reject(err)
  }
)

// export default class Http {
  
// }
export const get = async(url, params) =>{
  const res = await service.get(url,{params: params})
  return res.data 
}

export const post = async(url, data) => {
  const res = await service.post(url,qs.stringify(data))
  return res.data
}

// http://study.jsplus.com/Yixiantong/getHomeDatas