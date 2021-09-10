<template>
  <!-- 动态化：想法是先获取根据不同选项卡的特征值，获取相应元素，有几个元素就生成几个span展示出来？ -->
  <div class="goods middle" :style="backgroundDiv">

    <!-- 第二个判断语句需改为传入label类型 -->
    <span class="SingleGood" v-if = " infos=='first' ^ infos=='second'">
      <img class="photo" src="@/assets/a1.jpg" @click="JumpToGoodsManagement">
      官网Huawei/华为 畅享20 SE 5G新品手机官方旗舰店正品畅想20se全
      <DropDown1></DropDown1>
    </span>

    <span class="SingleGood" v-if = " infos=='first' ^ infos=='second'">
      <DropDown1></DropDown1>
      <img class="photo" src="@/assets/a2.jpg" @click="JumpToGoodsManagement">
      【家用办公一体机】Lenovo/联想AIO逸 23.8英寸网课电脑 台式电脑一体机 商务办公家用台式机疾速固态/低蓝光
    </span>

    <span class="SingleGood" v-if = " infos=='first' ^ infos=='second'">
      <DropDown1></DropDown1>
      <img class="photo" src="@/assets/a3.jpg" @click="JumpToGoodsManagement">
      【24期免息】Microsoft/微软 Surface Pro 7 i5 8GB 256GB笔记本平板电脑二合一X超轻薄便携商务办公学生pro7
    </span>

    <span class="SingleGood" v-if = " infos=='first' ^ infos=='third'">
  <img class="photo" src="@/assets/b1.jpg" @click="JumpToGoodsManagement">
      森马铝框拉杆箱男行李箱万向轮女24寸学生潮密码旅行皮箱子韩版大
      <DropDown1></DropDown1>
    </span>

    <span class="SingleGood" v-if = " infos=='first' ^ infos=='third'">
      <img class="photo" src="@/assets/b2.jpg" @click="JumpToGoodsManagement">
      袋鼠旅行箱行李箱铝框拉杆箱万向轮20女男学生24密码皮箱子26寸潮
      <DropDown1></DropDown1>
    </span>

    <span class="SingleGood" v-if = " infos=='first' ^ infos=='third'">
      <img class="photo" src="@/assets/b3.jpg" @click="JumpToGoodsManagement">
      不莱玫行李箱女小皮箱大容静音万向轮轻便拉杆箱子旅行箱20寸登机
      <DropDown1></DropDown1>
    </span>

    <span class="SingleGood"  v-if = "infos=='first' ^ infos=='fourth'">
      <img class="photo" src="@/assets/c1.jpg" @click="JumpToGoodsManagement">
      电饭煲家用多功能老式不粘锅2L-6升5人大容量4L宿舍迷你3人电饭锅
      品质饭煲 送【蒸格/饭 汤勺/量杯/百洁布】
      <DropDown1></DropDown1>
    </span>

    <span class="SingleGood" v-if = "infos=='first' ^ infos=='fourth'">
      <img class="photo" src="@/assets/c2.jpg" @click="JumpToGoodsManagement">
      创维778电风扇家用台式小电扇夏天台扇学生宿舍床上转页扇鸿运扇
      <DropDown1></DropDown1>
    </span>

  </div>

</template>

<script>
import DropDown1 from '@/components/goods/DropDown1';
export default {
  name: "SimpleIntroduction",
  components: {
    DropDown1
  },
  props:{
    infos:{                        //父组件绑定的属性名
      type:String ,                //值的类型
      required:true                //是否符合规定
    }
  },
  data() {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + require('@/assets/bg.png') + ')'
      }
    }
  },
  methods: {
    JumpToGoodsManagement() {
      alert('目前商品详情页还没写完，还不能跳转到商品详情页');
    }
  }
}
</script>

<style scoped>
.photo{
  width:275px;
  height: 275px;
}
.goods{
  width: 1205px;
  /*border:1px solid #000;*/
  margin:0 auto;
}
.middle{
  height: auto;
  width: 1205px;
  background: no-repeat center top;
  background-size: cover;
}
.SingleGood{
  display:inline-block;
  width:275px;
  height: 345px;
  border:1px solid #000;
  margin: 5px 10px 5px 10px;
  vertical-align:top;
  position: relative
}

</style>
