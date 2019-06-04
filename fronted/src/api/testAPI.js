import request from '@/request'
export default function getTest(apiRoute){
    return request({
        url:apiRoute,
        method:'get'
    })
}