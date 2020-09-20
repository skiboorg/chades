<template>
 <header class="header">
        <div class="container">
            <div class="header-wrapper">
                <div class="header-logo">
                    <nuxt-link to="/"><img src="/logo.png" alt=""></nuxt-link>
                </div>
                <div class="header-nav">
                  <nuxt-link to="/courses" class="header-nav__item">价钱</nuxt-link>

                    <a class="header-nav__item" href="#">关于</a>
                    <a class="header-nav__item" href="#">Контакты</a>
                </div>
                <div v-if="!this.$auth.loggedIn" class="header-btn">
                   <nuxt-link  to="/register" class="btn">登录或注册</nuxt-link>
                 </div>
              <div v-else class="header-btn">
                 <span  @click="$auth.logout()" class="btn">выход</span>
              </div>
              <div class="header-mobile-btn" @click="!menuOpen ? menuOpen=true : menuOpen=false" :class="{'mobileBtnActive':menuOpen}">

              </div>
            </div>
          <div class="mobile-menu" :class="{'menuActive':menuOpen}">
            <nuxt-link  to="/register" class="btn mb-25">登录或注册</nuxt-link>
            <nuxt-link to="/courses" class="mobile-menu__item">价钱</nuxt-link>
            <nuxt-link to="\" class="mobile-menu__item">关于</nuxt-link>
            <nuxt-link to="\" class="mobile-menu__item">Контакты</nuxt-link>

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


      };
    },
    methods: {


    }
  }
</script>


