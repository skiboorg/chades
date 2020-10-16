<template>

  <div class="">

    <div class="container">
      <div class="breadcrumbs">

        <ul>
          <li><nuxt-link to="/courses">主页</nuxt-link></li>
          <li><nuxt-link to="/courses">我的课程</nuxt-link></li>
          <li>{{cource.description}}</li>
        </ul>
      </div>
    </div>

    <section>
      <div class="container">
        <div class="lesson-wrapper">
           <div  class="course" :style="{'background':cource.bg_color}" >
             <div class="course__wrapper">
               <div class="course__inner">
                  <img class="course-image" :src="cource.icon" alt="">
                </div>
                 <div class="course__name">
                  <p >{{cource.description}}<br>

                  </p>
                </div>
             </div>
            </div>

          <!-- complete   progress          -->


          <div class="lessons">


            <div class="lesson" :class="{'complete':lesson.status===2, 'notAvaiable':lesson.status===0, 'progress':cur_lesson === index }"  v-for="(lesson,index) in lessons" :key="lesson.id">

              <p v-if="lesson.status===1"  @click="changeLesson(lesson.lesson)">第{{index+1}}课 </p>
              <p v-if="lesson.status===0">第{{index+1}}课</p>
              <p v-if="lesson.status===2" @click="changeLesson(lesson.lesson)">第{{index+1}}课</p>
            </div>


            <!--            <div class="lesson "-->
            <!--                 :class="{'complete':$auth.user.done_lessons.includes(lesson.id) , 'progress': $auth.user.current_lesson===lesson.id}"-->
            <!--                 v-for="lesson in cource.lessons" :key="lesson.id">-->
            <!--              <p style="cursor: pointer" @click="changeLesson(lesson.id)" v-if="$auth.user.done_lessons.includes(lesson.id)">урок {{lesson.id}}: завершен</p>-->
            <!--              <p style="cursor: pointer" @click="changeLesson(lesson.id)" v-if="$auth.user.current_lesson===lesson.id">урок {{lesson.id}}: в процессе</p>-->
            <!--              <p v-if="$auth.user.current_lesson!=lesson.id && !$auth.user.done_lessons.includes(lesson.id)">урок {{lesson.id}}</p>-->
            <!--            </div>-->

          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="round-block bg-green ">
          <img src="/exl.png" alt="">
          <p>每节课均由几个部分组成。<br>

第一部分内容丰富。 您需要阅读并在笔记本中写下您感兴趣的问题。<br>

第二部分是新词的含义。 他们需要在笔记本上写下并记住。 在随后的课程中，我们将参考单词的含义。<br>
第三部分是将术语和单词翻译成英语。<br>
必须完成测试才能完成每节课。</p>
        </div>
        <h3 class="section-header">{{cource.lessons[cur_lesson].name}}</h3>
        <div class="fs-14 lesson-content  mb-50 round-block p-40" v-html="cource.lessons[cur_lesson].description"></div>
      </div>
    </section>
    <section >
      <div class="container ">
        <div class="">
          <h3 class="section-header">新定义</h3>
          <div class="round-block p-40 lesson-content" v-html="cource.lessons[cur_lesson].means"></div>
        </div>

      </div>
    </section>
    <section >
      <div class="container ">
        <div class="p-400">
          <h3 class="section-header">新词</h3>
          <div class="round-block p-40 lesson-content" v-html="cource.lessons[cur_lesson].words"></div>
        </div>
      </div>
    </section>
    <section v-if="lessons[this.cur_lesson_id].status !== 2">
      <!--    <section>-->
      <div class="container">
        <div class="">
          <h3 class="section-header">测试</h3>

          <!--          <div class="round-block p-40 mb-50" v-if="cource.lessons[cur_lesson].test.length>0" >-->
          <!--            <div class="mb-25" v-html="cource.lessons[cur_lesson].test[0].description"></div>-->
          <!--            <el-radio-group  v-model="testRadio">-->
          <!--              <el-radio :label="test.id" v-for="test in cource.lessons[cur_lesson].test[0].choices" :key="test.id">-->
          <!--                <div class="lesson-question">-->
          <!--                  <img v-if="test.image" :src="test.image" alt="">-->
          <!--                  <p>{{test.description}}</p>-->
          <!--                </div>-->
          <!--              </el-radio>-->


          <!--            </el-radio-group>-->
          <!--          </div>-->


          <div class="round-block p-40 mb-50" v-for="(test,index) in cource.lessons[cur_lesson].test" >
            <div class="mb-25" v-html="test.description"></div>
            <el-radio-group  v-model="radioTests.test_id[index].answer">
              <el-radio :label="choice.id" v-for="choice in test.choices" :key="choice.id">
                <div class="lesson-question">
                  <img v-if="choice.image" :src="choice.image" alt="">
                  <p>{{choice.description}}</p>
                </div>
              </el-radio>

            </el-radio-group>
          </div>

          <!--          <div class="round-block p-40 mb-50" v-if="cource.lessons[cur_lesson].input_test.length>0" >-->
          <!--            <div class="mb-25" v-html="cource.lessons[cur_lesson].input_test[0].description"> </div>-->
          <!--            <el-input placeholder="" v-model="testInput">-->
          <!--              <template slot="prepend">Ответ</template>-->
          <!--            </el-input>-->
          <!--          </div>-->

          <div class="round-block p-40 mb-50" v-for="(test,index) in cource.lessons[cur_lesson].input_test">
            <div class="mb-25" v-html="test.description"> </div>
            <el-input placeholder="" v-model="inputTests.test_id[index].answer">
              <template slot="prepend">Ответ</template>
            </el-input>
          </div>

          <div class="text-center">
            <!--            <span :class="{'btnDisabled': !testRadio || testInput===''}" class="btn " @click="checkTest">Проверить</span>-->
            <span  class="btn " @click="checkTest">检查答案</span>
          </div>

        </div>
      </div>
    </section>

    <el-dialog
      :visible.sync="wrongAnswer"
      width="30%"
      :close-on-click-modal="false"
      style="padding: 30px"
      center>
      <div>
        <div class="text-center">
          <img style="width: 150px;height: 150px;margin-bottom: 90px"  src="/w_a.png" alt="">
        </div>

        <p style="word-break: break-word;" class="text-center fs-36"><span class="text-color">你回答错了！</span></p>
      </div>
      <span slot="footer" class="dialog-footer">
    <span class="btn">再试一次</span>
  </span>
    </el-dialog>

    <el-dialog
      :visible.sync="rightAnswer"
      width="30%"
      :close-on-click-modal="false"
      style="padding: 30px"
      :show-close="false"
      center>
      <div>
        <div class="text-center">
          <img style="width: 150px;height: 150px;margin-bottom: 90px"  src="/w_r.png" alt="">
        </div>

        <p style="word-break: break-word;" class="text-center fs-36"><span class="text-green">您已经成功完成了本教程！</span></p>
        <p style="font-size: 18px;letter-spacing: 0.05em;color: #888888">明天开始下一节课，今天休息一下，复习材料。</p>
      </div>
      <span slot="footer" class="dialog-footer">
    <span @click="rightAnswer=false" class="btn">为了</span>
  </span>
    </el-dialog>
    <el-dialog
      :visible.sync="courseOver"
      width="30%"
      :close-on-click-modal="false"
      style="padding: 30px"
      :show-close="false"
      center>
      <div>
        <div class="text-center">
          <img style="width: 150px;height: 150px;margin-bottom: 90px"  src="/w_r.png" alt="">
        </div>

        <p style="word-break: break-word;" class="text-center fs-36">Course is <span class="text-green">OVER</span></p>
      </div>
      <span slot="footer" class="dialog-footer">
        <a href="/courses" class="btn">go next</a>


  </span>
    </el-dialog>

  </div>


</template>

<script>
  export default {
    async asyncData({$axios,$auth,params}){
      console.log(params)
      try{
        const  response_cource= await $axios.get(`/api/v1/shool/cource/${params.id}`)
        const  response_check= await $axios.post(`/api/v1/shool/cource_open/`, {course:params.id})
        const  response_lessons= await $axios.get(`/api/v1/shool/avaiable_lessons?user_id=${$auth.user.id}&course_id=${params.id}`)
        const lessons = response_lessons.data
        const cource = response_cource.data
        let radioTests={
          test_id:[]
        }
        let inputTests={
          test_id:[]
        }
        for (let i of cource.lessons){
          for (let t of i.test){
            console.log(t.id)
            radioTests.test_id.push({
              test_id:t.id,
              answer:null
            })
          }
          for (let t of i.input_test){
            console.log(t.id)
            inputTests.test_id.push({
              test_id:t.id,
              answer:null
            })
          }
        }


        return {cource,lessons,radioTests,inputTests}



      }catch (e) {
        throw e
      }

    },
    data() {
      return {
        wrongAnswer: false,
        rightAnswer: false,
        courseOver: false,
        testRadio:false,
        testInput:'',
        offer_units:0,
        value2:false,
        cur_lesson:0,
        cur_lesson_clicked:0,
        cur_lesson_id:0,
        // radioTests:{
        //   test1:null,
        //   test2:null
        // }



      }
    },
    mounted() {

      //this.cur_lesson = this.cource.lessons.findIndex(x => x.id === this.$auth.user.current_lesson)


    },
    created() {

    },
    methods: {
      async checkTest(){
        try {
          let radioTest = true
          let inputTest = true
          for (let test of this.radioTests.test_id) {
            radioTest = radioTest && this.cource.lessons[this.cur_lesson_id].test.find(x => x.id === test.test_id).choices.find(x => x.id === test.answer).is_right
          }
          for (let test of this.inputTests.test_id) {
            let answer = this.cource.lessons[this.cur_lesson_id].input_test.find(x => x.id === test.test_id).answer
            if (answer.toLowerCase() === test.answer.toLowerCase()) {
              inputTest = inputTest && true
            } else {
              inputTest = inputTest && false
            }
          }
          console.log(radioTest)
          console.log(inputTest)
          if (radioTest && inputTest){
            this.lessons[this.cur_lesson_id].status = 2
            console.log(this.lessons[this.cur_lesson_id].id)
            const respond = await this.$axios.post('/api/v1/shool/lesson_done/',{lesson_id:this.lessons[this.cur_lesson_id].id})
            console.log(respond.status)
            if (respond.status === 201){
              this.courseOver = true
            }else{
              this.rightAnswer = true
            }
          }else{
            this.wrongAnswer = true
          }
        }
        catch (e) {
          console.log('error ')
        }
      },
      async checkTest1(){
        let test = this.cource.lessons[this.cur_lesson_id].test[0].choices.find(x => x.id === this.testRadio).is_right
        let input_test = this.cource.lessons[this.cur_lesson_id].input_test[0].answer
        console.log(input_test)
        if (test && input_test.toLowerCase() === this.testInput.toLowerCase()){
          this.lessons[this.cur_lesson_id].status = 2
          console.log(this.lessons[this.cur_lesson_id].id)
          const respond = await this.$axios.post('/api/v1/shool/lesson_done/',{lesson_id:this.lessons[this.cur_lesson_id].id})
          console.log(respond.status)
          if (respond.status === 201){
            this.courseOver = true
          }else{
            this.rightAnswer = true
          }
        }
        else{
          this.wrongAnswer = true
        }
      },
      changeLesson(id){
        this.cur_lesson = this.cource.lessons.findIndex(x => x.id === id)
        this.cur_lesson_clicked = this.cur_lesson
        this.cur_lesson_id = this.cource.lessons[this.cur_lesson].id

      },
      async applyUnit(u_id){
        const respond = await this.$axios.post('/api/v1/order/apply/',{order_id:this.order.id,unit_id:u_id})
        console.log(respond)
      }
    }
  }

</script>

