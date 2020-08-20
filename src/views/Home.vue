<template>
  <div>
    <Banner :banner="banners" :time="2000" />
    <News @updateNews="updateNews" />
    <Loading v-show="loading" />
    <NewsList v-show="!loading" :newsList="newList" />
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
import { mapState } from "vuex";
import { getNews } from "../services/getNews";
import Banner from "../components/Banner";
import News from "../components/news/News";
import NewsList from "../components/news/NewsList";
import Loading from "../components/Loading";
import Footer from "./Footer";
export default {
  components: {
    Banner,
    News,
    NewsList,
    Loading,
    Footer,
  },
  data() {
    return {
      banners: [
        {
          url: require("@/assets/banner/3.jpg"),
          link: "http://49.233.86.147/",
        },
        {
          url: require("@/assets/banner/2.jpg"),
          link: "http://49.233.86.147/",
        },
        {
          url: require("@/assets/banner/1.jpg"),
          link: "http://49.233.86.147/",
        },
      ],
      thisId:'',
      newList: [],
      loading: true,
      pagenum: 10,
      maxPageNum: 15,
      count: 0,
    };
  },
  computed: {
    ...mapState("channels", ["datas", "isLoading"]),
    page() {
      return +this.$route.query.page || 1;
    },
  },
  methods: {
    changePage(newPage) {
      console.log(this.$route);
      console.log(this.$router);
      this.$router.push("?page=" + newPage);
      this.getNews();
    },
    //设置页面信息
    async getNews() {
      this.loading = true;
      await getNews(this.thisId, this.page, this.maxPageNum).then(
        (resp) => {
          console.log(resp)
          this.newList = resp.contentlist;
        }
      );
      this.loading = false;
    },
    // async updateNews(newId) {
    //   this.loading = true;
    //   var resp = await getNews(newId, 1, 15);
    //   this.newList = resp.contentlist;
    //   this.loading = false;
    // },
    async updateNews(newId) {
      this.thisId = newId;
      this.loading = true;
      var resp = await getNews(newId, this.page, this.maxPageNum);
      this.count = resp.allNum
      this.newList = resp.contentlist;
      this.loading = false;
    },
  },
};
</script>

<style></style>
