<template>
  <div class="login-wrapper">
    <div class="login" v-if="isShowLogin">
        <div class="title">
        <span class="title-text">
          九龙阁游戏中心登录
        </span>
      </div>
      <div class="l-body">
        <div class="l-row">
          <label for="username">用户名:</label>
          <input type="text" name="username" id="username">
        </div>
        <div class="l-row">
          <label for="pwd"><span class="pwd-label">密码</span>:</label>
          <input type="password" name="pwd" id="pwd">
        </div>
        <a href="javascript:void(0);" class="login-btn">登录</a>
        <div class="l-footer">
          <fieldset class=""><legend>其他登录方式</legend></fieldset>
          <ol class="flex">
            <li class="flex-item" @click="weixinLogin">
              <img src="../../../assets/weixin-btn.png" class="weixin-btn">
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div id="login_container"></div>
  </div>
</template>
<script type="text/javascript">
  export default{
    data () {
      return {
        isShowLogin: true
      }
    },
    methods:{
      weixinLogin () {
        this.isShowLogin = !this.isShowLogin
        var obj = new WxLogin({
          id:"login_container",
          appid: "wx9df4fd177ead2950",
          scope: "snsapi_login",
          redirect_uri: "",
          state: "",
          style: "",
          href: ""
        });
      }
    }
  }
</script>

<style scoped>

  .l-body{
    margin-top: 1.5rem;
    font-size: .9rem;
  }
  #username,#pwd{
    border: 1px #eee solid;
  }
  .pwd-label{
    letter-spacing: .5rem;
  }
  .l-row{
    margin-bottom: 1.2rem;
  }
  .login-btn{
    width: 90%;
    background: #3997EE;
    font-size: .8rem;
    display: inline-block;
    font-size: .7rem;
    padding: .4rem .6rem;
    border: .05rem solid currentColor;
    white-space: nowrap;
    border-radius: .25rem;
    box-sizing: border-box;
    color: #fff;
  }
  .l-footer fieldset {
    border: 0;
    border-top: .05rem solid currentColor;
    margin: 1.5rem 0 .4rem 0;
    line-height: 1;
    font-size: .7rem;
    text-align: center;
    color: #3997EE;
    width: 90%;
    margin-left: 5%;
    margin-bottom: .8rem;
  }
  .weixin-btn{
    cursor: pointer;
  }
</style>
