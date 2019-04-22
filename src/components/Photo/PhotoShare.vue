<template>
    <div class="share">
      <nav-bar title="图文分享"></nav-bar>  
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam quos minus cumque, quod quibusdam id distinctio sed officia! Accusamus!</p>
      <!-- 引入返回导航 -->
      <div class="photo-category">
          <ul>
              <li v-for="category in categories" :key="category.id"><a href="javascript:;" @click="loadImgsById(category.id)">标题1</a></li>
              
          </ul>
          
      </div>
      <div class="photo-list">
          <ul>
              <li  v-for='(img,index) in imgs' :key='index'>
                  <router-link :to="{name:'PhotoDetail',params:{id:img.id}}">
                      <img v-if="$route.query.categoryId===0" v-lazy="img.img_url" >
                      <img v-else :src="img.img_url" >

                      <p>{{img.title}}</p>
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
            imgs:[{
                id:0,
                title:'列表1',
                add_time:'2018-02-12',
                img_url:'../../static/img/img.jpeg'
            }], //图片列表
            categories:[] //分类信息
        }
    }
    ,created(){
        // console.log(this.$route.query.categoryId);
        //1.获取分类id
        let {categoryId} =this.$route.query;
        this.loadImgsById(categoryId);

        //获取分类信息
        this.$axios.get('getimgcategory'+categoryId)
        .then(res=>{
            this.categories=res.data.message;

            //加入“全部”到数组顶部
            this.categories.unshift({id:0,title:'全部'});

        }).catch(console.log);
        
    }
    //路由跟新才调用，则意味着之前路由必有值
    ,beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    let {categoryId} =to.query; //路由参数放在to里面


    //初次进入则不需要清空，所以放到更新路由的钩子函数中
    if(categoryId===0){
        this.imgs=[];
    }

    //发请求改变页面数据
    this.loadImgsById(categoryId)
    next();
  }
    ,methods:{
        loadImgsById(id){
              // 2.发起请求,只是改变数据，地址栏路由参数可能不变
        this.$axios.get('getimages/'+id)
        .then(res=>{
            // 3.渲染数据
            this.imgs=res.data.message;
        })
        .catch(console.log);

    //想跳转页面时路由参数也改变用编程导航跳转
    // this.$router.push({
    //     name:'PhotoShare',
    //     query:{categroryId:id}
    // });

        }
    }
}
</script>

<style lang="">
    .share{
        background-color: grey;
    }
    image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
img{
    width: 100%;
    height: 100%;
}
</style>