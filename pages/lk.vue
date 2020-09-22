<template>
  <div class="">
    <div class="container">
      <div class="breadcrumbs">
        <ul>
          <li><a href="">ГЛАВНАЯ</a></li>
          <li>ЛИЧНЫЙ КАБИНЕТ</li>
        </ul>
      </div>
    </div>
    <section>
      <div class="container">
        <div class="round-block about-teacher lk">
          <div class="about-teacher__img">
            <img src="http://placehold.it/300" alt="">
          </div>
          <div class="about-teacher__left">
            <div class="">
              <p style="color: #FFB800">"Молодой разраб"</p>
              <p class="fs-24">СУ ЛИНЬ ПИНЬ</p>
              <p class="fs-14 text-color">285 баллов</p>
              <span class="fs-14 text-trans text-bold text-upper">6/9 courses</span>
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
            <img src="images/icon_en.png" alt="">
            <p class="text-16 text-upper text-bold">programming nominee</p>
          </div>
          <div class="round-block block-feature">
            <img src="images/icon_2.png" alt="">
            <p class="text-16 text-upper text-bold">best webcode</p>
          </div>
          <div class="round-block block-feature">
            <img src="images/icon_3.png" alt="">
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
            <label >nickname</label>
            <input type="text" class="form-control" placeholder="@dsfsdf">
            <a href="" class="btn btn-white">ok</a>
          </div>
          <div class="form-group">
            <label >change email</label>
            <input type="text" class="form-control" placeholder="enter new email">
            <a href="" class="btn btn-white">send accept</a>
          </div>
          <div class="form-group">
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




      };
    },
    methods:{
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

