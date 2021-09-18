<template>
  <div class="hello">
    <!-- <ul v-nav-current="{index: activeIndex, targetClass: 'nav-item', activeClass: 'nav-active'}">
      <li class="nav-item" @click="addActive(index)" v-for="(item,index) in navList" :key="index">{{item}}</li>
    </ul> -->
    <draggable chosenClass='active' animation=500 class="ul" v-model="navList">
      <li class="nav-item" @click="addActive(index)" v-for="(item,index) in navList" :key="index">{{item}}</li>
    </draggable>
    <button @click="showList">确认</button>
  </div>
</template>

<script>
import {navCurrent} from '@/directives/index.js'
import draggable from 'vuedraggable'
import {getNewsList} from './api'
export default {
  name: "HelloWorld",
  directives: {navCurrent},
  components: {draggable},
  data() {
    return {
      num: 1,
      navList: ['EDG','FPX','WE','RNG','EDG1'],
      activeIndex: 0,
      msg: "Welcome to Your Vue.js App",
      obj: {
        a: "xiaoming",
        b: "zhangsan",
        'ssss': 11
      }, 
      timestamp: 1627412314,
    };
  },
  mounted() {
    getNewsList().then(res => {
      console.log('res', res)
    })
  },
  methods: {
    showList(){
      console.log(this.navList)
    },
    addActive(index){
      this.activeIndex = index
    },
    handleObj(obj) {
      for (let key in obj) {
        let newKey = obj[key];
        if (newKey) {
          obj[newKey] = key;
          delete obj[key];
        }
      }
      return obj
    },
    addNum() {
      this.num++
    },
    handleTimestamp(time, flag) {
      if (!time) return "时间戳为空";
      let t = time * 1000;
      let Y = new Date(t).getFullYear();
      let M = new Date(t).getMonth() + 1;
      let D = new Date(t).getDate();
      let H = new Date(t).getHours();
      let m = new Date(t).getMinutes();
      let s = new Date(t).getSeconds();
      let Week = new Date(t).getDay();
      let and = flag ? flag.toString() : "-";
      return `${Y}${and}${M}${and}${D} ${H}:${m}:${s}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    /* justify-content: space-around; */
  }
  .nav-item{
    width: 80px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    border: 1px solid #000;
    margin-top: 15px;
  }
  .active{
    background: blue !important;
    color: aliceblue !important;
  }
  .dregActive{
    transform: scale(1.2) !important;
  }
</style>
