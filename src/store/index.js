import Vue from "vue";
import vuex from "vuex";
import channels from "./channels";  

Vue.use(vuex);

var store = new vuex.Store({
    modules:{
        channels
    }
});

export default store;