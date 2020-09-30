<template>
 <header class="header" :class="{'header-small':!indexPage}">
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
                   <nuxt-link  to="/register" class="btn">登录或注册</nuxt-link>
                 </div>
              <div v-else class="header-btn">
                 <span  @click="$auth.logout()" class="btn">从您的个人资料中删除</span>
              </div>
              <div class="header-mobile-btn" @click="!menuOpen ? menuOpen=true : menuOpen=false" :class="{'mobileBtnActive':menuOpen}">

              </div>
            </div>
          <div class="mobile-menu" :class="{'menuActive':menuOpen}">
            <nuxt-link  to="/register" class="btn mb-25">登录或注册</nuxt-link>
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

        menuOpen:false,
        indexPage:null


      };
    },
    watch: {
      '$route.path': function(val) {

        if(val === '/'){
          this.indexPage = true
        }else{
          this.indexPage = false
        }


      }
    },
    methods: {


    }
  }
</script>


