<template>
  <div class="activity">
    <div class="flex sub-title">
      <a href="javascript:void(0);" class="flex-item inline-block" :class="{'active':isActive}" @click="setActivity">活动</a>
      <a href="javascript:void(0);" class="flex-item inline-block" :class="{'active':!isActive}" @click="setNotice">公告</a>
    </div>
    <ul class="activityList" v-if="isActive">
      <li class="activityList-item" v-for="item in activityList">
        <img :src="item.imgUrl">
        <div class="flex">
          <p class="flex-item flex flex-v center-cont">
            <span>{{item.text}}</span>
            <span>{{item.time}}</span>
          </p>
          <div class="btn r3">
            进行中
          </div>
        </div>
      </li>
    </ul>
    <ul class="noticeList" v-if="!isActive">
      <li class="noticeList-item" v-for="noticeItem in noticeList">
        <a href="javascript:void(0);" class="flex">
          <span><i class="tags-coupon">公告</i></span>
          <span>{{noticeItem.title}}</span>
          <span class="flex-item">{{noticeItem.time}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        isActive: true,
        activityList: [],
        noticeList: []
      }
    },
    methods:{
      setActivity () {
        this.isActive = true
      },
      setNotice () {
        this.isActive = false
      },
      initData () {
        this.axios.get("/api/activity").then(res => {
          this.activityList = res.data.data.activityListData
          this.noticeList = res.data.data.noticeListData
        })
      }
    },
    mounted () {
      this.initData()
    }
  }
</script>
<style scoped>
.sub-title{
  height: 32px;
  line-height: 32px;
  width: 100%;
  max-width: 37.5rem;
  padding:0 .8rem;
  margin: .8rem 0;
  box-sizing: border-box;
}
.activityList{
  background-color: #f5f5fa;
}
.activityList-item{
   margin-top: .6rem;
   padding:.8rem;
   background-color: #fff;
}
.activityList-item:last-child{
  margin-bottom: 45px;
}
.activityList-item img{
  width: 100%;

}
  .flex{
    display: flex;
  }
  .inline-block{
    display: inline-block;
    border: 1px solid #2697fc;
    color: #666;
  }
  .flex-item{
    flex: 1;
  }
  .flex-item span:first-child{
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 96%;
    margin-left: -.4rem;
    margin-top: .6rem;
  }
  .flex-item span:last-child{
    text-align: left;
    font-size: .6rem;
    color: #999;
    padding-top: .25rem;
    margin-bottom: .6rem;
  }
  .active{
    color: #fff;
    background-color: #2697fc;
  }
  .flex-v{
    flex-direction: column;
  }
  .btn{
    border: 0;
    padding: .35rem .4rem .3rem;
    margin: auto 0;
    background: #ff524e;
    color: #fff;
    font-size: .6rem;
    border-radius: .2rem;
  }
  .tags-coupon {
    color: #79bcf7;
    border-radius: .1rem;
    font-size: .4rem;
    margin-left: .2rem;
    padding: 0 .2rem;
    white-space: nowrap;
    position: relative;
    top: -.1rem;
    border: .1rem solid currentColor;
  }
  .noticeList-item a span:nth-child(2){
    color: #666;
    width: calc(100% - 10rem);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
    font-size: .9rem;
  }
  .noticeList-item a span:nth-child(3){
    color: #999;
    text-align: right;
  }
  .noticeList-item{
   padding:.8rem;
   background-color: #fff;
   border-bottom: 1px solid #f5f5fa;
   font-size: .8rem;
}
@media screen and (max-width: 450px) {
    .center-cont{
    width: 70%;
  }
}
</style>
