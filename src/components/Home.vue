

<template>
  <div>
        <mt-swipe :auto="4000" style="height:30px">
          <mt-swipe-item v-for="(img,index) in imags" :key='index'>
              <div>{{img.content}}</div>
          </mt-swipe-item>
          
        </mt-swipe>

        <!-- 使用自定义插件中注册的全局组件 -->
        <test/>

        <!-- 九宫格 -->
        <!-- <div class="grid">
        <ul>
          <li v-for="(model,index) in models" :key="index">
            <router-link :to='model.route'>
              <span :class='model.className'>{{model.title}}</span>
           
            </router-link>

            </li>
        </ul>
        </div> -->
        
       <div class="grid">
        <my-ul>
          <my-li v-for="(model,index) in models" :key="index">
            <!-- 不用a标签用route-link -->
            <router-link :to='model.route'>
              <span :class='model.className'>{{model.title}}</span>
              
            </router-link>

            </my-li>
        </my-ul>
        </div>

  </div>
    
</template>


<script>
export default {
   name: 'Home',
  data(){
      return{
        imags:[
          {
            content:"1111111"
          },
          {
            content:"2222222"
          },
          {
            content:"3333333"
          },
        ],
        models:[
          {
            title:'新闻',
            className:'back-news',
            route:{
              name:'NewsList'
            }
          }
          ,{
            title:'图文分享',
            className:'back-news',
            route:{
              name:'PhotoShare',
              query:{categoryId:0}
            }
          },{
            title:'我的',
            className:'back-news',
            route:{
              name:'home'
            }
          }
        ]
      }
  }
  ,created(){
    // this.$axios.get('getlunbo')
    // .then(res=>{
    //   console.log(res);
    // })
    // .catch(err=>{
    //   console.log(err);
    // })
    //测试自定义插件
    //无法修改
    this.$log="abc";
    this.$log();
  }
}
</script>

<style>
  .back-news{
    background-color: pink;
  }
</style>
