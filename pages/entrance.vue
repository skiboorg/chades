<template>
  <div class="container auth">
    <div class="auth-top">
      <p class="auth-top__item " :class="{'itemActive':regActive}" @click="regActive=true,loginActive=false">在网站上注册</p>
      <p class="auth-top__item" :class="{'itemActive':loginActive}" @click="regActive=false,loginActive=true">登录到您的个人帐户</p>
    </div>

    <div v-if="loginActive"  class="auth-form text-center">
      <h3 class="text-color fs-24 text-bold mb-25">登录到您的个人帐户</h3>
      <p v-if="is_registered" class="fs-16 text-trans mb-25">Вы успешно зарегистрированы</p>
      <div  class="auth-form__block">
        <input type="text" class="form-control no-mw small-ph" v-model="user_login.email" placeholder="Введите вашу почту">
        <input type="password" class="form-control no-mw small-ph mb-100" v-model="user_login.password" placeholder="Ваш пароль">
        <span class="btn " @click="userLogin" :class="{'btnDisabled': user_login.email === ''}">Войти</span>
      </div>

    </div>
    <div v-if="regActive"  class="auth-form text-center">
      <h3 class="text-color fs-24 text-bold mb-25">在网站上注册 {{curStep}}/3</h3>

      <div v-if="curStep===1" class="auth-form__inner">
        <div class="auth-form__block">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.promo" placeholder="促销代码">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.name" placeholder="输入学生姓名">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.email" placeholder="你的邮件">
          <input type="text" class="form-control no-mw small-ph " v-model="user_reg.login" placeholder="输入昵称">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.password1" placeholder="密码">
          <input type="text" class="form-control no-mw small-ph mb-25" v-model="user_reg.password2" placeholder="重复输入密码">


             <span class="btn" @click="curStep+=1" :class="{'btnDisabled': user_reg.password2 === ''}">下一步注册</span>



        </div>
        <div class="auth-form__block">
          <p>学校将发布促销代码以获取更多奖金。</p>
          <p>请输入四个字符的数字（0-9）作为密码。</p>
          <p>付款后，您的注册确认信将发送到您的邮件中。</p>
        </div>





      </div>
      <div v-if="curStep===2" class="">

        <span v-if="is_registered===false" class="btn mb-15" @click="registerUser" :class="{'btnDisabled': user_reg.password2 === '' || user_reg.password1 !==user_reg.password2}">зарегистрироваться</span>
        <nuxt-link v-else class="btn mb-15" to="/login">войти</nuxt-link>
        <p v-if="is_registered===false" class="fs-14 text-trans">Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>
        <p v-else class="fs-14 text-trans">Вы успешно зарегистрированы</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        regActive: true,
        loginActive: false,

        user_login: {
          email: '',
          password: '',
        },
        curStep: 1,
        is_registered: false,
        user_reg: {
          name: '',
          promo: '',
          login: '',
          email: '',
          password1: '',
          password2: '',
        }


      };
    },
    methods: {
      async userLogin() {

        try {
          let response = await this.$auth.loginWith('local', {data: this.user_login})
          console.log(response)

        } catch (err) {
          this.$message({
            showClose: true,
            message: 'Oops, this is a error message.',
            type: 'error'
          });
        }
      },
      async registerUser() {

        await this.$axios.post('/auth/users/', {
          password: this.user_reg.password2,
          email: this.user_reg.email,
          name: this.user_reg.name,
          nickname: this.user_reg.login,
          promo: this.user_reg.promo,


        })
          .then((response) => {
            console.log(response.status);
            console.log(response.data);
            if (response.status === 201) {
              this.regActive = true
              this.is_registered = true
              this.loginActive = false
            }
            if (response.status === 400) {

            }
          })
          .then(response => {
            console.log('response1')
            console.log(response)
          })
          .catch(error => {
            console.log('response2')
            console.log(error.response)

          });
      }
    }
  }
</script>

