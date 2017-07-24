<template>
  <div id="app">
    <router-view></router-view>
    <div class="tab footer-nav">
       <div class="tab-item"><router-link to="/game"><i class="icon-game"></i>游戏</router-link></div>
       <div class="tab-item"><router-link to="/user"><i class="icon-user"></i>个人</router-link></div>
    </div>
    <dc-mask></dc-mask>
  </div>
</template>

<script>
import dcMask from './components/common/mask/dcMask'
export default {
  name: 'app',
  components: {
    dcMask
  }
}
</script>

<style lang='less'>
html{
  font: 20px/1.5 Arial, Helvetica, sans-self, "Microsoft YaHei";
}
body{
      background: #f5f5fa;
      padding:0;
      margin: 0;
}
a{
  color: #333;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  max-width: 37.5rem;
  margin: 0 auto;
  background: #ffffff;
}
.tab{
  position: fixed;
  display: flex;
  background: #ffffff;
  width: 100%;
  max-width: 37.5rem;
  height: 50px;
  line-height: 70px;
  font-size: 14px;
  bottom: 0;
  left: 0;
  .tab-item{
    flex: 1;
    text-align: center;
    .icon-game{
      position: relative;
    }
    .icon-game:before {
      content: "";
      display: inline-block;
      width: 24px;
      height: 17px;
      position: absolute;
      top: -20px;
      left: 2px;
      background: url('./assets/gray-game-icon.png');
    }
    .icon-user{
      position: relative;
    }
     .icon-user:before {
        content: "";
        display: inline-block;
        width: 20px;
        height: 17px;
        position: absolute;
        top: -20px;
        left: 2px;
        background: url('./assets/gray-user-icon.png');
        }
    .router-link-active{
      color: #2697fc;
       .icon-game:before{
        background: url('./assets/blue-game-icon.png');
      }
      .icon-user:before{
        background: url('./assets/blue-user-icon.png');
      }
    }
  }
}
@media screen and (min-width: 750px) {
   .tab {
    left: 50%;
    margin-left: -18.75rem;
  }
}
.icon-game:before {
  content: "\e60c"
}
</style>
