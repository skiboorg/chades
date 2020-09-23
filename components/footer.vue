<template>
     <footer class="footer bg-light">
        <div class="container">
            <div class="footer-wrapper">
                <div class="footer-logo">
                    <a href="">CHADEC</a>
                </div>
                <div class="footer-nav">
                    <a class="footer-nav__item" href="#">Наши курсы</a>
                    <a class="footer-nav__item" href="#">О нас</a>
                    <a class="footer-nav__item" href="#">Контакты</a>
                </div>
                  <div v-if="!this.$auth.loggedIn" class="footer-btn">
                   <nuxt-link  to="/register" class="btn">登录或注册</nuxt-link>
                 </div>
              <div v-else class="footer-btn">
                 <span  @click="$auth.logout()" class="btn">从您的个人资料中删除</span>
              </div>
            </div>
            <div class="footer-bottom">
                <p>版权所有 2020.</p>
                <p>我公司文件</p>

            </div>
        </div>

    </footer>
</template>

<script>
    export default {

    };
</script>
