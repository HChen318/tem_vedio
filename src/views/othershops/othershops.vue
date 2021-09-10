<template>
  <div id="global">
    <!-- 此部分内容引用相关组件即可 -->
<!--    <h1 class="nav">导航栏</h1>-->
<!--    <hr>-->
<!--    <h1 class="pa1">个人中心组件1</h1>-->
<!--    <hr>-->
<!--    <h1 class="pa2">个人中心组件2</h1>-->
<!--    <hr>-->
    <User></User>

    <!-- 空白div调节间距 -->
    <div class="none1"></div>

    <!-- 选择商品分类 -->
    <Classify></Classify>

    <!--    &lt;!&ndash; 展示橱窗中的商品 &ndash;&gt;-->
    <!--    <SimpleIntroduction></SimpleIntroduction>-->

  </div>
</template>

<script>
import Classify from '@/components/goods/Classify.vue'
import User from "../user/User";
export default {
  name: "othershops",
  components: {
    User,
    Classify,
  }
}
</script>

<style scoped>
#global {
  overflow-y: scroll;
  width: 100%;
  height: 100%;
}
.nav {
  text-align: center;
  height: 35px;
  font-size: 25px;
}
.pa1 {
  text-align: center;
  height: 100px;
  line-height: 100px;
  font-size: 25px;
}
.pa2 {
  text-align: center;
  height: 35px;
  line-height: 35px;
  font-size: 25px;
}
.none1 {
  height: 20px;
}
</style>
