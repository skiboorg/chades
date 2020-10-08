<template>
  <div style="height: 100vh">
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
        const  response_video= await $axios.get(`/api/v1/game/get_random_image/`)
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
      videoTitle: 'Cat',
      difficulty: null,
      distance: null,
      isGoal: false,
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
      }
       if (this.$route.query.d==='n'){
        this.difficulty = 'Normal'
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
        this.$confetti.start({
          shape: 'rect'
        })
      } else {
        this.$confetti.stop()
      }
    }
  },
  methods: {
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

.slider-container {
  position: absolute;
  top: calc(50% + 30px);
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
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
