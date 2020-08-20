export default {
    routes:[
        {
            path: "/",
            name: "Home",
            component: ()=>import("@/views/Home")
        },
        {
            //添加动态id渲染对应组件
            path: "/newid/:id",
            name: "NewsIdShow",
            component: ()=>import("@/views/NewsIdShow")
        },
        {
            path: "*",
            name: "404",
            component: ()=>import("@/views/Erro")
        }
    ],
    mode: "history"
}