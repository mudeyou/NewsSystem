<template>
  <div class="pager" v-if="count > 1">
    <a
      href=""
      class="pager-item"
      :class="{ disabled: page === 1 }"
      @click.prevent="changePage(1)"
      >首页</a
    >
    <a
      href=""
      class="pager-item"
      :class="{ disabled: page === 1 }"
      @click.prevent="changePage(page - 1)"
      >上一页</a
    >
    <a
      href=""
      class="pager-item"
      :class="{
        active: page == item,
      }"
      v-for="item in arryNumber"
      :key="item"
      @click.prevent="changePage(item)"
      >{{ item }}</a
    >
    <a
      href=""
      class="pager-item"
      :class="{ disabled: page === countPage }"
      @click.prevent="changePage(page + 1)"
      >下一页</a
    >
    <a
      href=""
      class="pager-item"
      :class="{ disabled: page === countPage }"
      @click.prevent="changePage(countPage)"
      >尾页</a
    >
    <span> {{ page }}/{{ countPage }} </span>
  </div>
</template>

<script>
export default {
  props: {
    //当前页数
    page: {
      type: Number,
      default: 1,
    },
    //每页显示页码数
    pagenum: {
      type: Number,
      default: 10,
    },
    //总信息数
    count: {
      type: Number,
      default: 0,
    },
    //每页显示信息数
    maxPageNum: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    countPage() {
      return Math.ceil(this.count / this.maxPageNum);
    },
    minPage() {
      var n = this.page - this.pagenum / 2;
      if (n < 1) {
        n = 1;
      }
      return n;
    },
    maxPage() {
      var n = this.minPage + this.pagenum - 1;
      if (n > this.countPage) {
        n = this.countPage;
      }
      return n;
    },
    arryNumber() {
      var arr = [];
      for (var i = this.minPage; i <= this.maxPage; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    changePage(newPage) {
      if (newPage < 1) {
        newPage = 1;
      } else if (newPage > this.countPage) {
        newPage = this.countPage;
      }
      if (this.page == newPage) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style scoped>
.pager {
  text-align: center;
  font-size: 14px;
  margin: 20px 0;
}
.pager .pager-item {
  display: inline-block;
  padding: 7px 10px;
  margin: 8px;
  border: 1px solid #ccc;
  cursor: pointer;
  color: rgb(96, 96, 224);
}
.pager .pager-item.disabled {
  color: #ccc;
  cursor: not-allowed;
}
.pager .pager-item.active {
  color: #f40;
  border: none;
  cursor: auto;
}
</style>
