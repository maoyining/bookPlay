﻿import axios from 'axios'
import qs from 'qs'
import config from "./config.json"
let domain = config.domain
config.post={
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
}
config.get={}

export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}

axios.defaults.baseURL="http://localhost:1337"
/**
 * 
 * @param {*} method 
 * @param {*} url 
 * @param {*} body 
 * @param {*} queryParameters 
 * @param {*} form FORMDATA
 */
export const request= async (method, url, payload={}) => {
    console.log(url);
  try{
    method = method.toLowerCase()
    let queryUrl = domain+url
    //post
    if (method==="post") {
      payload=qs.stringify(payload)
      let response=await axios[method](queryUrl, payload, config.post)
      console.log(response);
      return JSON.parse(JSON.stringify(response))
    } 
    //get
    else if (method === 'get') {
      return axios[method](queryUrl, {
        params: payload
      }, config.get)
    }
    //other
    else {
      return axios[method](queryUrl, qs.stringify(payload))
    }
  }catch(err){
    return{
      status:0,
      info:err
    }
  }
}