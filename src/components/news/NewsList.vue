<template>
  <div>
    <div class="news-item-normal" v-for="item in newsList" :key="item.id">
      <div class="image" v-if="item.havePic">
        <a :href="item.link" target="_blank">
          <img :src="item.imageurls[0].url" alt="" />
        </a>
      </div>
      <div class="words">
        <h2 class="title">
          <a :href="item.link" target="_blank">{{ item.title }}</a>
        </h2>
        <div class="aside">
          <span>{{ item.channelName }}</span>
          <span>来源：{{ item.source }}</span>
          <span>发布日期：{{ item.pubDate }}</span>
        </div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newsList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.news-item-normal {
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  padding: 30px 0;
}
.image {
  width: 150px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  float: left;
  margin-left: 15px;
  margin-right: 20px;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.words{
    margin: 1px 20px 0 20px;
}
.title {
  color: #0f4555;
  height: 38px;
  font-size: 1.2em;
}
.aside {
  height: 18px;
  font-size: 14px;
  color: #888;
}
.aside span {
  margin-right: 15px;
}

.content {
  max-height: 100px;
  overflow: hidden;
  line-height: 2;
}

</style>
