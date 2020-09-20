<template>
  <div style="height: 59vh;display: flex;align-items: center;justify-content: center" class="container">
      <div  class="round-block form-block text-center">
        <h3 class="text-color fs-24 text-bold mb-25">регистрация {{curStep}}/3</h3>

        <div v-if="curStep===1" class="">
           <input type="text" class="form-control no-mw small-ph" v-model="user.name" placeholder="Введите ваше имя">
           <input type="text" class="form-control no-mw small-ph" v-model="user.email" placeholder="Введите вашу почту">
                <input type="text" class="form-control no-mw small-ph " v-model="user.login" placeholder="Придумайте логин">
          <input type="text" class="form-control no-mw small-ph" v-model="user.password1" placeholder="Придумайте пароль">
                <input type="text" class="form-control no-mw small-ph mb-25" v-model="user.password2" placeholder="Подтвердите пароль">

          <div >
            <span class="btn mb-15" @click="curStep+=1" :class="{'btnDisabled': user.password2 === ''}">далее</span>
            <nuxt-link class="btn btn-white btn-outline " to="/login">Войти</nuxt-link>
          </div>



        </div>
         <div v-if="curStep===2" class="">

          <span v-if="is_registered===false" class="btn mb-15" @click="registerUser" :class="{'btnDisabled': user.password2 === '' || user.password1 !==user.password2}">зарегистрироваться</span>
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
        curStep: 1,
        is_registered:false,
        user: {
          name: '',
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
          let response = await this.$auth.loginWith('local', { data: {login: this.user.email,password:this.user.password2} })
          console.log(response)
        } catch (err) {

        }
      },
     async registerUser() {

        await this.$axios.post('/auth/users/', {
          password: this.user.password2,
          email: this.user.email,
          name: this.user.name,
          nickname: this.user.login,


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
  }
</script>

