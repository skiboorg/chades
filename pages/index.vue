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
<!--            <p class="learn-item-new__number">01</p>-->
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

            <div class="learn-item-new">
              <div class="learn-item-new__inner c-orange">
                <img src="/ll2.png" alt="">
              </div>
              <div class="learn-item-new__name">
                <p>视频创意设计与编辑课程</p>
              </div>
            </div>
          </div>
          <div @click="c3DialogVisible = true" class="learn-item-new__wrapper">

            <div class="learn-item-new">
              <div class="learn-item-new__inner c-pink">
                <img src="/ll3.png" alt="">
              </div>
              <div class="learn-item-new__name">
                <p>儿童编程和游戏开发</p>
              </div>
            </div>
          </div>
          <div @click="c4DialogVisible = true" class="learn-item-new__wrapper down">

            <div class="learn-item-new">
              <div class="learn-item-new__inner c-yellow">
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
<!--                <p>01</p>-->
                 <p>开发逻辑和思维能力</p>
                <img src="/puzle.png" alt="">
              </div>
              <div class="section-pink-item-text">

                <p>我们的每堂课不仅教授专业的计算机能力，还开发思维能力，并教授思考和学习方法。<br>
                  我们还设置逻辑和教育益智游戏，帮助开发孩子们的逻辑性和创造性。
                </p>
              </div>

            </div>
            <div  class="section-pink-item">
              <div class="section-pink-item-top">
         <p>英语技能</p>
                <img src="/en.png" alt="">
              </div>
              <div class="section-pink-item-text">

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
                  <p>计算机教育</p>
                <img src="/comp.png" alt="">
              </div>
              <div class="section-pink-item-text">

                <p>编程是二十一世纪需求最大的专业。即使孩子选择了不同的职业道路，任何聘用单位都会高度重视IT技术领域的知识。我们的课程旨在开发各种专业领域的儿童计算机技能：<br>
                  基础系统技能<br>
                  演示文稿和文档处理能力<br>
                  创造性设计和动画技能
                </p>
              </div>

            </div>
            <div  class="section-pink-item">
              <div class="section-pink-item-top">
               <p>编程技能</p>
                <img src="/code.png" alt="">
              </div>
              <div class="section-pink-item-text">

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
          <div class="best-item round-block best-pupil">
            <p class="best-item__num">#1</p>
            <div class="best-item__name"><img src="/avatar.png" alt=""><p>金龙</p><span>@Sunlive</span></div>
            <div class="best-item__ahi">
              <p class="best-item__ahi-ball">540 点</p>
            </div>
          </div>
          <div class="best-item round-block">
            <p class="best-item__num">#2</p>
            <div class="best-item__name"><img src="/avatar.png" alt=""><p>Zhan Jing</p><span>@user27</span></div>
            <div class="best-item__ahi">
              <p class="best-item__ahi-ball">523 点</p>
            </div>
          </div>
          <div class="best-item round-block">
            <p class="best-item__num">#3</p>
            <div class="best-item__name"><img src="/avatar.png" alt=""><p>邢家豪</p><span>@user04</span></div>
            <div class="best-item__ahi">
              <p class="best-item__ahi-ball">312 点</p>
            </div>
          </div>
          <div class="best-item round-block">
            <p class="best-item__num">#4</p>
            <div class="best-item__name"><img src="/avatar.png" alt=""><p>Xing Jiahao</p><span>@progmaster</span></div>
            <div class="best-item__ahi">
              <p class="best-item__ahi-ball">207 点</p>
            </div>
          </div>
          <div class="best-item round-block">
            <p class="best-item__num">#5</p>
            <div class="best-item__name"><img src="/avatar.png" alt=""><p>Guo Guo</p><span>@88Yoon</span></div>
            <div class="best-item__ahi">
              <p class="best-item__ahi-ball">100 点</p>
            </div>
          </div>
          <div class="best-item round-block">
            <p class="best-item__num">#6</p>
            <div class="best-item__name"><img src="/avatar.png" alt=""><p>潘志</p><span>@雨季</span></div>
            <div class="best-item__ahi">
              <p class="best-item__ahi-ball">64 点</p>
            </div>
          </div>
          <div class="best-item round-block">
            <p class="best-item__num">#7</p>
            <div class="best-item__name"><img src="/avatar.png" alt=""><p>永生</p><span>@7373</span></div>
            <div class="best-item__ahi">
              <p class="best-item__ahi-ball">25 点</p>
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
            <p class="tarif-price price-top mb-15">175¥ 每月一次</p>
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
            <p class="best-tarif-price price-top">810¥</p>
            <p class="best-tarif-price">135¥ 每月一次</p>
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
            <p class="tarif-price price-top">1188¥</p>
            <p class="tarif-price ">99¥ 每月一次</p>
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
            <p class="best-tarif-price price-top mb-15">599¥ 每月一次</p>
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
                  <img src="/fb1.jpg" alt="">
                  <div class="feedback-item__header-name">
                    <p>春生王</p>
                    <span>孩子从2020年9月开始学习</span>
                  </div>
                </div>
                <p class="feedback-item__text">我的孩子已经在我们平台上学习一个月了，他比我更了解计算机的结构和工作原理！</p>
              </div>
            </div>
            <div class="feedback-item__wrapper">
              <div class="feedback-item round-block frog">
                <div class="feedback-item__header">
                  <img src="/fb2.jpg" alt="">
                  <div class="feedback-item__header-name">
                    <p>晓明陈</p>
                    <span>孩子从2020年8月开始学习</span>
                  </div>
                </div>
                <p class="feedback-item__text">儿子很开心，他在空闲时间学习有用的技能。这个学习系统很方便，不仓促，一切都清晰易懂。</p>
              </div>
            </div>
            <div class="feedback-item__wrapper">
              <div class="feedback-item round-block coala">
                <div class="feedback-item__header">
                  <img src="/fb2.jpg" alt="">
                  <div class="feedback-item__header-name">
                    <p>永生德</p>
                    <span>孩子从2020年9月开始学习</span>
                  </div>
                </div>
                <p class="feedback-item__text">我喜欢一切，我们将很快进入第二阶段的培训</p>
              </div>
            </div>
            <div class="feedback-item__wrapper">
              <div class="feedback-item round-block fox">
                <div class="feedback-item__header">
                  <img src="/fb1.jpg" alt="">
                  <div class="feedback-item__header-name">
                    <p>胜杨</p>
                    <span>该孩子从2020年6月开始学习（进行封闭式测试）</span>
                  </div>
                </div>
                <p class="feedback-item__text">优秀的学习学校！ 这些课程具有挑战性和趣味性，需要学习许多不同的材料。</p>
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
        <p class="text-16 mw-600 mb-50">在此窗口中，您可以给我们写您对我们以及我们的工作的意见和希望！
如果您忘记了密码-输入您的姓名或昵称以及您注册帐户的邮件-我们将把密码发送到您的邮件中！ </p>
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
      <div class="index-dialog__img" style="background: url(/m1.png) no-repeat center">
        <span @click="c1DialogVisible=false">&#10005;</span>

      </div>
      <div class="index-dialog__content">
        <span style="display: block;padding-bottom: 50px" >技术对儿童非常有吸引力。在现代世界中，计算机扫盲已成为每个孩子的必需品。本课程的目的是向孩子们讲授计算机知识的基础知识，拓宽有关ICT的知识范围，教他们使用计算机。</span>
        <p>课程“计算机技术”</p>
        <span>该计算机有助于解决最困难的问题。学习IT首先要了解计算机设备。您的孩子将了解它的组成部分以及其工作原理。我们将熟悉各种PC模块，学习如何将它们组合以完成特定任务。</span>
        <p>课程“计算机知识”</p>
        <span>软件部分与硬件部分一样重要。在这一部分中，您的孩子将了解操作系统的所有功能。他将学习如何对文件和文件夹执行操作，启动应用程序。</span>

        <p>课程“什么是信息”</p>
        <span>IT的基础是信息。完成本课程后，孩子将了解计算机以何种形式以及数据如何移动以及如何处理信息。如果孩子成功地掌握了这门课程，他将有机会认真参与编程。</span>
        <p>课程“网络和互联网”</p>
        <span>在本课程的第一堂课之后，您的孩子将能够独立配置局域网，了解Internet和Internet的工作方式。</span>
        <p>课程“使用程序OFFICE：MS OFFICE”</p>
        <span>最重要的是，您的孩子将学习使用Office程序的基础知识：在MS WORD中创建文本文件，在MS EXCEL中创建表，在MS POWERPOINT中进行演示。</span>
      </div>


    </el-dialog>
    <el-dialog
      class="index-dialog"
      :visible.sync="c2DialogVisible"
      width="55%"
      :show-close="false"
      center>
      <div class="index-dialog__img" style="background: url(/m2.png) no-repeat center">
        <span @click="c2DialogVisible=false">&#10005;</span>

      </div>
      <div class="index-dialog__content">
        <span style="display: block;padding-bottom: 50px" >本课程致力于开发设计，视频和照片处理程序。我们在理论教学方面有很多实践课程。结果，您的孩子将学习如何制作现成的网站，在社交网络上的创意头像以及如何编辑视频。</span>
        <p>基础设计课程</p>
        <span>基本的平面设计课程是在孩子中发展创造性思维的好机会。我们的课程将为儿童提供图形设计的基础知识，使用文本的规则，颜色，构图以及创建简单插图，图标，象形图的实践技能。在教孩子时要特别注意创造力。</span>
        <p>课程“网页设计”</p>
        <span>这些课程将使孩子熟悉网站的类型。孩子们将与老师一起掌握创建网站的阶段，元素和原则。在课程结束时，学生将学习如何专业地创建应用程序设计。</span>
        <p>课程“视频编辑”</p>
        <span>视频编辑课程结合了创造力和技术技能。孩子们将学习如何制作第一批视频杰作，以及发明，拍摄和编辑最佳照片。</span>
        <p>课程“打标”</p>
        <span>在这一部分中，我们将教孩子们创造力，并画出各种复杂程度的徽标。幼儿从小就可以上课。最主要的是渴望掌握这一创新方向。</span>
      </div>


    </el-dialog>
    <el-dialog
      class="index-dialog"
      :visible.sync="c3DialogVisible"
      width="55%"
      :show-close="false"
      center>
      <div class="index-dialog__img" style="background: url(/m3.png) no-repeat center">
        <span @click="c3DialogVisible=false">&#10005;</span>

      </div>
      <div class="index-dialog__content">
        <span style="display: block;padding-bottom: 50px" >孩子们喜欢电脑游戏。如果孩子不断要求您玩智能手机，请不要限制他的兴趣。最好让他参加编程课程-让他自己编写游戏。游戏和应用开发逻辑，运动技能，想象力和记忆力。</span>
        <p>课程“算法和编程基础”</p>
        <span>算法开发是一个复杂且耗时的过程。但这是学习编程的基础。在课程中，我们将研究编写算法的各种方式，我们将研究算法语言中使用的命令的分类。</span>
        <p>课程“编程的第一步”</p>
        <span>如果您的孩子对编程感兴趣，那么从他喜欢的东西开始就很重要。我们已经开发了一系列不是以理论形式而是以游戏形式的类。所使用的教育程序适用于所有年龄段的儿童，并且基于图形和动画。</span>
        <p>课程“游戏开发和游戏设计：在roblox工作室”</p>
        <span>roblox studio上的计算机游戏开发今天对孩子们来说很受欢迎。 Roblox是一种流行且前景广阔的游戏环境。这里有许多简化的细微差别，语言模块功能齐全，结构合理且易于理解。</span>
        <p>课程“代数：循环，集合和逻辑”</p>
        <span>各种编程算法的方法都是基于数学的，我们以简单易行的方式教给孩子一些基础知识。</span>
      </div>


    </el-dialog>
    <el-dialog
      class="index-dialog"
      :visible.sync="c4DialogVisible"
      width="55%"
      :show-close="false"

      center>
      <div class="index-dialog__img" style="background: url(/m4.png) no-repeat center">
        <span @click="c4DialogVisible=false">&#10005;</span>

      </div>
      <div class="index-dialog__content">
        <span style="display: block;padding-bottom: 50px" >启动您的网站是一个简单的目标，它将帮助您的孩子立即了解信息技术的多个方面。对于那些想教孩子创建网站的父母，我们准备了全面的课程。</span>
        <p>课程“网站如何运作？”</p>
        <span>在开始学习网络编程和网站之前，孩子们将学习网页如何工作的基本原理。在课程结束时，孩子将能够学习互联网，网页设计和数据安全的基础知识。</span>
        <p>课程“网页设计基础”</p>
        <span>掌握网页设计的基础知识始于图形编辑器，掌握基本工具，为您自己的网站创建单独的插图，图标和标识。</span>
        <p>基本水平：HTML和CSS课程</p>
        <span>在线学习儿童HTML的在线课程为迈向掌握各种复杂程度的Web开发迈出了第一步。在课程结束时，学生将能够获得有关程序和布局工具，HTML标记，CSS语法的基础知识，创建菜单，标题，侧边栏等的知识。</span>
        <p>课程“基本水平：PYTHON”</p>
        <span>Python是一种严肃的语言，在当今的专业环境中非常流行。上面写着严肃的大型软件系统。在学习语言的过程中，孩子将制作动画和简单的游戏。每节课中，他都会清楚地看到他的新知识和技能在屏幕上的体现。</span>
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

     <el-dialog
      :visible.sync="needPay"
      width="30%"
      :close-on-click-modal="false"
      style="padding: 30px"
      :show-close="true"

      center>
      <div>
        <div class="text-center">

        </div>

        <p style="word-break: break-word;" class="text-center fs-36">need pay</p>
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
        needPay: this.$auth.loggedIn && !this.$auth.user.expiry_time ? true : false,
        c1DialogVisible: false,
        formSend: false,
        c2DialogVisible: false,
        c3DialogVisible: false,
        c4DialogVisible: false,
        bg: 'Example blog post'
      };
    },
    computed:{
      needPay1:{
       get(){
         if(this.$auth.loggedIn){
          return !this.$auth.user.expiry_time
        }else{
          return false
        }
       },
        set(val){
             return false
           }

      }
    },
    methods:{
     async sendForm(){
        const  response_banners= await this.$axios.post(`/api/v1/shool/new_cb/`,this.callback)
       this.formSend = true
      }
    }
  };
</script>

