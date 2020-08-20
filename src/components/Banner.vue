<template>
  <div class="banner-container" @mouseenter="autoStop" @mouseleave="autoStart">
      <ul class="images" :style="{
          width: banner.length * 100 + '%',
          marginLeft: -index * 100 + '%'
      }">
          <li v-for='(item, i) in banner' :key = 'i'>
              <a :href="item.link">
                  <img :src="item.url" alt="">
              </a>
          </li>
      </ul>
      <ul class="dots">
          <li v-for="(item, i) in banner" :key="i" :class="{active: index == i}" @click = 'index = i'></li>
      </ul>
  </div>
</template>

<script>
export default {
    props: {
        banner: {
            type: Array,
            required: true
        },
        time: {
            type: Number,
            required: false,
            default: 2000
        }
    },
    data(){
        return {
            index:0,
            timer:null
        }
    },
    methods: {
        autoStart(){
            if(this.timer){
                return ;
            }
            this.timer = setInterval(() => {
                this.index = (this.index+1)%this.banner.length;
            }, this.time);
        },
        autoStop(){
            clearInterval(this.timer);
            this.timer = null;
        }
    },
    created(){
        this.autoStart();
    },
    destroyed(){
        this.autoStop();
    },
}
</script>

<style scoped>
.banner-container{
    height: 350px;
    position: relative;
    overflow: hidden;
}
.banner-container li{
    display: block;
    width: 1080px;
    height: 100%;
    float: left;
}
.banner-container li img{
    display: block;
    margin: 0 auto;
    /* width: 650px; */
    width:100%;
    height: 100%;
}
.images{
    height: 100%;
    transition: 0.5s;
}
.dots{
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
}
.dots li{
    width: 10px;
    cursor: pointer;
    height: 10px;
    margin: 0 3px;
    border-radius: 50%;
    border: 1px solid;
    color: #fff;
}
.dots li.active{
    background: #fff;
}
</style>