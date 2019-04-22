<template>
    <div>
        <!-- 父组件自定义：title属性传变量加冒号 -->
        <nav-bar :title='title'></nav-bar>

        <!-- 新闻列表 -->
        <div class="demo">
            <ul>
                <li v-for='(news,index) in newslist' :key='index'>
                    <router-link :to='{name:"NewsDetail",params:"{id:news.id}"}'>
                        <img :src="news.img_url" alt="">
                        <div>
                            <span>{{news.title}}</span>
                            <!-- 传参 -->
                            <p>{{news.add_time | convertTime('YYYY年MM月DD日')}}</p> 
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'新闻列表可改变'
           
            ,newslist:[{
                title:'列表1',
                add_time:'2018-02-12',
                img_url:''
            }]
        }
    }
    ,methods:{
        
    }
    ,created(){
        this.$axios.get('getnewslist')
        .then(res=>{
            this.newslist=res.data.message;
        })
    }
}
</script>


<style >
    
</style>