<template>
  <div id="global">
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    <Form></Form>
  </div>
</template>

<script>
import Form from '@/components/goods/Form.vue'
export default {
  name: "othershops",
  components:{
    Form,
  }
}
</script>

<style scoped>
#global{
  width: 1000px;
  position:absolute;
  left:50%;
  margin:0 0 0 -500px;
  /*overflow-y:scroll;*/
  /*width: 100%;*/
  /*height: 100%;*/
}
</style>
