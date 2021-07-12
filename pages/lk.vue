<template>
  <div class="">
    <div class="container">
      <div class="breadcrumbs">
        <ul>
          <li><nuxt-link to="/">主页</nuxt-link></li>
          <li>我的个人资料</li>
        </ul>
      </div>
    </div>

      <div class="container">

        <div class="lk-wrapper">
          <div class="lk-left">
            <section>
              <div class="container">
                <h3 class="section-header">为您提供的信息</h3>
                <div class="lk-news">
                  <img @click="infoModal=true" src="/lk-1.png" alt="">
                  <img @click="infoModal1=true" src="/lk-2.png" alt="">
                </div>
              </div>
            </section>
            <section id="achivements">
              <div class="container">
                <h3 class="section-header">我的成就</h3>
                <div class="achivements" >
                  <div v-for="achive in achives" class="achivement " :class="{'done':checkAchive(achive.id)}">
                    <div class="achivement__info">
                      <img :src="achive.icon" alt="">
                      <p>{{achive.name}}</p>
                      <span>{{achive.rules}}</span>
                    </div>
                    <div v-if="checkAchive(achive.id)" class="achivement__check done">
                      <span>{{getAchive(achive.id)}}</span>
                      <img src="/chack-mark.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="certificates">
              <div class="container">
                <h3 class="section-header">我的证书和文凭</h3>
                <div class="certificates">
                  <div  class="certificate">
                    <img src="/cert.png" alt="">
<!--                    <p>name</p>-->
                  </div>
                  <div class="certificate">
                    <img src="/cert.png" alt="">
<!--                    <p>name</p>-->
                  </div>

                </div>
              </div>
            </section>
            <section id="settings">
              <div class="container">
                <h3 class="section-header">我的设置</h3>
                <div class="lk-form">
                  <div class="form-group">
                    <label >您的头像</label>
                    <el-upload class="avatar-uploader mb-25" action="" :show-file-list="false" :on-success="handleAvatarSuccess">
                      <img v-if="userData.imageUrl" :src="userData.imageUrl" alt="" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>

                    <label>你的密码</label>
                    <input type="text" class="form-control" v-model="userData.password1" placeholder="输入新密码">
                    <input type="text" class="form-control" v-model="userData.password2" placeholder="确认新密码">
                    <a href="" @click.prevent="updateUser" class="btn btn-white">更改</a>
                  </div>
                  <div class="form-group">
                    <label>您的昵称</label>
                    <input style="margin-bottom: 75px" type="text" class="form-control " v-model="userData.nickname" placeholder="@dsfsdf">
                    <label >你的密码</label>
                    <div class="form-group__text">

                        <p>微信号码: {{this.$auth.user.vi_chat}}</p>
                        <p>你的名字: {{this.$auth.user.name}}</p>
                        <p>你的邮件: {{this.$auth.user.email}}</p>
                        <p>您的订阅将于{{new Date(this.$auth.user.expiry_time).getFullYear()}}年{{new Date(this.$auth.user.expiry_time).getMonth()}}月{{new Date(this.$auth.user.expiry_time).getDate()}}日到期。</p>
                    </div>
                  </div>
                </div>


              </div>
            </section>
          </div>
          <div class="lk-right">
            <div class="round-block about-user lk-user">
              <p class="about-user__num">#{{$auth.user.id}} </p>
              <div class="about-user__img">
                <img :src="$auth.user.avatar" alt="">
              </div>
              <div class="about-user__left">
                <div class="mb-25">
                  <!--              <p style="color: #FFB800">"Молодой разраб"</p>-->
                  <p class="fs-14">@{{$auth.user.nickname}}</p>
                  <p class="fs-24">{{$auth.user.name}}</p>
                  <p class="fs-14 "><span class="text-color">{{$auth.user.score}} 点</span></p>
                  <!--              <span class="fs-14 text-trans text-bold text-upper">6/9 courses</span>-->
                </div>
                  <ul>
                    <li class="about-user__left-item"><a href="#" v-scroll-to="'#achivements'">我的成就</a></li>
                    <li class="about-user__left-item"><a href="#" v-scroll-to="'#certificates'">我的证书和文凭</a></li>
                    <li class="about-user__left-item"><a href="#" v-scroll-to="'#settings'">我的设置</a></li>
                  </ul>

              </div>
            </div>
          </div>

        </div>

 <el-dialog
      :visible.sync="infoModal"
      width="30%"
      :close-on-click-modal="false"
      style="padding: 30px"
      :show-close="false"
      center>
      <div class="">
        <div class="mb-50 text-center">
         <p>我们现在正在为您开发VIP帐户，并提供更多选择和学习机会！<br><br>
每个VIP学生都会与老师进行在线聊天，以回答任何问题，以及获得其他教育材料和机会！<br><br>
我们还想从您那里了解VIP帐户可能需要哪些其他选项。 在“反馈”块的主页上写下您的愿望！</p>
      </div>
      <div slot="footer" class="dialog-footer">
    <span style="display: block;text-align: center" @click="infoModal=false" class="btn">关</span>
  </div>
      </div>
    </el-dialog>
        <el-dialog
      :visible.sync="infoModal1"
      width="30%"
      :close-on-click-modal="false"
      style="padding: 30px"
      :show-close="false"
      center>
      <div class="">
        <div class="mb-50 text-center">
         <p>以什么形式进行培训？<br><br>
我们提供了所有领域的课程目录，为方便起见，将其分为多个培训
阶段。只有成功完成前面的课程，您才能够进入更为复杂和高级的
课程。<br><br>
每门课程均包含按主题划分的多个课时。每个课时都有一个理论部
分、一个测验/作业形式的实践部分以及必须写在笔记本上并记住词
义和正确发音的英语词汇和英语动词。<br><br>

孩子如何更好按时地学习？<br><br>

在我们系统中，每日都会开放后续课时的访问权限。这一设置专门
用于确保孩子能更好的消化吸收必要的信息量，系统且从容地掌握
知识，而非匆忙的学习所有课程。
         </p>
      </div>
      <div slot="footer" class="dialog-footer">
    <span style="display: block;text-align: center" @click="infoModal1=false" class="btn">关</span>
  </div>
      </div>
    </el-dialog>
      </div>




  </div>


</template>

<script>
  export default {
    async asyncData({$axios}){

      try{
        const  response_achives= await $axios.get(`/api/v1/user/getAllAchives/`)

        const achives = response_achives.data
        console.log(achives)

        return {achives}

      }catch (e) {
        throw e
      }

    },
    data() {
      return {
        infoModal:false,
        infoModal1:false,
        avatar:null,
        userData:{
          nickname: this.$auth.user.nickname,
          imageUrl: this.$auth.user.avatar,
          password1:null,
          password2:null,

        }
      }
    },
    mounted() {
      if (!this.$auth.user.expiry_time){
        this.$router.push('/')
      }
    },
    methods:{
      async updateUser(){
        if (this.userData.password1 !== this.userData.password2){
          this.$notify({
            title: '错误',
            message: '密码不匹配',
            type: 'danger'
          });
          return
        }
        let formData = new FormData()
        formData.set('userData', JSON.stringify(this.userData))

        formData.set('avatar',this.avatar)

        await this.$axios({
          method: 'post',
          headers:{
            'content-type': 'multipart/form-data'
          },
          url: '/api/v1/user/update/',
          data: formData
        }).then((response) => {

          this.$notify({
            title: '成功地',
            message: '您的详细信息已更新',
            type: 'success'
          });
          this.$auth.fetchUser()



        })
          .catch(function (error) {
            // handle error


          })
          .then(function () {
            // always executed
          });
      },
      handleAvatarSuccess(res, file) {
        this.userData.imageUrl = URL.createObjectURL(file.raw);

        this.avatar = file.raw

      },
      checkAchive(id){
        if (this.$auth.user.earned_achives.find(x => x.achives === id)){
          return true
        } else {
          return false}
      },
      getAchive(id){
        let ach = this.$auth.user.earned_achives.find(x => x.achives === id)
        if (ach){
          return ach.created_at
        } else {
          return false}
      },

    }
  };
</script>

