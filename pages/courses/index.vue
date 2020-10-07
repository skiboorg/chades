<template>
  <div class="">
    <div class="container">
      <div class="breadcrumbs">
        <ul>
          <li><a href="">主页</a></li>
          <li>我的课程</li>
        </ul>
      </div>
    </div>
    <section>
      <div class="container">
         <h3 class="section-header">我的进步</h3>
        <div class="course-top">
          <div class="round-block about-user">
            <p class="about-user__num">#{{$auth.user.id}} </p>
            <div class="about-user__img">
              <img :src="$auth.user.avatar" alt="">
            </div>
            <div class="about-user__left">
              <div class="mb-25">
                <!--              <p style="color: #FFB800">"Молодой разраб"</p>-->
                <p class="fs-14">@gfdg</p>
                <p class="fs-24">{{$auth.user.name}}</p>
                <p class="fs-14 "><span class="text-color">{{$auth.user.score}} баллов</span> 6/9 courses</p>
                <!--              <span class="fs-14 text-trans text-bold text-upper">6/9 courses</span>-->
              </div>

              <ul>
                <li><a href="#" >如何使用它？</a></li>
                <li><nuxt-link to="/lk">我的个人资料</nuxt-link></li>

              </ul>
            </div>
          </div>
          <div class="course-top__progress">
            <div class="course-top__img">
              <img src="/course-img.png" alt="">
            </div>

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
        </div>
      </div>
    </section>

    <section id="courses">
      <div class="container">
        <h3 class="section-header">我的课程</h3>
        <div class="courses">
          <div class="course__wrapper" v-for="cource in cources" :key="cource.id">
            <div  class="course"
                  :class="{'courceDone':finished_courses.includes(cource.id),
                           'progress' : !avaiable_courses.includes(cource.id),
                           'courceNotAvaiable' : !avaiable_courses.includes(cource.id),

                           }"
                  :style="{'background':cource.bg_color}"
            >

              <nuxt-link :to="'/courses/'+cource.id">
                <div class="course__inner">
                  <img class="course-image" :src="cource.icon" alt="">

                  <p v-if="progress_courses.includes(cource.id)" class="course-status">in process</p>
                  <p v-if="finished_courses.includes(cource.id) " style="color: #27AE60" class="course-status">done</p>
<!--                  <div v-if="!avaiable_courses.includes(cource.id)" class="course-status">-->

<!--                    <p class="">зависит от {{cource.depence}}</p>-->
<!--                  </div>-->
                </div>
                <div class="course__name">
                  <p  :class="{'inProgress':progress_courses.includes(cource.id)}">{{cource.description}}<br>
                    <span :style="{'color':cource.bg_color}" class="course-count" :class="{'inProgress':progress_courses.includes(cource.id)}">
                        (0/{{cource.lessons.length < 9 ? '0'+cource.lessons.length : cource.lessons.length}})
                      </span>
                  </p>
                </div>


              </nuxt-link>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section id="games">
      <div class="container">
        <h3 class="section-header">教育游戏</h3>
        <div class="courses">
           <div  class="course"  >
             <nuxt-link to="/slider?d=e">
               <div class="course__wrapper">
               <div class="course__inner">
                  <img class="course-image" src="http://placehold.it/50" alt="">
                </div>
                 <div class="course__name">
                  <p>EASY</p>
                </div>
             </div>
             </nuxt-link>
            </div>
          <div  class="course"  >
             <nuxt-link to="/slider?d=n">
               <div class="course__wrapper">
               <div class="course__inner">
                  <img class="course-image" src="http://placehold.it/50" alt="">
                </div>
                 <div class="course__name">
                  <p>Normal</p>
                </div>
             </div>
             </nuxt-link>
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

