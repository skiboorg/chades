<template>
  <div class="">
    <div class="container">
      <div class="breadcrumbs">
        <ul>
          <li><a href="">ГЛАВНАЯ</a></li>
          <li>КУРСЫ</li>
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
              <li><a href="#" >help</a></li>
              <li><nuxt-link to="/lk">profile</nuxt-link></li>
              <li><a href="#" v-scroll-to="'#courses'">courses</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h3 class="section-header">progress</h3>
        <div class="progress-top">
          <div class="progress-top__item " v-for="stage in stages" :key="stage.id">
            <div class="tarif-number " :class="{'notActive':stage.number>1}">
              <p>{{stage.number}}</p>
              <span>lvl</span>
            </div>
            <p class="progress-top__item-exp">{{stage.score_need}}</p>
          </div>
        </div>
        <div class="progress-bottom">
          <div :style="{width: this.$auth.user.score / 40 + '%'}" class="progress-bottom__inner">
            <p >{{this.$auth.user.score}}</p>
          </div>
        </div>
      </div>
    </section>
    <section id="courses">
      <div class="container">
        <h3 class="section-header">courses</h3>
        <div class="courses">
          <div  class="course round-block"
                :class="{'courceDone':finished_courses.includes(cource.id),
                                'courceNotAvaiable' : !avaiable_courses.includes(cource.id)
                              }"
                v-for="cource in cources" :key="cource.id"
                :style="progress_courses.includes(cource.id) ? {'background': 'url('+cource.bg_image+')'} : null">
            <nuxt-link :to="'/courses/'+cource.id">
              <img class="course-image" :src="progress_courses.includes(cource.id) ? cource.icon_white : cource.icon_color" alt="">

              <p class="course-name" :class="{'inProgress':progress_courses.includes(cource.id)}">{{cource.description}}
                <span class="course-count" :class="{'inProgress':progress_courses.includes(cource.id)}">
                        ({{getFinishedLessons(cource.id)}}/{{cource.lessons.length < 9 ? '0'+cource.lessons.length : cource.lessons.length}})
                      </span>
              </p>

              <p v-if="progress_courses.includes(cource.id)" class="course-status">in process</p>
              <p v-if="finished_courses.includes(cource.id) " style="color: #27AE60" class="course-status">done</p>
              <div v-if="!avaiable_courses.includes(cource.id)" class="course-status">
                <img src="/lock.png" alt="">
                <p class="">not</p>
              </div>

            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
     <section id="games">
      <div class="container">
        <h3 class="section-header">games</h3>
        <div class="courses">
              <div  class="course round-block courceNotAvaiable">
              <img class="course-image" src="http://placehold.it/50" alt="">
              <p class="course-name" >123123123</p>
              <div  class="course-status">
                <img src="/lock.png" alt="">
              </div>
          </div>
        </div>
      </div>
     </section>
  </div>


</template>

<script>
  export default {
    async asyncData({$axios,params}){
      console.log(params)
      try{
        const  response_stages= await $axios.get(`/api/v1/shool/stages/`)
        const  response_cources= await $axios.get(`/api/v1/shool/cources/`)
        const stages = response_stages.data
        const cources = response_cources.data

        return {stages,cources}

      }catch (e) {
        throw e
      }

    },
    data() {
      return {
        progress_courses:this.$auth.user.progress_courses,
        avaiable_courses:this.$auth.user.avaiable_courses,
        finished_courses:this.$auth.user.finished_courses,
        temp:0,

      };
    },
    computed: {

    },
    methods:{

      getFinishedLessons(id){
        let count = 0
        const response =  this.$axios.get(`/api/v1/shool/avaiable_lessons?user_id=${this.$auth.user.id}&course_id=${id}`).then(function(response) {


        }).then(function (response) {
          console.log(response)
          const lessons = response.data
          try{
            for (let x of lessons){
              x.status === 1 ? count+=1 : null
            }
          }catch (e) {
          }
          return count
        })






      },
    }
  };
</script>

