<template>
    <div>
      <nav-bar title='图片详情'></nav-bar>  
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minus quae iste omnis numquam obcaecati voluptatem vero laudantium quam et totam labore sed adipisci impedit ipsam ullam delectus, eos reprehenderit.
        </div>
      <div class="content">
            <p>{{photoInfo.title}}</p>
            <p>{{photoInfo.add_time | convertTime('YYYY-MM-DD')}}</p>
            <p v-html="photoInfo.content">content是代html的内容，要通过v-html显示</p>
            

            <!-- 使用预览插件 -->
            <vue-preview :slides="imgs2"> </vue-preview>

            <!-- 使用九宫格组件 -->
            <!-- 使用slot在组件中修改图片样式 -->
            <!-- <my-ul>
                <my-li v-for="(img,index) in imgs" :key="index">
                    
                    <img :src="img.src" slot="imgstyle">
                </my-li>
            </my-ul> -->

        <!-- 使用评论组件：需要id数据(选的那张图片其id)发起请求 -->
        <comment :cid="$route.params.id" />
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            photoInfo:{}
            ,imgs2: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]
        }
    }
    ,created(){
        let {id}=this.$route.params.id;
        //发请求获取详细信息,使用模板字符反引号
        this.$axios.get(`getimageInfo/${id}`)
        .then(res=>{
            this.photoInfo=res.data.message[0];
        })
        .catch(console.log);

        //获取缩略图信息
         this.$axios.get(`getthumimages/${id}`)
        .then(res=>{
            this.imgs=res.data.message[0];
            //有这几个属性才可使用预览插件
            this.imgs.array.forEach(element => {
                element.w=200;  //大图宽高
                element.h=200;
                element.msrc=element.src;
            });
        })
        .catch(console.log);
    }
}
</script>