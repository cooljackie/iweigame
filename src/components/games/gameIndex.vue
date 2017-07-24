<template>
  <div class="game-box">
    <div class="swiper-box">
      <swiper></swiper>
    </div>
    <div class="game-tab">
       <div class="game-tab-item"><router-link to="/game/hot">热门</router-link></div>
       <div class="game-tab-item"><router-link to="/game/new">新上架</router-link></div>
       <div class="game-tab-item"><router-link to="/game/activity">活动</router-link></div>
       <div class="game-tab-item"><router-link to="/newopen">新开服</router-link></div>
    </div>
    <router-view :hotGameData="hotGameData" :newGameData="newGameData"></router-view>
  </div>
</template>

<script type="text/javascript">
import swiper from '../common/swiper/swiper'
  export default{
    data () {
      return {
        hotGameData: [],
        newGameData: []
      }
    },
    mounted () {
      this.axios.get('/api/games').then(res => {
        this.hotGameData = res.data.data.hot
        this.newGameData = res.data.data.newGame
      })
    },
    components: {
      swiper
    }
  }
</script>

<style scoped lang='less'>
  .game-tab{
    display: flex;
    background: #ffffff;
    width: 100%;
    max-width: 37.5rem;
    height: 40px;
    line-height: 40px;
    .game-tab-item{
      flex: 1;
      border-bottom: .1rem solid #f5f5fa;
      color: #333;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
    .router-link-active{
      border-bottom: .1rem solid #2697fc;
      color: #2697fc;
    }
  }
</style>
