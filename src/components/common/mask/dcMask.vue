<template>
  <div class="mask-wrapper">
    <div v-if="isMaskShow" class="mask">
      <div class="login-box">
        <span class="close" @click="hideMask">关闭</span>
        <div class="login-wrapper">
          <dc-login></dc-login>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import dcLogin from '../login/login'
  export default{
    data () {
      return {
        maskShow: true
      }
    },
    computed:{
      isMaskShow () {
        return this.$store.state.maskShow
      }
    },
    methods:{
      hideMask () {
        this.$store.commit('chargeMaskShow',false)
      }
    },
    components:{
      dcLogin
    }
  }
</script>

<style scoped>
  .mask{
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);
  }
  .login-box{
    width: 15rem;
    position: relative;
    top:12rem;
    left: 50%;
    margin-left: -7.5rem;
    height: 16rem;
    background-color: #fff;
  }
  .close{
    position: absolute;
    top: .3rem;
    right: .3rem;
    font-size: .7rem;
    cursor: pointer;
  }
  .login-wrapper{
    position: absolute;
    top: 1.2rem;
    width: 100%;
  }
</style>
