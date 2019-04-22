<template>
  <div>

    <mt-header title="vue demo"></mt-header>
    <router-view />

    <p>从此往后是App.vue</p>
    <p>输出的是ID值{{selected}}</p>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" src="">
        首页
      </mt-tab-item>
      <mt-tab-item id="Order">
        <img slot="icon" src="">
        订单
      </mt-tab-item>
      <mt-tab-item id="Found">
        <img slot="icon" src="">
        发现
      </mt-tab-item>
      <mt-tab-item id="Mine">
        <img slot="icon" src="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selected: '',
    };
  },
  watch: {
    selected: function(newV, oldV) {
      console.log(newV); //页面改变
      console.log(this); //不能用箭头函数因为this会向上级绑定,没有$router
      this.$router.push({
        //编程导航
        name: newV,
      });
    },
  },
};
</script>

<style scoped>
.mint-tabbar {
  position: fixed;
  bottom: 0;
}
</style>
