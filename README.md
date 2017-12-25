# learnVue
some demo for vue 

vue-router

0. 下载
    npm install vue-router --save-dev

1. 引入路由模块
    import VueRouter from 'vue-router'

2. 使用vue-router
    Vue.use(VueRouter)

3. 配置路由
    const router = new VueRouter({
        routers:[
            {path:"/路径",component:"组件名"}
            {path:"/路径",component:"组件名"}
        ],
        mode:"history",
    })
4. 路由中使用的组件都必须引入才能使用
    import Component from "./component/Component"

5. 使用实例化后的路由
   new Vue({
       router,
       data:{},
       template:"<app/>",
       components:{"app"},
   })

6. 模版中展示路由
    <router-view></router-view>

7. 自定义路由导航
    <ul>
        <li><router-link to='/'></router-link>首页</li>
        <li><router-link to='/404'></router-link>错误页</li>
    </ul>

8. vue http请    使用vue-resource
    npm install vue-resource --save-dev

9. 引用
    import VueRouter from 'vue-resource'
    Vue.use(VueRouter)

10. 网络接口 -jsonplaceholder  在线测试api
11. 使用网络接口测试http请求
    created({
        this.$http.get
        ("http://jsonplaceholder.typicode.com/users")
        .then((data) => {
            console.log(data);
        })

    });

12. https://github.com/hemiahwu/vueplaylist