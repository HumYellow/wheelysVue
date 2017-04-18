import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Index from './page/index/index.vue'
import ShopList from './page/shopList/shopList.vue'
import Find from './page/find/find.vue'
import OrderList from './page/orderList/orderList.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
   /* mode: 'history',*/
    base: __dirname,
    routes: [
     	{
        	path: '/', 
        	name:'shopList',
        	component:ShopList
        },
     	{
        	path: '/find', 
        	name:'find',
        	component:Find
        },
     	{
        	path: '/orderList', 
        	name:'orderList',
        	component:OrderList
        }
    ]
})
export default router