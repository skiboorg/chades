<template>
 <header class="header" :style="{'background':'url('+ bg+')'}" :class="{'header-small':!indexPage,'no-header':noHeader}">
        <div class="container">
            <div class="header-wrapper">
                <div class="header-logo">
                    <nuxt-link to="/"><img src="/logo.png" alt=""></nuxt-link>
                </div>
                <div class="header-nav">
                  <nuxt-link to="/courses" class="header-nav__item">我们的课程</nuxt-link>

                    <a class="header-nav__item" href="#">关于</a>
                    <a class="header-nav__item" href="#">费率</a>
                    <a class="header-nav__item" href="#">联络</a>
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
      }
    },
    mounted() {
      console.log(this.$route.path)
     this.checkUrl(this.$route.path)
    },
    methods: {
      checkUrl(url){
         if(url === '/'){
          this.indexPage = true
          this.noHeader = false
          this.bg = '/header-bg.png'
        }
        if(url === '/courses'){
          this.indexPage = false
          this.noHeader = false
          this.bg = '/test.png'
        }
        if(url === '/lk'){
          this.indexPage = false
          this.noHeader = false
          this.bg = '/test.png'
        }

        if(url === '/entrance'){
          this.indexPage = false
          this.noHeader = true
          this.bg = ''
        }
        if(url === '/slider'){
          this.indexPage = false
          this.noHeader = true
          this.bg = ''
        }
      }

    }
  }
</script>


