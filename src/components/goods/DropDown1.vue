<template>
  <span class="DropDown1">
    <el-dropdown>
      <el-button circle>
        <i class="el-icon-more"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <a href="#/othershops"@click="Report">举报</a>
        </el-dropdown-item>
        <el-dropdown-item>
          <a href="#/othershops" @click="Share">分享</a>
        </el-dropdown-item>
        <el-dropdown-item>
          <a href="#/othershops">(待添加功能键)</a>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </span>

</template>

<script>
export default {
  name: "DropDown1",
  methods: {
    Report() {
      alert('平台已收到您的举报信息，会在72h之内进行处理，感谢您的反馈！');
    },
    Share() {
      alert('商品链接已复制！(目前商品详情页还没写完，所以其实没有复制)');
    }
  }
}
</script>

<style scoped>
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.DropDown1{
  float:left;
  position:absolute;
  top:5px;
  right:5px;
  text-align:right
}
a{
  font-size: 18px;
}

</style>
