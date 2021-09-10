<template>
  <!-- 目前意向是展示不同类型商品，也可改成按不同方法排序所得结果 -->
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane class="child" label="所有商品" name="first">
      <SimpleIntroduction v-bind:infos="activeName"></SimpleIntroduction>
    </el-tab-pane>
    <el-tab-pane class="child" label="电子产品" name="second">
      <SimpleIntroduction v-bind:infos="activeName"></SimpleIntroduction>
    </el-tab-pane>
    <el-tab-pane class="child" label="箱包" name="third">
      <SimpleIntroduction v-bind:infos="activeName"></SimpleIntroduction>
    </el-tab-pane>
    <el-tab-pane class="child" label="家用电器" name="fourth">
      <SimpleIntroduction v-bind:infos="activeName"></SimpleIntroduction>
    </el-tab-pane>
    <el-tab-pane class="child" label="（待添加标签）" name="fivth">
      <SimpleIntroduction v-bind:infos="activeName"></SimpleIntroduction>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import SimpleIntroduction from '@/components/goods/SimpleIntroduction';
export default {
  components: {
    SimpleIntroduction
  },
  data() {
    return {
      activeName: 'first'
    };

  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }

  }
};
</script>

<style>
.child{
  background-image: url("~@/assets/bg.png");
  background-size: cover;
}
</style>


