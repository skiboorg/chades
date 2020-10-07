<template>
  <div class="">
    <div class="container">
      <div class="breadcrumbs">
        <ul>
          <li><a href="">主页</a></li>
          <li>我的个人资料</li>
        </ul>
      </div>
    </div>
    <section>
      <div class="container">

        <div class="lk-wrapper">
          <div class="lk-left">
            <section id="achivements">
              <div class="container">
                <h3 class="section-header">achivements</h3>
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
                <h3 class="section-header">certificates</h3>
                <div class="certificates">
                  <div class="certificate">
                    <img src="/cert.png" alt="">
                    <p>name</p>
                  </div>
                  <div class="certificate">
                    <img src="/cert.png" alt="">
                    <p>name</p>
                  </div>

                </div>
              </div>
            </section>
            <section id="settings">
              <div class="container">
                <h3 class="section-header">settings</h3>
                <div class="lk-form">
                  <div class="form-group">
                    <label >avatar</label>
                    <el-upload class="avatar-uploader mb-25" action="" :show-file-list="false" :on-success="handleAvatarSuccess">
                      <img v-if="userData.imageUrl" :src="userData.imageUrl" alt="" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>

                    <label >change password</label>
                     <input type="text" class="form-control" placeholder="current password">
                    <input type="text" class="form-control" placeholder="enter new password">
                    <input type="text" class="form-control" placeholder="confirm new password">
                    <a href="" class="btn btn-white">done</a>
                  </div>
                  <div class="form-group">
                    <label >nickname</label>
                    <input style="margin-bottom: 75px" type="text" class="form-control " v-model="userData.nickname" placeholder="@dsfsdf">
                    <label >change password</label>
                    <div class="form-group__text">

                        <p>Новый пароль должен отличаться от 5
последних использованных паролей</p>
                        <p>Новый пароль должен отличаться от 5
последних использованных паролей</p>
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
                  <p class="fs-14 "><span class="text-color">{{$auth.user.score}} баллов</span> 6/9 courses</p>
                  <!--              <span class="fs-14 text-trans text-bold text-upper">6/9 courses</span>-->
                </div>

                <ul>
                  <ul>
                    <li><a href="#" v-scroll-to="'#achivements'">achivements</a></li>
                    <li><a href="#" v-scroll-to="'#certificates'">certificates</a></li>
                    <li><a href="#" v-scroll-to="'#settings'">settings</a></li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>

        </div>


      </div>
    </section>



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

        }
      }
    },
    methods:{
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

