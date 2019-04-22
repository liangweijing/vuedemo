<template>
    <li>
        <slot></slot>
        <!-- 由这个slot来填图片 -->
        <div class="imgstyle">
            <slot name="imgstyle" ></slot>
        </div>
        
    </li>
</template>

<script>

export default {
    name:'my-li',
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
    li{
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    .imgstyle img{
        width: 100%;
        height: 100%;
    }
</style>