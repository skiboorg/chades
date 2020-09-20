<template>
  <div style="height: 59vh;display: flex;align-items: center;justify-content: center" class="container">
      <div  class="round-block form-block text-center">
        <h3 class="text-color fs-24 text-bold mb-25">Вход</h3>

        <div  class="">
           <input type="text" class="form-control no-mw small-ph" v-model="user.email" placeholder="Введите вашу почту">
                <input type="password" class="form-control no-mw small-ph mb-100" v-model="user.password" placeholder="Ваш пароль">
          <span class="btn " @click="userLogin" :class="{'btnDisabled': user.email === ''}">Войти</span>
        </div>

      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

        user: {
          email: '',
          password: '',
        }


      };
    },
    methods: {
      async userLogin() {

        try {
          let response = await this.$auth.loginWith('local', { data: this.user})
          console.log(response)
        } catch (err) {

        }
      },

    }
  }
</script>

