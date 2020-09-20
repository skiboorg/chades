<template>
  <div style="height: 59vh;display: flex;align-items: center;justify-content: center" class="container">
      <div  class="round-block form-block text-center">
        <h3 class="text-color fs-24 text-bold mb-25">регистрация {{curStep}}/3</h3>

        <div v-if="curStep===1" class="">
           <input type="text" class="form-control no-mw small-ph" v-model="user.email" placeholder="Введите вашу почту">
                <input type="text" class="form-control no-mw small-ph mb-100" v-model="user.login" placeholder="Придумайте логин">
          <span class="btn " @click="curStep+=1" :class="{'btnDisabled': user.email === ''}">далее</span>
        </div>
         <div v-if="curStep===2" class="">
           <input type="text" class="form-control no-mw small-ph" v-model="user.password1" placeholder="Придумайте пароль">
                <input type="text" class="form-control no-mw small-ph mb-100" v-model="user.password2" placeholder="Подтвердите пароль">
          <span class="btn mb-15" @click="registerUser" :class="{'btnDisabled': user.password2 === '' || user.password1 !==user.password2}">зарегистрироваться</span>
           <p class="fs-14 text-trans">Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        curStep: 1,
        user: {
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


        })
          .then((response) => {
            console.log(response.status);
            console.log(response.data);
            if (response.status === 201) {
              this.userLogin()
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

