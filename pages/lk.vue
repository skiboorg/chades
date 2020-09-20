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
          <div class="achivement done">
            <div class="achivement__info">
              <img src="http://placehold.it/50" alt="">
              <p>пройти 10 часов курсов</p>
              <span>Завершить весь 1 этап обучения</span>
            </div>
            <div class="achivement__check done">
               <span>15.02.2020</span>
              <img src="/chack-mark.png" alt="">
            </div>
          </div>
           <div class="achivement ">
            <div class="achivement__info">
              <img src="http://placehold.it/50" alt="">
              <p>пройти 10 часов курсов</p>
              <span>Завершить весь 1 этап обучения</span>
            </div>
            <div class="achivement__check ">
               <span>15.02.2020</span>
              <img src="/chack-mark.png" alt="">
            </div>
          </div>
          <div class="achivement done">
            <div class="achivement__info">
              <img src="http://placehold.it/50" alt="">
              <p>пройти 10 часов курсов</p>
              <span>Завершить весь 1 этап обучения</span>
            </div>
            <div class="achivement__check done">
               <span>15.02.2020</span>
              <img src="/chack-mark.png" alt="">
            </div>
          </div>
           <div class="achivement ">
            <div class="achivement__info">
              <img src="http://placehold.it/50" alt="">
              <p>пройти 10 часов курсов</p>
              <span>Завершить весь 1 этап обучения</span>
            </div>
            <div class="achivement__check ">
               <span>15.02.2020</span>
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
    data() {
      return {




      };
    }
  };
</script>

