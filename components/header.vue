<template>
 <header class="header" :style="{'background':'url('+ bg+')'}" :class="{'header-small':!indexPage,'no-header':noHeader}">
        <div class="container">
            <div class="header-wrapper">
                <div class="header-logo">
                    <nuxt-link to="/"><img src="/logo.png" alt=""></nuxt-link>
                </div>
                <div v-if="!this.$auth.loggedIn" class="header-nav">
                    <a class="header-nav__item" v-scroll-to="'#courses'" href="/">我们的课程</a>
                    <a class="header-nav__item" v-scroll-to="'#learn'" href="/">我们教什么</a>
                    <a class="header-nav__item" v-scroll-to="'#faq'" href="/">我们如何工作？</a>
                    <a class="header-nav__item" v-scroll-to="'#callback'" href="/">反馈</a>
                </div>
              <div v-else class="header-nav">
                 <nuxt-link to="/courses" class="header-nav__item">我们的课程</nuxt-link>
                 <nuxt-link v-if="this.$auth.loggedIn" class="header-nav__item" to="/lk">个人专区</nuxt-link>
              </div>
                <div v-if="!this.$auth.loggedIn" class="header-btn">
                   <nuxt-link  to="/entrance" class="btn">登录或注册</nuxt-link>
                 </div>
              <div v-else class="header-btn">
                 <span  @click="$auth.logout()" class="btn">从您的个人资料中删除</span>
              </div>
              <div class="header-mobile-btn" @click="!menuOpen ? menuOpen=true : menuOpen=false" :class="{'mobileBtnActive':menuOpen}">

              </div>
            </div>
          <div class="mobile-menu" :class="{'menuActive':menuOpen}">
            <nuxt-link  to="/entrance" class="btn mb-25">登录或注册</nuxt-link>
            <nuxt-link to="/courses" class="mobile-menu__item">我们的课程</nuxt-link>
            <nuxt-link to="\" class="mobile-menu__item">关于</nuxt-link>
            <a class="header-nav__item" href="#">费率</a>
            <nuxt-link to="\" class="mobile-menu__item">联络</nuxt-link>

          </div>
        </div>
<!--      {{this.$auth.user}}-->

    </header>
</template>

<script>
  export default {

    data() {
      return {
        bg: this.bg,
        menuOpen:false,
        noHeader:false,
        indexPage:true


      };
    },

    watch: {
      '$route.path': function(val) {
       this.checkUrl(val)
        this.menuOpen = false
      }
    },
    mounted() {
      console.log('this.$route.path',this.$route.path)
     this.checkUrl(this.$route.path)
    },
    methods: {
      checkUrl(url){
         if(url === '/'){
          this.indexPage = true
          this.noHeader = false
          this.bg = '/header-bg.png'
           return
        }
        if(url === '/courses'){
          this.indexPage = false
          this.noHeader = false
          this.bg = '/course-top.png'
          return
        }
        if(url === '/lk'){
          this.indexPage = false
          this.noHeader = false
          this.bg = '/lk-top.png'
          return
        }

        if(url === '/entrance'){
          this.indexPage = false
          this.noHeader = true
          this.bg = ''
          return
        }
        if(url === '/slider_video'){
          this.indexPage = false
          this.noHeader = true
          this.bg = ''
          return
        }
        if(url === '/slider_image'){
          this.indexPage = false
          this.noHeader = true
          this.bg = ''
          return
        }
        this.indexPage = false
          this.noHeader = false
          this.bg = '/course-top.png'
      }

    }
  }
</script>


