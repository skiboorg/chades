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

        <div class="round-block about-teacher lk">
          <div class="about-teacher__img">
            <img :src="$auth.user.avatar" alt="">
          </div>
          <div class="about-teacher__left">
            <div class="">
              <!--              <p style="color: #FFB800">"Молодой разраб"</p>-->
              <p class="fs-24">{{$auth.user.name}}</p>
              <p class="fs-14 text-color">{{$auth.user.score}} баллов</p>
              <!--              <span class="fs-14 text-trans text-bold text-upper">6/9 courses</span>-->
            </div>
          </div>

          <div class="about-teacher__right">
            <ul>
              <li><a href="#" v-scroll-to="'#achivements'">achivements</a></li>
              <li><a href="#" v-scroll-to="'#certificates'">certificates</a></li>
              <li><a href="#" v-scroll-to="'#settings'">settings</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

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
        <div class="features">
          <div class="round-block block-feature">
            <img src="/icon_en.png" alt="">
            <p class="text-16 text-upper text-bold">programming nominee</p>
          </div>
          <div class="round-block block-feature">
            <img src="/icon_2.png" alt="">
            <p class="text-16 text-upper text-bold">best webcode</p>
          </div>
          <div class="round-block block-feature">
            <img src="/icon_3.png" alt="">
            <p class="text-16 text-upper text-bold">golden #1 website</p>
          </div>
          <div class="round-block block-feature">
            <img src="/icon_en.png" alt="">
            <p class="text-16 text-upper text-bold">programming nominee</p>
          </div>
          <div class="round-block block-feature">
            <img src="/icon_2.png" alt="">
            <p class="text-16 text-upper text-bold">best webcode</p>
          </div>
          <div class="round-block block-feature">
            <img src="/icon_3.png" alt="">
            <p class="text-16 text-upper text-bold">golden #1 website</p>
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
            <el-upload class="avatar-uploader" action="" :show-file-list="false" :on-success="handleAvatarSuccess">
              <img v-if="userData.imageUrl" :src="userData.imageUrl" alt="" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>



            <label >nickname</label>
            <input type="text" class="form-control" v-model="userData.nickname" placeholder="@dsfsdf">

            <label >change password</label>
            <input type="text" class="form-control" placeholder="enter new password">
            <input type="text" class="form-control" placeholder="confirm new password">
            <a href="" class="btn btn-white">done</a>
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

