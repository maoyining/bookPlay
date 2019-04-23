import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
   
    userid:100,  //用户名
    admin:false, //权限
    loginin:false,//登录状态
    userName:'yyy',
    
};
const getters={
    getUserid(){
        return state.userid
    },
    getAdmin(){
        return state.admin
    },
    getLoginin(){
        return state.loginin
    },
    getUserName(){
        return state.userName
    },
   
};

const mutations={
    changeUserid(state,num){
        state.userid=num;
    },
    changeAdmin(state,boolean){
        state.admin=boolean;
    },
    changeUserName(state,string){
        state.userName=string;
    },
    changeLoginin(state,boolean){
        state.loginin=boolean;
    }
    
};

const actions={
   
    getNewUserid(context,num){
        context.commit('changeUserid',num)
    },
    getNewAdmin(context,boolean){
        context.commit('changeAdmin',boolean)
    },
    getNewLoginin(context,boolean){
        context.commit('changeLoginin',boolean)
    },
    getNewUserName(context,string){
        context.commit('changeUserName',string)
    },
   
};
const store=new Vuex.Store ({
    state,
    getters,
    mutations,
    actions
});
   

export default store;