<template>
    <div class='temp'>
        <!-- 子组件直接使用title值，属性title是mt-header中的 -->
        <mt-header :title="title">
        <!-- <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link> 永远只返回首页，想根据记录层层返回-->

        <div @click="goback" slot="left">
            <mt-button icon="back">返回</mt-button>
        </div>
        <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>

<script>
export default {
    name:'nav-bar',
    data(){
        return {

        }
    }
    ,props:['title'] //可以直接在template中使用
    ,created(){
        //在这里使用this.title
    }
    ,methods:{
        goback:function(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
    .temp .mint-header{
        background-color: yellowgreen;
    }
</style>