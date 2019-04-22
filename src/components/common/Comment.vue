<template>
    <div>
        <textarea style="width:100%" v-model="content"></textarea>
        <span @click="goBack">返回</span>
        <mt-button type="primary" size="large" @click="sendMsg">发表</mt-button>
        <ul>
            <li v-for="(msg,index) in msgs" :key="index">
                <p>{{msg.user_name}}:{{msg.content}} {{msg.add_time | relativeTime()}}</p>
            </li>
        </ul>
        <!-- plain镂空按钮 -->
        <mt-button type="danger" size="large" plain @click='loadMoreByPage' :disabled='disabled'>更多</mt-button>
    </div>
</template>
<script>
export default {
    name:'comment'
    ,data(){
        return {
            msgs:[{
                user_name:'张三'
                ,content:'lorem'
                ,add_time:'2019-03-18'
            }]
            ,content:''
            ,page:1,
            disabled:false
        }
    }
    ,props:['cid'] //从父组件PhotoDetail传入，点击了某个图片传入该图的id
    ,created(){//组件一创建便去获取已有的评论数据
        this.loadMsgByPage();
    }
    ,methods:{
        goBack(){
            this.$router.go(-1);
        },
        initPage(){
            this.page=1;
        },
        sendMsg(){//发布评论，绑定到图片id是cid的图片下
            this.$axios.post(`/api/postcomment/${this.cid}`,`content=${this.content}`)
            .then(res=>{
                //发表评论后把页码归1，查询的时候显示第一页
                this.initPage();
                this.loadMsgByPage();
            })
            .catch(console.log);
        },
        loadMsgByPage(){
            //追加更多，当是第一页的时候查询出的内容是赋值，其他页都是追加
            this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`)
        .then(res=>{
                //排除第一次请求然后判断响应数据是否不足10条,禁用更多按钮，使用mintUI中toast提示
                if(res.data.message.length<10 && this.page!==1){
                    //给予提示,全局引入mintUI时在vue.prototype挂载一些对象，方便在组件内直接this使用，iconClass自己引入图标
                    this.$toast({
                        message:'没数据了',
                        iconClass:'icon icon-success'
                    });
                    //禁止按钮点
                    this.disabled=true;
                    return;
                }
                //加载最新数据
                if(this.page===1){
                    this.msgs=res.data.message;
                }else{
                    this.msgs=this.msgs.concat(res.data.message);
                }
                this.page++;//追加到第几页的数据了
            })
            .catch(console.log);
        }
    }
}
</script>
