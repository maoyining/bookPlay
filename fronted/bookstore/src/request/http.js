import axios from 'axios';
import store from '@/store'

const service=axios.create({
    timeout:15000
})

service.interceptors.response.use(
    function(response){
        return Promise.resolve(response)
    },
    function(error){
        const httpError={
            hasError:true,
            status:error.response.status,
            statusText:error.response.statusText
        }
        store.commit('ON_HTTP_ERROR',httpError)
        return Promise.reject(error)
    }
)

export default service
