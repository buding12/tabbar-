<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th style="width: 74px">操作</th>
      </template>
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-if="scope.row.inputVisible"
            v-foucs
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            v-model="scope.row.inputValue"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <!-- v-foucs使用自定义指令，在全局声明，@bulr失去焦点 -->
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>

          <span
            v-for="(str, ind) in scope.row.tags"
            :key="ind"
            class="badge badge-warning"
            >{{ str }}</span
          >
        </td>
        <td>
          <button
            class="btn btn-danger btn-sm"
            @click="removeBtn(scope.row.id)"
          >
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "@/components/MyTable.vue";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
export default {
  // ajax在created里面发送
  async created() {
    const res = await axios.get("/api/goods");
    // console.log(res);
    // console.log(res.data.data);
    this.list = res.data.data;
  },
  data() {
    return {
      list: [],
    };
  },
  components: {
    MyTable,
  },
  methods: {
    removeBtn(id) {
      let index = this.list.findIndex((obj) => obj.id === id);
      this.list.splice(index, 1);
    },
    enterFn(obj) {
      if (obj.inputValue.trim().length === 0) {
        alert("请输入数据");
        return;
      }
      obj.tags.push(obj.inputValue);
      obj.inputValue = "";
      obj.inputVisible = false;
    },
  },  
};
</script>
gg
<style>
</style>