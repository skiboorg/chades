<template>
  <div class="container auth">
    <div class="auth-top">
      <p class="auth-top__item " :class="{'itemActive':regActive}" @click="regActive=true,loginActive=false">РЕГИСТРАЦИЯ</p>
      <p class="auth-top__item" :class="{'itemActive':loginActive}" @click="regActive=false,loginActive=true">ВХОД</p>
    </div>

    <div v-if="loginActive"  class="auth-form text-center">
      <h3 class="text-color fs-24 text-bold mb-25">Вход</h3>

      <div  class="auth-form__block">
        <input type="text" class="form-control no-mw small-ph" v-model="user_login.email" placeholder="Введите вашу почту">
        <input type="password" class="form-control no-mw small-ph mb-100" v-model="user_login.password" placeholder="Ваш пароль">
        <span class="btn " @click="userLogin" :class="{'btnDisabled': user_login.email === ''}">Войти</span>
      </div>

    </div>
    <div v-if="regActive"  class="auth-form text-center">
      <h3 class="text-color fs-24 text-bold mb-25">регистрация {{curStep}}/3</h3>

      <div v-if="curStep===1" class="auth-form__inner">
        <div class="auth-form__block">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.promo" placeholder="ПромоКод">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.name" placeholder="Введите ваше имя">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.email" placeholder="Введите вашу почту">
          <input type="text" class="form-control no-mw small-ph " v-model="user_reg.login" placeholder="Придумайте логин">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.password1" placeholder="Придумайте пароль">
          <input type="text" class="form-control no-mw small-ph mb-25" v-model="user_reg.password2" placeholder="Подтвердите пароль">


             <span class="btn" @click="curStep+=1" :class="{'btnDisabled': user_reg.password2 === ''}">далее</span>



        </div>
        <div class="auth-form__block">
          <p>В пароле должно быть как минимум 7 символов</p>
          <p>В пароле должно быть как минимум 7 символов</p>
          <p>В пароле должно быть как минимум 7 символов</p>
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
        regActive:true,
        loginActive:false,

        user_login: {
          email: '',
          password: '',
        },
        curStep: 1,
        is_registered:false,
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
          let response = await this.$auth.loginWith('local', { data: this.user_login})
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
            this.is_registered=true
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
</script>

