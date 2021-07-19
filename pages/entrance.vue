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
      <h3 class="text-color fs-24 text-bold mb-25">在网站上注册</h3>

      <div  class="auth-form__inner">
        <div class="auth-form__block">
          <div style="text-align: left; margin-bottom: 25px">
             <p>学校将发布促销代码以获取更多奖金。</p>
          <p>请输入四个字符的数字（0-9）作为密码。</p>
          <p>付款后，您的注册确认信将发送到您的邮件中。</p>
          </div>
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.promo" placeholder="促销代码">
          <div class="form-row">
            <input type="text" class="form-control no-mw small-ph" v-model="user_reg.vi_chat" placeholder="输入您的微信">
          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.name" placeholder="输入学生姓名">
          </div>

          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.email" placeholder="你的邮件">
          <input type="text" class="form-control no-mw small-ph " v-model="user_reg.nickname" placeholder="输入昵称">

          <input type="text" class="form-control no-mw small-ph" v-model="user_reg.password1" placeholder="密码">
          <input type="text" class="form-control no-mw small-ph mb-25" v-model="user_reg.password2" placeholder="重复输入密码">

          <el-divider></el-divider>

          <p style="text-align: left">补货方法</p>

          <div class="pay-types">
            <div @click="pay_type='ali'" class="pay-type" :class="{'active':pay_type==='ali'}">
              <img src="/pay_ali.png" alt="">
            </div>
            <div @click="pay_type='we'" class="pay-type" :class="{'active':pay_type==='we'}">
              <img src="/pay_we.png" alt="">
            </div>
          </div>

          <p style="text-align: left">充值金额</p>
          <div class="pay-amounts">
            <div @click="pay_amount='1'" class="pay-amount" :class="{'active':pay_amount==='1'}">
              <div class="pay-amount__inner">
                <p>1个月费用</p>
              </div>
              <p class="pay-amount__text"><sub>¥</sub> 175</p>
              <p class="pay-amount__text1">每月一次</p>
            </div>
            <div @click="pay_amount='2'" class="pay-amount" :class="{'active':pay_amount==='2'}">
              <div class="pay-amount__inner">
                <p>6个月费用</p>
              </div>
              <p class="pay-amount__text"><sub>¥</sub> 810</p>
              <p class="pay-amount__text1">135¥ 每月一次</p>
            </div>
            <div @click="pay_amount='3'" class="pay-amount" :class="{'active':pay_amount==='3'}">
              <div class="pay-amount__inner">
                <p>12个月费用</p>
              </div>
              <p class="pay-amount__text"><sub>¥</sub> 1188</p>
              <p class="pay-amount__text1">99¥ 每月一次</p>
            </div>


          </div>


          <span class="btn mb-25" @click="checkUserData" >下一步注册</span>



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
        pay_type:'ali',
        pay_amount:'1',
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
          type:null
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
        await  this.registerUser()
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
          type: this.user_reg.type,


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

