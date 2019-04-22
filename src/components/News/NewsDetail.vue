<template>
    <div class="detail">
        <nav-bar :title="title"></nav-bar>
        <div class="content">
            <p>{{newsInfo.title}}</p>
            <p>{{newsInfo.add_time | convertTime('YYYY-MM-DD')}}</p>
            <p v-html="newsInfo.content">content是代html的内容，要通过v-html显示</p>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:'新闻详情'
            ,newsInfo:{} //新闻详情数据

        }
    }
    ,created(){
        // console.log(this.$route.params);路由中的参数params中的id
        //1.获取路由参数
        let {id}=this.$route.params; //结构赋值
        //2.拼接后台URL发起请求
        let url='getnew/'+id;
        this.$axios.get(url)
        .then(res=>{
            // 3.响应数据渲染页面，通过一个详情对象
            this.newsInfo=res.data.message[0];//因为是通过id获取数据的，查出来肯定就一条
        })
        
    }
}
</script>
<style>
.detail{
    background-color: yellow;
}

</style>
