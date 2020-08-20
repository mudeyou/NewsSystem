<template>
  <div class="news-container" v-if="datas.length > 0">
    <div
      v-for="item in show"
      :key="item.channelId"
      class="news-types"
      @click="doChooseId(item.channelId)"
      :class="{
        active: chooseId === item.channelId,
      }"
    >
      <span class="news-text">{{ item.name }}</span>
    </div>
    <a class="collapse" href="" @click.prevent="isCollapse = !isCollapse">{{
      isCollapse ? "展开" : "收起"
    }}</a>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isCollapse: true, //是否折叠
      chooseId: null,
    };
  },
  computed:{
    ...mapState("channels", ['datas','isLoading']),
    show() {
      if (this.isCollapse) {
        return this.datas.slice(0, 8);
      } else {
        return this.datas;
      }
    },
  },
  methods:{
      doChooseId(id){
        this.chooseId = id;
        this.$emit("updateNews", this.chooseId);
      }
  },
  created(){
    if(this.datas.length > 0){
        this.doChooseId(this.datas[0].channelId);
      }
  },
  watch:{
    datas(){
      if(this.datas.length > 0){
        this.doChooseId(this.datas[0].channelId);
      }
    },
  }
};
</script>

<style scoped>
.news-container {
  width: 100%;
  height: 100%;
  padding-bottom: 12px;
  margin: 10px;
  border-bottom: 1px solid #000;
  box-sizing: border-box;
}
.news-container::after {
  content: "";
  display: block;
  clear: both;
}
.news-types {
  font-size: 14px;
  padding: 10px 20px;
  margin: 10px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  float: left;
  cursor: pointer;
}
.news-types a {
  text-decoration: none;
}
.news-types:hover {
  background: #cccccc90;
}
.news-types.active {
  background: #000;
  color: #fff;
  border: 1px solid #000;
}
.collapse {
  display: inline-block;
  font-size: 12px;
  padding: 10px;
  margin: 10px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: blue;
  float: left;
  overflow: hidden;
}
</style>
