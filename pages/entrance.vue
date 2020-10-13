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
        <input type="text" class="form-control no-mw small-ph" v-model="user_login.email" placeholder="输入您的邮件">
        <input type="password" class="form-control no-mw small-ph mb-100" v-model="user_login.password" placeholder="输入密码">
        <span class="btn " @click="userLogin" :class="{'btnDisabled': user_login.email === ''}">输入您的个人帐户</span>
      </div>

    </div>
    <div v-if="regActive"  class="auth-form text-center">
      <h3 class="text-color fs-24 text-bold mb-25">在网站上注册 {{curStep}}/2</h3>

      <div v-if="curStep===1" class="auth-form__inner">
        <div class="auth-form__block">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.promo" placeholder="促销代码">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.name" placeholder="输入学生姓名">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.email" placeholder="你的邮件">

          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.password1" placeholder="密码">
          <input type="text" class="form-control no-mw small-ph mb-25" v-model="user_reg.password2" placeholder="重复输入密码">


          <span class="btn" @click="curStep+=1" :class="{'btnDisabled': user_reg.password2 === '' || user_reg.password1 !==user_reg.password2}">下一步注册</span>



        </div>
        <div style="align-items: flex-start" class="auth-form__block">
          <p>学校将发布促销代码以获取更多奖金。</p>
          <p>请输入四个字符的数字（0-9）作为密码。</p>
          <p>付款后，您的注册确认信将发送到您的邮件中。</p>
        </div>





      </div>
      <div v-if="curStep===2" class="">
        <p class="mb-25">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam asperiores dignissimos doloremque eligendi eos error et eum excepturi facilis incidunt laboriosam, nesciunt nostrum perferendis, quo quod vel. Nam, qui.</p>
        <div class="auth-form__inner mb-25">
          <div style="justify-content: space-between" class="auth-form__block">
            <div class="">
              <input type="text" class="form-control no-mw small-ph " v-model="user_reg.login" placeholder="输入昵称">
              <p>Lorem ipsum dolor.</p>
              <p>Lorem ipsum dolor.</p>
              <p>Lorem ipsum dolor.</p>
            </div>
            <div class="">
              <span v-if="is_registered===false" class="btn mb-15" @click="registerUser" :class="{'btnDisabled': user_reg.login === ''}">зарегистрироваться</span>
              <p v-if="is_registered===false" class="fs-14 text-trans">Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </div>
          </div>
          <div class="auth-form__block">
            <img src="/pay.jpeg" alt="">
          </div>
        </div>
      </div>
    </div>
      <el-dialog
      :visible.sync="regComplete"
      width="30%"
      :close-on-click-modal="false"
      style="padding: 30px"
      :show-close="false"
      center>
      <div>
        <div class="text-center">
          <img style="width: 150px;height: 150px;margin-bottom: 90px"  src="/w_r.png" alt="">
        </div>

        <p style="word-break: break-word;" class="text-center fs-36">Registration<span class="text-green"> complete</span></p>
      </div>
      <span slot="footer" class="dialog-footer">
    <span @click="regComplete=false,regActive=false,loginActive=true" class="btn">login</span>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        regActive: true,
        loginActive: false,
        regComplete: false,

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
              this.regComplete = true
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
            this.$message({
            showClose: true,
            message: error.response.data,
            type: 'error'
          });

          });
      }
    }
  }
</script>

