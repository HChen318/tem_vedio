<template>
  <div>
    <el-row>
      <Top-nav></Top-nav>
    </el-row>
    <el-row class="first">
      <el-col :span="3">
        <div class="imgbox">
          <img src="../../assets/img/touxiang.png" />
        </div>
      </el-col>
      <el-col :span="14">
        <div>
          <div class="type">昵称</div>
          <div>个人简介</div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="pos">
          <div class="type">粉丝</div>
          <div class="number">100</div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="pos">
          <div class="type">关注</div>
          <div class="number">100</div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="pos">
          <div class="type">点赞</div>
          <div class="number">100</div>
        </div>
      </el-col>
    </el-row>
    <el-row class="second"
            :gutter="20">
      <el-col :span="2">
        <div class="title">我的作品</div>
      </el-col>
      <el-col :span="2">
        <div class="title">我的收藏</div>
      </el-col>
      <el-col :span="2">
        <div class="title">历史点赞</div>
      </el-col>
      <el-col :span="2">
        <div class="title">商品橱窗</div>
      </el-col>
      <el-col :span="2">
        <div class="title">我的订单</div>
      </el-col>
      <el-col :span="2">
        <div class="title">设置</div>
      </el-col>
      <!-- <el-menu :default-active="defaultActiveIndex"
               class="el-menu-demo"
               mode="horizontal"
               @select="handleSelect"
               :router="true">
        <el-menu-item index="/enterpriseManager">我的作品</el-menu-item>
        <el-menu-item index="/orderManager">我的收藏</el-menu-item>
        <el-menu-item index="/systemManager">历史点赞</el-menu-item>
        <el-menu-item index="/systemManager">商品橱窗</el-menu-item>
        <el-menu-item index="/systemManager">我的订单</el-menu-item>
        <el-menu-item index="/systemManager">设置</el-menu-item>
      </el-menu> -->
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TopNav from '../../components/nav/topNav.vue'
export default {
  name: 'User',
  data () {
    return {

    }
  },
  components: {
    TopNav
  }
}
</script>

<style scoped>
.first {
  border-bottom: 1px solid #dfe0e0;
  color: #333;
  line-height: 60px;
}

.second {
  border-bottom: 1px solid #dfe0e0;
  color: #333;
  line-height: 60px;
  text-align: right;
}

.imgbox {
  width: 80px;
  height: 80px;
  transform: translateX(90%) translateY(20%);
}
.imgbox img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.pos {
  text-align: center;
}

.type {
  font-size: 28px;
  font-weight: bold;
}

.number {
  font-size: 20px;
  text-align: center;
}
</style>
