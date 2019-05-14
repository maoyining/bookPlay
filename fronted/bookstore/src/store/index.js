import Vue from 'vue';
import Vuex from 'vuex';

import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';

//Vue.use(VueSocketio, socketio('ws://118.25.136.149:2333/'), store);
Vue.use(Vuex);

const state={
   
    userid:100,  //用户名
    admin:false, //权限
    loginin:false,//登录状态
    userName:'yyy',
    bookid:'',
    num:''
    
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
    getBookid(){
        return state.bookid
    },
    getNum(){
        return state.num
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
    },
    changeBookid(state,num){
        state.bookid=num;
    },
    changeNum(state,num){
        state.num=num;
    },

    
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
    getNewBookid(context,num){
        context.commit('changeBookid',num)
    },
    getNewNum(context,num){
        context.commit('changeNum',num)
    },
   
};
const store=new Vuex.Store ({
    state,
    getters,
    mutations,
    actions
});
   

export default store;