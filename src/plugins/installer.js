//vue插件必须具备Install函数
function Installer(){
    //自身初始化
}
Installer.install=function(Vue){
    //接收vue构造函数，给原型挂载属性或注册全剧组件或过滤器
    // console.log(Vue);
    //1.注册全局组件
    Vue.component('test',{
        template:'<h1>hahaha</h1>'
    });
    //2.挂载属性
    // Vue.prototype.$log=function(){
    //     console.log('owjeijfowj');
    //     this.$log='ssdjois';//子类可以修改父类此属性
    // }
    let log=function(){
        console.log('自定义插件的log函数');
    }
    //给原型定义属性的获取和设置,参数：对象，属性名，行为
    Object.defineProperty(Vue.prototype,"$log",{
        set:function(newV){
            console.log("你做梦，改不了。");
            // log=newV 改变
        }
        ,get:function(){
            return log;
        }
    })
}

export default Installer;