import axios from "axios";
import { ElNotification } from "element-plus";

import Router from '@/router'
axios.defaults.withCredentials = true
const request = axios.create({
  timeout: 300000, // 请求超时时间
});
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做某件事
    if (config.method === "post") {
      config.headers.post["Content-Type"] = "application/json;charset=UTF-8";
    }
    return config;
  },
  (error) => {
    console.log("错误的传参");
    return Promise.reject(error);
  }
);

// 返回状态判断(添加响应拦截器)
request.interceptors.response.use(
  (res) => {
    if (res.data.code === 0 || res.data.success) {
      return res.data;
    }else if(res.data.code === 500) {
      ElNotification.error({
        title: "请重新登录",
        message: res?.data?.message,
      });
      Router.push({name:'login'})
    }
    else {
      ElNotification.error({
        title: "请求失败",
        message: res?.data?.message
      });
      return null;
    }
  },
  (error) => {
    ElNotification.error({
      title: "请求失败"
    });
    return Promise.reject(error);
  }
);

export default request;
