<template>
  <div class="nav">
    <div class="left">
      <ul>
        <li
          @click="chooseId = ''"
          :class="{
            active: chooseId == '',
          }"
        >
          <router-link :to="{ name: 'Home' }">首页</router-link>
        </li>
        <li
          v-for="item in datas.slice(0, 7)"
          :key="item.channelId"
          @click="chooseId = item.channelId"
          :class="{
            active: chooseId == item.channelId,
          }"
        >
          <router-link
            :to="{
              name: 'NewsIdShow',
              params: {
                id: item.channelId,
              },
            }"
            >{{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <!-- <span class="logo"
        ><router-link :to="{ name: 'Login' }">登录</router-link></span
      >
      <span class="reg"
        ><router-link :to="{ name: 'Reg' }">注册</router-link></span
      > -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      chooseId: "",
    };
  },
  computed: {
    ...mapState("channels", ["datas", "isLoading"]),
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  background: #000000;
  text-align: center;
  height: 70px;
  line-height: 70px;
}
.nav .left {
  float: left;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.nav li {
  float: left;
  font-size: 16px;
  width: 100px;
  color: #fff;
}
.nav li:nth-child(1) {
  background: #cccccc50;
  border-radius: 10px;
  box-sizing: border-box;
  margin-right: 10px;
}
.nav .right {
  float: left;
  margin-left: 235px;
}
.nav .right span {
  margin-right: 10px;
  font-size: 12px;
  color: cadetblue;
}

.nav .router-link-exact-active {
  color: #fcb85f;
}
.nav .active {
  color: #fcb85f;
}
</style>
