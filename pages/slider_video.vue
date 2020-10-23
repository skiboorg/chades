<template>
  <div class="container" >

      <div class="lesson-wrapper mb-50">
            <div class="game-item" :style="{'background': 'url('+gameImg+') center no-repeat; background-size: cover'}">

            </div>


          <div style="flex-basis: 900px" class="">
            <p class="section-header">电脑 电脑 </p>
            <p>Можно предположить, что промоакция концентрирует бюджет на размещение. Фокус-группа концентрирует принцип восприятия, опираясь на опыт западных коллег. </p>
          </div>
        </div>
    <div class="round-block bg-green ">
          <img src="/exl.png" alt="">
          <p>每节课均由几个部分组成。<br>

第一部分内容丰富。 您需要阅读并在笔记本中写下您感兴趣的问题。<br>

第二部分是新词的含义。 他们需要在笔记本上写下并记住。 在随后的课程中，我们将参考单词的含义。<br>
第三部分是将术语和单词翻译成英语。<br>
必须完成测试才能完成每节课。</p>
        </div>
    <div class="slider-area mb-50">
       <div class="slider-container">

      <puzzle-board v-if="show"
        :autoResize="autoResize"
        :showNumber="showNumber"
        :cols="dimensions.x"
        :rows="dimensions.y"
        :src="src.video"

        :animation="animation"
        :width="width"
        :height="height"
        @init="onPuzzleBoardInit"
        @start="onPuzzleBoardStart"
        @change="onPuzzleBoardChange"
        @finish="onPuzzleBoardFinish"
      />


 </div>
    </div>
    <div class="mb-50">
      <p class="btn" @click="reload">restart</p>
      <nuxt-link to="/courses"><p class="btn btn-outline">back</p></nuxt-link>

    </div>
     <el-dialog
      :visible.sync="gameWin"
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
    <span @click="gameWin=false" class="btn">为了</span>
  </span>
    </el-dialog>

  </div>

</template>

<script>
import PuzzleBoard from '@/components/PuzzleBoard.vue';
const DIMENSIONS = {
  Easy: { x: 3, y: 3 },
  Normal: { x: 4, y: 4 },
  Difficult: { x: 5, y: 5 }
}


const SOURCEPATHS = {
  Dog: {
    src: '/assets/dog.jpg'
  },
  Cat: {
    sources: [
      {
        src: '/assets/cat.webm',
        type: 'video/webm'
      },
      // {
      //   src: '/assets/cat.mp4',
      //   type: 'video/mp4'
      // }
    ]
  },
  // Penguin: {
  //   sources: [
  //     {
  //       src: penguinwebm,
  //       type: 'video/webm'
  //     },
  //     {
  //       src: penguinmp4,
  //       type: 'video/mp4'
  //     }
  //   ]
  // },
  // Giphy: {}
}

const getGiphySrc = async function() {
  const res = await fetch(
    '//api.giphy.com/v1/gifs/random?api_key=nZATgU4T4iauIJqCFu8rFvoCxCqBRwMt&rating=g&tag=cat'
  )
  const data = await res.json()
  const url = data.data.image_mp4_url
  return [
    {
      src: url,
      type: 'video/mp4'
    }
  ]
}
  export default {
   async asyncData({$axios,$auth}){

      try{
        const  response_video= await $axios.get(`/api/v1/game/get_random_video/`)
        const src = response_video.data
        console.log(src)
        return {src}
      }catch (e) {
        throw e
      }

    },
    data() {
      return {
      src:null,
      show: true,
       gameImg:null,
      videoTitle: 'Cat',
      difficulty: null,
      distance: null,
      isGoal: false,
      gameWin: false,
      autoResize: true,
      width: 300,
      height: 300,
      showNumber: true,
      animation: true,
      sources: SOURCEPATHS['Cat'].sources
    }



    },
    components: {
      PuzzleBoard,

    },

    created() {
     console.log(this.$route.query)
      if (this.$route.query.d==='e'){
        this.difficulty = 'Easy'
        this.gameImg = '/slider-v-4.png'
      }
       if (this.$route.query.d==='n'){
        this.difficulty = 'Normal'
         this.gameImg = '/slider-v-5.png'
      }
    },
  computed: {
    // src() {
    //   return SOURCEPATHS[this.videoTitle].src
    // },
    dimensions() {
      return DIMENSIONS[this.difficulty]
    }
  },
  watch: {
    isGoal(isGoal) {
      if (isGoal) {
        //this.$confetti.start({
        //  shape: 'rect'
        //})
        this.gameWin=true
        this.addPoints()
      } else {
        //this.$confetti.stop()
      }
    }
  },
  methods: {
     async reload(){
       const  response_video= await this.$axios.get(`/api/v1/game/get_random_video/`)
        const src = response_video.data
       this.isGoal = false
       this.src = src
       //window.location.reload(true)
     },
    async addPoints(){
       await this.$axios.post(`/api/v1/user/add_points/`,{points:200})

    },
    onTitleClick() {
      window.open('https://github.com/meganetaaan/vue-8-puzzle')
    },
    onMeowClick() {
      getGiphySrc().then(data => {
        this.sources = data
      })
    },
    onPuzzleBoardInit() {
      console.log('init')
      this.isGoal = false

    },
    onPuzzleBoardStart() {
      console.log('start')
    },
    onPuzzleBoardFinish() {
      console.log('finish')
      this.isGoal = true
    },
    onPuzzleBoardChange: function(payload) {
      console.log('change')
      this.distance = payload.distance
    }
  }
  }
</script>

<style>
.slider-area{
  position: relative;
  background: #FFFCFC;
  border-radius: 20px;
  height: 700px;
}
.slider-container {
  position: absolute;
  top:  50% ;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  height: calc(90% - 60px);
  margin: 0px;
  padding: 0px;
  z-index: 1;
  background-color: #DDD;
  max-width: 600px;
  max-height: 600px;
}
.puzzle-board:focus{
  outline: none;
}
</style>
