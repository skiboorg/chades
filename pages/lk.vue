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
                  <img src="/lk-1.png" alt="">
                  <img src="/lk-2.png" alt="">
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
                  <div class="certificate">
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
                    <input type="text" class="form-control" v-model="userData.password1" placeholder="enter new password">
                    <input type="text" class="form-control" v-model="userData.password2" placeholder="confirm new password">
                    <a href="" @click.prevent="updateUser" class="btn btn-white">更改</a>
                  </div>
                  <div class="form-group">
                    <label>您的昵称</label>
                    <input style="margin-bottom: 75px" type="text" class="form-control " v-model="userData.nickname" placeholder="@dsfsdf">
                    <label >你的密码</label>
                    <div class="form-group__text">

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
        avatar:null,
        userData:{
          nickname: this.$auth.user.nickname,
          imageUrl: this.$auth.user.avatar,
          password1:null,
          password2:null,

        }
      }
    },
    methods:{
      async updateUser(){
        if (this.userData.password1 !== this.userData.password2){
          this.$notify({
            title: 'Ошибка',
            message: 'Пароли не совпадают',
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
            title: 'Успешно',
            message: 'Ваши данные обновлены',
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

