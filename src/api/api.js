// src\api\api.js
import axios from 'axios';    // 导入axios
import qs from 'qs'
import Vue from "vue";

Vue.prototype.$qs = qs

let host = 'http://124.70.31.157:8090';

// 登录
export const login = params => { return axios.post(`${host}/user/login`, params)};

// 注册
export const register = params => { return axios.post(`${host}/user/register`, params)};
