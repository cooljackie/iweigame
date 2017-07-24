<template>
  <div class="user">
    <div class="row head">
      <div :class="{'flex':isLogin}">
        <img src="../../assets/icon.jpg">
        <div v-if="isLogin" class="flex flex-item flex-v msg">
          <span>名字不用太长</span>
          <span>UID: 30234556</span>
        </div>
      </div>
    </div>
    <div class="row">
      <ol>
        <li class="flex row-item">
          <img src="../../assets/jifen-icon.png">
          <div class="flex-item">
            <a href="javascript:void(0);">我的积分</a>
          </div>
          <span class="jifenShow">0</span>
        </li>
        <li class="flex row-item">
          <img src="../../assets/sign-icon.png">
          <div class="flex-item">
            <a href="javascript:void(0);">签到</a>
          </div>
          <span class="jifenShow">{{signText}}</span>
        </li>
      </ol>
    </div>
    <div class="row">
      <ol>
        <li class="flex row-item">
          <img src="../../assets/certification-icon.png">
          <div class="flex-item">
            <a href="javascript:void(0);">实名认证</a>
          </div>
          <span class="jifenShow">&gt</span>
        </li>
        <li class="flex row-item">
          <img src="../../assets/bind-icon.png">
          <div class="flex-item">
            <a href="javascript:void(0);">绑定手机</a>
          </div>
          <span class="jifenShow">&gt</span>
        </li>
      </ol>
    </div>
    <div class="row">
      <ol>
        <li class="flex row-item">
          <img src="../../assets/tiaoli-icon.png">
          <div class="flex-item">
            <a href="javascript:void(0);">用户条例</a>
          </div>
          <span class="jifenShow">&gt</span>
        </li>
      </ol>
    </div>
    <div class="row">
      <ol>
        <li class="flex row-item">
          <img src="../../assets/download-icon.png">
          <div class="flex-item">
            <a href="javascript:void(0);">APP下载</a>
          </div>
          <span class="jifenShow"></span>
        </li>
      </ol>
    </div>
    <div class="btn-wrapper">
      <a class="btn" href="javascript:void(0);" @click="showMask">登录</a>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    data () {
      return {
        isLogin: false,
        isSign: false,
      }
    },
    computed:{
      signText () {
        return this.isSign?'已签到':'未签到'
      }
    },
    methods:{
      showMask () {
        this.$store.commit('chargeMaskShow',true)
      }
    }
  }
</script>
<style scoped>
  .user{
    width: 100%;
    background-color: #f5f5fa;
  }
  .head img{
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
  .flex{
    display: flex;
  }
  .flex-item{
    flex: 1;
  }
  .flex-v{
    flex-direction: column;
  }
  .msg span{
    text-align: left;
    padding-left: .6rem;
  }
  .msg span:first-child{
    margin:.7rem 0;
    color: #333;
    font-size: .9rem;
  }
  .msg span:last-child{
    margin-bottom:.3rem;
    color: #666;
    font-size: .8rem;
  }
  .row{
    margin-top: 1rem;
    background-color: #fff;
  }
   .head{
    padding: .8rem .5rem;
    margin-top: 0;
  }
  .flex-item a{
    display: inline-block;
    width: 100%;
    height: 100%;
    line-height: 30px;
    text-align: left;
    padding-left: .8rem;
    box-sizing: border-box;
  }
  .row-item{
    padding:.9rem;
    box-sizing: border-box;
    border-bottom: .1rem solid #f1f1f6;
    line-height: 30px;
  }
  .jifenShow{
    color: #d6d6d6;
  }
  .btn{
    display: block;
    width: 90%;
    margin: 0 auto;
    background: #1381f1;
    color: #fff;
    text-align: center;
    padding: .6rem 0;
    -webkit-border-radius: 2.5rem;
    border-radius: 2.5rem;
    font-size: 1rem;
  }
  .btn-wrapper{
    margin-top: 1rem;
  }
</style>
