<template>
  <div class="">
    <!--    <section class="">-->
    <!--      <div class="container ">-->
    <!--        <el-carousel class="banner-slider" :interval="5000" arrow="hover">-->
    <!--          <el-carousel-item class="banner-slider-item" v-for="banner in banners" :key="banner.id">-->
    <!--            <div class="banner" :style="{'background': 'url('+ banner.bg+')'}">-->
    <!--              <img class="banner__inner" :src="banner.top" alt="">-->
    <!--            </div>-->
    <!--          </el-carousel-item>-->
    <!--        </el-carousel>-->
    <!--      </div>-->
    <!--    </section>-->
    <section>
      <div class="container">
        <h3 class="section-header">少儿英语信息技术（IT）编程课程</h3>
        <p class="text-16 mw-600 mb-50">我们让孩子自幼龄时期就开始开发英语语言能力并学习有前途的职业！孩子们才刚刚开始探索世界并发现新的兴趣爱好。<br>
          在现代社会，英语不仅是一项必要技能，还是编程中特别重要的一部分——所有编码都有英文语法和命名。此外，编程是一项兴趣爱好，不仅能娱乐，还能发展心智，将来还能提供一份有前途的职业。
        </p>
        <div class="features">
          <div class="round-block block-feature">
            <img src="/icon_en.png" alt="">
            <p class="text-16 text-upper text-bold">提升英语语言技能</p>
          </div>
          <div class="round-block block-feature">
            <img src="/icon_2.png" alt="">
            <p class="text-16 text-upper text-bold">在线学习——每个孩子按照自己的节奏学习</p>
          </div>
          <div class="round-block block-feature">
            <img src="/icon_3.png" alt="">
            <p class="text-16 text-upper text-bold">拓展计算机知识和编程能力</p>
          </div>
          <div class="round-block block-feature">
            <img src="/icon_4.png" alt="">
            <p class="text-16 text-upper text-bold">开发逻辑和创造性思维能力</p>
          </div>
          <div class="round-block block-feature">
            <img src="/icon_5.png" alt="">
            <p class="text-16 text-upper text-bold">国际结业证书和文凭</p>
          </div>
          <div class="round-block block-feature">
            <img src="/icon_6.png" alt="">
            <p class="text-16 text-upper text-bold">成功的孩子，有前途的职业</p>
          </div>
        </div>
      </div>
    </section>
    <section id="courses" class="no-mb">
      <div class="container">
        <h3 class="section-header text-center">我们有哪些课程:</h3>
        <p class="text-16 text-center mb-50">单击您感兴趣的方向以查看所选方向上所有课程列表</p>

        <div class="learn mb-50">
          <div class="learn-item-new__wrapper">
            <p class="learn-item-new__number">01</p>
            <div @click="c1DialogVisible = true" class="learn-item-new">
              <div class="learn-item-new__inner c-blue">
                <img src="/ll1.png" alt="">
              </div>
              <div class="learn-item-new__name">
                <p>计算机课程素养</p>
              </div>
            </div>
          </div>
          <div @click="c2DialogVisible = true" class="learn-item-new__wrapper down">
            <p class="learn-item-new__number">02</p>
            <div class="learn-item-new">
              <div class="learn-item-new__inner c-orange">
                <img src="/ll2.png" alt="">
              </div>
              <div class="learn-item-new__name">
                <p>视频创意设计与编辑课程</p>
              </div>
            </div>
          </div>
          <div class="learn-item-new__wrapper">
            <p class="learn-item-new__number">03</p>
            <div class="learn-item-new">
              <div class="learn-item-new__inner c-blue">
                <img src="/ll3.png" alt="">
              </div>
              <div class="learn-item-new__name">
                <p>儿童编程和游戏开发</p>
              </div>
            </div>
          </div>
          <div class="learn-item-new__wrapper down">
            <p class="learn-item-new__number">04</p>
            <div class="learn-item-new">
              <div class="learn-item-new__inner c-orange">
                <img src="/ll4.png" alt="">
              </div>
              <div class="learn-item-new__name">
                <p>网站开发和网页编程</p>
              </div>
            </div>
          </div>
        </div>
        <!--        <div class="text-center mb-50"><a href="" class="btn">смотреть все курсы</a></div>-->
      </div>
    </section>
    <section id="learn" class="section-pink">
      <div class="container">
        <h3 class="section-header white underline underline-center text-center">我们将教您的孩子什么</h3>
        <div class="section-pink-wrapper">
          <div class="section-pink-left">
            <div  class="section-pink-item">
              <div class="section-pink-item-top">
                <p>01</p>
                <img src="/puzle.png" alt="">
              </div>
              <div class="section-pink-item-text">
                <p>开发逻辑和思维能力</p>
                <p>我们的每堂课不仅教授专业的计算机能力，还开发思维能力，并教授思考和学习方法。<br>
                  我们还设置逻辑和教育益智游戏，帮助开发孩子们的逻辑性和创造性。
                </p>
              </div>

            </div>
            <div  class="section-pink-item">
              <div class="section-pink-item-top">
                <p>02</p>
                <img src="/en.png" alt="">
              </div>
              <div class="section-pink-item-text">
                <p>英语技能</p>
                <p> 我们的主要任务是提升语言技能，并展示如何在实践中进行运用。                 <br>
                  编程与英语紧密相连。我们让孩子清楚地看到如何将它用于发展和教育。<br>
                  我们的技巧在于每个句子都有两行，以便孩子们记住句型结构和语言模式。<br>
                  此外，每堂课中，我们都给孩子们提供需要识记的关键词——名词和动词，以及IT领域使用的简介词。
                </p>
              </div>

            </div>
          </div>
          <div class="section-pink-right">
            <div  class="section-pink-item">
              <div class="section-pink-item-top">
                <p>03</p>
                <img src="/comp.png" alt="">
              </div>
              <div class="section-pink-item-text">
                <p>计算机教育</p>
                <p>编程是二十一世纪需求最大的专业。即使孩子选择了不同的职业道路，任何聘用单位都会高度重视IT技术领域的知识。我们的课程旨在开发各种专业领域的儿童计算机技能：<br>
                  基础系统技能<br>
                  演示文稿和文档处理能力<br>
                  创造性设计和动画技能
                </p>
              </div>

            </div>
            <div  class="section-pink-item">
              <div class="section-pink-item-top">
                <p>04</p>
                <img src="/code.png" alt="">
              </div>
              <div class="section-pink-item-text">
                <p>编程技能</p>
                <p>编程是一个很大的领域，不仅包括数学和逻辑学，还包括处理信息和算法的能力。<br>
                  我们教授您的孩子从入门到高层次知识，期间考虑了所有学习的特殊性，使课堂变得有趣且具吸引力——并为此设计了一个阶段性学习系统。
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>

    <section class="steps-cover" >
      <div class="container">
        <h3  class="section-header text-center steps-header">如何在我们的平台上完成学习</h3>
        <div class="steps-new">
          <div class="step-number step-1-number"><p>1</p></div>
          <p class="step-1-text">注册并创建一个有孩子学习进度<br>的个人账号</p>

          <div class="step-number step-2-number"><p>2</p></div>
          <p class="step-2-text">教育阶段的选择——依据孩子的<br>年龄和技能</p>

          <img class="step-img-1" src="/sn1.png" alt="">

          <div class="step-number step-3-number"><p>3</p></div>
          <p class="step-3-text">分成课时的课程——每课时——<br>包含实践作业的酒店主题度</p>
          <img class="step-img-2" src="/sn2.png" alt="">
          <div class="step-number step-4-number"><p>4</p></div>
          <p class="step-4-text">追溯学习进度和成<br>就，以及空闲时间<br>的益智游戏</p>

        </div>
      </div>
    </section><!--    steps-new-->
    <section>
      <div class="container">
        <h3 class="section-header">我们最好的学生</h3>
        <div class="best">
          <div class="best-item round-block">
            <p class="best-item__num">#1</p>
            <div class="best-item__name"><img src="/avatar.png" alt=""><p>金龙</p><span>@suniliven</span></div>
            <div class="best-item__ahi">
              <p class="best-item__ahi-ball">2485 点</p>
            </div>
          </div>
          <div class="best-item round-block">
            <p class="best-item__num">#1</p>
            <div class="best-item__name"><img src="/avatar.png" alt=""><p>卫东</p><span>@suniliven</span></div>
            <div class="best-item__ahi">
              <p class="best-item__ahi-ball">285 点</p>
            </div>
          </div>
          <div class="best-item round-block">
            <p class="best-item__num">#1</p>
            <div class="best-item__name"><img src="/avatar.png" alt=""><p>永生</p><span>@suniliven</span></div>
            <div class="best-item__ahi">
              <p class="best-item__ahi-ball">285 点</p>
            </div>
          </div>
        </div>
      </div>
    </section><!--   best-->
    <section>
      <div class="container">
        <h3 class="section-header">我们的费用</h3>
        <div class="tarifs">
          <div class="tarif round-block">
            <div class="tarif-number">
              <img src="/t1.png" alt="">

            </div>
            <p class="tarif-name">1个月费用</p>
            <ul class="tarif-list">
              <li>获得所有课程</li>
              <li>成就与进步</li>
              <li>国际标准注册证书</li>
            </ul>
            <p class="tarif-price price-top mb-15">275¥ 每月一次</p>
            <nuxt-link class="btn btn-curved" to="/entrance">购买</nuxt-link>
          </div>
          <div class="round-block best-tarif">
            <div class="corner-text">
              <p>畅销书</p>
            </div>
            <div class="best-tarif-number">
              <img src="/bt.png" alt="">

            </div>
            <p class="best-tarif-name">6个月费用</p>
            <ul class="best-tarif-list">
              <li>获得所有课程</li>
              <li>成就与进步</li>
              <li>国际标准注册证书</li>
            </ul>
            <p class="best-tarif-price price-top">1350¥</p>
            <p class="best-tarif-price">225¥ 每月一次</p>
             <nuxt-link class="btn btn-curved" to="/entrance">购买</nuxt-link>
          </div>
          <div class="tarif round-block">
            <div class="tarif-number">
              <img src="/t2.png" alt="">

            </div>
            <p class="tarif-name">12个月费用</p>
            <ul class="tarif-list">
              <li>获得所有课程</li>
              <li>成就与进步</li>
              <li>国际标准注册证书</li>
            </ul>
            <p class="tarif-price price-top">2388¥</p>
            <p class="tarif-price ">199¥ 每月一次</p>
             <nuxt-link class="btn btn-curved" to="/entrance">购买</nuxt-link>
          </div>
          <div class="round-block best-tarif vip">
            <div class="tarif-overlay">
              <img src="/tl.png" alt="">
              <p>将于十二月开放</p>
            </div>
            <div class="best-tarif-number">
              <img src="/tv.png" alt="">
            </div>
            <p class="best-tarif-name">12个月VIP费用</p>
            <ul class="best-tarif-list">
              <li>获得所有课程</li>
              <li>成就与进步</li>
              <li>国际标准注册证书</li>
              <li>与老师一对一聊天</li>
              <li>课程奖励材料</li>
            </ul>
            <p class="best-tarif-price price-top mb-15">588¥ 每月一次</p>
            <nuxt-link class="btn btn-curved" to="/entrance">购买</nuxt-link>

          </div>
        </div>
      </div>
    </section><!--   tarif-new-->
    <section class="feedback-new">
      <div class="container">
        <div class="feedback-new__wrapper">
          <h3 class="section-header white underline">关于我们的评论</h3>
          <div class="feedback">
            <div class="feedback-item__wrapper">
              <div class="feedback-item round-block tiger">
                <div class="feedback-item__header">
                  <img src="http://placehold.it/300" alt="">
                  <div class="feedback-item__header-name">
                    <p>СУ ЛИНЬ ПИНЬ</p>
                    <span>работает в гугл, 27 лет</span>
                  </div>
                </div>
                <p class="feedback-item__text">我的孩子已经在我们平台上学习一个月了，他比我更了解计算机的结构和工作原理！</p>
              </div>
            </div>
            <div class="feedback-item__wrapper">
              <div class="feedback-item round-block frog">
                <div class="feedback-item__header">
                  <img src="http://placehold.it/300" alt="">
                  <div class="feedback-item__header-name">
                    <p>СУ ЛИНЬ ПИНЬ</p>
                    <span>работает в гугл, 27 лет</span>
                  </div>
                </div>
                <p class="feedback-item__text">儿子很开心，他在空闲时间学习有用的技能。这个学习系统很方便，不仓促，一切都清晰易懂。</p>
              </div>
            </div>


          </div>
        </div>

      </div>

    </section><!--    feedback-new-->
    <section id="faq">
      <div class="container">
        <h3 class="section-header  text-center">常见问答</h3>
        <div class="faq-wrapper">
          <div class="faq-left">
            <div class="faq-item">
              <p class="faq-item__header text-color">孩子的推荐学习年龄是多少？</p>
              <p class="faq-item__text">我们平台设计主要针对中小儿童。建议第一阶段的培训孩童为6-7<br>岁，第二阶段为9-10岁，第三阶段为12-13岁。</p>
            </div>
            <div class="faq-item">
              <p class="faq-item__header text-color">为什么我们限制每日的课时数？？</p>
              <p class="faq-item__text">在我们系统中，每日都会开放后续课时的访问权限。这一设置专门<br>用于确保孩子能更好的消化吸收必要的信息量，系统且从容地掌握<br>知识，而非匆忙的学习所有课程。</p>
            </div>
            <div class="faq-item">
              <p class="faq-item__header text-color">我们教孩子什么？</p>
              <p class="faq-item__text">我们为您的孩子提供将英语教学和现代技术相结合的课程：计算机<br>素养、网页设计、编程和网站开发、视频编辑以及游戏开发。同<br>时，我们还为您的孩子设置了益智逻辑游戏，通过这些游戏可以提<br>升您孩子的逻辑思维能力以及信息获取速度。</p>
            </div>
          </div>
          <div class="faq-right">
            <div class="faq-item">
              <p class="faq-item__header text-color">以什么形式进行培训？</p>
              <p class="faq-item__text">我们提供了所有领域的课程目录，为方便起见，将其分为多个培训<br>阶段。只有成功完成前面的课程，您才能够进入更为复杂和高级的<br>课程。<br>
                每门课程均包含按主题划分的多个课时。每个课时都有一个理论部<br>分、一个测验/作业形式的实践部分以及必须写在笔记本上并记住词<br>义和正确发音的英语词汇和英语动词。</p>
            </div>
            <div class="faq-item">
              <p class="faq-item__header text-color">孩子如何更好按时地学习？</p>
              <p class="faq-item__text">在我们系统中，每日都会开放后续课时的访问权限。这一设置专门<br>用于确保孩子能更好的消化吸收必要的信息量，系统且从容地掌握<br>知识，而非匆忙的学习所有课程。</p>
            </div>
            <div class="faq-monkey">
              <img src="/monkey.png" alt="">
              <div class="">
                <p class="faq-monkey__text">您对我们门户网站的工作有疑问吗？</p>
                <a href="#" v-scroll-to="'#callback'" class="btn btn-curved">问我们一个问题</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!--    faq-new-->
    <section id="callback">
      <div class="container">
        <h3 class="section-header">反馈</h3>
        <p class="text-16 mw-600 mb-50">反馈 反馈
        </p>
        <div class="input-group">
          <el-input placeholder="你的名字" v-model="callback.name"></el-input>
          <el-input placeholder="你的邮件" v-model="callback.email"></el-input>
        </div>
        <el-input
          style="margin-bottom: 20px"
          type="textarea"
          :rows="5"
          placeholder="您的问题或给我们的信"
          v-model="callback.text">
        </el-input>
        <div class="">
          <p style="display: flex; justify-content: center;max-width: 200px" :class="{'btnDisabled':callback.email==='' || callback.text===''}" @click="sendForm" class="btn center">发送</p>
        </div>

      </div>
    </section>



    <el-dialog
      class="index-dialog"
      :visible.sync="c1DialogVisible"
      width="55%"
      :show-close="false"

      center>
      <div class="index-dialog__img" style="background: url(http://placehold.it/900x270)">
        <span @click="c1DialogVisible=false">&#10005;</span>
        <p>计算机知识</p>
      </div>
      <div class="index-dialog__content">
        <span style="display: block;padding-bottom: 50px" >我们这一方向的课程旨在教授您的孩子使用计算机的基本技能和能力：从计算机设备及其操作方法到使用基本软件的能力！我们的课程内容涵盖诸如信息的类型和如何传输，什么是网络等，除此之外，我们将教您的孩子自己手动组装和拆卸计算机，清除病毒，并使用软件处理文档、演示文稿等。</span>
        <p>1.	“计算机设备”课程</p>
        <span>这是我们的主修课，在这门课上我们将带领学生熟悉计算机及其类型，学习计算机内部结构、部件和基本工作原理。这门课程对于了解计算机的整体操作和研究不同类型计算机的性能都是必要的。<br>
我们还会详细学习计算机模块和组件，学习如何将其组合在一起，并在特定任务中相互匹配。</span>
        <p>2.	“计算机知识”课程</p>
        <span>在这门课程中，我们将学习计算机使用规范和基本知识：包括如何在计算机上正常工作，它有什么功能，文件和程序是什么，系统是什么等。<br>
本课程是进一步学习程序设计和所有其他计算机课程的起点。</span>
        <p>3.	“什么是信息”课程</p>
        <span>本课程教孩子们如何处理信息：信息是什么，您能用它做什么，如何使用和处理它。在本课程中我们还将学生信息学基础知识，其基础信息理论、信息怎样传输、计算机内部信息是什么形式以及信息如何投身到屏幕上。</span>
        <p>4.“网络与互联网基础”课程</p>
        <span>这门课程是为最有好奇心的孩子们准备的——它将带领我们了解互联网的历史，了解信息是如何通过网络传输的，有哪些网络，如何创建自己的网络，以及网络中是否可以再存在一个网络等。</span>
        <p>5.“使用office程序：MS office”课程</p>
        <span>本课程是孩子们未来职业生涯的重要课程：我们教您如何使用基本的office程序，即Microsoft office（PowerPoint、Word、Excel、Access）。<br>
无论您的孩子将来选择什么样的职业，在生活和工作的各个领域都重视使用这些软件的工作能力！
</span>
      </div>


    </el-dialog>
    <el-dialog
      class="index-dialog"
      :visible.sync="c2DialogVisible"
      width="55%"
      :show-close="false"

      center>
      <div class="index-dialog__img" style="background: url(http://placehold.it/900x270)">
        <span @click="c2DialogVisible=false">&#10005;</span>
        <p>视频创意设计与编辑课程</p>
      </div>
      <div class="index-dialog__content">
        <span style="display: block;padding-bottom: 50px" >我们这一方向的课程旨在培养您的孩子从事创造性职业——网页设计师、用户体验设计师、视频编辑、视频博主等职业的基本技能和能力。</span>
        <p>1. “设计基础”课程</p>
        <span>儿童创意设计课程：我们教您的孩子如何使用图形和设计工具和软件，培养孩子的创造性思维和品味。我们还将了解主要的设计技巧、设计方法、色彩组合和一般的设计类型！<br>
设计师的职业总是有现实需求的。具有设计才能的人才在设计工作中必须保证项目具有趣味和创造性！</span>
        <p>2. “网页设计”课程</p>
        <span>我们将教孩子们创建和实现网站和应用程序的设计：从简单的布局到复杂的图表和带有弹窗和转换功能的页面。我们将教孩子们这项工作的基本规则和基础网页设计，以及如何正确使用软件界面和基本的设计技巧。</span>
        <p>3. “视频编辑”课程</p>
        <span>在本课程中，我们将教给您的孩子一项有趣且有用的技能：在现代信息世界中运用视频材料：我们将教您如何正确录制视频、编辑和处理视频、提高视频质量和应用效果！<br>
编辑视频能力被应用于许多活动领域：从电视、广播，到视频博客和在大公司创建演示文稿。</span>
        <p>4. “绘制标识”课程</p>
        <span>我们将教孩子们正确和创造性地绘制标识：从简单的形状和明亮的字体到最复杂难忘的几何设计！为您的孩子未来的工作学习储备一些作品。<br>
这门课程可以为开发孩子的创造性潜能打造良好基础。在设计行业，年龄并不重要，天赋和毅力才是重要的！所以，您的孩子可以从小开始练习了！</span>
      </div>


    </el-dialog>
        <el-dialog
      :visible.sync="formSend"
      width="30%"
      :close-on-click-modal="false"
      style="padding: 30px"
      :show-close="true"
      center>
      <div>
        <div class="text-center">
          <img style="width: 150px;height: 150px;margin-bottom: 90px"  src="/w_r.png" alt="">
        </div>

        <p style="word-break: break-word;" class="text-center fs-36">发送成功！ 我们会在24小时内回复您</p>
      </div>
      <span slot="footer" class="dialog-footer">
<!--    <span @click="formSend=false" class="btn">ОК</span>-->
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    async asyncData({$axios}){
      try{
        const  response_banners= await $axios.get(`/api/v1/shool/get_banner/`)
        const banners = response_banners.data
        return {banners}
      }catch (e) {
        throw e
      }

    },
    data() {
      return {
        callback:
          {
          name:'',
          email:'',
          text:''
          },

        c1DialogVisible: false,
        formSend: false,
        c2DialogVisible: false,
        bg: 'Example blog post'
      };
    },
    methods:{
     async sendForm(){
        const  response_banners= await this.$axios.post(`/api/v1/shool/new_cb/`,this.callback)
       this.formSend = true
      }
    }
  };
</script>

