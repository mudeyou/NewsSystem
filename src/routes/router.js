import Vue from "vue";
import VueRouter from 'vue-router';
import config from './configRouter';

Vue.use(VueRouter);

var router = new VueRouter(config);

export default router;