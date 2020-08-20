<template>
  <div>
    <div class="title">
      {{ NewsTitle }}
    </div>
    <Loading v-if="isLoading" />
    <NewsList v-else :newsList="NewsList" />
    <Footer
      :page="page"
      :pagenum="pagenum"
      :maxPageNum="maxPageNum"
      :count="count"
      @pageChange="changePage"
    />
  </div>
</template>

<script>
import { getNewsType, getNews } from "../services/getNews";
import Loading from "../components/Loading";
import NewsList from "../components/news/NewsList";
import Footer from "./Footer";
export default {
  components: {
    Loading,
    NewsList,
    Footer,
  },
  data() {
    return {
      isLoading: true,
      NewsList:[],
      pagenum: 10,
      maxPageNum: 20,
      count: 0,
    };
  },
  computed: {
    page() {
      return +this.$route.query.page || 1;
    },
    NewsTitle(){
      var channels = this.$store.state.channels.datas;
      if(channels.length > 0){
        var datanews = channels.find((item)=>item.channelId === this.$route.params.id);
        return datanews.name;
      }
      return '';
    }
  },
  watch: {
    "$route.params.id": {
      //一开始数据要不要当做变化
      immediate: true,
      handler() {
        this.setNews();
      },
    },
  },
  methods: {
    changePage(newPage) {
      this.$router.push("?page=" + newPage);
      this.setNews();
    },
    //设置页面信息
    async setNews() {
      this.isLoading = true;
      await getNews(this.$route.params.id, this.page, this.maxPageNum).then(
        (resp) => {
          this.count = resp.allNum;
          this.NewsList = resp.contentlist;
        }
      );
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 2em;
  color: #888888;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
</style>
