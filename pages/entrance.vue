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
        <input type="password" class="form-control no-mw small-ph mb-75" v-model="user_login.password" placeholder="输入密码">
        <p>
          <nuxt-link to="/#callback">恢复密码</nuxt-link>
        </p>

        <span class="btn " @click="userLogin" :class="{'btnDisabled': user_login.email === ''}">输入您的个人帐户</span>
      </div>

    </div>
    <div v-if="regActive"  class="auth-form text-center">
      <h3 class="text-color fs-24 text-bold mb-25">在网站上注册 {{curStep}}/2</h3>

      <div v-if="curStep===1" class="auth-form__inner">
        <div class="auth-form__block">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.promo" placeholder="促销代码">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.vi_chat" placeholder="输入您的微信">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.name" placeholder="输入学生姓名">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.email" placeholder="你的邮件">

          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.password1" placeholder="密码">
          <input type="text" class="form-control no-mw small-ph mb-25" v-model="user_reg.password2" placeholder="重复输入密码">


          <span class="btn" @click="checkUserData" >下一步注册</span>



        </div>
        <div style="align-items: flex-start" class="auth-form__block">
          <p>学校将发布促销代码以获取更多奖金。</p>
          <p>请输入四个字符的数字（0-9）作为密码。</p>
          <p>付款后，您的注册确认信将发送到您的邮件中。</p>
        </div>





      </div>
      <div v-if="curStep===2" class="">
        <p class="mb-15">付款后，您的注册确认信将发送到您的邮件中。</p>
        <p class="mb-25">付款时，请在付款说明中注明您的昵称和姓名。</p>
        <div style="flex-wrap: wrap" class="auth-form__inner mb-25">
          <div style="justify-content: space-between" class="auth-form__block">
            <div style="padding-top: 35px;margin-bottom: 20px">
              <input type="text" class="form-control no-mw small-ph " v-model="user_reg.nickname" placeholder="输入昵称">
              <p class="text-bold">1个月费用 175¥</p>
              <p class="text-bold">6个月费用 810¥</p>
              <p class="text-bold">12个月费用 1188¥</p>
            </div>
            <div class="">
              <span v-if="is_registered===false" class="btn mb-15" @click="registerUser" >在网站上注册</span>
              <!--              <p v-if="is_registered===false" class="fs-14 text-trans">Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>-->
            </div>
          </div>
          <div class="auth-form__block">
            <img src="/pay.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="regComplete"
      width="30%"
      :close-on-click-modal="false"
      style="padding: 30px"
      :show-close="true"
      center>
      <div>

        <div class="text-center">
          <img style="width: 150px;height: 150px;margin-bottom: 50px"  src="/w_r.png" alt="">
        </div>
        <p style="word-break: break-word; font-size: 22px; padding: 0 40px" class="text-center "><span class="text-green fs-36">您已成功完成注册！</span><br><br>

          我们将在24小时内向您发送一封电子邮件，确认您的注册，然后您可以使用个人帐户访问该网站并开始学习！</p>
      </div>
      <span slot="footer" class="dialog-footer">
    <span @click="regComplete=false,regActive=false,loginActive=true" class="btn">关闭通知</span>
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
          nickname: '',
          vi_chat: '',
          email: '',
          password1: '',
          password2: '',
        }
      };
    },
    methods: {
     async checkUserData(){
        if (this.user_reg.email === ''){
          this.showError('输入你的电子邮箱')
          return
        }else {
          const response = await this.$axios.post('/api/v1/user/check_email/',{email:this.user_reg.email})

          if (response.data['status'] === 'emailbad'){
            this.showError('您输入了不正确的邮件')
            return
          }
          if (response.data['status'] === 'found'){
              this.showError('该邮件已被使用')
              return
            }

        }

        if (this.user_reg.vi_chat === ''){
          this.showError('微信字段为空')
          return
        }
        if (this.user_reg.name === ''){
          this.showError('输入你的名字')
          return
        }
        if (this.user_reg.password1 === '' || this.user_reg.password2 === ''){
          this.showError('输入密码')
          return
        }
        if (this.user_reg.password1 !== this.user_reg.password2 ){
          this.showError('密码不匹配')
          return
        }
        this.curStep+=1
      },
      async userLogin() {
        try {
          let response = await this.$auth.loginWith('local', {data: this.user_login})
          console.log(response)

        } catch (err) {
          this.showError('您输入了错误的用户名或密码')
        }
      },
      showError(text){
        this.$message({
          showClose: true,
          message: text,
          type: 'error'
        });
      },
      async registerUser() {
        if (this.user_reg.nickname === ''){
          this.showError('输入昵称')
          return
        }
        await this.$axios.post('/auth/users/', {
          password: this.user_reg.password2,
          email: this.user_reg.email,
          name: this.user_reg.name,
          nickname: this.user_reg.nickname,
          promo: this.user_reg.promo,
          vi_chat: this.user_reg.vi_chat,


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

