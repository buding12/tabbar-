<template>
  <div class="my-header" :style="{ backgroundColor: background, color }">
    TarBar案例
  </div>
</template>

<script>
// 让Header组件支持不同的项目--自定义
export default {
  // 父子组件对象传值,props是对象可以定义类型规则
  props: {
    background: String,
    color: {
      type: String,
      default: "#fff", //color的默认值
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>