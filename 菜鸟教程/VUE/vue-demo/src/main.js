/*jshint esversion: 6 */
import Vue from 'vue';
import App from './App.vue';
import vueRouter from 'vue-router';
import vueResource from 'vue-resource';

//开启debug模式
Vue.config.debug = true;

//注册路由
Vue.use(vueRouter);
Vue.use(vueResource);

//两种方式定义组件
const First = {
	template: '<div><h2>this is first page !</h2></div>'
};
import componentdemo2 from './component/componentdemo2.vue';

//创建路由实例,并配置路由规则
const router = new vueRouter({
	mode:'history',
	base:__dirname,
	routes:[{
		path:"/first",
		component:First,
	},
	{
		path:"/second",
		component:componentdemo2,
	}]
});

//实例化Vue对象
new Vue({
	router:router,
	render: h => h(App)
}).$mount("#app");