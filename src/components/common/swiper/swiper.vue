<template>
  <div class="swiper-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><a href="#"><img src="./20170711060453305.gif"></a></div>
        <div class="swiper-slide"><a href="#"><img src="./20170712015048222.gif"></a></div>
        <div class="swiper-slide"><a href="#"><img src="./20170712045302501.gif"></a></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Swiper from 'swiper'
  export default{
    methods:{
      initSwiper () {
        return new Swiper('.swiper-container',{
          autoplay: 5000,
          pagination : '.swiper-pagination',
          paginationClickable :true
        })
      }
    },
    mounted () {
      this.initSwiper()
    }
  }
</script>

<style scoped>
  @import '/static/css/swiper.min.css'
</style>
<style scoped>
  .swiper-slide img{
    width: 100%;

  }
</style>
