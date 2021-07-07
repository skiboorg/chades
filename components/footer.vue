<template>
  <footer class="footer bg-light">
    <div class="container">
      <div class="footer-wrapper">
        <div class="footer-logo">
          <nuxt-link to="/"><img src="/logo.png" alt=""></nuxt-link>
        </div>

        <div v-if="!this.$auth.loggedIn" class="footer-nav">
          <a class="footer-nav__item" v-scroll-to="'#courses'" href="/">我们的课程</a>
          <a class="footer-nav__item" v-scroll-to="'#learn'" href="/">我们教什么</a>
          <a class="footer-nav__item" v-scroll-to="'#faq'" href="/">我们如何工作？</a>
          <a class="footer-nav__item" v-scroll-to="'#callback'" href="/">反馈</a>
           <nuxt-link class="footer-nav__item" to="/about" >关于</nuxt-link>
        </div>
        <div v-else class="footer-nav">
          <nuxt-link to="/courses" class="footer-nav__item">我们的课程</nuxt-link>
          <nuxt-link v-if="this.$auth.loggedIn" class="footer-nav__item" to="/lk">个人专区</nuxt-link>
        </div>
        <div v-if="!this.$auth.loggedIn" class="footer-btn">
          <nuxt-link  to="/entrance" class="btn">登录或注册</nuxt-link>

        </div>
        <div v-else class="footer-btn">
          <span  @click="$auth.logout()" class="btn">从您的个人资料中删除</span>
        </div>
      </div>

      <div class="footer-bottom">
          <div class="footerText">
            <a style="color: inherit;text-decoration: underline" href=" ">中文</a>
            <span>hejiasu.com Shenzhen Speed Up Network Technology Co., Ltd. 2019-2020</span>
            <a style="color: inherit;text-decoration: underline" class="footer-icp footer-component" href="https://beian.miit.gov.cn/" rel="external nofollow" target="_blank">上海二迩信息科技有限公司
          沪ICP备2021018911号-1</a>

        </div>
<!--        <p>版权所有 2020.</p>-->
<!--        <p>上海二迩信息科技有限公司 QRSocial All Rights Reserved</p>-->

      </div>
    </div>

  </footer>
</template>

<script>
export default {

};
</script>
